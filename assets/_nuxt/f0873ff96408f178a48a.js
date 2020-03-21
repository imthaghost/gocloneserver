(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    [
        ,
        function(t, e, o) {
            'use strict';
            o.d(e, 'i', function() {
                return h;
            }),
                o.d(e, 'j', function() {
                    return x;
                }),
                o.d(e, 'a', function() {
                    return v;
                }),
                o.d(e, 'o', function() {
                    return w;
                }),
                o.d(e, 'e', function() {
                    return y;
                }),
                o.d(e, 'f', function() {
                    return k;
                }),
                o.d(e, 'c', function() {
                    return I;
                }),
                o.d(e, 'n', function() {
                    return M;
                }),
                o.d(e, 'h', function() {
                    return C;
                }),
                o.d(e, 'p', function() {
                    return A;
                }),
                o.d(e, 'k', function() {
                    return D;
                }),
                o.d(e, 'm', function() {
                    return N;
                }),
                o.d(e, 'd', function() {
                    return _;
                }),
                o.d(e, 'b', function() {
                    return S;
                }),
                o.d(e, 'g', function() {
                    return T;
                }),
                o.d(e, 'l', function() {
                    return O;
                });
            o(7), o(5);
            var n = o(38),
                r = (o(23), o(175), o(176), o(21)),
                l = (o(43), o(44), o(70), o(105), o(14), o(49), o(12)),
                c = (o(55), o(3), o(2), o(6), o(19), o(0)),
                d = o(8);
            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t &&
                        (o = o.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                object,
                                t
                            ).enumerable;
                        })),
                        e.push.apply(e, o);
                }
                return e;
            }
            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                        ? f(Object(source), !0).forEach(function(e) {
                              Object(c.a)(t, e, source[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(source)
                          )
                        : f(Object(source)).forEach(function(e) {
                              Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(source, e)
                              );
                          });
                }
                return t;
            }
            function h(t) {
                d.default.config.errorHandler &&
                    d.default.config.errorHandler(t);
            }
            function x(t) {
                return t.then(function(t) {
                    return t.default || t;
                });
            }
            function v(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var o =
                        t.options._originDataFn ||
                        t.options.data ||
                        function() {
                            return {};
                        };
                    (t.options._originDataFn = o),
                        (t.options.data = function() {
                            var data = o.call(this, this);
                            return (
                                this.$ssrContext &&
                                    (e = this.$ssrContext.asyncData[t.cid]),
                                m({}, data, {}, e)
                            );
                        }),
                        (t.options.__hasNuxtData = !0),
                        t._Ctor &&
                            t._Ctor.options &&
                            (t._Ctor.options.data = t.options.data);
                }
            }
            function w(t) {
                return t.options && t._Ctor === t
                    ? t
                    : (t.options
                          ? ((t._Ctor = t), (t.extendOptions = t.options))
                          : ((t = d.default.extend(t))._Ctor = t),
                      !t.options.name &&
                          t.options.__file &&
                          (t.options.name = t.options.__file),
                      t);
            }
            function y(t) {
                var e =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                    o =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 'components';
                return Array.prototype.concat.apply(
                    [],
                    t.matched.map(function(t, n) {
                        return Object.keys(t[o]).map(function(r) {
                            return e && e.push(n), t[o][r];
                        });
                    })
                );
            }
            function k(t) {
                var e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                return y(t, e, 'instances');
            }
            function I(t, e) {
                return Array.prototype.concat.apply(
                    [],
                    t.matched.map(function(t, o) {
                        return Object.keys(t.components).reduce(function(n, r) {
                            return (
                                t.components[r]
                                    ? n.push(
                                          e(
                                              t.components[r],
                                              t.instances[r],
                                              t,
                                              r,
                                              o
                                          )
                                      )
                                    : delete t.components[r],
                                n
                            );
                        }, []);
                    })
                );
            }
            function M(t, e) {
                return Promise.all(
                    I(
                        t,
                        (function() {
                            var t = Object(l.a)(
                                regeneratorRuntime.mark(function t(o, n, r, l) {
                                    return regeneratorRuntime.wrap(function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (
                                                        'function' !=
                                                            typeof o ||
                                                        o.options
                                                    ) {
                                                        t.next = 4;
                                                        break;
                                                    }
                                                    return (t.next = 3), o();
                                                case 3:
                                                    o = t.sent;
                                                case 4:
                                                    return (
                                                        (r.components[
                                                            l
                                                        ] = o = w(o)),
                                                        t.abrupt(
                                                            'return',
                                                            'function' ==
                                                                typeof e
                                                                ? e(o, n, r, l)
                                                                : o
                                                        )
                                                    );
                                                case 6:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    }, t);
                                })
                            );
                            return function(e, o, n, r) {
                                return t.apply(this, arguments);
                            };
                        })()
                    )
                );
            }
            function C(t) {
                return j.apply(this, arguments);
            }
            function j() {
                return (j = Object(l.a)(
                    regeneratorRuntime.mark(function t(e) {
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        if (e) {
                                            t.next = 2;
                                            break;
                                        }
                                        return t.abrupt('return');
                                    case 2:
                                        return (t.next = 4), M(e);
                                    case 4:
                                        return t.abrupt(
                                            'return',
                                            m({}, e, {
                                                meta: y(e).map(function(t, o) {
                                                    return m(
                                                        {},
                                                        t.options.meta,
                                                        {},
                                                        (e.matched[o] || {})
                                                            .meta
                                                    );
                                                })
                                            })
                                        );
                                    case 5:
                                    case 'end':
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            function A(t, e) {
                return z.apply(this, arguments);
            }
            function z() {
                return (z = Object(l.a)(
                    regeneratorRuntime.mark(function t(e, o) {
                        var l, c, d, f;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (
                                            e.context ||
                                                ((e.context = {
                                                    isStatic: !1,
                                                    isDev: !1,
                                                    isHMR: !1,
                                                    app: e,
                                                    store: e.store,
                                                    payload: o.payload,
                                                    error: o.error,
                                                    base: '/',
                                                    env: {
                                                        nodeEnv: 'dev',
                                                        clientId: 1,
                                                        clientSecret:
                                                            'XTBsUmAhB0Ubrb8v3yfSeHvKdeMq9NdMEgmh0eTv',
                                                        baseUrl:
                                                            'https://api.getform.io',
                                                        stripe_pub_key:
                                                            'pk_live_G4VB5SPAzV9tQFUuoCLPA6VA'
                                                    }
                                                }),
                                                o.req &&
                                                    (e.context.req = o.req),
                                                o.res &&
                                                    (e.context.res = o.res),
                                                o.ssrContext &&
                                                    (e.context.ssrContext =
                                                        o.ssrContext),
                                                (e.context.redirect = function(
                                                    t,
                                                    path,
                                                    o
                                                ) {
                                                    if (t) {
                                                        e.context._redirected = !0;
                                                        var n = Object(r.a)(
                                                            path
                                                        );
                                                        if (
                                                            ('number' ==
                                                                typeof t ||
                                                                ('undefined' !==
                                                                    n &&
                                                                    'object' !==
                                                                        n) ||
                                                                ((o =
                                                                    path || {}),
                                                                (path = t),
                                                                (n = Object(
                                                                    r.a
                                                                )(path)),
                                                                (t = 302)),
                                                            'object' === n &&
                                                                (path = e.router.resolve(
                                                                    path
                                                                ).route
                                                                    .fullPath),
                                                            !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(
                                                                path
                                                            ))
                                                        )
                                                            throw ((path = G(
                                                                path,
                                                                o
                                                            )),
                                                            window.location.replace(
                                                                path
                                                            ),
                                                            new Error(
                                                                'ERR_REDIRECT'
                                                            ));
                                                        e.context.next({
                                                            path: path,
                                                            query: o,
                                                            status: t
                                                        });
                                                    }
                                                }),
                                                (e.context.nuxtState =
                                                    window.__NUXT__)),
                                            (t.next = 3),
                                            Promise.all([C(o.route), C(o.from)])
                                        );
                                    case 3:
                                        (l = t.sent),
                                            (c = Object(n.a)(l, 2)),
                                            (d = c[0]),
                                            (f = c[1]),
                                            o.route && (e.context.route = d),
                                            o.from && (e.context.from = f),
                                            (e.context.next = o.next),
                                            (e.context._redirected = !1),
                                            (e.context._errored = !1),
                                            (e.context.isHMR = !1),
                                            (e.context.params =
                                                e.context.route.params || {}),
                                            (e.context.query =
                                                e.context.route.query || {});
                                    case 15:
                                    case 'end':
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
            function D(t, e) {
                return !t.length || e._redirected || e._errored
                    ? Promise.resolve()
                    : N(t[0], e).then(function() {
                          return D(t.slice(1), e);
                      });
            }
            function N(t, e) {
                var o;
                return (o =
                    2 === t.length
                        ? new Promise(function(o) {
                              t(e, function(t, data) {
                                  t && e.error(t), o((data = data || {}));
                              });
                          })
                        : t(e)) &&
                    o instanceof Promise &&
                    'function' == typeof o.then
                    ? o
                    : Promise.resolve(o);
            }
            function _(base, t) {
                var path = decodeURI(window.location.pathname);
                return 'hash' === t
                    ? window.location.hash.replace(/^#\//, '')
                    : (base &&
                          0 === path.indexOf(base) &&
                          (path = path.slice(base.length)),
                      (path || '/') +
                          window.location.search +
                          window.location.hash);
            }
            function S(t, e) {
                return (function(t, e) {
                    for (var o = new Array(t.length), i = 0; i < t.length; i++)
                        'object' === Object(r.a)(t[i]) &&
                            (o[i] = new RegExp(
                                '^(?:' + t[i].pattern + ')$',
                                R(e)
                            ));
                    return function(e, n) {
                        for (
                            var path = '',
                                data = e || {},
                                r = (n || {}).pretty ? Z : encodeURIComponent,
                                l = 0;
                            l < t.length;
                            l++
                        ) {
                            var c = t[l];
                            if ('string' != typeof c) {
                                var d = data[c.name || 'pathMatch'],
                                    f = void 0;
                                if (null == d) {
                                    if (c.optional) {
                                        c.partial && (path += c.prefix);
                                        continue;
                                    }
                                    throw new TypeError(
                                        'Expected "' +
                                            c.name +
                                            '" to be defined'
                                    );
                                }
                                if (Array.isArray(d)) {
                                    if (!c.repeat)
                                        throw new TypeError(
                                            'Expected "' +
                                                c.name +
                                                '" to not repeat, but received `' +
                                                JSON.stringify(d) +
                                                '`'
                                        );
                                    if (0 === d.length) {
                                        if (c.optional) continue;
                                        throw new TypeError(
                                            'Expected "' +
                                                c.name +
                                                '" to not be empty'
                                        );
                                    }
                                    for (var m = 0; m < d.length; m++) {
                                        if (((f = r(d[m])), !o[l].test(f)))
                                            throw new TypeError(
                                                'Expected all "' +
                                                    c.name +
                                                    '" to match "' +
                                                    c.pattern +
                                                    '", but received `' +
                                                    JSON.stringify(f) +
                                                    '`'
                                            );
                                        path +=
                                            (0 === m ? c.prefix : c.delimiter) +
                                            f;
                                    }
                                } else {
                                    if (
                                        ((f = c.asterisk ? Z(d, !0) : r(d)),
                                        !o[l].test(f))
                                    )
                                        throw new TypeError(
                                            'Expected "' +
                                                c.name +
                                                '" to match "' +
                                                c.pattern +
                                                '", but received "' +
                                                f +
                                                '"'
                                        );
                                    path += c.prefix + f;
                                }
                            } else path += c;
                        }
                        return path;
                    };
                })(
                    (function(t, e) {
                        var o,
                            n = [],
                            r = 0,
                            l = 0,
                            path = '',
                            c = (e && e.delimiter) || '/';
                        for (; null != (o = L.exec(t)); ) {
                            var d = o[0],
                                f = o[1],
                                m = o.index;
                            if (
                                ((path += t.slice(l, m)), (l = m + d.length), f)
                            )
                                path += f[1];
                            else {
                                var h = t[l],
                                    x = o[2],
                                    v = o[3],
                                    w = o[4],
                                    y = o[5],
                                    k = o[6],
                                    I = o[7];
                                path && (n.push(path), (path = ''));
                                var M = null != x && null != h && h !== x,
                                    C = '+' === k || '*' === k,
                                    j = '?' === k || '*' === k,
                                    A = o[2] || c,
                                    pattern = w || y;
                                n.push({
                                    name: v || r++,
                                    prefix: x || '',
                                    delimiter: A,
                                    optional: j,
                                    repeat: C,
                                    partial: M,
                                    asterisk: Boolean(I),
                                    pattern: pattern
                                        ? P(pattern)
                                        : I
                                        ? '.*'
                                        : '[^' + E(A) + ']+?'
                                });
                            }
                        }
                        l < t.length && (path += t.substr(l));
                        path && n.push(path);
                        return n;
                    })(t, e),
                    e
                );
            }
            function T(t, e) {
                var o = {},
                    n = m({}, t, {}, e);
                for (var r in n) String(t[r]) !== String(e[r]) && (o[r] = !0);
                return o;
            }
            function O(t) {
                var e;
                if (t.message || 'string' == typeof t) e = t.message || t;
                else
                    try {
                        e = JSON.stringify(t, null, 2);
                    } catch (o) {
                        e = '['.concat(t.constructor.name, ']');
                    }
                return m({}, t, {
                    message: e,
                    statusCode:
                        t.statusCode ||
                        t.status ||
                        (t.response && t.response.status) ||
                        500
                });
            }
            (window.onNuxtReadyCbs = []),
                (window.onNuxtReady = function(t) {
                    window.onNuxtReadyCbs.push(t);
                });
            var L = new RegExp(
                [
                    '(\\\\.)',
                    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
                ].join('|'),
                'g'
            );
            function Z(t, e) {
                var o = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(o, function(t) {
                    return (
                        '%' +
                        t
                            .charCodeAt(0)
                            .toString(16)
                            .toUpperCase()
                    );
                });
            }
            function E(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
            }
            function P(t) {
                return t.replace(/([=!:$/()])/g, '\\$1');
            }
            function R(t) {
                return t && t.sensitive ? '' : 'i';
            }
            function G(t, e) {
                var o,
                    r = t.indexOf('://');
                -1 !== r
                    ? ((o = t.substring(0, r)), (t = t.substring(r + 3)))
                    : t.startsWith('//') && (t = t.substring(2));
                var l,
                    c = t.split('/'),
                    d = (o ? o + '://' : '//') + c.shift(),
                    path = c.filter(Boolean).join('/');
                if (2 === (c = path.split('#')).length) {
                    var f = c,
                        m = Object(n.a)(f, 2);
                    (path = m[0]), (l = m[1]);
                }
                return (
                    (d += path ? '/' + path : ''),
                    e &&
                        '{}' !== JSON.stringify(e) &&
                        (d +=
                            (2 === t.split('?').length ? '&' : '?') +
                            (function(t) {
                                return Object.keys(t)
                                    .sort()
                                    .map(function(e) {
                                        var o = t[e];
                                        return null == o
                                            ? ''
                                            : Array.isArray(o)
                                            ? o
                                                  .slice()
                                                  .map(function(t) {
                                                      return [e, '=', t].join(
                                                          ''
                                                      );
                                                  })
                                                  .join('&')
                                            : e + '=' + o;
                                    })
                                    .filter(Boolean)
                                    .join('&');
                            })(e)),
                    (d += l ? '#' + l : '')
                );
            }
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
        function(t, e, o) {
            'use strict';
            o(49), o(7), o(5), o(3), o(2), o(6);
            var n = o(12),
                r = o(0),
                l = (o(19), o(8)),
                c = o(146),
                d = o(101),
                f = o.n(d),
                m = o(54),
                h = o.n(m),
                x = o(68),
                v = o(1);
            'scrollRestoration' in window.history &&
                ((window.history.scrollRestoration = 'manual'),
                window.addEventListener('beforeunload', function() {
                    window.history.scrollRestoration = 'auto';
                }),
                window.addEventListener('load', function() {
                    window.history.scrollRestoration = 'manual';
                }));
            var w = function() {},
                y = x.a.prototype.push;
            (x.a.prototype.push = function(t) {
                var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : w,
                    o = arguments.length > 2 ? arguments[2] : void 0;
                return y.call(this, t, e, o);
            }),
                l.default.use(x.a);
            var k = {
                mode: 'history',
                base: decodeURI('/'),
                linkActiveClass: 'nuxt-link-active',
                linkExactActiveClass: 'nuxt-link-exact-active',
                scrollBehavior: function(t, e, o) {
                    var n = !1,
                        r = Object(v.e)(t);
                    r.length < 2 &&
                    r.every(function(t) {
                        return !1 !== t.options.scrollToTop;
                    })
                        ? (n = { x: 0, y: 0 })
                        : r.some(function(t) {
                              return t.options.scrollToTop;
                          }) && (n = { x: 0, y: 0 }),
                        o && (n = o);
                    var l = window.$nuxt;
                    return (
                        t.path === e.path &&
                            t.hash !== e.hash &&
                            l.$nextTick(function() {
                                return l.$emit('triggerScroll');
                            }),
                        new Promise(function(e) {
                            l.$once('triggerScroll', function() {
                                if (t.hash) {
                                    var o = t.hash;
                                    void 0 !== window.CSS &&
                                        void 0 !== window.CSS.escape &&
                                        (o =
                                            '#' +
                                            window.CSS.escape(o.substr(1)));
                                    try {
                                        document.querySelector(o) &&
                                            (n = { selector: o });
                                    } catch (t) {
                                        console.warn(
                                            'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                                        );
                                    }
                                }
                                e(n);
                            });
                        })
                    );
                },
                routes: [
                    {
                        path: '/about',
                        component: function() {
                            return Object(v.j)(o.e(3).then(o.bind(null, 380)));
                        },
                        name: 'about'
                    },
                    {
                        path: '/contact',
                        component: function() {
                            return Object(v.j)(o.e(5).then(o.bind(null, 381)));
                        },
                        name: 'contact'
                    },
                    {
                        path: '/docs',
                        component: function() {
                            return Object(v.j)(o.e(19).then(o.bind(null, 382)));
                        },
                        name: 'docs'
                    },
                    {
                        path: '/forms',
                        component: function() {
                            return Object(v.j)(o.e(31).then(o.bind(null, 377)));
                        },
                        name: 'forms'
                    },
                    {
                        path: '/formspree-alternative',
                        component: function() {
                            return Object(v.j)(o.e(32).then(o.bind(null, 383)));
                        },
                        name: 'formspree-alternative'
                    },
                    {
                        path: '/help',
                        component: function() {
                            return Object(v.j)(o.e(33).then(o.bind(null, 384)));
                        },
                        name: 'help'
                    },
                    {
                        path: '/login',
                        component: function() {
                            return Object(v.j)(o.e(37).then(o.bind(null, 385)));
                        },
                        name: 'login'
                    },
                    {
                        path: '/pricing',
                        component: function() {
                            return Object(v.j)(o.e(40).then(o.bind(null, 386)));
                        },
                        name: 'pricing'
                    },
                    {
                        path: '/profile',
                        component: function() {
                            return Object(v.j)(
                                Promise.all([o.e(0), o.e(43)]).then(
                                    o.bind(null, 376)
                                )
                            );
                        },
                        name: 'profile'
                    },
                    {
                        path: '/register',
                        component: function() {
                            return Object(v.j)(o.e(44).then(o.bind(null, 387)));
                        },
                        name: 'register'
                    },
                    {
                        path: '/thanks',
                        component: function() {
                            return Object(v.j)(o.e(45).then(o.bind(null, 388)));
                        },
                        name: 'thanks'
                    },
                    {
                        path: '/docs/frequently-asked-questions',
                        component: function() {
                            return Object(v.j)(o.e(14).then(o.bind(null, 389)));
                        },
                        name: 'docs-frequently-asked-questions'
                    },
                    {
                        path: '/docs/getting-started',
                        component: function() {
                            return Object(v.j)(o.e(16).then(o.bind(null, 390)));
                        },
                        name: 'docs-getting-started'
                    },
                    {
                        path: '/forms/create',
                        component: function() {
                            return Object(v.j)(o.e(30).then(o.bind(null, 391)));
                        },
                        name: 'forms-create'
                    },
                    {
                        path: '/legal/privacy-policy',
                        component: function() {
                            return Object(v.j)(o.e(35).then(o.bind(null, 392)));
                        },
                        name: 'legal-privacy-policy'
                    },
                    {
                        path: '/legal/terms',
                        component: function() {
                            return Object(v.j)(o.e(36).then(o.bind(null, 393)));
                        },
                        name: 'legal-terms'
                    },
                    {
                        path: '/password/forgot',
                        component: function() {
                            return Object(v.j)(o.e(38).then(o.bind(null, 394)));
                        },
                        name: 'password-forgot'
                    },
                    {
                        path: '/password/reset',
                        component: function() {
                            return Object(v.j)(o.e(39).then(o.bind(null, 395)));
                        },
                        name: 'password-reset'
                    },
                    {
                        path: '/profile/act-as',
                        component: function() {
                            return Object(v.j)(o.e(42).then(o.bind(null, 396)));
                        },
                        name: 'profile-act-as'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/collecting-form-submissions',
                        component: function() {
                            return Object(v.j)(o.e(6).then(o.bind(null, 397)));
                        },
                        name:
                            'docs-collecting-submissions-collecting-form-submissions'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/custom-email-notifications',
                        component: function() {
                            return Object(v.j)(o.e(7).then(o.bind(null, 398)));
                        },
                        name:
                            'docs-collecting-submissions-custom-email-notifications'
                    },
                    {
                        path: '/docs/collecting-submissions/dos-and-donts',
                        component: function() {
                            return Object(v.j)(o.e(8).then(o.bind(null, 399)));
                        },
                        name: 'docs-collecting-submissions-dos-and-donts'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/email-notifications',
                        component: function() {
                            return Object(v.j)(o.e(9).then(o.bind(null, 400)));
                        },
                        name: 'docs-collecting-submissions-email-notifications'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/handling-checkboxes',
                        component: function() {
                            return Object(v.j)(o.e(10).then(o.bind(null, 401)));
                        },
                        name: 'docs-collecting-submissions-handling-checkboxes'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/invite-your-friends',
                        component: function() {
                            return Object(v.j)(o.e(11).then(o.bind(null, 402)));
                        },
                        name: 'docs-collecting-submissions-invite-your-friends'
                    },
                    {
                        path:
                            '/docs/collecting-submissions/spam-filtering-with-recaptcha',
                        component: function() {
                            return Object(v.j)(o.e(12).then(o.bind(null, 403)));
                        },
                        name:
                            'docs-collecting-submissions-spam-filtering-with-recaptcha'
                    },
                    {
                        path: '/docs/collecting-submissions/uploading-files',
                        component: function() {
                            return Object(v.j)(o.e(13).then(o.bind(null, 404)));
                        },
                        name: 'docs-collecting-submissions-uploading-files'
                    },
                    {
                        path:
                            '/docs/getting-started/creating-a-form-on-getform',
                        component: function() {
                            return Object(v.j)(o.e(15).then(o.bind(null, 405)));
                        },
                        name: 'docs-getting-started-creating-a-form-on-getform'
                    },
                    {
                        path: '/docs/getting-started/requirements',
                        component: function() {
                            return Object(v.j)(o.e(17).then(o.bind(null, 406)));
                        },
                        name: 'docs-getting-started-requirements'
                    },
                    {
                        path: '/docs/getting-started/what-is-getform',
                        component: function() {
                            return Object(v.j)(o.e(18).then(o.bind(null, 407)));
                        },
                        name: 'docs-getting-started-what-is-getform'
                    },
                    {
                        path: '/docs/using-ajax/sending-submissions-with-ajax',
                        component: function() {
                            return Object(v.j)(o.e(20).then(o.bind(null, 408)));
                        },
                        name: 'docs-using-ajax-sending-submissions-with-ajax'
                    },
                    {
                        path: '/docs/using-ajax/uploading-files-with-ajax',
                        component: function() {
                            return Object(v.j)(o.e(21).then(o.bind(null, 409)));
                        },
                        name: 'docs-using-ajax-uploading-files-with-ajax'
                    },
                    {
                        path: '/docs/validations/html5-form-validation',
                        component: function() {
                            return Object(v.j)(o.e(22).then(o.bind(null, 410)));
                        },
                        name: 'docs-validations-html5-form-validation'
                    },
                    {
                        path: '/docs/webhooks/how-to-setup-webhooks-on-getform',
                        component: function() {
                            return Object(v.j)(o.e(23).then(o.bind(null, 411)));
                        },
                        name: 'docs-webhooks-how-to-setup-webhooks-on-getform'
                    },
                    {
                        path:
                            '/docs/zapier-integration/connect-your-zap-to-other-services',
                        component: function() {
                            return Object(v.j)(o.e(24).then(o.bind(null, 412)));
                        },
                        name:
                            'docs-zapier-integration-connect-your-zap-to-other-services'
                    },
                    {
                        path:
                            '/docs/zapier-integration/creating-a-zap-with-getform',
                        component: function() {
                            return Object(v.j)(o.e(25).then(o.bind(null, 413)));
                        },
                        name:
                            'docs-zapier-integration-creating-a-zap-with-getform'
                    },
                    {
                        path: '/docs/zapier-integration/triggering-submissions',
                        component: function() {
                            return Object(v.j)(o.e(26).then(o.bind(null, 414)));
                        },
                        name: 'docs-zapier-integration-triggering-submissions'
                    },
                    {
                        path: '/docs/zapier-integration/what-is-zapier',
                        component: function() {
                            return Object(v.j)(o.e(27).then(o.bind(null, 415)));
                        },
                        name: 'docs-zapier-integration-what-is-zapier'
                    },
                    {
                        path: '/pricing/success/:id?',
                        component: function() {
                            return Object(v.j)(o.e(41).then(o.bind(null, 378)));
                        },
                        name: 'pricing-success-id'
                    },
                    {
                        path: '/checkout/:id?',
                        component: function() {
                            return Object(v.j)(o.e(4).then(o.bind(null, 416)));
                        },
                        name: 'checkout-id'
                    },
                    {
                        path: '/files/:id?',
                        component: function() {
                            return Object(v.j)(o.e(28).then(o.bind(null, 379)));
                        },
                        name: 'files-id'
                    },
                    {
                        path: '/forms/:id',
                        component: function() {
                            return Object(v.j)(
                                Promise.all([o.e(0), o.e(49), o.e(29)]).then(
                                    o.bind(null, 375)
                                )
                            );
                        },
                        name: 'forms-id'
                    },
                    {
                        path: '/verify-email/:id?',
                        component: function() {
                            return Object(v.j)(o.e(46).then(o.bind(null, 417)));
                        },
                        name: 'verify-email-id'
                    },
                    {
                        path: '/',
                        component: function() {
                            return Object(v.j)(o.e(34).then(o.bind(null, 418)));
                        },
                        name: 'index'
                    }
                ],
                fallback: !1
            };
            function I() {
                return new x.a(k);
            }
            var M,
                C = {
                    name: 'NuxtChild',
                    functional: !0,
                    props: {
                        nuxtChildKey: { type: String, default: '' },
                        keepAlive: Boolean,
                        keepAliveProps: { type: Object, default: void 0 }
                    },
                    render: function(t, e) {
                        var o = e.parent,
                            data = e.data,
                            n = e.props;
                        data.nuxtChild = !0;
                        for (
                            var r = o,
                                l = o.$nuxt.nuxt.transitions,
                                c = o.$nuxt.nuxt.defaultTransition,
                                d = 0;
                            o;

                        )
                            o.$vnode && o.$vnode.data.nuxtChild && d++,
                                (o = o.$parent);
                        data.nuxtChildDepth = d;
                        var f = l[d] || c,
                            m = {};
                        j.forEach(function(t) {
                            void 0 !== f[t] && (m[t] = f[t]);
                        });
                        var h = {};
                        A.forEach(function(t) {
                            'function' == typeof f[t] && (h[t] = f[t].bind(r));
                        });
                        var x = h.beforeEnter;
                        if (
                            ((h.beforeEnter = function(t) {
                                if (
                                    (window.$nuxt.$nextTick(function() {
                                        window.$nuxt.$emit('triggerScroll');
                                    }),
                                    x)
                                )
                                    return x.call(r, t);
                            }),
                            !1 === f.css)
                        ) {
                            var v = h.leave;
                            (!v || v.length < 2) &&
                                (h.leave = function(t, e) {
                                    v && v.call(r, t), r.$nextTick(e);
                                });
                        }
                        var w = t('routerView', data);
                        return (
                            n.keepAlive &&
                                (w = t(
                                    'keep-alive',
                                    { props: n.keepAliveProps },
                                    [w]
                                )),
                            t('transition', { props: m, on: h }, [w])
                        );
                    }
                },
                j = [
                    'name',
                    'mode',
                    'appear',
                    'css',
                    'type',
                    'duration',
                    'enterClass',
                    'leaveClass',
                    'appearClass',
                    'enterActiveClass',
                    'enterActiveClass',
                    'leaveActiveClass',
                    'appearActiveClass',
                    'enterToClass',
                    'leaveToClass',
                    'appearToClass'
                ],
                A = [
                    'beforeEnter',
                    'enter',
                    'afterEnter',
                    'enterCancelled',
                    'beforeLeave',
                    'leave',
                    'afterLeave',
                    'leaveCancelled',
                    'beforeAppear',
                    'appear',
                    'afterAppear',
                    'appearCancelled'
                ],
                z = [
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e(
                            'a',
                            {
                                attrs: {
                                    href: 'https://en.wikipedia.org/wiki/Dodo',
                                    target: '_blank'
                                }
                            },
                            [
                                e('img', {
                                    staticClass: 'img-fluid mb-4',
                                    attrs: { src: o(182) }
                                })
                            ]
                        );
                    }
                ],
                D = {
                    props: ['error'],
                    layout: 'empty',
                    head: { bodyAttrs: { class: 'body-bg-white' } }
                },
                N = (o(183), o(11)),
                _ = Object(N.a)(
                    D,
                    function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o(
                            'div',
                            { staticClass: 'container error-page' },
                            [
                                o(
                                    'div',
                                    {
                                        staticClass:
                                            'col-md-6 offset-md-3 mt-5 text-center'
                                    },
                                    [
                                        t._m(0),
                                        t._v(' '),
                                        404 === t.error.statusCode
                                            ? o('div', [
                                                  o(
                                                      'h1',
                                                      {
                                                          staticClass:
                                                              'content-title'
                                                      },
                                                      [t._v('Page not found')]
                                                  ),
                                                  t._v(' '),
                                                  o(
                                                      'p',
                                                      {
                                                          staticClass:
                                                              'error-content'
                                                      },
                                                      [
                                                          t._v(
                                                              "We can't find the page you're looking for. Check out our "
                                                          ),
                                                          o(
                                                              'nuxt-link',
                                                              {
                                                                  staticClass:
                                                                      'error-button',
                                                                  attrs: {
                                                                      to:
                                                                          '/docs'
                                                                  }
                                                              },
                                                              [
                                                                  t._v(
                                                                      'Help Center'
                                                                  )
                                                              ]
                                                          ),
                                                          t._v(
                                                              ', or head back to homepage'
                                                          )
                                                      ],
                                                      1
                                                  )
                                              ])
                                            : o(
                                                  'h1',
                                                  {
                                                      staticClass:
                                                          'content-title mb-4'
                                                  },
                                                  [t._v('An error occurred')]
                                              ),
                                        t._v(' '),
                                        o(
                                            'nuxt-link',
                                            {
                                                staticClass:
                                                    'error-button d-flex justify-content-center mt-4',
                                                attrs: { to: '/' }
                                            },
                                            [t._v('HOME PAGE')]
                                        )
                                    ],
                                    1
                                )
                            ]
                        );
                    },
                    z,
                    !1,
                    null,
                    '552359e2',
                    null
                ).exports,
                S = (o(43), o(44), o(14), o(38)),
                T = {
                    name: 'Nuxt',
                    components: { NuxtChild: C, NuxtError: _ },
                    props: {
                        nuxtChildKey: { type: String, default: void 0 },
                        keepAlive: Boolean,
                        keepAliveProps: { type: Object, default: void 0 },
                        name: { type: String, default: 'default' }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError &&
                            ((this.errorFromNuxtError = t),
                            this.$forceUpdate());
                    },
                    computed: {
                        routerViewKey: function() {
                            if (
                                void 0 !== this.nuxtChildKey ||
                                this.$route.matched.length > 1
                            )
                                return (
                                    this.nuxtChildKey ||
                                    Object(v.b)(this.$route.matched[0].path)(
                                        this.$route.params
                                    )
                                );
                            var t = Object(S.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var o = e.options;
                                if (o.key)
                                    return 'function' == typeof o.key
                                        ? o.key(this.$route)
                                        : o.key;
                            }
                            return /\/$/.test(t.path)
                                ? this.$route.path
                                : this.$route.path.replace(/\/$/, '');
                        }
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(
                            this,
                            'nuxt',
                            this.$root.$options.nuxt
                        );
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err
                            ? this.errorFromNuxtError
                                ? (this.$nextTick(function() {
                                      return (e.errorFromNuxtError = !1);
                                  }),
                                  t('div', {}, [
                                      t(
                                          'h2',
                                          'An error occured while showing the error page'
                                      ),
                                      t(
                                          'p',
                                          'Unfortunately an error occured and while showing the error page another error occured'
                                      ),
                                      t(
                                          'p',
                                          'Error details: '.concat(
                                              this.errorFromNuxtError.toString()
                                          )
                                      ),
                                      t(
                                          'nuxt-link',
                                          { props: { to: '/' } },
                                          'Go back to home'
                                      )
                                  ]))
                                : ((this.displayingNuxtError = !0),
                                  this.$nextTick(function() {
                                      return (e.displayingNuxtError = !1);
                                  }),
                                  t(_, { props: { error: this.nuxt.err } }))
                            : t('NuxtChild', {
                                  key: this.routerViewKey,
                                  props: this.$props
                              });
                    }
                },
                O =
                    (o(55),
                    {
                        name: 'NuxtLoading',
                        data: function() {
                            return {
                                percent: 0,
                                show: !1,
                                canSucceed: !0,
                                reversed: !1,
                                skipTimerCount: 0,
                                rtl: !1,
                                throttle: 200,
                                duration: 5e3,
                                continuous: !1
                            };
                        },
                        computed: {
                            left: function() {
                                return (
                                    !(!this.continuous && !this.rtl) &&
                                    (this.rtl
                                        ? this.reversed
                                            ? '0px'
                                            : 'auto'
                                        : this.reversed
                                        ? 'auto'
                                        : '0px')
                                );
                            }
                        },
                        beforeDestroy: function() {
                            this.clear();
                        },
                        methods: {
                            clear: function() {
                                clearInterval(this._timer),
                                    clearTimeout(this._throttle),
                                    (this._timer = null);
                            },
                            start: function() {
                                var t = this;
                                return (
                                    this.clear(),
                                    (this.percent = 0),
                                    (this.reversed = !1),
                                    (this.skipTimerCount = 0),
                                    (this.canSucceed = !0),
                                    this.throttle
                                        ? (this._throttle = setTimeout(
                                              function() {
                                                  return t.startTimer();
                                              },
                                              this.throttle
                                          ))
                                        : this.startTimer(),
                                    this
                                );
                            },
                            set: function(t) {
                                return (
                                    (this.show = !0),
                                    (this.canSucceed = !0),
                                    (this.percent = Math.min(
                                        100,
                                        Math.max(0, Math.floor(t))
                                    )),
                                    this
                                );
                            },
                            get: function() {
                                return this.percent;
                            },
                            increase: function(t) {
                                return (
                                    (this.percent = Math.min(
                                        100,
                                        Math.floor(this.percent + t)
                                    )),
                                    this
                                );
                            },
                            decrease: function(t) {
                                return (
                                    (this.percent = Math.max(
                                        0,
                                        Math.floor(this.percent - t)
                                    )),
                                    this
                                );
                            },
                            pause: function() {
                                return clearInterval(this._timer), this;
                            },
                            resume: function() {
                                return this.startTimer(), this;
                            },
                            finish: function() {
                                return (
                                    (this.percent = this.reversed ? 0 : 100),
                                    this.hide(),
                                    this
                                );
                            },
                            hide: function() {
                                var t = this;
                                return (
                                    this.clear(),
                                    setTimeout(function() {
                                        (t.show = !1),
                                            t.$nextTick(function() {
                                                (t.percent = 0),
                                                    (t.reversed = !1);
                                            });
                                    }, 500),
                                    this
                                );
                            },
                            fail: function() {
                                return (this.canSucceed = !1), this;
                            },
                            startTimer: function() {
                                var t = this;
                                this.show || (this.show = !0),
                                    void 0 === this._cut &&
                                        (this._cut =
                                            1e4 / Math.floor(this.duration)),
                                    (this._timer = setInterval(function() {
                                        t.skipTimerCount > 0
                                            ? t.skipTimerCount--
                                            : (t.reversed
                                                  ? t.decrease(t._cut)
                                                  : t.increase(t._cut),
                                              t.continuous &&
                                                  (t.percent >= 100
                                                      ? ((t.skipTimerCount = 1),
                                                        (t.reversed = !t.reversed))
                                                      : t.percent <= 0 &&
                                                        ((t.skipTimerCount = 1),
                                                        (t.reversed = !t.reversed))));
                                    }, 100));
                            }
                        },
                        render: function(t) {
                            var e = t(!1);
                            return (
                                this.show &&
                                    (e = t('div', {
                                        staticClass: 'nuxt-progress',
                                        class: {
                                            'nuxt-progress-notransition':
                                                this.skipTimerCount > 0,
                                            'nuxt-progress-failed': !this
                                                .canSucceed
                                        },
                                        style: {
                                            width: this.percent + '%',
                                            left: this.left
                                        }
                                    })),
                                e
                            );
                        }
                    }),
                L =
                    (o(185),
                    Object(N.a)(O, void 0, void 0, !1, null, null, null)
                        .exports),
                Z =
                    (o(187),
                    o(189),
                    o(191),
                    o(193),
                    {
                        methods: {
                            showModal: function() {
                                this.$refs.myModalRef.show();
                            },
                            hideModal: function() {
                                this.$refs.myModalRef.hide();
                            }
                        }
                    }),
                E = [
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('section', { staticClass: 'section5' }, [
                            e('div', { staticClass: 'container layout-960' }, [
                                e('div', { staticClass: 'row' }, [
                                    e('div', { staticClass: 'col' }, [
                                        e('h2', { staticClass: 'mb-0' }, [
                                            this._v('5,000,000')
                                        ]),
                                        this._v(' '),
                                        e('p', [
                                            this._v(
                                                'submissions. Happy customers.'
                                            )
                                        ]),
                                        this._v(' '),
                                        e(
                                            'a',
                                            {
                                                staticClass: 'btn-landing',
                                                attrs: { href: '/register' }
                                            },
                                            [this._v('SIGN UP')]
                                        )
                                    ]),
                                    this._v(' '),
                                    e(
                                        'div',
                                        {
                                            staticClass: 'col d-none d-sm-block'
                                        },
                                        [
                                            e('img', {
                                                attrs: { src: o(234), alt: '' }
                                            })
                                        ]
                                    )
                                ])
                            ])
                        ]);
                    },
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('li', [
                            e('img', { attrs: { src: o(235), alt: '' } })
                        ]);
                    },
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('li', [e('h4', [this._v('Platform')])]);
                    },
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('li', [e('h4', [this._v('Company')])]);
                    }
                ],
                P = {
                    components: {
                        HeaderDefault: Object(N.a)(
                            Z,
                            function() {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n('div', [
                                    n(
                                        'div',
                                        {
                                            staticClass:
                                                'header d-none d-sm-block'
                                        },
                                        [
                                            n(
                                                'div',
                                                { staticClass: 'container' },
                                                [
                                                    n(
                                                        'div',
                                                        { staticClass: 'flex' },
                                                        [
                                                            n('ul', [
                                                                n(
                                                                    'li',
                                                                    [
                                                                        n(
                                                                            'nuxt-link',
                                                                            {
                                                                                attrs: {
                                                                                    to:
                                                                                        '/docs'
                                                                                }
                                                                            },
                                                                            [
                                                                                t._v(
                                                                                    'DOCS'
                                                                                )
                                                                            ]
                                                                        )
                                                                    ],
                                                                    1
                                                                ),
                                                                t._v(' '),
                                                                t._m(0)
                                                            ]),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    staticClass:
                                                                        'navbar-brand',
                                                                    attrs: {
                                                                        to: '/'
                                                                    }
                                                                },
                                                                [
                                                                    n('img', {
                                                                        staticClass:
                                                                            'img-fluid',
                                                                        attrs: {
                                                                            src: o(
                                                                                106
                                                                            ),
                                                                            alt:
                                                                                'getform-logo'
                                                                        }
                                                                    })
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n('ul', [
                                                                n(
                                                                    'li',
                                                                    [
                                                                        n(
                                                                            'nuxt-link',
                                                                            {
                                                                                staticClass:
                                                                                    'signup-link',
                                                                                attrs: {
                                                                                    to:
                                                                                        '/register'
                                                                                }
                                                                            },
                                                                            [
                                                                                t._v(
                                                                                    'SIGN UP'
                                                                                )
                                                                            ]
                                                                        )
                                                                    ],
                                                                    1
                                                                ),
                                                                t._v(' '),
                                                                t.$auth.user
                                                                    ? n(
                                                                          'li',
                                                                          [
                                                                              n(
                                                                                  'nuxt-link',
                                                                                  {
                                                                                      attrs: {
                                                                                          to:
                                                                                              '/forms'
                                                                                      }
                                                                                  },
                                                                                  [
                                                                                      t._v(
                                                                                          'MY FORMS'
                                                                                      )
                                                                                  ]
                                                                              )
                                                                          ],
                                                                          1
                                                                      )
                                                                    : n(
                                                                          'li',
                                                                          [
                                                                              n(
                                                                                  'nuxt-link',
                                                                                  {
                                                                                      attrs: {
                                                                                          to:
                                                                                              '/login'
                                                                                      }
                                                                                  },
                                                                                  [
                                                                                      t._v(
                                                                                          'LOGIN'
                                                                                      )
                                                                                  ]
                                                                              )
                                                                          ],
                                                                          1
                                                                      )
                                                            ])
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    ),
                                    t._v(' '),
                                    n(
                                        'div',
                                        {
                                            staticClass:
                                                'm-header d-block d-sm-none'
                                        },
                                        [
                                            n(
                                                'div',
                                                {
                                                    staticClass:
                                                        'd-flex justify-content-between align-items-center'
                                                },
                                                [
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'm-header-login'
                                                        },
                                                        [
                                                            t.$auth.user
                                                                ? n(
                                                                      'span',
                                                                      [
                                                                          n(
                                                                              'nuxt-link',
                                                                              {
                                                                                  attrs: {
                                                                                      to:
                                                                                          '/forms'
                                                                                  }
                                                                              },
                                                                              [
                                                                                  t._v(
                                                                                      'MY FORMS'
                                                                                  )
                                                                              ]
                                                                          )
                                                                      ],
                                                                      1
                                                                  )
                                                                : n(
                                                                      'span',
                                                                      [
                                                                          n(
                                                                              'nuxt-link',
                                                                              {
                                                                                  attrs: {
                                                                                      to:
                                                                                          '/login'
                                                                                  }
                                                                              },
                                                                              [
                                                                                  t._v(
                                                                                      'LOGIN'
                                                                                  )
                                                                              ]
                                                                          )
                                                                      ],
                                                                      1
                                                                  )
                                                        ]
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'm-header-logo text-center'
                                                        },
                                                        [
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to: '/'
                                                                    }
                                                                },
                                                                [
                                                                    n('img', {
                                                                        staticClass:
                                                                            'img-fluid',
                                                                        attrs: {
                                                                            src: o(
                                                                                106
                                                                            ),
                                                                            alt:
                                                                                'getform-logo'
                                                                        }
                                                                    })
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'm-header-menu d-flex justify-content-end'
                                                        },
                                                        [
                                                            n(
                                                                'a',
                                                                {
                                                                    attrs: {
                                                                        href:
                                                                            '#'
                                                                    },
                                                                    on: {
                                                                        click:
                                                                            t.showModal
                                                                    }
                                                                },
                                                                [
                                                                    n('img', {
                                                                        staticClass:
                                                                            'img-fluid',
                                                                        attrs: {
                                                                            src: o(
                                                                                233
                                                                            ),
                                                                            alt:
                                                                                'getform-logo'
                                                                        }
                                                                    })
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        [
                                                            n(
                                                                'b-modal',
                                                                {
                                                                    ref:
                                                                        'myModalRef',
                                                                    attrs: {
                                                                        id:
                                                                            'navModal',
                                                                        'hide-footer':
                                                                            '',
                                                                        'hide-header':
                                                                            ''
                                                                    }
                                                                },
                                                                [
                                                                    n(
                                                                        'div',
                                                                        {
                                                                            staticClass:
                                                                                'd-block'
                                                                        },
                                                                        [
                                                                            n(
                                                                                'div',
                                                                                {
                                                                                    staticClass:
                                                                                        'modal-top d-flex justify-content-end'
                                                                                },
                                                                                [
                                                                                    n(
                                                                                        'div',
                                                                                        {
                                                                                            on: {
                                                                                                click:
                                                                                                    t.hideModal
                                                                                            }
                                                                                        },
                                                                                        [
                                                                                            n(
                                                                                                'svg',
                                                                                                {
                                                                                                    attrs: {
                                                                                                        width:
                                                                                                            '15px',
                                                                                                        height:
                                                                                                            '15px',
                                                                                                        viewBox:
                                                                                                            '0 0 15 15',
                                                                                                        version:
                                                                                                            '1.1',
                                                                                                        xmlns:
                                                                                                            'http://www.w3.org/2000/svg',
                                                                                                        'xmlns:xlink':
                                                                                                            'http://www.w3.org/1999/xlink'
                                                                                                    }
                                                                                                },
                                                                                                [
                                                                                                    n(
                                                                                                        'g',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                id:
                                                                                                                    'Index',
                                                                                                                stroke:
                                                                                                                    'none',
                                                                                                                'stroke-width':
                                                                                                                    '1',
                                                                                                                fill:
                                                                                                                    'none',
                                                                                                                'fill-rule':
                                                                                                                    'evenodd',
                                                                                                                opacity:
                                                                                                                    '0.703738839',
                                                                                                                'stroke-linecap':
                                                                                                                    'square',
                                                                                                                'stroke-opacity':
                                                                                                                    '0.7'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            n(
                                                                                                                'g',
                                                                                                                {
                                                                                                                    attrs: {
                                                                                                                        id:
                                                                                                                            'responsive-docs.00',
                                                                                                                        transform:
                                                                                                                            'translate(-334.000000, -21.000000)',
                                                                                                                        stroke:
                                                                                                                            '#8492A6',
                                                                                                                        'stroke-width':
                                                                                                                            '1.5'
                                                                                                                    }
                                                                                                                },
                                                                                                                [
                                                                                                                    n(
                                                                                                                        'g',
                                                                                                                        {
                                                                                                                            attrs: {
                                                                                                                                id:
                                                                                                                                    'close',
                                                                                                                                transform:
                                                                                                                                    'translate(335.000000, 22.000000)'
                                                                                                                            }
                                                                                                                        },
                                                                                                                        [
                                                                                                                            n(
                                                                                                                                'path',
                                                                                                                                {
                                                                                                                                    attrs: {
                                                                                                                                        d:
                                                                                                                                            'M13,0 L0,13',
                                                                                                                                        id:
                                                                                                                                            'Shape'
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            ),
                                                                                                                            t._v(
                                                                                                                                ' '
                                                                                                                            ),
                                                                                                                            n(
                                                                                                                                'path',
                                                                                                                                {
                                                                                                                                    attrs: {
                                                                                                                                        d:
                                                                                                                                            'M13,13 L0,0',
                                                                                                                                        id:
                                                                                                                                            'Shape'
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            )
                                                                                                                        ]
                                                                                                                    )
                                                                                                                ]
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            )
                                                                                        ]
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t._v(
                                                                                ' '
                                                                            ),
                                                                            n(
                                                                                'div',
                                                                                {
                                                                                    staticClass:
                                                                                        'modal-bottom'
                                                                                },
                                                                                [
                                                                                    n(
                                                                                        'ul',
                                                                                        [
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    '/register'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'Sign Up'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            ),
                                                                                            t._v(
                                                                                                ' '
                                                                                            ),
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    '/pricing'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'Pricing'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            ),
                                                                                            t._v(
                                                                                                ' '
                                                                                            ),
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    '/docs'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'Docs'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            ),
                                                                                            t._v(
                                                                                                ' '
                                                                                            ),
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    '/about'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'About'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            ),
                                                                                            t._v(
                                                                                                ' '
                                                                                            ),
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    'https://blog.getform.io',
                                                                                                                target:
                                                                                                                    '_blank'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'Blog'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            ),
                                                                                            t._v(
                                                                                                ' '
                                                                                            ),
                                                                                            n(
                                                                                                'li',
                                                                                                [
                                                                                                    n(
                                                                                                        'a',
                                                                                                        {
                                                                                                            attrs: {
                                                                                                                href:
                                                                                                                    '/contact'
                                                                                                            }
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                'Contact'
                                                                                                            )
                                                                                                        ]
                                                                                                    )
                                                                                                ]
                                                                                            )
                                                                                        ]
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ]
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ]);
                            },
                            [
                                function() {
                                    var t = this.$createElement,
                                        e = this._self._c || t;
                                    return e('li', [
                                        e(
                                            'a',
                                            {
                                                attrs: {
                                                    href:
                                                        'https://blog.getform.io?ref=header',
                                                    target: '_blank'
                                                }
                                            },
                                            [this._v('BLOG')]
                                        )
                                    ]);
                                }
                            ],
                            !1,
                            null,
                            null,
                            null
                        ).exports,
                        FooterDefault: Object(N.a)(
                            {},
                            function() {
                                var t = this,
                                    e = t.$createElement,
                                    o = t._self._c || e;
                                return o('div', [
                                    t._m(0),
                                    t._v(' '),
                                    o('footer', [
                                        o(
                                            'div',
                                            {
                                                staticClass:
                                                    'container layout-960'
                                            },
                                            [
                                                o(
                                                    'div',
                                                    { staticClass: 'row' },
                                                    [
                                                        o(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'col-sm-4'
                                                            },
                                                            [
                                                                o(
                                                                    'ul',
                                                                    {
                                                                        staticClass:
                                                                            'social'
                                                                    },
                                                                    [
                                                                        t._m(1),
                                                                        t._v(
                                                                            ' '
                                                                        ),
                                                                        o(
                                                                            'li',
                                                                            [
                                                                                o(
                                                                                    'p',
                                                                                    [
                                                                                        t._v(
                                                                                            '\n                                Made with\n                                '
                                                                                        ),
                                                                                        o(
                                                                                            'svg',
                                                                                            {
                                                                                                attrs: {
                                                                                                    xmlns:
                                                                                                        'http://www.w3.org/2000/svg',
                                                                                                    width:
                                                                                                        '13',
                                                                                                    height:
                                                                                                        '12',
                                                                                                    viewBox:
                                                                                                        '0 0 13 12'
                                                                                                }
                                                                                            },
                                                                                            [
                                                                                                o(
                                                                                                    'path',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            fill:
                                                                                                                '#FA4D77',
                                                                                                            'fill-rule':
                                                                                                                'nonzero',
                                                                                                            d:
                                                                                                                'M9.425 0C8.206 0 7.15.627 6.5 1.569 5.85.627 4.794 0 3.575 0 1.625 0 0 1.569 0 3.451 0 6.902 6.5 12 6.5 12S13 6.902 13 3.451C13 1.569 11.375 0 9.425 0z'
                                                                                                        }
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                        ),
                                                                                        t._v(
                                                                                            '\n                                from\n                                '
                                                                                        ),
                                                                                        o(
                                                                                            'span',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'from-city start'
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    'London'
                                                                                                )
                                                                                            ]
                                                                                        ),
                                                                                        t._v(
                                                                                            ' '
                                                                                        ),
                                                                                        o(
                                                                                            'span',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'from-city'
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    'Milano'
                                                                                                )
                                                                                            ]
                                                                                        ),
                                                                                        t._v(
                                                                                            ' '
                                                                                        ),
                                                                                        o(
                                                                                            'span',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'from-city'
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    'Istanbul'
                                                                                                )
                                                                                            ]
                                                                                        )
                                                                                    ]
                                                                                )
                                                                            ]
                                                                        ),
                                                                        t._v(
                                                                            ' '
                                                                        ),
                                                                        o(
                                                                            'li',
                                                                            [
                                                                                o(
                                                                                    'a',
                                                                                    {
                                                                                        attrs: {
                                                                                            href:
                                                                                                'https://twitter.com/getformio',
                                                                                            target:
                                                                                                '_blank'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        o(
                                                                                            'svg',
                                                                                            {
                                                                                                attrs: {
                                                                                                    xmlns:
                                                                                                        'http://www.w3.org/2000/svg',
                                                                                                    width:
                                                                                                        '19',
                                                                                                    height:
                                                                                                        '16',
                                                                                                    viewBox:
                                                                                                        '0 0 19 16'
                                                                                                }
                                                                                            },
                                                                                            [
                                                                                                o(
                                                                                                    'path',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            fill:
                                                                                                                '#FFF',
                                                                                                            'fill-rule':
                                                                                                                'nonzero',
                                                                                                            d:
                                                                                                                'M19 2.08c-.712.32-1.425.56-2.217.64.792-.48 1.425-1.28 1.742-2.16-.792.48-1.583.8-2.454.96A3.815 3.815 0 0 0 13.22.24C11.083.24 9.34 2 9.34 4.16c0 .32 0 .64.08.88C6.096 4.88 3.246 3.28 1.346.88c-.396.64-.554 1.28-.554 2 0 1.36.712 2.56 1.741 3.28-.633 0-1.266-.16-1.741-.48v.08c0 1.92 1.346 3.52 3.087 3.84-.317.08-.633.16-1.029.16-.238 0-.475 0-.712-.08.474 1.6 1.9 2.72 3.641 2.72-1.346 1.04-3.008 1.68-4.829 1.68-.317 0-.633 0-.95-.08 1.742 1.12 3.8 1.76 5.938 1.76 7.204 0 11.083-6 11.083-11.2v-.48c.791-.56 1.425-1.28 1.979-2z'
                                                                                                        }
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                t._v(
                                                                                    ' '
                                                                                ),
                                                                                o(
                                                                                    'a',
                                                                                    {
                                                                                        attrs: {
                                                                                            href:
                                                                                                'https://www.linkedin.com/company/getform/',
                                                                                            target:
                                                                                                '_blank'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        o(
                                                                                            'svg',
                                                                                            {
                                                                                                attrs: {
                                                                                                    xmlns:
                                                                                                        'http://www.w3.org/2000/svg',
                                                                                                    width:
                                                                                                        '17',
                                                                                                    height:
                                                                                                        '17',
                                                                                                    viewBox:
                                                                                                        '0 0 17 17'
                                                                                                }
                                                                                            },
                                                                                            [
                                                                                                o(
                                                                                                    'path',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            fill:
                                                                                                                '#FFF',
                                                                                                            'fill-rule':
                                                                                                                'nonzero',
                                                                                                            d:
                                                                                                                'M16.292 0H.708C.283 0 0 .283 0 .708v15.584c0 .425.283.708.708.708h15.584c.425 0 .708-.283.708-.708V.708C17 .283 16.717 0 16.292 0zM5.029 14.52H2.55V6.376H5.1v8.146h-.07zM3.754 5.243c-.779 0-1.487-.638-1.487-1.488 0-.779.637-1.487 1.487-1.487.78 0 1.488.637 1.488 1.487 0 .85-.638 1.488-1.488 1.488zm10.767 9.279h-2.55v-3.967c0-.92 0-2.125-1.275-2.125-1.346 0-1.488.992-1.488 2.054v4.038h-2.55V6.375h2.409v1.133c.354-.637 1.133-1.275 2.408-1.275 2.55 0 3.046 1.7 3.046 3.896v4.392z'
                                                                                                        }
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                t._v(
                                                                                    ' '
                                                                                ),
                                                                                o(
                                                                                    'a',
                                                                                    {
                                                                                        attrs: {
                                                                                            href:
                                                                                                'https://facebook.com/getformio',
                                                                                            target:
                                                                                                '_blank'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        o(
                                                                                            'svg',
                                                                                            {
                                                                                                attrs: {
                                                                                                    xmlns:
                                                                                                        'http://www.w3.org/2000/svg',
                                                                                                    width:
                                                                                                        '17',
                                                                                                    height:
                                                                                                        '17',
                                                                                                    viewBox:
                                                                                                        '0 0 17 17'
                                                                                                }
                                                                                            },
                                                                                            [
                                                                                                o(
                                                                                                    'path',
                                                                                                    {
                                                                                                        attrs: {
                                                                                                            fill:
                                                                                                                '#FFF',
                                                                                                            'fill-rule':
                                                                                                                'nonzero',
                                                                                                            d:
                                                                                                                'M15.583 0H1.417C.634 0 0 .634 0 1.417v14.166C0 16.366.634 17 1.417 17h7.791v-6.375H7.083V7.792h2.125V5.959c0-2.196 1.341-3.391 3.3-3.391.939 0 1.745.07 1.98.101v2.295H13.13c-1.066 0-1.272.507-1.272 1.25v1.578h3.145l-.708 2.833h-2.437V17h3.725c.783 0 1.417-.634 1.417-1.417V1.417C17 .634 16.366 0 15.583 0z'
                                                                                                        }
                                                                                                    }
                                                                                                )
                                                                                            ]
                                                                                        )
                                                                                    ]
                                                                                )
                                                                            ]
                                                                        )
                                                                    ]
                                                                )
                                                            ]
                                                        ),
                                                        t._v(' '),
                                                        o(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'col-sm-3 col-6'
                                                            },
                                                            [
                                                                o('ul', [
                                                                    t._m(2),
                                                                    t._v(' '),
                                                                    o(
                                                                        'li',
                                                                        [
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/pricing'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'Pricing'
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t._v(
                                                                                ' '
                                                                            ),
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/docs'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'Help Center'
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t._v(
                                                                                ' '
                                                                            ),
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/contact'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'Contact Us'
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ],
                                                                        1
                                                                    )
                                                                ])
                                                            ]
                                                        ),
                                                        t._v(' '),
                                                        o(
                                                            'div',
                                                            {
                                                                staticClass:
                                                                    'col-sm-3 col-6'
                                                            },
                                                            [
                                                                o('ul', [
                                                                    t._m(3),
                                                                    t._v(' '),
                                                                    o(
                                                                        'li',
                                                                        [
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/about'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'About Us'
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t._v(
                                                                                ' '
                                                                            ),
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/legal/terms'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'Terms & Conditions'
                                                                                    )
                                                                                ]
                                                                            ),
                                                                            t._v(
                                                                                ' '
                                                                            ),
                                                                            o(
                                                                                'nuxt-link',
                                                                                {
                                                                                    attrs: {
                                                                                        to:
                                                                                            '/legal/privacy-policy'
                                                                                    }
                                                                                },
                                                                                [
                                                                                    t._v(
                                                                                        'Privacy Policy'
                                                                                    )
                                                                                ]
                                                                            )
                                                                        ],
                                                                        1
                                                                    )
                                                                ])
                                                            ]
                                                        )
                                                    ]
                                                )
                                            ]
                                        )
                                    ])
                                ]);
                            },
                            E,
                            !1,
                            null,
                            null,
                            null
                        ).exports
                    }
                },
                R = Object(N.a)(
                    P,
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e(
                            'div',
                            [
                                e('HeaderDefault'),
                                this._v(' '),
                                e('nuxt'),
                                this._v(' '),
                                e('FooterDefault')
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                G = Object(N.a)(
                    {},
                    function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n('div', { staticClass: 'docs' }, [
                            n('div', { staticClass: 'container-fluid' }, [
                                n('div', { staticClass: 'row' }, [
                                    n(
                                        'div',
                                        { staticClass: 'col-md-3 offset-0' },
                                        [
                                            n(
                                                'div',
                                                { staticClass: 'docs-sidebar' },
                                                [
                                                    n(
                                                        'nuxt-link',
                                                        { attrs: { to: '/' } },
                                                        [
                                                            n('img', {
                                                                staticClass:
                                                                    'img-fluid',
                                                                attrs: {
                                                                    src: o(87),
                                                                    alt:
                                                                        'getform-logo'
                                                                }
                                                            })
                                                        ]
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4 mt-5'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'GETTING STARTED'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/getting-started/what-is-getform'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'What is Getform?'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/getting-started/requirements'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Requirements'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/getting-started/creating-a-form-on-getform'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Creating a form'
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'COLLECTING SUBMISSIONS'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/collecting-form-submissions'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Collecting form submissions'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/email-notifications'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Email notifications'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/custom-email-notifications'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Custom notifications'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/handling-checkboxes'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Handling checkboxes'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/uploading-files'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Uploading Files'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/dos-and-donts'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Do’s and Don’ts'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/invite-your-friends'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Invite your friends'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/collecting-submissions/spam-filtering-with-recaptcha'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Spam Filtering'
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'USING AJAX'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/using-ajax/sending-submissions-with-ajax'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Submitting with AJAX'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/using-ajax/uploading-files-with-ajax'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Uploading files with AJAX'
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'ZAPIER INTEGRATION'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/zapier-integration/what-is-zapier'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'What is Zapier?'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/zapier-integration/creating-a-zap-with-getform'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Creating Zap with Getform'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/zapier-integration/triggering-submissions'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Triggering Submissions'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/zapier-integration/connect-your-zap-to-other-services'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'Connecting your Zap to Other Services'
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'WEBHOOKS'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/webhooks/how-to-setup-webhooks-on-getform'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'How to Setup a Webhook to Your Form '
                                                                    )
                                                                ]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-menu d-flex flex-column mb-4'
                                                        },
                                                        [
                                                            n(
                                                                'h3',
                                                                {
                                                                    staticClass:
                                                                        'mb-3'
                                                                },
                                                                [
                                                                    t._v(
                                                                        'FORM VALIDATION'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/validations/html5-form-validation'
                                                                    }
                                                                },
                                                                [
                                                                    t._v(
                                                                        'HTML5 Form Validation'
                                                                    )
                                                                ]
                                                            ),
                                                            t._v(' '),
                                                            n(
                                                                'nuxt-link',
                                                                {
                                                                    attrs: {
                                                                        to:
                                                                            '/docs/frequently-asked-questions'
                                                                    }
                                                                },
                                                                [t._v('FAQ')]
                                                            )
                                                        ],
                                                        1
                                                    ),
                                                    t._v(' '),
                                                    t._m(0)
                                                ],
                                                1
                                            )
                                        ]
                                    ),
                                    t._v(' '),
                                    n(
                                        'div',
                                        {
                                            staticClass:
                                                'col-md-9 bg-white pl-0 pr-0'
                                        },
                                        [
                                            t.$auth.user
                                                ? n(
                                                      'div',
                                                      {
                                                          staticClass:
                                                              'docs-header text-right'
                                                      },
                                                      [
                                                          n(
                                                              'nuxt-link',
                                                              {
                                                                  attrs: {
                                                                      to:
                                                                          '/forms'
                                                                  }
                                                              },
                                                              [t._v('My Forms')]
                                                          )
                                                      ],
                                                      1
                                                  )
                                                : n(
                                                      'div',
                                                      {
                                                          staticClass:
                                                              'docs-header text-right'
                                                      },
                                                      [
                                                          n(
                                                              'nuxt-link',
                                                              {
                                                                  attrs: {
                                                                      to:
                                                                          '/register'
                                                                  }
                                                              },
                                                              [t._v('Sign Up')]
                                                          ),
                                                          t._v(' '),
                                                          n(
                                                              'nuxt-link',
                                                              {
                                                                  attrs: {
                                                                      to:
                                                                          '/login'
                                                                  }
                                                              },
                                                              [t._v('Login')]
                                                          )
                                                      ],
                                                      1
                                                  ),
                                            t._v(' '),
                                            n(
                                                'div',
                                                { staticClass: 'col-md-10' },
                                                [
                                                    n(
                                                        'div',
                                                        {
                                                            staticClass:
                                                                'docs-content'
                                                        },
                                                        [n('nuxt')],
                                                        1
                                                    )
                                                ]
                                            )
                                        ]
                                    )
                                ])
                            ])
                        ]);
                    },
                    [
                        function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e(
                                'div',
                                {
                                    staticClass:
                                        'docs-menu d-flex flex-column mb-4'
                                },
                                [
                                    e('h3', { staticClass: 'mb-3' }, [
                                        this._v('Getform API (Upcoming)')
                                    ]),
                                    this._v(' '),
                                    e('h3', { staticClass: 'mb-3' }, [
                                        this._v('Getform CLI & SDK (Upcoming)')
                                    ])
                                ]
                            );
                        }
                    ],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                $ = {},
                H = Object(N.a)(
                    $,
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e('div', [e('nuxt')], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                Y = {
                    data: function() {
                        return { dropOpen: !1 };
                    },
                    methods: {
                        logout: function() {
                            this.$auth.logout();
                        },
                        openDrop: function() {
                            !0 === this.dropOpen
                                ? (this.dropOpen = !1)
                                : (this.dropOpen = !0);
                        }
                    }
                },
                U = { name: 'FooterDashboard' },
                B = {
                    components: {
                        HeaderCustomer: Object(N.a)(
                            Y,
                            function() {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n(
                                    'div',
                                    [
                                        n(
                                            'b-navbar',
                                            {
                                                staticClass:
                                                    'main-nav login-nav',
                                                attrs: { toggleable: 'md' }
                                            },
                                            [
                                                n(
                                                    'div',
                                                    {
                                                        staticClass: 'container'
                                                    },
                                                    [
                                                        n('b-navbar-toggle', {
                                                            attrs: {
                                                                target:
                                                                    'nav_collapse'
                                                            }
                                                        }),
                                                        t._v(' '),
                                                        n(
                                                            'nuxt-link',
                                                            {
                                                                staticClass:
                                                                    'navbar-brand',
                                                                attrs: {
                                                                    to: '/forms'
                                                                }
                                                            },
                                                            [
                                                                n('img', {
                                                                    staticClass:
                                                                        'img-fluid',
                                                                    attrs: {
                                                                        src: o(
                                                                            87
                                                                        ),
                                                                        alt:
                                                                            'getform-logo'
                                                                    }
                                                                })
                                                            ]
                                                        ),
                                                        t._v(' '),
                                                        n(
                                                            'b-collapse',
                                                            {
                                                                attrs: {
                                                                    'is-nav':
                                                                        '',
                                                                    id:
                                                                        'nav_collapse'
                                                                }
                                                            },
                                                            [
                                                                n(
                                                                    'b-navbar-nav',
                                                                    {
                                                                        staticClass:
                                                                            'ml-auto'
                                                                    },
                                                                    [
                                                                        n(
                                                                            'li',
                                                                            {
                                                                                staticClass:
                                                                                    'nav-item'
                                                                            },
                                                                            [
                                                                                n(
                                                                                    'nuxt-link',
                                                                                    {
                                                                                        staticClass:
                                                                                            'nav-link',
                                                                                        attrs: {
                                                                                            to:
                                                                                                '/forms'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            'My Forms'
                                                                                        )
                                                                                    ]
                                                                                )
                                                                            ],
                                                                            1
                                                                        ),
                                                                        t._v(
                                                                            ' '
                                                                        ),
                                                                        !1 ===
                                                                        this
                                                                            .$auth
                                                                            .user
                                                                            .isPremium
                                                                            ? n(
                                                                                  'li',
                                                                                  {
                                                                                      staticClass:
                                                                                          'nav-item'
                                                                                  },
                                                                                  [
                                                                                      n(
                                                                                          'nuxt-link',
                                                                                          {
                                                                                              staticClass:
                                                                                                  'nav-link navbar-purple',
                                                                                              attrs: {
                                                                                                  to:
                                                                                                      '/pricing'
                                                                                              }
                                                                                          },
                                                                                          [
                                                                                              t._v(
                                                                                                  'Upgrade to Pro'
                                                                                              )
                                                                                          ]
                                                                                      )
                                                                                  ],
                                                                                  1
                                                                              )
                                                                            : t._e(),
                                                                        t._v(
                                                                            ' '
                                                                        ),
                                                                        n(
                                                                            'li',
                                                                            {
                                                                                staticClass:
                                                                                    'nav-item'
                                                                            },
                                                                            [
                                                                                n(
                                                                                    'nuxt-link',
                                                                                    {
                                                                                        staticClass:
                                                                                            'nav-link',
                                                                                        attrs: {
                                                                                            to:
                                                                                                '/docs'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            'Docs'
                                                                                        )
                                                                                    ]
                                                                                )
                                                                            ],
                                                                            1
                                                                        ),
                                                                        t._v(
                                                                            ' '
                                                                        ),
                                                                        n(
                                                                            'b-nav-item-dropdown',
                                                                            {
                                                                                attrs: {
                                                                                    right:
                                                                                        ''
                                                                                }
                                                                            },
                                                                            [
                                                                                n(
                                                                                    'template',
                                                                                    {
                                                                                        slot:
                                                                                            'button-content'
                                                                                    },
                                                                                    [
                                                                                        n(
                                                                                            'img',
                                                                                            {
                                                                                                attrs: {
                                                                                                    src: o(
                                                                                                        236
                                                                                                    ),
                                                                                                    alt:
                                                                                                        'my profile'
                                                                                                }
                                                                                            }
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                t._v(
                                                                                    ' '
                                                                                ),
                                                                                n(
                                                                                    'a',
                                                                                    {
                                                                                        staticClass:
                                                                                            'dropdown-item',
                                                                                        attrs: {
                                                                                            href:
                                                                                                '/profile'
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            'Profile'
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                t._v(
                                                                                    ' '
                                                                                ),
                                                                                n(
                                                                                    'a',
                                                                                    {
                                                                                        staticClass:
                                                                                            'dropdown-item',
                                                                                        attrs: {
                                                                                            role:
                                                                                                'menuitem',
                                                                                            target:
                                                                                                '_self'
                                                                                        },
                                                                                        on: {
                                                                                            click:
                                                                                                t.logout
                                                                                        }
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            'Logout'
                                                                                        )
                                                                                    ]
                                                                                )
                                                                            ],
                                                                            2
                                                                        )
                                                                    ],
                                                                    1
                                                                )
                                                            ],
                                                            1
                                                        )
                                                    ],
                                                    1
                                                )
                                            ]
                                        )
                                    ],
                                    1
                                );
                            },
                            [],
                            !1,
                            null,
                            null,
                            null
                        ).exports,
                        FooterDashboard: Object(N.a)(
                            U,
                            function() {
                                var t = this,
                                    e = t.$createElement,
                                    o = t._self._c || e;
                                return o(
                                    'div',
                                    { staticClass: 'dashboard-footer' },
                                    [
                                        o('ul', [
                                            t._m(0),
                                            t._v(' '),
                                            o(
                                                'li',
                                                [
                                                    o(
                                                        'nuxt-link',
                                                        {
                                                            attrs: {
                                                                to:
                                                                    '/legal/terms'
                                                            }
                                                        },
                                                        [
                                                            t._v(
                                                                'Terms and Conditions'
                                                            )
                                                        ]
                                                    )
                                                ],
                                                1
                                            ),
                                            t._v(' '),
                                            o(
                                                'li',
                                                [
                                                    o(
                                                        'nuxt-link',
                                                        {
                                                            attrs: {
                                                                to:
                                                                    '/legal/privacy-policy'
                                                            }
                                                        },
                                                        [t._v('Privacy Policy')]
                                                    )
                                                ],
                                                1
                                            ),
                                            t._v(' '),
                                            o(
                                                'li',
                                                [
                                                    o(
                                                        'nuxt-link',
                                                        {
                                                            attrs: {
                                                                to: '/contact'
                                                            }
                                                        },
                                                        [t._v('Contact')]
                                                    )
                                                ],
                                                1
                                            )
                                        ]),
                                        t._v(' '),
                                        o('ul', { staticClass: 'social' }, [
                                            o('li', [
                                                o(
                                                    'a',
                                                    {
                                                        attrs: {
                                                            href:
                                                                'https://facebook.com/getform.io',
                                                            target: '_blank'
                                                        }
                                                    },
                                                    [
                                                        o(
                                                            'svg',
                                                            {
                                                                attrs: {
                                                                    xmlns:
                                                                        'http://www.w3.org/2000/svg',
                                                                    width: '9',
                                                                    height:
                                                                        '14',
                                                                    viewBox:
                                                                        '0 0 9 14'
                                                                }
                                                            },
                                                            [
                                                                o('path', {
                                                                    attrs: {
                                                                        fill:
                                                                            '#9397A5',
                                                                        'fill-rule':
                                                                            'evenodd',
                                                                        d:
                                                                            'M2.72 14L2.7 7.875H0V5.25h2.7V3.5C2.7 1.138 4.204 0 6.371 0c1.038 0 1.93.075 2.19.109v2.468H7.06c-1.179 0-1.407.545-1.407 1.344V5.25H9l-.9 2.625H5.652V14H2.72z'
                                                                    }
                                                                })
                                                            ]
                                                        )
                                                    ]
                                                )
                                            ]),
                                            t._v(' '),
                                            o('li', [
                                                o(
                                                    'a',
                                                    {
                                                        attrs: {
                                                            href:
                                                                'https://twitter.com/getformio',
                                                            target: '_blank'
                                                        }
                                                    },
                                                    [
                                                        o(
                                                            'svg',
                                                            {
                                                                attrs: {
                                                                    xmlns:
                                                                        'http://www.w3.org/2000/svg',
                                                                    width: '16',
                                                                    height:
                                                                        '14',
                                                                    viewBox:
                                                                        '0 0 16 14'
                                                                }
                                                            },
                                                            [
                                                                o('path', {
                                                                    attrs: {
                                                                        fill:
                                                                            '#9397A5',
                                                                        'fill-rule':
                                                                            'evenodd',
                                                                        d:
                                                                            'M16 2c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1C9.3.5 7.8 2 7.8 3.8c0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 6.7 1.8 8 3.3 8.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 3.3 15.6 2.7 16 2z'
                                                                    }
                                                                })
                                                            ]
                                                        )
                                                    ]
                                                )
                                            ]),
                                            t._v(' '),
                                            o('li', [
                                                o(
                                                    'a',
                                                    {
                                                        attrs: {
                                                            href:
                                                                'https://www.linkedin.com/company/getform/',
                                                            target: '_blank'
                                                        }
                                                    },
                                                    [
                                                        o(
                                                            'svg',
                                                            {
                                                                attrs: {
                                                                    xmlns:
                                                                        'http://www.w3.org/2000/svg',
                                                                    width: '15',
                                                                    height:
                                                                        '14',
                                                                    viewBox:
                                                                        '0 0 15 14'
                                                                }
                                                            },
                                                            [
                                                                o('path', {
                                                                    attrs: {
                                                                        fill:
                                                                            '#9397A5',
                                                                        'fill-rule':
                                                                            'nonzero',
                                                                        d:
                                                                            'M13.5 0H.618A.6.6 0 0 0 0 .613v12.862c0 .263.265.525.618.525h12.97a.6.6 0 0 0 .618-.613V.614C14.118.263 13.853 0 13.5 0zM4.147 11.9h-2.03V5.25h2.118v6.65h-.088zm-.97-7.525c-.706 0-1.236-.612-1.236-1.225 0-.7.53-1.225 1.235-1.225.706 0 1.236.525 1.236 1.225-.088.613-.618 1.225-1.236 1.225zM12 11.9H9.882V8.662c0-.787 0-1.75-1.058-1.75-1.06 0-1.236.875-1.236 1.75v3.325H5.471V5.25H7.5v.875c.265-.525.97-1.05 1.941-1.05 2.118 0 2.47 1.4 2.47 3.15V11.9H12z'
                                                                    }
                                                                })
                                                            ]
                                                        )
                                                    ]
                                                )
                                            ])
                                        ])
                                    ]
                                );
                            },
                            [
                                function() {
                                    var t = this.$createElement,
                                        e = this._self._c || t;
                                    return e('li', [
                                        e(
                                            'a',
                                            {
                                                attrs: {
                                                    href:
                                                        'https://blog.getform.io/'
                                                }
                                            },
                                            [this._v('Blog')]
                                        )
                                    ]);
                                }
                            ],
                            !1,
                            null,
                            '513e32f0',
                            null
                        ).exports
                    }
                },
                W = {},
                J = {
                    _default: R,
                    _docs: G,
                    _empty: H,
                    _logged: Object(N.a)(
                        B,
                        function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e(
                                'div',
                                [
                                    !1 === this.$auth.user.verified
                                        ? e(
                                              'div',
                                              {
                                                  staticClass:
                                                      'general-alert verify'
                                              },
                                              [
                                                  e(
                                                      'svg',
                                                      {
                                                          attrs: {
                                                              xmlns:
                                                                  'http://www.w3.org/2000/svg',
                                                              width: '14',
                                                              height: '14',
                                                              viewBox:
                                                                  '0 0 14 14'
                                                          }
                                                      },
                                                      [
                                                          e('path', {
                                                              attrs: {
                                                                  fill: '#111',
                                                                  'fill-rule':
                                                                      'nonzero',
                                                                  d:
                                                                      'M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1.55 10.666c-.385.151-1.722.79-2.492.111a.978.978 0 0 1-.344-.769c0-.582.192-1.09.536-2.308.061-.23.135-.53.135-.766 0-.409-.155-.517-.576-.517-.205 0-.432.073-.638.15l.113-.466c.46-.187 1.036-.415 1.53-.415.74 0 1.284.37 1.284 1.072 0 .202-.035.557-.108.802l-.426 1.506c-.088.305-.247.976 0 1.175.242.197.817.092 1.1-.041l-.114.466zm-.703-6a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z'
                                                              }
                                                          })
                                                      ]
                                                  ),
                                                  this._v(' '),
                                                  e('span', [
                                                      this._v(
                                                          'In to order to use Getform, please verify your mail.'
                                                      )
                                                  ])
                                              ]
                                          )
                                        : this._e(),
                                    this._v(' '),
                                    e('HeaderCustomer'),
                                    this._v(' '),
                                    e('nuxt'),
                                    this._v(' '),
                                    e('FooterDashboard')
                                ],
                                1
                            );
                        },
                        [],
                        !1,
                        null,
                        null,
                        null
                    ).exports,
                    _loginRegister: Object(N.a)(
                        W,
                        function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e(
                                'div',
                                { staticClass: 'container mt-5' },
                                [
                                    e(
                                        'nuxt-link',
                                        {
                                            staticClass: 'form-logo mx-auto',
                                            attrs: { to: '/' }
                                        },
                                        [
                                            e('img', {
                                                staticClass: 'img-fluid',
                                                attrs: {
                                                    src: o(87),
                                                    alt: 'getform-logo'
                                                }
                                            })
                                        ]
                                    ),
                                    this._v(' '),
                                    e('nuxt')
                                ],
                                1
                            );
                        },
                        [],
                        !1,
                        null,
                        null,
                        null
                    ).exports
                },
                V = {
                    head: {
                        title: 'Getform | Easy form endpoints for your forms',
                        meta: [
                            { charset: 'utf-8' },
                            {
                                name: 'viewport',
                                content: 'width=device-width, initial-scale=1'
                            },
                            {
                                hid: 'description',
                                name: 'description',
                                content:
                                    'Easy form endpoints to manage for your forms. Simple form backend platform for designers and developers. Generate an endpoint URL, update your HTML form tag and start collecting form submissions.'
                            },
                            { name: 'robots', content: 'index, follow' },
                            { name: 'distribution', content: 'global' },
                            { name: 'og:type', content: 'website' },
                            {
                                name: 'og:title',
                                content:
                                    'Getform.io | Easy form endpoints for your forms'
                            },
                            { name: 'og:url', content: 'https://getform.io' },
                            {
                                name: 'og:image',
                                content: 'https://getform.io/og-image.png'
                            },
                            {
                                name: 'og:description',
                                content:
                                    'Easy form endpoints to manage for your forms. Simple form backend platform for designers and developers. Generate an endpoint URL, update your HTML form tag and start collecting form submissions.'
                            }
                        ],
                        link: [
                            {
                                rel: 'icon',
                                type: 'image/x-icon',
                                href: '/favicon.ico'
                            },
                            {
                                rel: 'stylesheet',
                                href:
                                    'https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro:400,600,900&amp;subset=latin-ext'
                            }
                        ],
                        script: [
                            { src: 'https://js.stripe.com/v3' },
                            {
                                src:
                                    '//www.googletagmanager.com/gtm.js?id=GTM-PN7JGSB&l=dataLayer',
                                async: !0
                            }
                        ],
                        style: [],
                        noscript: [
                            {
                                hid: 'gtm-noscript',
                                innerHTML:
                                    '<iframe src="//www.googletagmanager.com/ns.html?id=GTM-PN7JGSB&l=dataLayer" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
                                pbody: !0
                            }
                        ],
                        __dangerouslyDisableSanitizersByTagID: {
                            'gtm-noscript': ['innerHTML']
                        }
                    },
                    render: function(t, e) {
                        var o = t('NuxtLoading', { ref: 'loading' });
                        if (this.nuxt.err && _) {
                            var n = (_.options || _).layout;
                            n &&
                                this.setLayout(
                                    'function' == typeof n
                                        ? n.call(_, this.context)
                                        : n
                                );
                        }
                        var r = t(this.layout || 'nuxt'),
                            l = t(
                                'div',
                                {
                                    domProps: { id: '__layout' },
                                    key: this.layoutName
                                },
                                [r]
                            ),
                            c = t(
                                'transition',
                                {
                                    props: { name: 'layout', mode: 'out-in' },
                                    on: {
                                        beforeEnter: function(t) {
                                            window.$nuxt.$nextTick(function() {
                                                window.$nuxt.$emit(
                                                    'triggerScroll'
                                                );
                                            });
                                        }
                                    }
                                },
                                [l]
                            );
                        return t('div', { domProps: { id: '__nuxt' } }, [o, c]);
                    },
                    data: function() {
                        return { isOnline: !0, layout: null, layoutName: '' };
                    },
                    beforeCreate: function() {
                        l.default.util.defineReactive(
                            this,
                            'nuxt',
                            this.$options.nuxt
                        );
                    },
                    created: function() {
                        (l.default.prototype.$nuxt = this),
                            (window.$nuxt = this),
                            this.refreshOnlineStatus(),
                            window.addEventListener(
                                'online',
                                this.refreshOnlineStatus
                            ),
                            window.addEventListener(
                                'offline',
                                this.refreshOnlineStatus
                            ),
                            (this.error = this.nuxt.error),
                            (this.context = this.$options.context);
                    },
                    mounted: function() {
                        this.$loading = this.$refs.loading;
                    },
                    watch: { 'nuxt.err': 'errorChanged' },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline;
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine
                                ? (this.isOnline = !0)
                                : (this.isOnline = window.navigator.onLine);
                        },
                        refresh:
                            ((M = Object(n.a)(
                                regeneratorRuntime.mark(function t() {
                                    var e,
                                        o,
                                        n = this;
                                    return regeneratorRuntime.wrap(
                                        function(t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if (
                                                            (e = Object(v.f)(
                                                                this.$route
                                                            )).length
                                                        ) {
                                                            t.next = 3;
                                                            break;
                                                        }
                                                        return t.abrupt(
                                                            'return'
                                                        );
                                                    case 3:
                                                        return (
                                                            this.$loading.start(),
                                                            (o = e.map(function(
                                                                t
                                                            ) {
                                                                var p = [];
                                                                return (
                                                                    t.$options
                                                                        .fetch &&
                                                                        p.push(
                                                                            Object(
                                                                                v.m
                                                                            )(
                                                                                t
                                                                                    .$options
                                                                                    .fetch,
                                                                                n.context
                                                                            )
                                                                        ),
                                                                    t.$options
                                                                        .asyncData &&
                                                                        p.push(
                                                                            Object(
                                                                                v.m
                                                                            )(
                                                                                t
                                                                                    .$options
                                                                                    .asyncData,
                                                                                n.context
                                                                            ).then(
                                                                                function(
                                                                                    e
                                                                                ) {
                                                                                    for (var o in e)
                                                                                        l.default.set(
                                                                                            t.$data,
                                                                                            o,
                                                                                            e[
                                                                                                o
                                                                                            ]
                                                                                        );
                                                                                }
                                                                            )
                                                                        ),
                                                                    Promise.all(
                                                                        p
                                                                    )
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
                                                            this.$loading.fail(),
                                                            Object(v.i)(t.t0),
                                                            this.error(t.t0);
                                                    case 15:
                                                        this.$loading.finish();
                                                    case 16:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                        [[5, 10]]
                                    );
                                })
                            )),
                            function() {
                                return M.apply(this, arguments);
                            }),
                        errorChanged: function() {
                            this.nuxt.err &&
                                this.$loading &&
                                (this.$loading.fail && this.$loading.fail(),
                                this.$loading.finish && this.$loading.finish());
                        },
                        setLayout: function(t) {
                            return (
                                (t && J['_' + t]) || (t = 'default'),
                                (this.layoutName = t),
                                (this.layout = J['_' + t]),
                                this.layout
                            );
                        },
                        loadLayout: function(t) {
                            return (
                                (t && J['_' + t]) || (t = 'default'),
                                Promise.resolve(J['_' + t])
                            );
                        }
                    },
                    components: { NuxtLoading: L }
                },
                X = (o(61), o(64), o(23), o(50));
            l.default.use(X.a);
            var Q = ['state', 'getters', 'actions', 'mutations'],
                F = {};
            ((F = (function(t, e) {
                if ((t = t.default || t).commit)
                    throw new Error(
                        '[nuxt] '.concat(
                            e,
                            ' should export a method that returns a Vuex instance.'
                        )
                    );
                return (
                    'function' != typeof t && (t = Object.assign({}, t)),
                    tt(t, e)
                );
            })(o(237), 'store/index.js')).modules = F.modules || {}),
                et(o(255), 'modules/formDetail.js'),
                et(o(256), 'modules/forms.js');
            var K =
                F instanceof Function
                    ? F
                    : function() {
                          return new X.a.Store(
                              Object.assign({ strict: !1 }, F)
                          );
                      };
            function tt(t, e) {
                if (t.state && 'function' != typeof t.state) {
                    console.warn(
                        "'state' should be a method that returns an object in ".concat(
                            e
                        )
                    );
                    var o = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return o;
                        }
                    });
                }
                return t;
            }
            function et(t, e) {
                t = t.default || t;
                var o = e.replace(/\.(js|mjs)$/, '').split('/'),
                    n = o[o.length - 1],
                    r = 'store/'.concat(e);
                if (
                    ((t =
                        'state' === n
                            ? (function(t, e) {
                                  if ('function' != typeof t) {
                                      console.warn(
                                          ''.concat(
                                              e,
                                              ' should export a method that returns an object'
                                          )
                                      );
                                      var o = Object.assign({}, t);
                                      return function() {
                                          return o;
                                      };
                                  }
                                  return tt(t, e);
                              })(t, r)
                            : tt(t, r)),
                    Q.includes(n))
                ) {
                    var l = n;
                    it(ot(F, o, { isProperty: !0 }), t, l);
                } else {
                    'index' === n && (o.pop(), (n = o[o.length - 1]));
                    var c = ot(F, o),
                        d = !0,
                        f = !1,
                        m = void 0;
                    try {
                        for (
                            var h, x = Q[Symbol.iterator]();
                            !(d = (h = x.next()).done);
                            d = !0
                        ) {
                            var v = h.value;
                            it(c, t[v], v);
                        }
                    } catch (t) {
                        (f = !0), (m = t);
                    } finally {
                        try {
                            d || null == x.return || x.return();
                        } finally {
                            if (f) throw m;
                        }
                    }
                    !1 === t.namespaced && delete c.namespaced;
                }
            }
            function ot(t, e) {
                var o =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                    n = o.isProperty,
                    r = void 0 !== n && n;
                if (!e.length || (r && 1 === e.length)) return t;
                var l = e.shift();
                return (
                    (t.modules[l] = t.modules[l] || {}),
                    (t.modules[l].namespaced = !0),
                    (t.modules[l].modules = t.modules[l].modules || {}),
                    ot(t.modules[l], e, { isProperty: r })
                );
            }
            function it(t, e, o) {
                e &&
                    ('state' === o
                        ? (t.state = e || t.state)
                        : (t[o] = Object.assign({}, t[o], e)));
            }
            var nt = o(149);
            l.default.use(nt.a, {});
            for (
                var at = o(21),
                    st = o(10),
                    lt = o(13),
                    ct = (function() {
                        function t(e, o) {
                            Object(st.a)(this, t),
                                (this.ctx = e),
                                (this.options = o);
                        }
                        return (
                            Object(lt.a)(t, [
                                {
                                    key: 'init',
                                    value: function() {
                                        (window[this.options.layer] =
                                            window[this.options.layer] || []),
                                            this.pushEvent({
                                                event: 'gtm.js',
                                                'gtm.start': new Date().getTime()
                                            }),
                                            !this.options.pageTracking ||
                                                (this.options
                                                    .respectDoNotTrack &&
                                                    this.hasDNT()) ||
                                                this.initPageTracking();
                                    }
                                },
                                {
                                    key: 'initPageTracking',
                                    value: function() {
                                        var t = this;
                                        this.ctx.app.router.afterEach(function(
                                            e,
                                            o
                                        ) {
                                            setTimeout(function() {
                                                window[t.options.layer].push(
                                                    e.gtm || {
                                                        event:
                                                            t.options
                                                                .pageViewEventName,
                                                        pageType: 'PageView',
                                                        pageUrl: e.fullPath,
                                                        routeName: e.name
                                                    }
                                                );
                                            }, 0);
                                        });
                                    }
                                },
                                {
                                    key: 'pushEvent',
                                    value: function(t) {
                                        try {
                                            if (
                                                !window ||
                                                !window[this.options.layer]
                                            )
                                                throw new Error(
                                                    'missing GTM dataLayer'
                                                );
                                            if ('object' !== Object(at.a)(t))
                                                throw new Error(
                                                    'event should be an object'
                                                );
                                            if (!t.hasOwnProperty('event'))
                                                throw new Error(
                                                    'missing event property'
                                                );
                                            window[this.options.layer].push(t);
                                        } catch (t) {
                                            console.error('[ERROR] [GTM]', t);
                                        }
                                    }
                                },
                                {
                                    key: 'hasDNT',
                                    value: function() {
                                        return (
                                            '1' === window.doNotTrack ||
                                            'yes' === navigator.doNotTrack ||
                                            '1' === navigator.doNotTrack ||
                                            '1' === navigator.msDoNotTrack ||
                                            (window.external &&
                                                window.external
                                                    .msTrackingProtectionEnabled &&
                                                window.external.msTrackingProtectionEnabled())
                                        );
                                    }
                                }
                            ]),
                            t
                        );
                    })(),
                    pt = function(t, e) {
                        var o = new ct(t, {
                            id: 'GTM-PN7JGSB',
                            layer: 'dataLayer',
                            pageTracking: !1,
                            pageViewEventName: 'nuxtRoute',
                            respectDoNotTrack: !1,
                            dev: !0,
                            query: {},
                            scriptURL: '//www.googletagmanager.com/gtm.js',
                            noscriptURL: '//www.googletagmanager.com/ns.html',
                            env: {}
                        });
                        e('gtm', o), o.init();
                    },
                    ft = o(52),
                    ut = o.n(ft),
                    gt = o(148),
                    mt = o.n(gt),
                    bt = {
                        setBaseURL: function(t) {
                            this.defaults.baseURL = t;
                        },
                        setHeader: function(t, e) {
                            var o =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 'common',
                                n = !0,
                                r = !1,
                                l = void 0;
                            try {
                                for (
                                    var c,
                                        d = (Array.isArray(o) ? o : [o])[
                                            Symbol.iterator
                                        ]();
                                    !(n = (c = d.next()).done);
                                    n = !0
                                ) {
                                    var f = c.value;
                                    if (!e)
                                        return void delete this.defaults
                                            .headers[f][t];
                                    this.defaults.headers[f][t] = e;
                                }
                            } catch (t) {
                                (r = !0), (l = t);
                            } finally {
                                try {
                                    n || null == d.return || d.return();
                                } finally {
                                    if (r) throw l;
                                }
                            }
                        },
                        setToken: function(t, e) {
                            var o =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 'common',
                                n = t ? (e ? e + ' ' : '') + t : null;
                            this.setHeader('Authorization', n, o);
                        },
                        onRequest: function(t) {
                            this.interceptors.request.use(function(e) {
                                return t(e) || e;
                            });
                        },
                        onResponse: function(t) {
                            this.interceptors.response.use(function(e) {
                                return t(e) || e;
                            });
                        },
                        onRequestError: function(t) {
                            this.interceptors.request.use(void 0, function(e) {
                                return t(e) || Promise.reject(e);
                            });
                        },
                        onResponseError: function(t) {
                            this.interceptors.response.use(void 0, function(e) {
                                return t(e) || Promise.reject(e);
                            });
                        },
                        onError: function(t) {
                            this.onRequestError(t), this.onResponseError(t);
                        },
                        create: function(t) {
                            return wt(mt()(t, this.defaults));
                        }
                    },
                    ht = function() {
                        var t = vt[xt];
                        bt['$' + t] = function() {
                            return this[t]
                                .apply(this, arguments)
                                .then(function(t) {
                                    return t && t.data;
                                });
                        };
                    },
                    xt = 0,
                    vt = [
                        'request',
                        'delete',
                        'get',
                        'head',
                        'options',
                        'post',
                        'put',
                        'patch'
                    ];
                xt < vt.length;
                xt++
            )
                ht();
            var wt = function(t) {
                    var e = ut.a.create(t);
                    return (
                        (e.CancelToken = ut.a.CancelToken),
                        (e.isCancel = ut.a.isCancel),
                        (function(t) {
                            for (var e in bt) t[e] = bt[e].bind(t);
                        })(e),
                        yt(e),
                        e
                    );
                },
                yt = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        o = function() {
                            return window.$nuxt &&
                                window.$nuxt.$loading &&
                                window.$nuxt.$loading.set
                                ? window.$nuxt.$loading
                                : e;
                        },
                        n = 0;
                    t.onRequest(function(t) {
                        (t && !1 === t.progress) || n++;
                    }),
                        t.onResponse(function(t) {
                            (t && t.config && !1 === t.config.progress) ||
                                (--n <= 0 && ((n = 0), o().finish()));
                        }),
                        t.onError(function(t) {
                            (t && t.config && !1 === t.config.progress) ||
                                (n--,
                                ut.a.isCancel(t) || (o().fail(), o().finish()));
                        });
                    var r = function(t) {
                        if (n) {
                            var progress = (100 * t.loaded) / (t.total * n);
                            o().set(Math.min(100, progress));
                        }
                    };
                    (t.defaults.onUploadProgress = r),
                        (t.defaults.onDownloadProgress = r);
                },
                kt = function(t, e) {
                    var o = {
                        baseURL: '/api',
                        headers: {
                            common: {
                                Accept: 'application/json, text/plain, */*'
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    };
                    (o.headers.common =
                        t.req && t.req.headers
                            ? Object.assign({}, t.req.headers)
                            : {}),
                        delete o.headers.common.accept,
                        delete o.headers.common.host,
                        delete o.headers.common['cf-ray'],
                        delete o.headers.common['cf-connecting-ip'],
                        delete o.headers.common['content-length'],
                        delete o.headers.common['content-md5'],
                        delete o.headers.common['content-type'];
                    var n = wt(o);
                    (t.$axios = n), e('axios', n);
                },
                It = function() {
                    var t, s;
                    (window.$crisp = []),
                        (window.CRISP_WEBSITE_ID =
                            '2c3fdb13-de92-4138-b8fa-87ae7c8b6efa'),
                        (t = document),
                        ((s = t.createElement('script')).src =
                            'https://client.crisp.chat/l.js'),
                        (s.async = 1),
                        t.getElementsByTagName('head')[0].appendChild(s);
                },
                Mt = (o(81), o(102)),
                Ct =
                    (o(141),
                    o(266),
                    function(t) {
                        return null == t;
                    }),
                jt = function(t) {
                    return !Ct(t);
                },
                At = function(a, b) {
                    return a.split('?')[0] === b.split('?')[0];
                },
                zt = function(u) {
                    return (
                        u &&
                        u.length &&
                        /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(
                            u
                        )
                    );
                },
                Dt = function(t, e, o) {
                    return t.matched.some(function(t) {
                        return Object.values(t.components).some(function(
                            component
                        ) {
                            return (
                                component.options && component.options[e] === o
                            );
                        });
                    });
                };
            function Nt() {
                var path =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : '',
                    t = path.split('?')[0];
                return (
                    '/' === t.charAt(t.length - 1) && (t = t.slice(0, -1)), t
                );
            }
            function _t(t) {
                return 'string' == typeof t ? t : JSON.stringify(t);
            }
            function St(t) {
                if ('string' == typeof t)
                    try {
                        return JSON.parse(t);
                    } catch (t) {}
                return t;
            }
            function Tt(t, e) {
                if (!e || !t) return t;
                if (e in t) return t[e];
                for (
                    var o = Array.isArray(e) ? e : (e + '').split('.'), n = t;
                    o.length && n;

                )
                    n = n[o.shift()];
                return n;
            }
            var Ot = (function() {
                    function t(e, o) {
                        Object(st.a)(this, t),
                            (this.ctx = e),
                            (this.options = o),
                            this._initState();
                    }
                    return (
                        Object(lt.a)(t, [
                            {
                                key: 'setUniversal',
                                value: function(t, e) {
                                    return Ct(e)
                                        ? this.removeUniversal(t)
                                        : (this.setState(t, e),
                                          this.setCookie(t, e),
                                          this.setLocalStorage(t, e),
                                          e);
                                }
                            },
                            {
                                key: 'getUniversal',
                                value: function(t) {
                                    var e = this.getState(t);
                                    return (
                                        Ct(e) && (e = this.getCookie(t)),
                                        Ct(e) && (e = this.getLocalStorage(t)),
                                        e
                                    );
                                }
                            },
                            {
                                key: 'syncUniversal',
                                value: function(t, e) {
                                    var o = this.getUniversal(t);
                                    return (
                                        Ct(o) && jt(e) && (o = e),
                                        jt(o) && this.setUniversal(t, o),
                                        o
                                    );
                                }
                            },
                            {
                                key: 'removeUniversal',
                                value: function(t) {
                                    this.removeState(t),
                                        this.removeLocalStorage(t),
                                        this.removeCookie(t);
                                }
                            },
                            {
                                key: '_initState',
                                value: function() {
                                    var t = this;
                                    if (
                                        (l.default.set(this, '_state', {}),
                                        (this._useVuex =
                                            this.options.vuex &&
                                            this.ctx.store),
                                        this._useVuex)
                                    ) {
                                        var e = {
                                            namespaced: !0,
                                            state: function() {
                                                return t.options.initialState;
                                            },
                                            mutations: {
                                                SET: function(t, e) {
                                                    l.default.set(
                                                        t,
                                                        e.key,
                                                        e.value
                                                    );
                                                }
                                            }
                                        };
                                        this.ctx.store.registerModule(
                                            this.options.vuex.namespace,
                                            e,
                                            {
                                                preserveState: Boolean(
                                                    this.ctx.store.state[
                                                        this.options.vuex
                                                            .namespace
                                                    ]
                                                )
                                            }
                                        ),
                                            (this.state = this.ctx.store.state[
                                                this.options.vuex.namespace
                                            ]);
                                    } else l.default.set(this, 'state', {});
                                }
                            },
                            {
                                key: 'setState',
                                value: function(t, e) {
                                    return (
                                        '_' === t[0]
                                            ? l.default.set(this._state, t, e)
                                            : this._useVuex
                                            ? this.ctx.store.commit(
                                                  this.options.vuex.namespace +
                                                      '/SET',
                                                  { key: t, value: e }
                                              )
                                            : l.default.set(this.state, t, e),
                                        e
                                    );
                                }
                            },
                            {
                                key: 'getState',
                                value: function(t) {
                                    return '_' !== t[0]
                                        ? this.state[t]
                                        : this._state[t];
                                }
                            },
                            {
                                key: 'watchState',
                                value: function(t, e) {
                                    var o = this;
                                    if (this._useVuex)
                                        return this.ctx.store.watch(function(
                                            e
                                        ) {
                                            return Tt(
                                                e[o.options.vuex.namespace],
                                                t
                                            );
                                        },
                                        e);
                                }
                            },
                            {
                                key: 'removeState',
                                value: function(t) {
                                    this.setState(t, void 0);
                                }
                            },
                            {
                                key: 'setLocalStorage',
                                value: function(t, e) {
                                    if (Ct(e))
                                        return this.removeLocalStorage(t);
                                    if (
                                        'undefined' != typeof localStorage &&
                                        this.options.localStorage
                                    ) {
                                        var o =
                                            this.options.localStorage.prefix +
                                            t;
                                        try {
                                            localStorage.setItem(o, _t(e));
                                        } catch (t) {
                                            if (!this.options.ignoreExceptions)
                                                throw t;
                                        }
                                        return e;
                                    }
                                }
                            },
                            {
                                key: 'getLocalStorage',
                                value: function(t) {
                                    if (
                                        'undefined' != typeof localStorage &&
                                        this.options.localStorage
                                    ) {
                                        var e =
                                            this.options.localStorage.prefix +
                                            t;
                                        return St(localStorage.getItem(e));
                                    }
                                }
                            },
                            {
                                key: 'removeLocalStorage',
                                value: function(t) {
                                    if (
                                        'undefined' != typeof localStorage &&
                                        this.options.localStorage
                                    ) {
                                        var e =
                                            this.options.localStorage.prefix +
                                            t;
                                        localStorage.removeItem(e);
                                    }
                                }
                            },
                            {
                                key: 'getCookies',
                                value: function() {
                                    var t = document.cookie;
                                    return Object(Mt.parse)(t || '') || {};
                                }
                            },
                            {
                                key: 'setCookie',
                                value: function(t, e) {
                                    var o =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {};
                                    if (this.options.cookie) {
                                        var n = this.options.cookie.prefix + t,
                                            r = Object.assign(
                                                {},
                                                this.options.cookie.options,
                                                o
                                            ),
                                            l = _t(e);
                                        Ct(e) && (r.maxAge = -1),
                                            'number' == typeof r.expires &&
                                                (r.expires = new Date(
                                                    1 * new Date() +
                                                        864e5 * r.expires
                                                ));
                                        var c = Object(Mt.serialize)(n, l, r);
                                        return (document.cookie = c), e;
                                    }
                                }
                            },
                            {
                                key: 'getCookie',
                                value: function(t) {
                                    if (this.options.cookie) {
                                        var e = this.options.cookie.prefix + t,
                                            o = this.getCookies();
                                        return St(
                                            o[e]
                                                ? decodeURIComponent(o[e])
                                                : void 0
                                        );
                                    }
                                }
                            },
                            {
                                key: 'removeCookie',
                                value: function(t, e) {
                                    this.setCookie(t, void 0, e);
                                }
                            }
                        ]),
                        t
                    );
                })(),
                Lt = (function() {
                    function t(e, o) {
                        Object(st.a)(this, t),
                            (this.ctx = e),
                            (this.options = o),
                            (this.strategies = {}),
                            (this._errorListeners = []),
                            (this._redirectListeners = []),
                            (o.initialState = { user: null, loggedIn: !1 });
                        var n = new Ot(e, o);
                        (this.$storage = n), (this.$state = n.state);
                    }
                    var e;
                    return (
                        Object(lt.a)(t, [
                            {
                                key: 'init',
                                value:
                                    ((e = Object(n.a)(
                                        regeneratorRuntime.mark(function t() {
                                            var e = this;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    (this
                                                                        .options
                                                                        .resetOnError &&
                                                                        this.onError(
                                                                            function() {
                                                                                var t;
                                                                                ('function' !=
                                                                                    typeof e
                                                                                        .options
                                                                                        .resetOnError ||
                                                                                    (t =
                                                                                        e.options).resetOnError.apply(
                                                                                        t,
                                                                                        arguments
                                                                                    )) &&
                                                                                    e.reset();
                                                                            }
                                                                        ),
                                                                    this.$storage.syncUniversal(
                                                                        'strategy',
                                                                        this
                                                                            .options
                                                                            .defaultStrategy
                                                                    ),
                                                                    this
                                                                        .strategy)
                                                                ) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                if (
                                                                    (this.$storage.setUniversal(
                                                                        'strategy',
                                                                        this
                                                                            .options
                                                                            .defaultStrategy
                                                                    ),
                                                                    this
                                                                        .strategy)
                                                                ) {
                                                                    t.next = 6;
                                                                    break;
                                                                }
                                                                return t.abrupt(
                                                                    'return',
                                                                    Promise.resolve()
                                                                );
                                                            case 6:
                                                                return (
                                                                    (t.prev = 6),
                                                                    (t.next = 9),
                                                                    this.mounted()
                                                                );
                                                            case 9:
                                                                t.next = 14;
                                                                break;
                                                            case 11:
                                                                (t.prev = 11),
                                                                    (t.t0 = t.catch(
                                                                        6
                                                                    )),
                                                                    this.callOnError(
                                                                        t.t0
                                                                    );
                                                            case 14:
                                                                return (
                                                                    (t.prev = 14),
                                                                    this.options
                                                                        .watchLoggedIn &&
                                                                        this.$storage.watchState(
                                                                            'loggedIn',
                                                                            function(
                                                                                t
                                                                            ) {
                                                                                Dt(
                                                                                    e
                                                                                        .ctx
                                                                                        .route,
                                                                                    'auth',
                                                                                    !1
                                                                                ) ||
                                                                                    e.redirect(
                                                                                        t
                                                                                            ? 'home'
                                                                                            : 'logout'
                                                                                    );
                                                                            }
                                                                        ),
                                                                    t.finish(14)
                                                                );
                                                            case 17:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this,
                                                [[6, 11, 14, 17]]
                                            );
                                        })
                                    )),
                                    function() {
                                        return e.apply(this, arguments);
                                    })
                            },
                            {
                                key: 'getState',
                                value: function(t) {
                                    return (
                                        this._get_state_warn_shown ||
                                            ((this._get_state_warn_shown = !0),
                                            console.warn(
                                                '[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn'
                                            )),
                                        this.$storage.getState(t)
                                    );
                                }
                            },
                            {
                                key: 'registerStrategy',
                                value: function(t, e) {
                                    this.strategies[t] = e;
                                }
                            },
                            {
                                key: 'setStrategy',
                                value: function(t) {
                                    return t ===
                                        this.$storage.getUniversal('strategy')
                                        ? Promise.resolve()
                                        : (this.$storage.setUniversal(
                                              'strategy',
                                              t
                                          ),
                                          this.mounted());
                                }
                            },
                            {
                                key: 'mounted',
                                value: function() {
                                    var t,
                                        e = this;
                                    return this.strategy.mounted
                                        ? Promise.resolve(
                                              (t = this.strategy).mounted.apply(
                                                  t,
                                                  arguments
                                              )
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'mounted'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : this.fetchUserOnce();
                                }
                            },
                            {
                                key: 'loginWith',
                                value: function(t) {
                                    for (
                                        var e = this,
                                            o = arguments.length,
                                            n = new Array(o > 1 ? o - 1 : 0),
                                            r = 1;
                                        r < o;
                                        r++
                                    )
                                        n[r - 1] = arguments[r];
                                    return this.setStrategy(t).then(function() {
                                        return e.login.apply(e, n);
                                    });
                                }
                            },
                            {
                                key: 'login',
                                value: function() {
                                    var t,
                                        e = this;
                                    return this.strategy.login
                                        ? this.wrapLogin(
                                              (t = this.strategy).login.apply(
                                                  t,
                                                  arguments
                                              )
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'login'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : Promise.resolve();
                                }
                            },
                            {
                                key: 'fetchUser',
                                value: function() {
                                    var t,
                                        e = this;
                                    return this.strategy.fetchUser
                                        ? Promise.resolve(
                                              (t = this
                                                  .strategy).fetchUser.apply(
                                                  t,
                                                  arguments
                                              )
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'fetchUser'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : Promise.resolve();
                                }
                            },
                            {
                                key: 'logout',
                                value: function() {
                                    var t,
                                        e = this;
                                    return this.strategy.logout
                                        ? Promise.resolve(
                                              (t = this.strategy).logout.apply(
                                                  t,
                                                  arguments
                                              )
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'logout'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : (this.reset(), Promise.resolve());
                                }
                            },
                            {
                                key: 'setUserToken',
                                value: function(t) {
                                    var e = this;
                                    return this.strategy.setUserToken
                                        ? Promise.resolve(
                                              this.strategy.setUserToken(t)
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'setUserToken'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : (this.setToken(this.strategy.name, t),
                                          Promise.resolve());
                                }
                            },
                            {
                                key: 'reset',
                                value: function() {
                                    var t,
                                        e = this;
                                    return this.strategy.reset
                                        ? Promise.resolve(
                                              (t = this.strategy).reset.apply(
                                                  t,
                                                  arguments
                                              )
                                          ).catch(function(t) {
                                              return (
                                                  e.callOnError(t, {
                                                      method: 'reset'
                                                  }),
                                                  Promise.reject(t)
                                              );
                                          })
                                        : (this.setUser(!1),
                                          this.setToken(
                                              this.$state.strategy,
                                              !1
                                          ),
                                          this.setRefreshToken(
                                              this.$state.strategy,
                                              !1
                                          ),
                                          Promise.resolve());
                                }
                            },
                            {
                                key: 'getToken',
                                value: function(t) {
                                    var e = this.options.token.prefix + t;
                                    return this.$storage.getUniversal(e);
                                }
                            },
                            {
                                key: 'setToken',
                                value: function(t, e) {
                                    var o = this.options.token.prefix + t;
                                    return this.$storage.setUniversal(o, e);
                                }
                            },
                            {
                                key: 'syncToken',
                                value: function(t) {
                                    var e = this.options.token.prefix + t;
                                    return this.$storage.syncUniversal(e);
                                }
                            },
                            {
                                key: 'getRefreshToken',
                                value: function(t) {
                                    var e =
                                        this.options.refresh_token.prefix + t;
                                    return this.$storage.getUniversal(e);
                                }
                            },
                            {
                                key: 'setRefreshToken',
                                value: function(t, e) {
                                    var o =
                                        this.options.refresh_token.prefix + t;
                                    return this.$storage.setUniversal(o, e);
                                }
                            },
                            {
                                key: 'syncRefreshToken',
                                value: function(t) {
                                    var e =
                                        this.options.refresh_token.prefix + t;
                                    return this.$storage.syncUniversal(e);
                                }
                            },
                            {
                                key: 'fetchUserOnce',
                                value: function() {
                                    return this.$state.user
                                        ? Promise.resolve()
                                        : this.fetchUser.apply(this, arguments);
                                }
                            },
                            {
                                key: 'setUser',
                                value: function(t) {
                                    this.$storage.setState('user', t),
                                        this.$storage.setState(
                                            'loggedIn',
                                            Boolean(t)
                                        );
                                }
                            },
                            {
                                key: 'request',
                                value: function(t, e) {
                                    var o = this,
                                        n =
                                            'object' === Object(at.a)(e)
                                                ? Object.assign({}, e, t)
                                                : t;
                                    if (this.ctx.app.$axios)
                                        return this.ctx.app.$axios
                                            .request(n)
                                            .then(function(t) {
                                                return n.propertyName
                                                    ? Tt(t.data, n.propertyName)
                                                    : t.data;
                                            })
                                            .catch(function(t) {
                                                return (
                                                    o.callOnError(t, {
                                                        method: 'request'
                                                    }),
                                                    Promise.reject(t)
                                                );
                                            });
                                    console.error(
                                        '[AUTH] add the @nuxtjs/axios module to nuxt.config file'
                                    );
                                }
                            },
                            {
                                key: 'requestWith',
                                value: function(t, e, o) {
                                    var n = this.getToken(t),
                                        r = Object.assign({}, o, e),
                                        l =
                                            this.strategies[t].options
                                                .tokenName || 'Authorization';
                                    return (
                                        r.headers || (r.headers = {}),
                                        !r.headers[l] &&
                                            jt(n) &&
                                            n &&
                                            (r.headers[l] = n),
                                        this.request(r)
                                    );
                                }
                            },
                            {
                                key: 'wrapLogin',
                                value: function(t) {
                                    var e = this;
                                    return (
                                        this.$storage.setState('busy', !0),
                                        (this.error = null),
                                        Promise.resolve(t)
                                            .then(function() {
                                                e.$storage.setState('busy', !1);
                                            })
                                            .catch(function(t) {
                                                return (
                                                    e.$storage.setState(
                                                        'busy',
                                                        !1
                                                    ),
                                                    Promise.reject(t)
                                                );
                                            })
                                    );
                                }
                            },
                            {
                                key: 'onError',
                                value: function(t) {
                                    this._errorListeners.push(t);
                                }
                            },
                            {
                                key: 'callOnError',
                                value: function(t) {
                                    var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {};
                                    this.error = t;
                                    var o = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (
                                            var l,
                                                c = this._errorListeners[
                                                    Symbol.iterator
                                                ]();
                                            !(o = (l = c.next()).done);
                                            o = !0
                                        ) {
                                            var d = l.value;
                                            d(t, e);
                                        }
                                    } catch (t) {
                                        (n = !0), (r = t);
                                    } finally {
                                        try {
                                            o || null == c.return || c.return();
                                        } finally {
                                            if (n) throw r;
                                        }
                                    }
                                }
                            },
                            {
                                key: 'redirect',
                                value: function(t) {
                                    var e =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1];
                                    if (this.options.redirect) {
                                        var o = this.options.fullPathRedirect
                                                ? this.ctx.route.fullPath
                                                : this.ctx.route.path,
                                            n = this.options.redirect[t];
                                        if (n) {
                                            if (
                                                this.options.rewriteRedirects &&
                                                ('login' === t &&
                                                    zt(o) &&
                                                    !At(n, o) &&
                                                    this.$storage.setUniversal(
                                                        'redirect',
                                                        o
                                                    ),
                                                'home' === t)
                                            ) {
                                                var r = this.$storage.getUniversal(
                                                    'redirect'
                                                );
                                                this.$storage.setUniversal(
                                                    'redirect',
                                                    null
                                                ),
                                                    zt(r) && (n = r);
                                            }
                                            (n =
                                                this.callOnRedirect(n, o) || n),
                                                At(n, o) ||
                                                    (e
                                                        ? window.location.replace(
                                                              n
                                                          )
                                                        : this.ctx.redirect(
                                                              n,
                                                              this.ctx.query
                                                          ));
                                        }
                                    }
                                }
                            },
                            {
                                key: 'onRedirect',
                                value: function(t) {
                                    this._redirectListeners.push(t);
                                }
                            },
                            {
                                key: 'callOnRedirect',
                                value: function(t, e) {
                                    var o = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (
                                            var l,
                                                c = this._redirectListeners[
                                                    Symbol.iterator
                                                ]();
                                            !(o = (l = c.next()).done);
                                            o = !0
                                        ) {
                                            t = (0, l.value)(t, e) || t;
                                        }
                                    } catch (t) {
                                        (n = !0), (r = t);
                                    } finally {
                                        try {
                                            o || null == c.return || c.return();
                                        } finally {
                                            if (n) throw r;
                                        }
                                    }
                                    return t;
                                }
                            },
                            {
                                key: 'hasScope',
                                value: function(t) {
                                    var e =
                                        this.$state.user &&
                                        Tt(
                                            this.$state.user,
                                            this.options.scopeKey
                                        );
                                    return (
                                        !!e &&
                                        (Array.isArray(e)
                                            ? e.includes(t)
                                            : Boolean(Tt(e, t)))
                                    );
                                }
                            },
                            {
                                key: 'state',
                                get: function() {
                                    return (
                                        this._state_warn_shown ||
                                            ((this._state_warn_shown = !0),
                                            console.warn(
                                                '[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn'
                                            )),
                                        this.$state
                                    );
                                }
                            },
                            {
                                key: 'strategy',
                                get: function() {
                                    return this.strategies[
                                        this.$state.strategy
                                    ];
                                }
                            },
                            {
                                key: 'user',
                                get: function() {
                                    return this.$state.user;
                                }
                            },
                            {
                                key: 'loggedIn',
                                get: function() {
                                    return this.$state.loggedIn;
                                }
                            },
                            {
                                key: 'busy',
                                get: function() {
                                    return this.$storage.getState('busy');
                                }
                            }
                        ]),
                        t
                    );
                })();
            o(66).a.auth = function(t) {
                if (!Dt(t.route, 'auth', !1)) {
                    if (
                        (function(t) {
                            var e =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                            return [].concat.apply(
                                [],
                                t.matched.map(function(t, o) {
                                    return Object.keys(t.components).map(
                                        function(n) {
                                            return (
                                                e && e.push(o), t.components[n]
                                            );
                                        }
                                    );
                                })
                            );
                        })(t.route, []).length
                    ) {
                        var e = t.$auth.options.redirect,
                            o = e.login,
                            n = e.callback,
                            r = Dt(t.route, 'auth', 'guest'),
                            l = function(e) {
                                return Nt(t.route.path) === Nt(e);
                            };
                        t.$auth.$state.loggedIn
                            ? (!o || l(o) || r) && t.$auth.redirect('home')
                            : r || (n && l(n)) || t.$auth.redirect('login');
                    }
                }
            };
            var Zt = (function() {
                    function t(e, o) {
                        Object(st.a)(this, t),
                            (this.$auth = e),
                            (this.name = o._name),
                            (this.options = Object.assign({}, Et, o));
                    }
                    var e, o, r, l, c;
                    return (
                        Object(lt.a)(t, [
                            {
                                key: '_setToken',
                                value: function(t) {
                                    this.options.globalToken &&
                                        this.$auth.ctx.app.$axios.setHeader(
                                            this.options.tokenName,
                                            t
                                        );
                                }
                            },
                            {
                                key: '_clearToken',
                                value: function() {
                                    this.options.globalToken &&
                                        this.$auth.ctx.app.$axios.setHeader(
                                            this.options.tokenName,
                                            !1
                                        );
                                }
                            },
                            {
                                key: 'mounted',
                                value: function() {
                                    if (this.options.tokenRequired) {
                                        var t = this.$auth.syncToken(this.name);
                                        this._setToken(t);
                                    }
                                    return this.$auth.fetchUserOnce();
                                }
                            },
                            {
                                key: 'login',
                                value:
                                    ((c = Object(n.a)(
                                        regeneratorRuntime.mark(function t(e) {
                                            var o, n;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    this.options
                                                                        .endpoints
                                                                        .login
                                                                ) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt(
                                                                    'return'
                                                                );
                                                            case 2:
                                                                return (
                                                                    (t.next = 4),
                                                                    this._logoutLocally()
                                                                );
                                                            case 4:
                                                                return (
                                                                    (t.next = 6),
                                                                    this.$auth.request(
                                                                        e,
                                                                        this
                                                                            .options
                                                                            .endpoints
                                                                            .login
                                                                    )
                                                                );
                                                            case 6:
                                                                return (
                                                                    (o =
                                                                        t.sent),
                                                                    this.options
                                                                        .tokenRequired &&
                                                                        ((n = this
                                                                            .options
                                                                            .tokenType
                                                                            ? this
                                                                                  .options
                                                                                  .tokenType +
                                                                              ' ' +
                                                                              o
                                                                            : o),
                                                                        this.$auth.setToken(
                                                                            this
                                                                                .name,
                                                                            n
                                                                        ),
                                                                        this._setToken(
                                                                            n
                                                                        )),
                                                                    t.abrupt(
                                                                        'return',
                                                                        this.fetchUser()
                                                                    )
                                                                );
                                                            case 9:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function(t) {
                                        return c.apply(this, arguments);
                                    })
                            },
                            {
                                key: 'setUserToken',
                                value:
                                    ((l = Object(n.a)(
                                        regeneratorRuntime.mark(function t(e) {
                                            var o;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (t.next = 2),
                                                                    this._logoutLocally()
                                                                );
                                                            case 2:
                                                                return (
                                                                    this.options
                                                                        .tokenRequired &&
                                                                        ((o = this
                                                                            .options
                                                                            .tokenType
                                                                            ? this
                                                                                  .options
                                                                                  .tokenType +
                                                                              ' ' +
                                                                              e
                                                                            : e),
                                                                        this.$auth.setToken(
                                                                            this
                                                                                .name,
                                                                            o
                                                                        ),
                                                                        this._setToken(
                                                                            o
                                                                        )),
                                                                    t.abrupt(
                                                                        'return',
                                                                        this.fetchUser()
                                                                    )
                                                                );
                                                            case 4:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function(t) {
                                        return l.apply(this, arguments);
                                    })
                            },
                            {
                                key: 'fetchUser',
                                value:
                                    ((r = Object(n.a)(
                                        regeneratorRuntime.mark(function t(e) {
                                            var o;
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    !this
                                                                        .options
                                                                        .tokenRequired ||
                                                                    this.$auth.getToken(
                                                                        this
                                                                            .name
                                                                    )
                                                                ) {
                                                                    t.next = 2;
                                                                    break;
                                                                }
                                                                return t.abrupt(
                                                                    'return'
                                                                );
                                                            case 2:
                                                                if (
                                                                    this.options
                                                                        .endpoints
                                                                        .user
                                                                ) {
                                                                    t.next = 5;
                                                                    break;
                                                                }
                                                                return (
                                                                    this.$auth.setUser(
                                                                        {}
                                                                    ),
                                                                    t.abrupt(
                                                                        'return'
                                                                    )
                                                                );
                                                            case 5:
                                                                return (
                                                                    (t.next = 7),
                                                                    this.$auth.requestWith(
                                                                        this
                                                                            .name,
                                                                        e,
                                                                        this
                                                                            .options
                                                                            .endpoints
                                                                            .user
                                                                    )
                                                                );
                                                            case 7:
                                                                (o = t.sent),
                                                                    this.$auth.setUser(
                                                                        o
                                                                    );
                                                            case 9:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function(t) {
                                        return r.apply(this, arguments);
                                    })
                            },
                            {
                                key: 'logout',
                                value:
                                    ((o = Object(n.a)(
                                        regeneratorRuntime.mark(function t(e) {
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                if (
                                                                    !this
                                                                        .options
                                                                        .endpoints
                                                                        .logout
                                                                ) {
                                                                    t.next = 3;
                                                                    break;
                                                                }
                                                                return (
                                                                    (t.next = 3),
                                                                    this.$auth
                                                                        .requestWith(
                                                                            this
                                                                                .name,
                                                                            e,
                                                                            this
                                                                                .options
                                                                                .endpoints
                                                                                .logout
                                                                        )
                                                                        .catch(
                                                                            function() {}
                                                                        )
                                                                );
                                                            case 3:
                                                                return t.abrupt(
                                                                    'return',
                                                                    this._logoutLocally()
                                                                );
                                                            case 4:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function(t) {
                                        return o.apply(this, arguments);
                                    })
                            },
                            {
                                key: '_logoutLocally',
                                value:
                                    ((e = Object(n.a)(
                                        regeneratorRuntime.mark(function t() {
                                            return regeneratorRuntime.wrap(
                                                function(t) {
                                                    for (;;)
                                                        switch (
                                                            (t.prev = t.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    this.options
                                                                        .tokenRequired &&
                                                                        this._clearToken(),
                                                                    t.abrupt(
                                                                        'return',
                                                                        this.$auth.reset()
                                                                    )
                                                                );
                                                            case 2:
                                                            case 'end':
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function() {
                                        return e.apply(this, arguments);
                                    })
                            }
                        ]),
                        t
                    );
                })(),
                Et = {
                    tokenRequired: !0,
                    tokenType: 'Bearer',
                    globalToken: !0,
                    tokenName: 'Authorization'
                },
                Pt = function(t, e) {
                    var o = new Lt(t, {
                        resetOnError: !1,
                        scopeKey: 'scope',
                        rewriteRedirects: !0,
                        fullPathRedirect: !1,
                        watchLoggedIn: !0,
                        redirect: {
                            login: '/login',
                            logout: '/',
                            home: '/forms',
                            callback: '/login',
                            user: '/profile'
                        },
                        vuex: { namespace: 'auth' },
                        cookie: { prefix: 'auth.', options: { path: '/' } },
                        localStorage: { prefix: 'auth.' },
                        token: { prefix: '_token.' },
                        refresh_token: { prefix: '_refresh_token.' },
                        defaultStrategy: 'local'
                    });
                    return (
                        o.registerStrategy(
                            'local',
                            new Zt(o, {
                                endpoints: {
                                    login: {
                                        url: '/oauth/token',
                                        method: 'post',
                                        propertyName: 'access_token'
                                    },
                                    logout: {
                                        url: '/api/auth/logout',
                                        method: 'post'
                                    },
                                    user: {
                                        url: '/users/me',
                                        method: 'get',
                                        propertyName: 'data'
                                    }
                                },
                                tokenRequired: !0,
                                tokenType: 'Bearer',
                                _name: 'local'
                            })
                        ),
                        e('auth', o),
                        (t.$auth = o),
                        o.init().catch(function(t) {
                            console.error('[ERROR] [AUTH]', t);
                        })
                    );
                };
            function Rt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t &&
                        (o = o.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                                object,
                                t
                            ).enumerable;
                        })),
                        e.push.apply(e, o);
                }
                return e;
            }
            function Gt(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                        ? Rt(Object(source), !0).forEach(function(e) {
                              Object(r.a)(t, e, source[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(source)
                          )
                        : Rt(Object(source)).forEach(function(e) {
                              Object.defineProperty(
                                  t,
                                  e,
                                  Object.getOwnPropertyDescriptor(source, e)
                              );
                          });
                }
                return t;
            }
            o.d(e, 'b', function() {
                return Ht;
            }),
                o.d(e, 'a', function() {
                    return _;
                }),
                l.default.component(f.a.name, f.a),
                l.default.component(
                    h.a.name,
                    Gt({}, h.a, {
                        render: function(t, e) {
                            return (
                                h.a._warned ||
                                    ((h.a._warned = !0),
                                    console.warn(
                                        '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                                    )),
                                h.a.render(t, e)
                            );
                        }
                    })
                ),
                l.default.component(C.name, C),
                l.default.component('NChild', C),
                l.default.component(T.name, T),
                l.default.use(c.a, {
                    keyName: 'head',
                    attribute: 'data-n-head',
                    ssrAttribute: 'data-n-head-ssr',
                    tagIDKeyName: 'hid'
                });
            var $t = {
                name: 'page',
                mode: 'out-in',
                appear: !1,
                appearClass: 'appear',
                appearActiveClass: 'appear-active',
                appearToClass: 'appear-to'
            };
            function Ht(t) {
                return Yt.apply(this, arguments);
            }
            function Yt() {
                return (Yt = Object(n.a)(
                    regeneratorRuntime.mark(function t(e) {
                        var o, n, r, c, d, f, path, m;
                        return regeneratorRuntime.wrap(function(t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        return (t.next = 2), I();
                                    case 2:
                                        return (
                                            (o = t.sent),
                                            ((n = K(e)).$router = o),
                                            (r = n.registerModule),
                                            (n.registerModule = function(
                                                path,
                                                t,
                                                e
                                            ) {
                                                return r.call(
                                                    n,
                                                    path,
                                                    t,
                                                    Object.assign(
                                                        { preserveState: !0 },
                                                        e
                                                    )
                                                );
                                            }),
                                            (c = Gt(
                                                {
                                                    store: n,
                                                    router: o,
                                                    nuxt: {
                                                        defaultTransition: $t,
                                                        transitions: [$t],
                                                        setTransitions: function(
                                                            t
                                                        ) {
                                                            return (
                                                                Array.isArray(
                                                                    t
                                                                ) || (t = [t]),
                                                                (t = t.map(
                                                                    function(
                                                                        t
                                                                    ) {
                                                                        return (t = t
                                                                            ? 'string' ==
                                                                              typeof t
                                                                                ? Object.assign(
                                                                                      {},
                                                                                      $t,
                                                                                      {
                                                                                          name: t
                                                                                      }
                                                                                  )
                                                                                : Object.assign(
                                                                                      {},
                                                                                      $t,
                                                                                      t
                                                                                  )
                                                                            : $t);
                                                                    }
                                                                )),
                                                                (this.$options.nuxt.transitions = t),
                                                                t
                                                            );
                                                        },
                                                        err: null,
                                                        dateErr: null,
                                                        error: function(t) {
                                                            (t = t || null),
                                                                (c.context._errored = Boolean(
                                                                    t
                                                                )),
                                                                (t = t
                                                                    ? Object(
                                                                          v.l
                                                                      )(t)
                                                                    : null);
                                                            var o =
                                                                this.nuxt ||
                                                                this.$options
                                                                    .nuxt;
                                                            return (
                                                                (o.dateErr = Date.now()),
                                                                (o.err = t),
                                                                e &&
                                                                    (e.nuxt.error = t),
                                                                t
                                                            );
                                                        }
                                                    }
                                                },
                                                V
                                            )),
                                            (n.app = c),
                                            (d = e
                                                ? e.next
                                                : function(t) {
                                                      return c.router.push(t);
                                                  }),
                                            e
                                                ? (f = o.resolve(e.url).route)
                                                : ((path = Object(v.d)(
                                                      o.options.base,
                                                      o.options.mode
                                                  )),
                                                  (f = o.resolve(path).route)),
                                            (t.next = 13),
                                            Object(v.p)(c, {
                                                store: n,
                                                route: f,
                                                next: d,
                                                error: c.nuxt.error.bind(c),
                                                payload: e ? e.payload : void 0,
                                                req: e ? e.req : void 0,
                                                res: e ? e.res : void 0,
                                                beforeRenderFns: e
                                                    ? e.beforeRenderFns
                                                    : void 0,
                                                ssrContext: e
                                            })
                                        );
                                    case 13:
                                        (m = function(t, e) {
                                            if (!t)
                                                throw new Error(
                                                    'inject(key, value) has no key provided'
                                                );
                                            if (void 0 === e)
                                                throw new Error(
                                                    'inject(key, value) has no value provided'
                                                );
                                            (c[(t = '$' + t)] = e),
                                                (n[t] = c[t]);
                                            var o =
                                                '__nuxt_' + t + '_installed__';
                                            l.default[o] ||
                                                ((l.default[o] = !0),
                                                l.default.use(function() {
                                                    Object.prototype.hasOwnProperty.call(
                                                        l.default,
                                                        t
                                                    ) ||
                                                        Object.defineProperty(
                                                            l.default.prototype,
                                                            t,
                                                            {
                                                                get: function() {
                                                                    return this
                                                                        .$root
                                                                        .$options[
                                                                        t
                                                                    ];
                                                                }
                                                            }
                                                        );
                                                }));
                                        }),
                                            window.__NUXT__ &&
                                                window.__NUXT__.state &&
                                                n.replaceState(
                                                    window.__NUXT__.state
                                                ),
                                            (t.next = 18);
                                        break;
                                    case 18:
                                        return (t.next = 21), pt(c.context, m);
                                    case 21:
                                        return (t.next = 24), kt(c.context, m);
                                    case 24:
                                        return (t.next = 27), It(c.context);
                                    case 27:
                                        return (t.next = 30), Pt(c.context, m);
                                    case 30:
                                        t.next = 33;
                                        break;
                                    case 33:
                                        return t.abrupt('return', {
                                            store: n,
                                            app: c,
                                            router: o
                                        });
                                    case 34:
                                    case 'end':
                                        return t.stop();
                                }
                        }, t);
                    })
                )).apply(this, arguments);
            }
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
        function(t, e, o) {
            'use strict';
            e.a = {};
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
        function(t, e, o) {
            var content = o(184);
            'string' == typeof content && (content = [[t.i, content, '']]),
                content.locals && (t.exports = content.locals);
            (0, o(48).default)('27f4ea13', content, !1, { sourceMap: !1 });
        },
        function(t, e, o) {
            var content = o(186);
            'string' == typeof content && (content = [[t.i, content, '']]),
                content.locals && (t.exports = content.locals);
            (0, o(48).default)('3191d5ad', content, !1, { sourceMap: !1 });
        },
        ,
        function(t, e, o) {
            'use strict';
            o(2), o(61), o(5), o(3), o(64), o(81);
            var n = o(8),
                r =
                    window.requestIdleCallback ||
                    function(t) {
                        var e = Date.now();
                        return setTimeout(function() {
                            t({
                                didTimeout: !1,
                                timeRemaining: function() {
                                    return Math.max(0, 50 - (Date.now() - e));
                                }
                            });
                        }, 1);
                    },
                l =
                    window.cancelIdleCallback ||
                    function(t) {
                        clearTimeout(t);
                    },
                c =
                    window.IntersectionObserver &&
                    new window.IntersectionObserver(function(t) {
                        t.forEach(function(t) {
                            var e = t.intersectionRatio,
                                link = t.target;
                            e <= 0 || link.__prefetch();
                        });
                    });
            e.a = {
                name: 'NuxtLink',
                extends: n.default.component('RouterLink'),
                props: {
                    prefetch: { type: Boolean, default: !0 },
                    noPrefetch: { type: Boolean, default: !1 }
                },
                mounted: function() {
                    this.prefetch &&
                        !this.noPrefetch &&
                        (this.handleId = r(this.observe, { timeout: 2e3 }));
                },
                beforeDestroy: function() {
                    l(this.handleId),
                        this.__observed &&
                            (c.unobserve(this.$el), delete this.$el.__prefetch);
                },
                methods: {
                    observe: function() {
                        c &&
                            this.shouldPrefetch() &&
                            ((this.$el.__prefetch = this.prefetchLink.bind(
                                this
                            )),
                            c.observe(this.$el),
                            (this.__observed = !0));
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0;
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(
                            this.$nuxt.isOffline ||
                            (t &&
                                ((t.effectiveType || '').includes('2g') ||
                                    t.saveData))
                        );
                    },
                    getPrefetchComponents: function() {
                        return this.$router
                            .resolve(this.to, this.$route, this.append)
                            .resolved.matched.map(function(t) {
                                return t.components.default;
                            })
                            .filter(function(t) {
                                return (
                                    'function' == typeof t &&
                                    !t.options &&
                                    !t.__prefetched
                                );
                            });
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            c.unobserve(this.$el);
                            var t = this.getPrefetchComponents(),
                                e = !0,
                                o = !1,
                                n = void 0;
                            try {
                                for (
                                    var r, l = t[Symbol.iterator]();
                                    !(e = (r = l.next()).done);
                                    e = !0
                                ) {
                                    var d = r.value,
                                        f = d();
                                    f instanceof Promise &&
                                        f.catch(function() {}),
                                        (d.__prefetched = !0);
                                }
                            } catch (t) {
                                (o = !0), (n = t);
                            } finally {
                                try {
                                    e || null == l.return || l.return();
                                } finally {
                                    if (o) throw n;
                                }
                            }
                        }
                    }
                }
            };
        },
        ,
        function(t, e, o) {
            t.exports = o.p + 'img/3885c3c.svg';
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
        function(t, e, o) {
            t.exports = o.p + 'img/095d0b3.svg';
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
        function(t, e, o) {
            t.exports = o.p + 'img/26c149e.svg';
        },
        ,
        function(t, e, o) {
            t.exports = o(154);
        },
        function(t, e, o) {
            'use strict';
            o.r(e),
                function(t) {
                    o(55), o(61), o(5);
                    var e = o(21),
                        n = (o(49), o(104), o(12)),
                        r =
                            (o(64),
                            o(81),
                            o(3),
                            o(2),
                            o(6),
                            o(19),
                            o(121),
                            o(163),
                            o(171),
                            o(173),
                            o(8)),
                        l = o(145),
                        c = o(66),
                        d = o(1),
                        f = o(31),
                        m = o(85);
                    r.default.component(m.a.name, m.a),
                        r.default.component('NLink', m.a),
                        t.fetch || (t.fetch = l.a);
                    var h,
                        x,
                        v = [],
                        w = window.__NUXT__ || {};
                    Object.assign(r.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var y = r.default.config.errorHandler || console.error;
                    function k(t, e, o) {
                        var n = function(component) {
                            var t =
                                (function(component, t) {
                                    if (
                                        !component ||
                                        !component.options ||
                                        !component.options[t]
                                    )
                                        return {};
                                    var option = component.options[t];
                                    if ('function' == typeof option) {
                                        for (
                                            var e = arguments.length,
                                                o = new Array(
                                                    e > 2 ? e - 2 : 0
                                                ),
                                                n = 2;
                                            n < e;
                                            n++
                                        )
                                            o[n - 2] = arguments[n];
                                        return option.apply(void 0, o);
                                    }
                                    return option;
                                })(component, 'transition', e, o) || {};
                            return 'string' == typeof t ? { name: t } : t;
                        };
                        return t.map(function(t) {
                            var e = Object.assign({}, n(t));
                            if (
                                o &&
                                o.matched.length &&
                                o.matched[0].components.default
                            ) {
                                var r = n(o.matched[0].components.default);
                                Object.keys(r)
                                    .filter(function(t) {
                                        return (
                                            r[t] &&
                                            t.toLowerCase().includes('leave')
                                        );
                                    })
                                    .forEach(function(t) {
                                        e[t] = r[t];
                                    });
                            }
                            return e;
                        });
                    }
                    function I(t, e, o) {
                        return M.apply(this, arguments);
                    }
                    function M() {
                        return (M = Object(n.a)(
                            regeneratorRuntime.mark(function t(e, o, n) {
                                var r,
                                    l,
                                    c,
                                    f,
                                    m = this;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (
                                                        ((this._pathChanged =
                                                            Boolean(
                                                                h.nuxt.err
                                                            ) ||
                                                            o.path !== e.path),
                                                        (this._queryChanged =
                                                            JSON.stringify(
                                                                e.query
                                                            ) !==
                                                            JSON.stringify(
                                                                o.query
                                                            )),
                                                        (this._diffQuery = this
                                                            ._queryChanged
                                                            ? Object(d.g)(
                                                                  e.query,
                                                                  o.query
                                                              )
                                                            : []),
                                                        this._pathChanged &&
                                                            this.$loading
                                                                .start &&
                                                            !this.$loading
                                                                .manual &&
                                                            this.$loading.start(),
                                                        (t.prev = 4),
                                                        this._pathChanged ||
                                                            !this._queryChanged)
                                                    ) {
                                                        t.next = 11;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 8),
                                                        Object(d.n)(e, function(
                                                            t,
                                                            e
                                                        ) {
                                                            return {
                                                                Component: t,
                                                                instance: e
                                                            };
                                                        })
                                                    );
                                                case 8:
                                                    (r = t.sent),
                                                        r.some(function(t) {
                                                            var n = t.Component,
                                                                r = t.instance,
                                                                l =
                                                                    n.options
                                                                        .watchQuery;
                                                            return (
                                                                !0 === l ||
                                                                (Array.isArray(
                                                                    l
                                                                )
                                                                    ? l.some(
                                                                          function(
                                                                              t
                                                                          ) {
                                                                              return m
                                                                                  ._diffQuery[
                                                                                  t
                                                                              ];
                                                                          }
                                                                      )
                                                                    : 'function' ==
                                                                          typeof l &&
                                                                      l.apply(
                                                                          r,
                                                                          [
                                                                              e.query,
                                                                              o.query
                                                                          ]
                                                                      ))
                                                            );
                                                        }) &&
                                                            this.$loading
                                                                .start &&
                                                            !this.$loading
                                                                .manual &&
                                                            this.$loading.start();
                                                case 11:
                                                    n(), (t.next = 25);
                                                    break;
                                                case 14:
                                                    if (
                                                        ((t.prev = 14),
                                                        (t.t0 = t.catch(4)),
                                                        (l = t.t0 || {}),
                                                        (c =
                                                            l.statusCode ||
                                                            l.status ||
                                                            (l.response &&
                                                                l.response
                                                                    .status) ||
                                                            500),
                                                        (f = l.message || ''),
                                                        !/^Loading( CSS)? chunk (\d)+ failed\./.test(
                                                            f
                                                        ))
                                                    ) {
                                                        t.next = 22;
                                                        break;
                                                    }
                                                    return (
                                                        window.location.reload(
                                                            !0
                                                        ),
                                                        t.abrupt('return')
                                                    );
                                                case 22:
                                                    this.error({
                                                        statusCode: c,
                                                        message: f
                                                    }),
                                                        this.$nuxt.$emit(
                                                            'routeChanged',
                                                            e,
                                                            o,
                                                            l
                                                        ),
                                                        n();
                                                case 25:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                    [[4, 14]]
                                );
                            })
                        )).apply(this, arguments);
                    }
                    function C(t, e) {
                        return (
                            w.serverRendered && e && Object(d.a)(t, e),
                            (t._Ctor = t),
                            t
                        );
                    }
                    function j(t) {
                        var path = Object(d.d)(t.options.base, t.options.mode);
                        return Object(d.c)(
                            t.match(path),
                            (function() {
                                var t = Object(n.a)(
                                    regeneratorRuntime.mark(function t(
                                        e,
                                        o,
                                        n,
                                        r,
                                        l
                                    ) {
                                        var c;
                                        return regeneratorRuntime.wrap(function(
                                            t
                                        ) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        if (
                                                            'function' !=
                                                                typeof e ||
                                                            e.options
                                                        ) {
                                                            t.next = 4;
                                                            break;
                                                        }
                                                        return (
                                                            (t.next = 3), e()
                                                        );
                                                    case 3:
                                                        e = t.sent;
                                                    case 4:
                                                        return (
                                                            (c = C(
                                                                Object(d.o)(e),
                                                                w.data
                                                                    ? w.data[l]
                                                                    : null
                                                            )),
                                                            (n.components[
                                                                r
                                                            ] = c),
                                                            t.abrupt(
                                                                'return',
                                                                c
                                                            )
                                                        );
                                                    case 7:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        },
                                        t);
                                    })
                                );
                                return function(e, o, n, r, l) {
                                    return t.apply(this, arguments);
                                };
                            })()
                        );
                    }
                    function A(t, e, o) {
                        var n = this,
                            r = [],
                            l = !1;
                        if (
                            (void 0 !== o &&
                                ((r = []),
                                (o = Object(d.o)(o)).options.middleware &&
                                    (r = r.concat(o.options.middleware)),
                                t.forEach(function(t) {
                                    t.options.middleware &&
                                        (r = r.concat(t.options.middleware));
                                })),
                            (r = r.map(function(t) {
                                return 'function' == typeof t
                                    ? t
                                    : ('function' != typeof c.a[t] &&
                                          ((l = !0),
                                          n.error({
                                              statusCode: 500,
                                              message: 'Unknown middleware ' + t
                                          })),
                                      c.a[t]);
                            })),
                            !l)
                        )
                            return Object(d.k)(r, e);
                    }
                    function z(t, e, o) {
                        return D.apply(this, arguments);
                    }
                    function D() {
                        return (D = Object(n.a)(
                            regeneratorRuntime.mark(function t(e, o, n) {
                                var r,
                                    l,
                                    c,
                                    m,
                                    x,
                                    w,
                                    y,
                                    I,
                                    M,
                                    C,
                                    j,
                                    z,
                                    D,
                                    N,
                                    _,
                                    S,
                                    T,
                                    O,
                                    L = this;
                                return regeneratorRuntime.wrap(
                                    function(t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if (
                                                        !1 !==
                                                            this._pathChanged ||
                                                        !1 !==
                                                            this._queryChanged
                                                    ) {
                                                        t.next = 2;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'return',
                                                        n()
                                                    );
                                                case 2:
                                                    return (
                                                        e === o
                                                            ? (v = [])
                                                            : ((r = []),
                                                              (v = Object(d.e)(
                                                                  o,
                                                                  r
                                                              ).map(function(
                                                                  t,
                                                                  i
                                                              ) {
                                                                  return Object(
                                                                      d.b
                                                                  )(
                                                                      o.matched[
                                                                          r[i]
                                                                      ].path
                                                                  )(o.params);
                                                              }))),
                                                        (l = !1),
                                                        (c = function(path) {
                                                            o.path ===
                                                                path.path &&
                                                                L.$loading
                                                                    .finish &&
                                                                L.$loading.finish(),
                                                                o.path !==
                                                                    path.path &&
                                                                    L.$loading
                                                                        .pause &&
                                                                    L.$loading.pause(),
                                                                l ||
                                                                    ((l = !0),
                                                                    n(path));
                                                        }),
                                                        (t.next = 7),
                                                        Object(d.p)(h, {
                                                            route: e,
                                                            from: o,
                                                            next: c.bind(this)
                                                        })
                                                    );
                                                case 7:
                                                    if (
                                                        ((this._dateLastError =
                                                            h.nuxt.dateErr),
                                                        (this._hadError = Boolean(
                                                            h.nuxt.err
                                                        )),
                                                        (m = []),
                                                        (x = Object(d.e)(e, m))
                                                            .length)
                                                    ) {
                                                        t.next = 26;
                                                        break;
                                                    }
                                                    return (
                                                        (t.next = 14),
                                                        A.call(
                                                            this,
                                                            x,
                                                            h.context
                                                        )
                                                    );
                                                case 14:
                                                    if (!l) {
                                                        t.next = 16;
                                                        break;
                                                    }
                                                    return t.abrupt('return');
                                                case 16:
                                                    return (
                                                        (w = (
                                                            f.a.options || f.a
                                                        ).layout),
                                                        (t.next = 19),
                                                        this.loadLayout(
                                                            'function' ==
                                                                typeof w
                                                                ? w.call(
                                                                      f.a,
                                                                      h.context
                                                                  )
                                                                : w
                                                        )
                                                    );
                                                case 19:
                                                    return (
                                                        (y = t.sent),
                                                        (t.next = 22),
                                                        A.call(
                                                            this,
                                                            x,
                                                            h.context,
                                                            y
                                                        )
                                                    );
                                                case 22:
                                                    if (!l) {
                                                        t.next = 24;
                                                        break;
                                                    }
                                                    return t.abrupt('return');
                                                case 24:
                                                    return (
                                                        h.context.error({
                                                            statusCode: 404,
                                                            message:
                                                                'This page could not be found'
                                                        }),
                                                        t.abrupt('return', n())
                                                    );
                                                case 26:
                                                    return (
                                                        x.forEach(function(t) {
                                                            t._Ctor &&
                                                                t._Ctor
                                                                    .options &&
                                                                ((t.options.asyncData =
                                                                    t._Ctor.options.asyncData),
                                                                (t.options.fetch =
                                                                    t._Ctor.options.fetch));
                                                        }),
                                                        this.setTransitions(
                                                            k(x, e, o)
                                                        ),
                                                        (t.prev = 28),
                                                        (t.next = 31),
                                                        A.call(
                                                            this,
                                                            x,
                                                            h.context
                                                        )
                                                    );
                                                case 31:
                                                    if (!l) {
                                                        t.next = 33;
                                                        break;
                                                    }
                                                    return t.abrupt('return');
                                                case 33:
                                                    if (!h.context._errored) {
                                                        t.next = 35;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'return',
                                                        n()
                                                    );
                                                case 35:
                                                    return (
                                                        'function' ==
                                                            typeof (I =
                                                                x[0].options
                                                                    .layout) &&
                                                            (I = I(h.context)),
                                                        (t.next = 39),
                                                        this.loadLayout(I)
                                                    );
                                                case 39:
                                                    return (
                                                        (I = t.sent),
                                                        (t.next = 42),
                                                        A.call(
                                                            this,
                                                            x,
                                                            h.context,
                                                            I
                                                        )
                                                    );
                                                case 42:
                                                    if (!l) {
                                                        t.next = 44;
                                                        break;
                                                    }
                                                    return t.abrupt('return');
                                                case 44:
                                                    if (!h.context._errored) {
                                                        t.next = 46;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'return',
                                                        n()
                                                    );
                                                case 46:
                                                    (M = !0),
                                                        (t.prev = 47),
                                                        (C = !0),
                                                        (j = !1),
                                                        (z = void 0),
                                                        (t.prev = 51),
                                                        (D = x[
                                                            Symbol.iterator
                                                        ]());
                                                case 53:
                                                    if (
                                                        (C = (N = D.next())
                                                            .done)
                                                    ) {
                                                        t.next = 65;
                                                        break;
                                                    }
                                                    if (
                                                        'function' ==
                                                        typeof (_ = N.value)
                                                            .options.validate
                                                    ) {
                                                        t.next = 57;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'continue',
                                                        62
                                                    );
                                                case 57:
                                                    return (
                                                        (t.next = 59),
                                                        _.options.validate(
                                                            h.context
                                                        )
                                                    );
                                                case 59:
                                                    if ((M = t.sent)) {
                                                        t.next = 62;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'break',
                                                        65
                                                    );
                                                case 62:
                                                    (C = !0), (t.next = 53);
                                                    break;
                                                case 65:
                                                    t.next = 71;
                                                    break;
                                                case 67:
                                                    (t.prev = 67),
                                                        (t.t0 = t.catch(51)),
                                                        (j = !0),
                                                        (z = t.t0);
                                                case 71:
                                                    (t.prev = 71),
                                                        (t.prev = 72),
                                                        C ||
                                                            null == D.return ||
                                                            D.return();
                                                case 74:
                                                    if (((t.prev = 74), !j)) {
                                                        t.next = 77;
                                                        break;
                                                    }
                                                    throw z;
                                                case 77:
                                                    return t.finish(74);
                                                case 78:
                                                    return t.finish(71);
                                                case 79:
                                                    t.next = 85;
                                                    break;
                                                case 81:
                                                    return (
                                                        (t.prev = 81),
                                                        (t.t1 = t.catch(47)),
                                                        this.error({
                                                            statusCode:
                                                                t.t1
                                                                    .statusCode ||
                                                                '500',
                                                            message:
                                                                t.t1.message
                                                        }),
                                                        t.abrupt('return', n())
                                                    );
                                                case 85:
                                                    if (M) {
                                                        t.next = 88;
                                                        break;
                                                    }
                                                    return (
                                                        this.error({
                                                            statusCode: 404,
                                                            message:
                                                                'This page could not be found'
                                                        }),
                                                        t.abrupt('return', n())
                                                    );
                                                case 88:
                                                    return (
                                                        (t.next = 90),
                                                        Promise.all(
                                                            x.map(function(
                                                                t,
                                                                i
                                                            ) {
                                                                if (
                                                                    ((t._path = Object(
                                                                        d.b
                                                                    )(
                                                                        e
                                                                            .matched[
                                                                            m[i]
                                                                        ].path
                                                                    )(
                                                                        e.params
                                                                    )),
                                                                    (t._dataRefresh = !1),
                                                                    (L._pathChanged &&
                                                                        L._queryChanged) ||
                                                                        t._path !==
                                                                            v[
                                                                                i
                                                                            ])
                                                                )
                                                                    t._dataRefresh = !0;
                                                                else if (
                                                                    !L._pathChanged &&
                                                                    L._queryChanged
                                                                ) {
                                                                    var n =
                                                                        t
                                                                            .options
                                                                            .watchQuery;
                                                                    !0 === n
                                                                        ? (t._dataRefresh = !0)
                                                                        : Array.isArray(
                                                                              n
                                                                          )
                                                                        ? (t._dataRefresh = n.some(
                                                                              function(
                                                                                  t
                                                                              ) {
                                                                                  return L
                                                                                      ._diffQuery[
                                                                                      t
                                                                                  ];
                                                                              }
                                                                          ))
                                                                        : 'function' ==
                                                                              typeof n &&
                                                                          (S ||
                                                                              (S = Object(
                                                                                  d.f
                                                                              )(
                                                                                  e
                                                                              )),
                                                                          (t._dataRefresh = n.apply(
                                                                              S[
                                                                                  i
                                                                              ],
                                                                              [
                                                                                  e.query,
                                                                                  o.query
                                                                              ]
                                                                          )));
                                                                }
                                                                if (
                                                                    L._hadError ||
                                                                    !L._isMounted ||
                                                                    t._dataRefresh
                                                                ) {
                                                                    var r = [],
                                                                        l =
                                                                            t
                                                                                .options
                                                                                .asyncData &&
                                                                            'function' ==
                                                                                typeof t
                                                                                    .options
                                                                                    .asyncData,
                                                                        c = Boolean(
                                                                            t
                                                                                .options
                                                                                .fetch
                                                                        ),
                                                                        f =
                                                                            l &&
                                                                            c
                                                                                ? 30
                                                                                : 45;
                                                                    if (l) {
                                                                        var x = Object(
                                                                            d.m
                                                                        )(
                                                                            t
                                                                                .options
                                                                                .asyncData,
                                                                            h.context
                                                                        ).then(
                                                                            function(
                                                                                e
                                                                            ) {
                                                                                Object(
                                                                                    d.a
                                                                                )(
                                                                                    t,
                                                                                    e
                                                                                ),
                                                                                    L
                                                                                        .$loading
                                                                                        .increase &&
                                                                                        L.$loading.increase(
                                                                                            f
                                                                                        );
                                                                            }
                                                                        );
                                                                        r.push(
                                                                            x
                                                                        );
                                                                    }
                                                                    if (
                                                                        ((L.$loading.manual =
                                                                            !1 ===
                                                                            t
                                                                                .options
                                                                                .loading),
                                                                        c)
                                                                    ) {
                                                                        var p = t.options.fetch(
                                                                            h.context
                                                                        );
                                                                        (p &&
                                                                            (p instanceof
                                                                                Promise ||
                                                                                'function' ==
                                                                                    typeof p.then)) ||
                                                                            (p = Promise.resolve(
                                                                                p
                                                                            )),
                                                                            p.then(
                                                                                function(
                                                                                    t
                                                                                ) {
                                                                                    L
                                                                                        .$loading
                                                                                        .increase &&
                                                                                        L.$loading.increase(
                                                                                            f
                                                                                        );
                                                                                }
                                                                            ),
                                                                            r.push(
                                                                                p
                                                                            );
                                                                    }
                                                                    return Promise.all(
                                                                        r
                                                                    );
                                                                }
                                                            })
                                                        )
                                                    );
                                                case 90:
                                                    l ||
                                                        (this.$loading.finish &&
                                                            !this.$loading
                                                                .manual &&
                                                            this.$loading.finish(),
                                                        n()),
                                                        (t.next = 107);
                                                    break;
                                                case 93:
                                                    if (
                                                        ((t.prev = 93),
                                                        (t.t2 = t.catch(28)),
                                                        'ERR_REDIRECT' !==
                                                            (T = t.t2 || {})
                                                                .message)
                                                    ) {
                                                        t.next = 98;
                                                        break;
                                                    }
                                                    return t.abrupt(
                                                        'return',
                                                        this.$nuxt.$emit(
                                                            'routeChanged',
                                                            e,
                                                            o,
                                                            T
                                                        )
                                                    );
                                                case 98:
                                                    return (
                                                        (v = []),
                                                        Object(d.i)(T),
                                                        'function' ==
                                                            typeof (O = (
                                                                f.a.options ||
                                                                f.a
                                                            ).layout) &&
                                                            (O = O(h.context)),
                                                        (t.next = 104),
                                                        this.loadLayout(O)
                                                    );
                                                case 104:
                                                    this.error(T),
                                                        this.$nuxt.$emit(
                                                            'routeChanged',
                                                            e,
                                                            o,
                                                            T
                                                        ),
                                                        n();
                                                case 107:
                                                case 'end':
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                    [
                                        [28, 93],
                                        [47, 81],
                                        [51, 67, 71, 79],
                                        [72, , 74, 78]
                                    ]
                                );
                            })
                        )).apply(this, arguments);
                    }
                    function N(t, o) {
                        Object(d.c)(t, function(t, o, n, l) {
                            return (
                                'object' !== Object(e.a)(t) ||
                                    t.options ||
                                    (((t = r.default.extend(t))._Ctor = t),
                                    (n.components[l] = t)),
                                t
                            );
                        });
                    }
                    function _(t) {
                        this._hadError &&
                            this._dateLastError ===
                                this.$options.nuxt.dateErr &&
                            this.error();
                        var e = this.$options.nuxt.err
                            ? (f.a.options || f.a).layout
                            : t.matched[0].components.default.options.layout;
                        'function' == typeof e && (e = e(h.context)),
                            this.setLayout(e);
                    }
                    function S(t, e) {
                        var o = this;
                        if (
                            !1 !== this._pathChanged ||
                            !1 !== this._queryChanged
                        ) {
                            var n = Object(d.f)(t),
                                l = Object(d.e)(t);
                            r.default.nextTick(function() {
                                n.forEach(function(t, i) {
                                    if (
                                        t &&
                                        !t._isDestroyed &&
                                        t.constructor._dataRefresh &&
                                        l[i] === t.constructor &&
                                        !0 !== t.$vnode.data.keepAlive &&
                                        'function' ==
                                            typeof t.constructor.options.data
                                    ) {
                                        var e = t.constructor.options.data.call(
                                            t
                                        );
                                        for (var o in e)
                                            r.default.set(t.$data, o, e[o]);
                                        window.$nuxt.$nextTick(function() {
                                            window.$nuxt.$emit('triggerScroll');
                                        });
                                    }
                                }),
                                    _.call(o, t);
                            });
                        }
                    }
                    function T(t) {
                        window.onNuxtReadyCbs.forEach(function(e) {
                            'function' == typeof e && e(t);
                        }),
                            'function' == typeof window._onNuxtLoaded &&
                                window._onNuxtLoaded(t),
                            x.afterEach(function(e, o) {
                                r.default.nextTick(function() {
                                    return t.$nuxt.$emit('routeChanged', e, o);
                                });
                            });
                    }
                    function O() {
                        return (O = Object(n.a)(
                            regeneratorRuntime.mark(function t(e) {
                                var o, n, l, c, f;
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (h = e.app),
                                                    (x = e.router),
                                                    e.store,
                                                    (o = new r.default(h)),
                                                    (n = w.layout || 'default'),
                                                    (t.next = 7),
                                                    o.loadLayout(n)
                                                );
                                            case 7:
                                                return (
                                                    o.setLayout(n),
                                                    (l = function() {
                                                        o.$mount('#__nuxt'),
                                                            x.afterEach(N),
                                                            x.afterEach(
                                                                S.bind(o)
                                                            ),
                                                            r.default.nextTick(
                                                                function() {
                                                                    T(o);
                                                                }
                                                            );
                                                    }),
                                                    (t.next = 11),
                                                    Promise.all(j(x))
                                                );
                                            case 11:
                                                if (
                                                    ((c = t.sent),
                                                    (o.setTransitions = o.$options.nuxt.setTransitions.bind(
                                                        o
                                                    )),
                                                    c.length &&
                                                        (o.setTransitions(
                                                            k(c, x.currentRoute)
                                                        ),
                                                        (v = x.currentRoute.matched.map(
                                                            function(t) {
                                                                return Object(
                                                                    d.b
                                                                )(t.path)(
                                                                    x
                                                                        .currentRoute
                                                                        .params
                                                                );
                                                            }
                                                        ))),
                                                    (o.$loading = {}),
                                                    w.error && o.error(w.error),
                                                    x.beforeEach(I.bind(o)),
                                                    x.beforeEach(z.bind(o)),
                                                    !w.serverRendered)
                                                ) {
                                                    t.next = 21;
                                                    break;
                                                }
                                                return l(), t.abrupt('return');
                                            case 21:
                                                (f = function() {
                                                    N(
                                                        x.currentRoute,
                                                        x.currentRoute
                                                    ),
                                                        _.call(
                                                            o,
                                                            x.currentRoute
                                                        ),
                                                        l();
                                                }),
                                                    z.call(
                                                        o,
                                                        x.currentRoute,
                                                        x.currentRoute,
                                                        function(path) {
                                                            if (path) {
                                                                var t = x.afterEach(
                                                                    function(
                                                                        e,
                                                                        o
                                                                    ) {
                                                                        t(),
                                                                            f();
                                                                    }
                                                                );
                                                                x.push(
                                                                    path,
                                                                    void 0,
                                                                    function(
                                                                        t
                                                                    ) {
                                                                        t &&
                                                                            y(
                                                                                t
                                                                            );
                                                                    }
                                                                );
                                                            } else f();
                                                        }
                                                    );
                                            case 23:
                                            case 'end':
                                                return t.stop();
                                        }
                                }, t);
                            })
                        )).apply(this, arguments);
                    }
                    Object(f.b)()
                        .then(function(t) {
                            return O.apply(this, arguments);
                        })
                        .catch(y);
                }.call(this, o(39));
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
        function(t, e, o) {
            t.exports = o.p + 'img/787a645.png';
        },
        function(t, e, o) {
            'use strict';
            var n = o(82);
            o.n(n).a;
        },
        function(t, e, o) {
            (e = o(47)(!1)).push([
                t.i,
                '.error-page[data-v-552359e2]{margin-top:70px}.error-page img[data-v-552359e2]{width:238px}.error-button[data-v-552359e2],.error-content[data-v-552359e2]{font-size:18px}.error-button[data-v-552359e2]{color:#6b7ddf!important}',
                ''
            ]),
                (t.exports = e);
        },
        function(t, e, o) {
            'use strict';
            var n = o(83);
            o.n(n).a;
        },
        function(t, e, o) {
            (e = o(47)(!1)).push([
                t.i,
                '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#6b7ddf;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}',
                ''
            ]),
                (t.exports = e);
        },
        ,
        ,
        ,
        ,
        function(t, e, o) {
            var content = o(192);
            'string' == typeof content && (content = [[t.i, content, '']]),
                content.locals && (t.exports = content.locals);
            (0, o(48).default)('e622d370', content, !1, { sourceMap: !1 });
        },
        function(t, e, o) {
            (e = o(47)(!1)).push([t.i, '', '']), (t.exports = e);
        },
        function(t, e, o) {
            var content = o(194);
            'string' == typeof content && (content = [[t.i, content, '']]),
                content.locals && (t.exports = content.locals);
            (0, o(48).default)('d5573df6', content, !1, { sourceMap: !1 });
        },
        function(t, e, o) {
            var n = o(47),
                r = o(195),
                l = o(196),
                c = o(197),
                d = o(198),
                f = o(199),
                m = o(200),
                h = o(201),
                x = o(202),
                v = o(203),
                w = o(204),
                y = o(205),
                k = o(206),
                I = o(207),
                M = o(208),
                C = o(209),
                j = o(210),
                A = o(211),
                z = o(212),
                D = o(213),
                N = o(214),
                _ = o(215),
                S = o(216),
                T = o(217),
                O = o(218),
                L = o(219),
                Z = o(220),
                E = o(221),
                P = o(222),
                R = o(223),
                G = o(224),
                $ = o(225),
                H = o(226),
                Y = o(151),
                U = o(227),
                B = o(228),
                W = o(229),
                J = o(230),
                V = o(231),
                X = o(232);
            e = n(!1);
            var Q = r(l),
                F = r(c),
                K = r(d),
                tt = r(f),
                et = r(m),
                ot = r(h),
                it = r(x),
                nt = r(v),
                at = r(w),
                st = r(y),
                lt = r(k),
                ct = r(I),
                pt = r(M),
                ft = r(C),
                ut = r(j),
                gt = r(A),
                mt = r(z),
                bt = r(D),
                ht = r(N),
                xt = r(_),
                vt = r(S),
                wt = r(T),
                yt = r(O),
                kt = r(L),
                It = r(Z),
                Mt = r(E),
                Ct = r(P),
                jt = r(R),
                At = r(G),
                zt = r($),
                Dt = r(H),
                Nt = r(Y),
                _t = r(U),
                St = r(B),
                Tt = r(W),
                Ot = r(J),
                Lt = r(V),
                Zt = r(X);
            e.push([
                t.i,
                '.color-blue{color:#6b7ddf}.color-dark{color:#282a2d}.color-purple{color:#fa4d77}.color-yellow{color:#f9b233}.color-red{color:#db1f4d}.bg-color-gray{background:#f4f5f7}.bg-color-blue{background:#6b7ddf}.bg-color-dark{background:#282a2d}.bg-color0,.bg-color-purple{background:#fa4d77}.bg-color3,.bg-color-yellow{background:#f9b233}.bg-color-white{background:#fff}.bg-color-white span{color:#6b7ddf;font-size:16px;font-weight:600}.bold{font-weight:600}.extra-bold{font-weight:900!important}.bg-color1{background:#00cde2}.bg-color2{background:#151d4a}.font-size-15{font-size:15px}i{font-style:normal}body{background:#e6eaf0;font-family:Source Sans Pro,Helvetica,Arial,sans-serif;font-size:16px;color:#282a2d;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body.scroll-off{overflow:hidden}.layout-960{max-width:960px}.body-bg-white{background:#fff}a:active,a:focus,a:hover{text-decoration:none;color:#6b7ddf}p{margin-bottom:0}.page-enter-active,.page-leave-active{-webkit-transition:opacity .2s;transition:opacity .2s}.page-enter,.page-leave-active{opacity:0}ul{list-style:none;padding-left:0}a{text-decoration:none;color:inherit}.dropdown-menu{padding:4px 0;border-color:#eaeaea}.dropdown-menu .dropdown-item.active,.dropdown-menu .dropdown-item:active{background-color:#6b7ddf;color:#fff}.dropdown-menu .dropdown-item{padding:8px 16px}:focus{outline:0}.cursor-pointer{cursor:pointer}.position-relative{position:relative}.opacity-0{opacity:0}.tooltip .tooltip-inner{background:#6b7ddf}.tooltip.bs-tooltip-top .arrow:before{border-top-color:#6b7ddf}.nuxt-link-active{font-weight:600;color:#282a2d!important}.page-title{font-size:24px;font-weight:600}.min-width-auto{min-width:auto!important}.main-nav{padding-top:12px;padding-bottom:12px}.label-premium{display:inline-block;padding:3px 9px;border-radius:2px;background:#fa4d77;font-size:11px;font-weight:600;color:#fff}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform 5s ease-out;transition:-webkit-transform 5s ease-out;transition:transform 5s ease-out;transition:transform 5s ease-out,-webkit-transform 5s ease-out;-webkit-transform:translate(0);transform:translate(0);-webkit-transition-duration:5s;transition-duration:5s}.btn-landing{color:#fff;font-weight:600;background-color:#6b7ddf;border-radius:3px;padding:12px 20px;display:inline-block;-webkit-transition:all .3s ease;transition:all .3s ease}.btn-landing:hover{background:#566bda;color:#fff}.btn-blue{background-color:#6b7ddf;border-radius:2px;font-size:14px;font-weight:600;padding:5px 33px;color:#fff;cursor:pointer;border:none;-webkit-transition:all .3s ease;transition:all .3s ease}.btn-blue:hover{background:#566bda;color:#fff}.btn-form{background:#6b7ddf;font-weight:600;color:#fff;width:100%;padding:13px;text-align:center;border-radius:2px;border:none;box-shadow:0 2px 3px 0 rgba(0,0,0,.16);cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.btn-form:hover{background:#566bda;color:#fff}.btn-bordered{border:1px solid #e1e4e8;font-size:14px;font-weight:600;padding:7px 28px;border-radius:2px;display:block;outline:none;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.btn-bordered:hover{background:#f2f2f2}.btn-gray{border:none;font-size:14px;font-weight:600;padding:7px 28px;border-radius:2px;display:block;background:#f4f5f7;outline:none;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.btn-gray span{font-weight:400}.btn-gray:hover{background:#e5e8ec}.btn-gray.active{background:#23282e;color:#fff}.btn-gray.disabled{opacity:.5;background:#e5e8ec;cursor:default;color:inherit}.three-dots{position:relative;display:inline-block}.three-dots span{display:inline-block;width:4px;height:4px;border-radius:50%;background:#111}.three-dots span:first-child+span{margin:0 4px}.align-right{text-align:right!important}.align-left{text-align:left!important}.align-center{text-align:center!important}.copy-clipboard{cursor:pointer;border:none;background:none;padding:0}.arrow-left{background:url(' +
                    Q +
                    ');width:6px;height:13px}.arrow-left,.texture{-o-object-fit:contain;object-fit:contain}.texture{display:block;background:url(' +
                    F +
                    ');width:60px;height:60px;margin:0 auto}.download-svg{background:url(' +
                    K +
                    ') no-repeat;width:21px;height:15px}.download-svg,.empty-svg{-o-object-fit:contain;object-fit:contain;display:inline-block}.empty-svg{background:url(' +
                    tt +
                    ') no-repeat;width:45px;height:56px}.success-check{background:url(' +
                    et +
                    ') no-repeat;width:60px;height:60px}.close-svg,.success-check{-o-object-fit:contain;object-fit:contain;display:inline-block}.close-svg{background:url(' +
                    ot +
                    ') no-repeat;width:15px;height:15px}.bg-svg{-o-object-fit:contain;object-fit:contain;display:inline-block}.bg-svg.london-svg{background:url(' +
                    it +
                    ') no-repeat;width:88px;height:101px;background-size:88px}.trash-svg{background:url(' +
                    nt +
                    ') no-repeat;background-size:16px}.spam-svg,.trash-svg{-o-object-fit:contain;object-fit:contain;display:inline-block;width:16px;height:16px}.spam-svg{background:url(' +
                    at +
                    ') no-repeat;background-size:16px}.integration-svg{background:url(' +
                    st +
                    ') no-repeat;width:295px;height:45px}.integration-svg,.settings-svg{-o-object-fit:contain;object-fit:contain;display:inline-block}.settings-svg{background:url(' +
                    lt +
                    ') no-repeat;width:18px;height:18px}.notification-svg{-o-object-fit:contain;object-fit:contain;display:inline-block;background:url(' +
                    ct +
                    ') no-repeat;width:20px;height:17px}.bookmark-svg{background:url(' +
                    pt +
                    ') no-repeat;width:13px}.bookmark-svg,.launch-svg{-o-object-fit:contain;object-fit:contain;display:inline-block;height:15px}.launch-svg{background:url(' +
                    ft +
                    ') no-repeat;width:15px}.setup-svg{display:inline-block;background:url(' +
                    ut +
                    ') no-repeat;width:16px;height:16px;background-size:16px}.eye,.setup-svg{-o-object-fit:contain;object-fit:contain}.eye.eye-on-svg{background:url(' +
                    gt +
                    ') no-repeat;width:21px;height:15px}.eye.eye-off-svg{background:url(' +
                    mt +
                    ') no-repeat;width:19px;height:19px}.file-icon{display:inline-block;width:20px;height:25px;-o-object-fit:contain;object-fit:contain}.file-icon.icon-img{background:url(' +
                    bt +
                    ')}.file-icon.icon-doc{background:url(' +
                    ht +
                    ')}.file-icon.icon-excel{background:url(' +
                    xt +
                    ')}.file-icon.icon-file{background:url(' +
                    vt +
                    ')}.file-icon.icon-pdf{background:url(' +
                    wt +
                    ')}.file-icon.icon-play{background:url(' +
                    yt +
                    ')}.file-icon.icon-ppt{background:url(' +
                    kt +
                    ')}.file-icon.icon-zip{background:url(' +
                    It +
                    ')}.drop-small button{padding:0}.drop-small .dropdown-menu{min-width:111px;padding:0;border-radius:2px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09)}.drop-small .dropdown-menu .dropdown-item{font-size:15px}.drop-small .dropdown-menu .dropdown-item:active,.drop-small .dropdown-menu .dropdown-item:focus,.drop-small .dropdown-menu .dropdown-item:hover{background:#fff}.drop-small .dropdown-menu .dropdown-item.color-purple:active,.drop-small .dropdown-menu .dropdown-item.color-purple:focus,.drop-small .dropdown-menu .dropdown-item.color-purple:hover{background:#fff;color:#fa4d77}.header{padding-top:25px}.header .flex{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.header .flex ul{margin:0}.header .flex ul li{display:inline-block}.header .flex ul li:first-child{margin-right:45px}.header .flex ul li a{display:block;position:relative}.header .flex ul li a.signup-link:after,.header .flex ul li a:after{content:"";position:absolute;width:100%;-webkit-transform:scale(0);transform:scale(0);height:2px;background:#fa4d77;bottom:-5px;left:0;-webkit-transition:all .3s ease;transition:all .3s ease}.header .flex ul li a.signup-link{font-weight:600}.header .flex ul li a.signup-link,.header .flex ul li a:hover{color:#282a2d}.header .flex ul li a.signup-link:after,.header .flex ul li a:hover:after{-webkit-transform:scale(1);transform:scale(1)}.header .flex .navbar-brand{width:250px;text-align:center;padding:0;margin:0}footer{margin-top:2px;padding:80px 0;background:#171d3f}footer ul li{margin-bottom:25px}footer ul li p{color:#fff;font-size:15px}footer ul li p svg{margin:0 3px}footer ul li .nuxt-link-active,footer ul li a{display:block;color:#999fbe!important;margin-bottom:15px;-webkit-transition:all .3s ease;transition:all .3s ease}footer ul li .nuxt-link-active:hover,footer ul li a:hover{color:#fff!important}footer ul li h4{color:#fff;font-size:18px;font-weight:600}footer ul.social a{margin-right:15px;display:inline-block}footer p{position:relative}footer p .from-city{opacity:0;-webkit-animation:fadeInOut 9s linear 0s infinite;animation:fadeInOut 9s linear 0s infinite;position:absolute;margin-left:5px}footer p .from-city.start+span{-webkit-animation-delay:3s;animation-delay:3s}footer p .from-city.start+span+span{-webkit-animation-delay:6s;animation-delay:6s}.dashboard-footer{padding-bottom:50px;text-align:center}.dashboard-footer ul{margin-bottom:0}.dashboard-footer ul li{display:inline-block;padding:0 10px}.dashboard-footer ul li a{font-size:13px;color:#9397a5}@-webkit-keyframes fadeInOut{0%{opacity:0}10%{opacity:1}25%{opacity:1}30%{opacity:0}}@keyframes fadeInOut{0%{opacity:0}10%{opacity:1}25%{opacity:1}30%{opacity:0}}.input-error,.input-style{height:37px;background:#fff;width:100%;outline:0;padding-left:15px;box-shadow:none;font-size:15px;border-radius:2px}.input-style{border:1px solid #e0e0e0}.login-with-button{display:-webkit-box;display:flex;background:#fff;border:1px solid #e1e4e8;border-radius:2px;-webkit-box-align:center;align-items:center;padding:12px 16px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09)}.login-with-button.google i{background:url(' +
                    Mt +
                    ') no-repeat;width:23px;height:24px;margin-right:4rem}.login-with-button span{font-weight:600;color:#23282e}.form-input{width:100%;border:1px solid #e1e4e8;padding:15px;border-radius:2px;resize:none;height:56px;-webkit-transition:all .2s ease;transition:all .2s ease}.form-input:focus,.form-input:hover{border-color:#6b7ddf}.vfl-has-label{position:relative}.vfl-has-label .vfl-label{position:absolute;top:0;right:0;left:15px;overflow:hidden;font-weight:600;font-size:13px;color:#aaa;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;opacity:0;-webkit-transition:all .1s ease-out;transition:all .1s ease-out}.vfl-has-label .vfl-label.vfl-label-on-input{top:7px;pointer-events:all;opacity:1}.vfl-has-label .vfl-label.vfl-label-on-input+.form-input{padding-top:30px}.modal-content{border-radius:10px;border:none;overflow:hidden}.modal-mini .modal-content{width:400px}.modal-mini .modal-title{color:#2b2b2b;font-size:26px;padding:12px;text-align:center}.modal-mini.modal-body .close-svg{position:absolute;right:0;top:0}.modal-mini .create-form{margin-top:20px;margin-bottom:12px}.modal-mini .create-form .input-style,.modal-mini .create-form .select-style select{border-color:#e0e6ed;height:48px;font-size:16px}.modal-mini .create-form .select-style select{font-family:inherit;font-weight:500;padding-top:7px;padding-bottom:7px;padding-left:15px;border-radius:2px;width:100%;background:#fff;border:1px solid #e0e0e0}.modal-mini .create-form .create-form-checkbox{padding:12px 15px;border:1px solid #e0e6ed;border-radius:2px;font-size:16px}.modal-mini .create-form .create-form-checkbox label{font-weight:500;margin-bottom:0}.modal-mini .create-form .create-form-checkbox input{margin-right:6px}.modal-mini .create-form .ty-free{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;background-color:#f2f5f8;padding:12px 15px;border-radius:2px;font-size:16px}.modal-mini .create-form .ty-desc{font-size:13px;margin-top:8px;color:#8e8e8e}.modal-mini .create-form .create-form-footer{text-align:right}.modal-mini .create-form .create-form-footer button{border:none;color:#fff;font-size:15px;font-weight:600;padding:8px 20px;border-radius:3px;background:#6b7ddf}.delete-modal .modal-body{padding:32px}.delete-modal .modal-head{padding-bottom:24px}.delete-modal .modal-head h4{font-size:20px;font-weight:600;margin-bottom:10px}.delete-modal .modal-head p{color:rgba(35,40,46,.7)}.delete-modal .modal-footer{padding:24px 0 0;border-color:#f2f3f5}.delete-modal .modal-footer a{font-weight:600}.delete-modal .modal-footer a:first-child{margin-right:28px}.delete-modal .modal-footer a:last-child{color:#fa4d77}.custom-modal .modal-footer .btn{padding:8px 32px}.custom-dropdown{position:absolute;width:100%;min-width:200px;padding:0 20px;background:#fff;box-shadow:0 7px 25px 0 rgba(0,0,0,.1);border:1px solid rgba(0,0,0,.06);border-radius:4px;left:-55px;margin-top:10px;z-index:99}.custom-dropdown ul{margin-bottom:0;padding:3px 0}.custom-dropdown ul li{padding:6px 0}.custom-dropdown ul li:hover>label span{opacity:.8}.custom-dropdown ul li p.title{font-size:12px;font-weight:600;margin-bottom:3px;color:#9397a5}.custom-dropdown ul li label{cursor:pointer}.custom-checkbox .custom-control-input:checked~.custom-control-label:before{background:#6b7ddf;border-color:#6b7ddf}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{top:4px;background-image:url(' +
                    Ct +
                    ')}.square-checkbox.custom-checkbox .custom-control-label:before{border-radius:1px}.action-box{border:1px solid #e1e4e8;padding:16px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);overflow:auto;border-radius:3px}.action-box p{font-family:Roboto Mono,monospace;font-size:14px;margin:0;color:#323232;line-height:1.4;white-space:nowrap}.action-box p span{background:#fa4d77;color:#fff;border-radius:2px;padding:0 2px 2px}.action-box p.gray{color:#929292}.table-responsive{margin-bottom:1em}.table-responsive::-webkit-scrollbar-track{-webkit-box-shadow:0 0 6px rgba(0,0,0,.3);background-color:#f5f5f5}.table-responsive::-webkit-scrollbar{height:5px;background-color:#f5f5f5}.table-responsive::-webkit-scrollbar-thumb{background-color:#e5e8ec}.table-form{border-style:none;border-top-width:0}.table-form tr{border-style:none;border-bottom-width:0}.table-form tr.checked{background:#fffdeb}.table-form td,.table-form th{border-style:none;padding-right:1em;padding-top:10px;padding-bottom:8px;text-align:left;vertical-align:top}.table-form td.tool,.table-form th.tool{padding:0 1em}.table-form thead tr{background:#f4f5f7}.table-form thead th{font-size:12px;font-weight:600;color:#9397a5;letter-spacing:.2px;text-transform:uppercase;border-bottom:none}.table-form thead th:first-child{padding-left:20px}.table-form thead th:last-child{padding-right:50px}.table-form thead th.small{width:80px}.table-form .square-checkbox{margin-right:11px}.table-form tbody:first-of-type tr.index th{padding-top:1em}.table-form tbody th{font-weight:400}.table-form tbody tr{border-top:1px solid #e1e4e8;border-bottom:1px solid #e1e4e8}.table-form tbody tr:hover{background:#f4f5f7}.table-form tbody td{font-size:15px;color:#23282e}.table-form tbody td:first-child{padding-left:20px}.table-form tbody td.checkbox{font-size:15px;color:#9397a5;min-width:80px}@media (max-width:576px){.table-form{border:0;border-bottom-width:.0625em;border-bottom-style:solid;padding-bottom:0;width:100%}.table-form,.table-form caption{display:block}.table-form thead{display:none;visibility:hidden}.table-form tbody,.table-form td,.table-form th,.table-form tr{border:0;display:block;padding:0;text-align:left;white-space:normal}.table-form tr{margin-bottom:1.5em}.table-form td[data-title]:before,.table-form th[data-title]:before{content:attr(data-title) ": ";font-weight:700}.table-form th:not([data-title]){font-weight:700}.table-form td:empty{display:none}.table-form td{padding-left:20px!important}}.pagination{margin-left:0!important}.pagination li.active a{background:#6b7ddf!important;border-color:#6b7ddf!important;color:#fff!important}.pagination li a{border-radius:0!important;color:#6b7ddf!important}.gf-alert{z-index:99999;width:275px;padding:15px 24px 14px;border-radius:3px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);border:1px solid #e1e4e8;opacity:0;background:#fff;position:fixed;top:-20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all .25s ease;transition:all .25s ease}.gf-alert span{font-size:15px}.gf-alert.active{opacity:1;top:10px}.custom-alert{border:none;font-size:15px}.custom-alert.alert-success{background:#e1f8ed;padding:14px 24px;color:#23282e}.general-alert{width:100%;padding:15px;text-align:center;font-size:15px;color:#23282e;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.general-alert.verify{background-color:#ffeaba}.general-alert svg{margin-right:12px}.general-alert.discount{background:#151d4a;color:#fff}.general-alert.discount a{color:#fa4d77!important}.general-alert.ph{background:#da552f;color:#fff}.general-alert.ph a{color:#fff}.general-alert.vue{padding:20px;background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f3f7),to(#e9ecf3));background-image:linear-gradient(180deg,#f2f3f7,#e9ecf3)}.general-alert.vue a{font-weight:600}.general-alert.ph-upvote{padding:20px;background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f3f7),to(#e9ecf3));background-image:linear-gradient(180deg,#f2f3f7,#e9ecf3)}.general-alert.ph-upvote a{color:#6b7ddf}.general-alert.ph,.general-alert.ph-upvote{padding:0}.general-alert.ph-upvote img,.general-alert.ph img{width:80px}.general-alert.ph-upvote a,.general-alert.ph a{font-weight:600}.fade-out{-webkit-transition:all .25s ease;transition:all .25s ease;opacity:0}.fade-in{opacity:1}.bordered-box{padding:13px 16px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);border:1px solid #e1e4e8;width:100%;max-width:355px;border-radius:3px}.bordered-box .box-title{font-size:14px;font-weight:600;color:#9397a5;margin-bottom:13px}.bordered-box .box-value{font-family:Roboto Mono;line-height:normal;color:#323232;font-size:14px}.bordered-box.mw-100{max-width:100%}.bordered-box.zapier-box{margin-bottom:25px;position:relative}.bordered-box.zapier-box .box-title{margin-bottom:5px}.copied{position:absolute;right:10px;top:5px;font-size:14px;color:#9397a5;opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-animation:fade-out .3s ease both;animation:fade-out .3s ease both}.copied.active{-webkit-animation:fade-in .3s ease both;animation:fade-in .3s ease both}.btn-purple{color:#fff;background-color:#6b7ddf;border:0;width:100%;padding:14px 0;text-align:center;display:inline-block;font-size:16px;margin-top:15px;border-radius:2px;font-weight:600;-webkit-transition:all .3s ease;transition:all .3s ease;cursor:pointer}.btn-purple:hover{background:#566bda;color:#fff}.subtitle h1{font-size:18px;font-weight:700;margin-top:38px}.content-title{color:#23282e;font-weight:900;font-size:40px}.content-sub{font-size:20px;font-weight:700;margin-top:38px}.span-border{display:inline-block;border-radius:1px;border:solid #e2e5e7;border-width:1px 1px 2px;padding:0 5px;border-radius:2px}@-webkit-keyframes bounce{0%,20%,50%,80%,to{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}60%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}@keyframes bounce{0%,20%,50%,80%,to{-webkit-transform:translateY(0);transform:translateY(0)}40%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}60%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes ballon{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes ballon{0%,to{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(10px);transform:translateY(10px)}}.spinner-td{position:relative;overflow:hidden}.spinner-td:before{left:0;content:"";position:absolute;width:75%;height:15px;border-radius:1px;background-color:#e1e4e8}.spinner-td.animate:after{content:"";position:absolute;width:100%;height:100%;left:0;background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(#fff),to(transparent));background:linear-gradient(90deg,transparent,#fff,transparent);-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation:loading 2s infinite;animation:loading 2s infinite}@-webkit-keyframes loading{to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes loading{to{-webkit-transform:translateX(100%);transform:translateX(100%)}}.mobile-menu-list{background:#f4f5f7;top:0;left:50%;z-index:10}.boxLoading,.mobile-menu-list{position:absolute;right:0;bottom:0}.boxLoading{width:50px;height:50px;margin:auto;left:0;top:-100px}.boxLoading span:before{content:"";width:50px;height:5px;background:#000;opacity:.1;position:absolute;top:59px;left:0;border-radius:50%;-webkit-animation:shadow .5s linear infinite;animation:shadow .5s linear infinite}.boxLoading span:after{content:"";width:50px;height:50px;background:#6b7ddf;-webkit-animation:animate .5s linear infinite;animation:animate .5s linear infinite;position:absolute;top:0;left:0;border-radius:3px}.boxLoading.boxLoading-full{background:rgba(0,0,0,.4);position:fixed;top:0;width:100%;height:100%}.boxLoading.boxLoading-full span{display:block;width:50px;height:50px;margin:auto;position:absolute;left:0;right:0;top:0;bottom:0}@-webkit-keyframes animate{17%{border-bottom-right-radius:3px}25%{-webkit-transform:translateY(9px) rotate(22.5deg);transform:translateY(9px) rotate(22.5deg)}50%{-webkit-transform:translateY(18px) scaleY(.9) rotate(45deg);transform:translateY(18px) scaleY(.9) rotate(45deg);border-bottom-right-radius:40px}75%{-webkit-transform:translateY(9px) rotate(67.5deg);transform:translateY(9px) rotate(67.5deg)}to{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes animate{17%{border-bottom-right-radius:3px}25%{-webkit-transform:translateY(9px) rotate(22.5deg);transform:translateY(9px) rotate(22.5deg)}50%{-webkit-transform:translateY(18px) scaleY(.9) rotate(45deg);transform:translateY(18px) scaleY(.9) rotate(45deg);border-bottom-right-radius:40px}75%{-webkit-transform:translateY(9px) rotate(67.5deg);transform:translateY(9px) rotate(67.5deg)}to{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes shadow{0%,to{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scaleX(1.2);transform:scaleX(1.2)}}@keyframes shadow{0%,to{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scaleX(1.2);transform:scaleX(1.2)}}#pricingLoading p{padding:150px 0 60px;text-align:center}#cancelModal p{padding:30px 0;text-align:center}#cancelModal .btn-blue{padding:7px 33px}.ui.fluid.dropdown{border-radius:2px!important;padding:18px 15px!important;border-color:#e1e4e8!important}.ui.fluid.dropdown .icon{top:18px!important}.ui.fluid.dropdown>input.search{padding:18px!important}#editModal .modal-content{overflow:visible}.custom-multiselect .multiselect__tags{border-radius:2px;padding:14px 40px 8px 8px}.custom-multiselect .multiselect__select{top:7px}.custom-multiselect .multiselect__option--highlight,.custom-multiselect .multiselect__option--highlight:after{background-color:#6b7ddf}.custom-multiselect.custom-multiselect__tag .multiselect__input{width:100%!important;position:relative!important;padding:0 5px!important}.custom-multiselect.custom-multiselect__tag .multiselect__placeholder{display:none!important}.custom-multiselect.custom-multiselect__tag .multiselect__tag{background:#fff;color:#23282e;border:1px solid #eaeaea;border-radius:0;padding:6px 25px 7px 9px}.custom-multiselect.custom-multiselect__tag .multiselect__tag-icon{line-height:26px}.custom-multiselect.custom-multiselect__tag .multiselect__tag-icon:after{color:#23282e;font-size:18px}.custom-multiselect.custom-multiselect__tag .multiselect__tag-icon:hover{background:transparent}.custom-multiselect.custom-multiselect__tag .multiselect__element,.custom-multiselect.custom-multiselect__tag .multiselect__select{display:none!important}.custom-badge{border-radius:2px;border:1px solid #e6eaf0;background-color:#f1f3f4;padding:0 2px 2px;display:inline-block;line-height:1}.custom-pre pre{padding-left:16px!important;padding-right:16px!important;font-size:12px;background-color:#011627!important;box-shadow:none!important;padding-top:2.5em!important;width:100%}.custom-pre pre .token.attr-name,.custom-pre pre .token.builtin,.custom-pre pre .token.char,.custom-pre pre .token.inserted,.custom-pre pre .token.selector,.custom-pre pre .token.string{color:#e0bb88}.custom-pre__file pre{background-image:none!important;padding-top:1rem!important}.main-nav{background:#fff;padding-top:7px;padding-bottom:7px}.main-nav .navbar-nav li{margin-left:25px}.main-nav .navbar-nav li a{color:#777}.main-nav .navbar-nav .dropdown-toggle:after{color:#6b7ddf}.main-nav .navbar-purple{color:#fa4d77!important}.main-nav .navbar-brand{padding-top:.2125rem;padding-bottom:.2125rem}.form-container,.form-detail{padding-bottom:50px;min-height:72vh}.form-box{background-color:#fff;border-radius:8px;border:1px solid transparent;-webkit-transition:all .2s;transition:all .2s;margin-bottom:24px;color:#282a2d;position:relative;box-shadow:0 2px 2px 0 rgba(212,219,226,.51)}.form-box.create{border-radius:5px;box-shadow:none;background:transparent;border-style:dashed;padding:69px 0;border-color:rgba(147,151,165,.5);display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;cursor:pointer}.form-box.create i{background:url(' +
                    jt +
                    ') no-repeat;width:62px;height:62px;background-size:62px}.form-box.create:hover{border-color:#6b7ddf}.form-box.idea{border-radius:5px;box-shadow:0 2px 20px 0 rgba(0,0,0,.15);background:#221e4d;padding:44px 16px 16px}.form-box.idea p{font-size:11px;font-weight:600;color:hsla(0,0%,100%,.65)}.form-box.idea h4{font-size:18px;font-weight:700;line-height:1.33;color:#fff}.form-box.idea span{color:#ffd87a;font-size:13px;font-weight:600}.form-box.new{border:0}.form-box.new .box-top{background:#6b7ddf}.form-box.new:after{content:"";box-shadow:0 3px 50px 0 rgba(0,0,0,.1),0 7px 50px 0 rgba(0,0,0,.2);height:50%;bottom:0;position:absolute;z-index:-1;left:0;width:100%;right:0;background:transparent;border-radius:0 0 8px 8px}.form-box.new .new-icon{display:block}.form-box.new .regular-icon{display:none}.form-box.freeze-form{opacity:.3}.form-box:hover:not(.create):not(.idea){-webkit-transition:all .2s;transition:all .2s;box-shadow:0 13px 19px 0 rgba(191,198,204,.44);-webkit-transform:translateY(-2px);transform:translateY(-2px)}.form-box:hover:not(.create):not(.idea) .box-egg{fill:#6b7ddf;-webkit-transition:fill .3s ease;transition:fill .3s ease}.form-box:hover:not(.create):not(.idea) .form-box-see-hover{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.form-box .box-top{padding-top:46px;padding-bottom:40px;border-bottom:1px solid #f1f3f6;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;position:relative}.form-box .box-top .is-frozen{position:absolute;color:#fa4d77;font-size:11px;font-weight:600;bottom:10px;border:1px solid #fa4d77;border-radius:3px;padding:0 10px}.form-box .box-bottom{padding:16px}.form-box-count,.form-box-title{font-weight:600}.form-box-title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.form-box-count span{font-weight:500;color:#8e8e8e}.form-box-see-hover{position:absolute;color:#6b7ddf;bottom:16px;background:#fff;width:85%;opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(10px);transform:translateY(10px)}.create-form .form-group{position:relative}.create-form .form-group .form-input::-webkit-input-placeholder{color:#9397a5}.create-form .form-group .form-input::-moz-placeholder{color:#9397a5}.create-form .form-group .form-input:-ms-input-placeholder{color:#9397a5}.create-form .form-group .form-input::-ms-input-placeholder{color:#9397a5}.create-form .form-group .form-input::placeholder{color:#9397a5}.create-form .pre{color:#fff;background-color:#fa4d77;padding:2px 10px;border-radius:2px;position:absolute;letter-spacing:.4px;right:16px;bottom:17px;font-weight:600;font-size:11px}.create-form .input-style{height:48px;width:360px}.create-form svg{position:absolute;top:22px;z-index:2;left:15px}.create-form .f-red{padding-left:35px}.create-form-steps{max-width:450px;margin:100px auto}.create-form-steps.create-form-steps-2{max-width:708px}.create-form-steps .language-javascript{width:100%}.create-form-steps .integration-list:after{display:none}.create-form-steps .bordered-box p{margin:0}.create-form-steps .btn-inf p{background-color:rgba(255,216,122,.52);padding:12px 15px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-radius:2px}.create-form-steps .btn-inf svg{margin-right:10px}.create-form-steps .span-num{color:#d7d9de;margin-right:3px}.create-form-steps .f-title{color:#282a2d;font-size:35px;font-weight:700}.create-form-steps .f-top-inf{margin-bottom:24px;font-size:16px}.create-form-steps .title-setup{margin-bottom:37px}.create-form-steps .title-setup h1{font-size:32px;color:#282a2d;margin:0;font-weight:700}.create-form-steps .action-box p,.create-form-steps .title-setup p{margin:0}.create-form-steps .f-bot-inf{color:#9397a5;font-size:14px}.create-form-steps .bordered-box{margin:15px 0}.docs .docs-header{border-bottom:1px solid #f4f5f7;margin:0 auto;padding:27px 30px 26px}.docs .docs-header a{color:#6b7ddf;margin:auto 10px}.docs .docs-sidebar{max-width:170px;margin:30px auto}.docs .docs-sidebar .docs-menu h3{font-size:13px;color:#9397a5;font-weight:600}.docs .docs-sidebar .docs-menu a{margin-bottom:16px;line-height:20px}.docs .docs-content{margin:20px 50px 80px}.docs .docs-content p{margin-bottom:10px}.docs .docs-content ul{list-style:inherit;margin-top:25px;margin-bottom:33px}.docs .docs-content ul li{margin-left:24px}.docs .docs-content img{margin-bottom:40px}.docs .docs-content a{color:#6b7ddf}.docs .action-box,.docs .bordered-box{margin-top:16px;margin-bottom:24px}.docs .action-box p,.docs .bordered-box p{margin-bottom:0}.docs .action-box span,.docs .bordered-box span{border:0;background:#fff;color:#fa4d77;padding:0}.left-panel{max-width:170px;margin:30px auto}.left-panel h3{font-size:13px;color:#9397a5;font-weight:600}.left-panel ul{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;line-height:30px;margin-bottom:33px}.left-panel ul a{font-size:16px}.left-panel img{margin-bottom:62px}.left-panel a{font-weight:400}.left-panel p{color:#6b7ddf}.static{padding:7.1em 0 12em}.static .title{font-weight:900}.static p{margin-bottom:1em;line-height:1.5}.static h4{font-size:18px;font-weight:600;margin:0;padding:1em 0 .5em}.static a{color:#6b7ddf}.form-general{padding:20px 24px;width:100%;max-width:390px;border-radius:2px;box-shadow:0 2px 3px 0 rgba(0,0,0,.04);background-color:#fff;border:1px solid #f5f5f5}.form-general .head{margin-bottom:22px}.form-general .head h1{font-size:24px;margin-bottom:0;font-weight:600}.form-general .head p{color:#5d6879}.form-general .or{color:#adb2ba;font-size:15px;text-align:center}.form-general .form-group:last-child{margin-bottom:0}.form-general .custom-checkbox .custom-control-label{font-size:14px;padding-top:2px}.form-general .custom-checkbox .custom-control-label a{color:#6b7ddf}.form-general .custom-checkbox .custom-control-label:before{background-color:#fff;border:1px solid #eaeaea;border-radius:1px}.form-general .custom-checkbox.custom-control-inline{margin-right:0}.input-pass{position:relative}.input-pass .eye{position:absolute;right:16px;top:20px}.input-pass .eye.eye-on-svg{top:22px}.form-logo{width:100%;max-width:390px;display:block;padding-bottom:25px;padding-left:25px}.forgot-password-link{text-align:right;color:#6b7ddf;font-size:14px;font-weight:600}.already{text-align:center}.already a{color:#6b7ddf}.freeze-form-detail .nav-tabs .nav-link.disabled{color:#fff}.freeze-alert{padding:0 25px;text-align:center}.freeze-alert .alert-warning{background:#ffeaba;color:#23282e;font-size:15px}.form-detail .head{padding:24px 30px 136px;width:100%;height:209px;background-image:-webkit-gradient(linear,left top,right top,from(#615cae),to(#506fbd));background-image:linear-gradient(90deg,#615cae,#506fbd)}.form-detail .head>div{padding-bottom:24px;margin-bottom:16px;position:relative}.form-detail .head>div:after{content:"";height:1px;width:calc(100% - 30px);background:hsla(0,0%,100%,.1);position:absolute;bottom:0;left:15px}.form-detail .head h1{font-size:27px;font-weight:900;color:#fff;margin-bottom:0}.form-detail .head .form-author ul{margin-bottom:0}.form-detail .head .form-author li{margin-right:-4px}.form-detail .head .form-author li:first-child{position:relative}.form-detail .head .form-author li:first-child.position-relative{z-index:2}.form-detail .head .form-author li:first-child.position-relative+li{position:relative;z-index:1}.form-detail .head .form-author a{text-transform:uppercase;padding:2px;font-size:13px;font-weight:600;color:#fff}.form-detail .head .form-author a,.form-detail .head .form-author a img{width:32px;height:32px;border-radius:50%}.form-detail .head .form-author a.add-btn{border:1px dashed hsla(0,0%,100%,.51);margin-left:15px;-webkit-transition:all .5s ease;transition:all .5s ease}.form-detail .head .form-author a.add-btn:hover{border-color:#fff}.form-detail .tab-body{padding-bottom:24px;border-radius:8px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.08)}.form-detail .tab-body .tab-head{padding:20px 24px 17px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.form-detail .tab-body .tab-head .btn-bordered{margin:0 10px 0 20px}.form-detail .tab-body .tab-head a.color-blue{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:14px;font-weight:600}.form-detail .tab-body .tab-head a.color-blue svg{margin-right:8px;fill:#6b7ddf}.form-detail .tab-body .tab-head .tab-filter{position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.form-detail .tab-body .tab-head .tab-filter .search-box{position:relative}.form-detail .tab-body .tab-head .tab-filter .search-box svg{width:12px;position:absolute;top:10px;left:10px;fill:#9397a5}.form-detail .tab-body .tab-head .tab-filter .btn-gray{border:1px solid #f4f5f7}.form-detail .tab-body .tab-head .tab-filter .btn-box a{display:inline-block}.form-detail .tab-body .tab-head .tab-filter .btn-box a:last-child{margin:0 15px 0 8px}.form-detail .tab-body .tab-head .tab-filter input[type=text]{width:168px;height:32px;border-radius:4px;background-color:#f4f5f7;border:none;font-size:14px;padding-left:30px}.form-detail .tab-body .tab-head .show-hide-list{position:relative}.form-detail .tab-body .tab-head .show-hide-list>a{-webkit-transition:all .3s ease;transition:all .3s ease;padding:4.5px 14px;margin:0 -7px;border:1px solid transparent;position:relative;border-radius:3px}.form-detail .tab-body .tab-head .show-hide-list>a:before{content:"";position:absolute;left:0;right:0;background:transparent;width:100%;height:100%;-webkit-transition:all .15s ease;transition:all .15s ease;-webkit-transform-origin:center;transform-origin:center}.form-detail .tab-body .tab-head .show-hide-list>a>div{position:relative}.form-detail .tab-body .tab-head .show-hide-list>a:hover.active,.form-detail .tab-body .tab-head .show-hide-list>a:hover:before{background:#f4f5f7}.form-detail .tab-body .tab-head .show-hide-list>a.active{border-color:#e1e4e8}.form-detail .tab-body .tab-head .show-hide-list>a.active:before{background:#f4f5f7}.form-detail .tab-body .tab-head .show-hide-list>a p{font-size:14px;font-weight:600;color:#747885}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown{left:-8px}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown label{font-size:16px;margin-bottom:0}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown label span{max-width:130px;text-overflow:ellipsis;overflow:hidden}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown .custom-control{left:10px}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown .custom-control .custom-control-label:after,.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown .custom-control .custom-control-label:before{border-radius:50%;width:20px;height:20px}.form-detail .tab-body .tab-head .show-hide-list .custom-dropdown .custom-control .custom-control-input:checked~.custom-control-label:before{background:#6b7ddf;border-color:#6b7ddf}.form-detail .tab-body .tab-head .mark-spam{border-left:1px solid #e1e4e8}.form-detail .tab-body .tab-head .mark-spam a .hoverlay{position:relative}.form-detail .tab-body .tab-head .mark-spam a .hoverlay:before{-webkit-transition:all .3s ease;transition:all .3s ease;content:"";position:absolute;top:-8px;left:-8px;background:#f4f5f7;border-radius:50%;width:32px;height:32px;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center;transform-origin:center}.form-detail .tab-body .tab-head .mark-spam a i{position:relative}.form-detail .tab-body .tab-head .mark-spam a:hover .hoverlay:before{-webkit-transform:scale(1);transform:scale(1)}.form-detail .tab-body .tab-head select{width:121px;height:32px;border-radius:3px;border:1px solid #e1e4e8;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);font-size:14px;padding:7px 10px;background:#fff}.form-detail .tab-body .form-setup h5{font-size:15px;font-weight:600;color:#9397a5;margin-bottom:11px}.form-detail .tab-body .file-icon{width:20px;margin-right:11px;vertical-align:middle}.form-detail .step2 h2{font-size:35px}.form-detail .form-detail-tabs{margin-top:-77px;position:relative}.form-detail .form-detail-tabs ul.nav-tabs{border:none;margin-left:-15px;position:absolute;top:-47px}.form-detail .form-detail-tabs ul.nav-tabs li{display:inline-block}.form-detail .form-detail-tabs ul.nav-tabs li a{color:hsla(0,0%,100%,.5);font-size:16px;font-weight:600;border:none;letter-spacing:.4px}.form-detail .form-detail-tabs ul.nav-tabs li a.active{color:#fff;background:transparent}.form-detail .form-integration .title{border-radius:5px 5px 0 0;background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f3f7),to(#e9ecf3));background-image:linear-gradient(180deg,#f2f3f7,#e9ecf3);text-align:center;padding:18px 0}.form-detail .form-integration .body{text-align:center;width:100%;max-width:525px;margin:0 auto}.form-detail .form-integration .body h4{font-size:24px;font-weight:700;margin:32px 0}.form-detail .form-integration .body ul li a{display:block;padding:7px 23px;font-size:14px;font-weight:600;border-radius:2px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);border:1px solid #e1e4e8}.form-detail .form-integration .body ul li a.active{border-color:#6b7ddf;color:#6b7ddf;background:#f5f6fd}.form-detail .form-integration .item{width:100%;max-width:370px;margin:24px auto 0;text-align:left}.form-detail .form-integration .item input{width:100%}.form-detail .form-integration .item .bordered-box{max-width:370px}.form-detail .form-integration .item h4{font-size:24px;font-weight:600;margin-bottom:14px}.form-detail .form-integration .item p{line-height:1.5}.form-detail .form-integration .item a.btn-blue,.form-detail .form-integration .item a.btn-gray{width:100%;display:block;text-align:center;padding:14px;font-size:16px;font-weight:600}.form-detail .form-integration .item .color-blue,.form-detail .form-integration .item a.btn-blue+.color-blue,.form-detail .form-integration .item a.btn-gray+.color-blue{display:block;text-align:center;padding:24px 0}.form-detail .form-integration .tab2 .bordered{max-width:370px;margin:0 auto;position:relative}.form-detail .form-integration .tab2 .label-premium{position:absolute;right:15px;top:10px}.form-settings{padding:24px 40px}.form-settings h4{font-size:24px;font-weight:600;margin-bottom:32px}.form-settings h5{font-size:15px;font-weight:600;margin-bottom:8px}.form-settings h5 .label-premium{margin-left:8px}.form-settings h5+p{line-height:1.4;color:rgba(35,40,46,.7);margin-bottom:11px}.form-settings .foot,.form-settings h5+p{width:100%;max-width:400px;font-size:15px}.form-settings .foot{font-weight:600;color:#f62d47;padding-top:16px}.form-settings .foot .btn-blue{padding:11px 24px}.invite-modal .title{text-align:center;margin-bottom:24px}.invite-modal .title h4{font-size:24px;font-weight:600;margin-bottom:4px}.invite-modal .title p{color:rgba(35,40,46,.7)}.invite-modal a.btn-blue{padding:5px 10px}.invite-modal form{margin-bottom:31px}.invite-modal form .form-group{border:1px solid #f2f3f5;padding:8px 16px;border-radius:2px;overflow:hidden;height:49px}.invite-modal form .form-group .flex{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;position:relative;-webkit-transition:all .5s ease;transition:all .5s ease}.invite-modal form .form-group .flex.group1{opacity:1}.invite-modal form .form-group .flex.group1.hide{opacity:0;top:45px}.invite-modal form .form-group .flex.group1 i{background:url(' +
                    At +
                    ');width:16px;height:16px;-o-object-fit:contain;object-fit:contain}.invite-modal form .form-group .flex.group2{top:-75px;opacity:0}.invite-modal form .form-group .flex.group2.hide{opacity:1;top:-28px}.invite-modal form .form-group .flex.group2 i{background:url(' +
                    zt +
                    ');width:22px;height:22px;-o-object-fit:contain;object-fit:contain}.invite-modal form .form-group .flex.group2 a{color:#6b7ddf}.invite-modal form .form-group input{-webkit-box-flex:1;flex-grow:1;border:none;padding:0 16px}.invite-modal .foot h5{font-size:14px;font-weight:600;color:#9397a5;margin-bottom:0}.invite-modal .foot .invite-list li{padding:14px 0;border-bottom:1px solid #f2f3f5;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.invite-modal .foot .invite-list li .info{padding:0 10px;-webkit-box-flex:1;flex-grow:1}.invite-modal .foot .invite-list li .info p:first-child{color:#23282e}.invite-modal .foot .invite-list li .info p:last-child{font-size:14px;color:#9397a5}.invite-modal .foot .invite-list li .info p a{color:#6b7ddf}.invite-modal .foot .invite-list li .img{width:40px;height:40px;border-radius:50%;background:#9397a5;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:14px;font-weight:600;color:#fff}.invite-modal .foot .invite-list li .img img{width:40px;height:40px;border-radius:50%}.invite-modal .foot .invite-list li .img.time{background:#f9b233}.invite-modal .foot .invite-list li .img.time span.clock{background:url(' +
                    Dt +
                    ') no-repeat;width:18px;height:18px}.invite-modal .foot .invite-list li .img.time span.clock+span{display:none}.invite-modal .foot .invite-list li:last-child{border-bottom:none}.invite-modal .foot .invite-list li.fly-animate-up{-webkit-animation:fly-up .3s ease!important;animation:fly-up .3s ease!important}.invite-modal .foot .invite-list li.fly-animate-down{-webkit-animation:fly-down .3s ease;animation:fly-down .3s ease}.invite-modal .foot .invite-list .delete{background:url(' +
                    ot +
                    ') no-repeat;width:12px;height:12px;-o-object-fit:contain;object-fit:contain}.invite-modal .foot .invite-list.invite-animate-none .fly-animate-down{-webkit-animation:none!important;animation:none!important}.invite-modal .foot .invite-list.empty-invite-list .img{background:#e1e4e8}.invite-modal .foot .invite-list.empty-invite-list .info p{background:#e1e4e8;height:11px;border-radius:1px}.invite-modal .foot .invite-list.empty-invite-list .info p:first-child{width:95px;margin-bottom:10px}.invite-modal .foot .invite-list.empty-invite-list .info p:last-child{margin-bottom:0;width:152px}.invite-modal .modal-content{overflow:hidden}@-webkit-keyframes fly-up{0%{opacity:1}to{-webkit-transform:translateX(-450px);transform:translateX(-450px);opacity:0;margin-top:-74px}}@keyframes fly-up{0%{opacity:1}to{-webkit-transform:translateX(-450px);transform:translateX(-450px);opacity:0;margin-top:-74px}}@-webkit-keyframes fly-down{0%{-webkit-transform:translateX(-450px);transform:translateX(-450px);opacity:0;margin-top:-74px}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;margin-top:0}}@keyframes fly-down{0%{-webkit-transform:translateX(-450px);transform:translateX(-450px);opacity:0;margin-top:-74px}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:1;margin-top:0}}.file-detail .title{background:#fff;padding:24px 0}.file-detail .title>.container{-webkit-box-pack:justify;justify-content:space-between}.file-detail .title .left,.file-detail .title .right,.file-detail .title>.container{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.file-detail .title .arrow-left{margin-right:23px}.file-detail .title .flex{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.file-detail .title .flex i{margin-right:11px}.file-detail .title .right p{font-size:15px;color:#9397a5;margin-right:25px}.file-detail .title .right .btn-bordered{color:#6b7ddf}.file-detail .file-body .img{padding:65px 70px}.file-detail .file-body .img .no-preview{border:1px dashed #d7d9de;padding:64px;text-align:center}.file-detail .file-body .img .no-preview p{color:#9397a5;margin:17px 0 24px}.file-detail .file-body .img .no-preview a{color:#6b7ddf;display:inline-block}.file-detail .file-body .img img{width:100%}.file-detail .file-body .img iframe{height:83vh;width:103%}.file-detail .file-body .right{margin-top:1px;background:#fff;padding:24px}.file-detail .file-body .right h4{font-size:16px;font-weight:600;margin-bottom:21px}.file-detail .file-body .right ul li{margin-bottom:20px}.file-detail .file-body .right ul li p{font-size:15px}.file-detail .file-body .right ul li p:first-child{font-weight:600;color:#9397a5;margin-bottom:5px}.empty-form{text-align:center;margin:0 24px;border:1px solid #f2f3f5;padding:130px 0}.empty-form h4{font-size:20px;font-weight:400;margin:26px 0 8px}.empty-form p{font-size:18px;color:#9397a5;margin-bottom:24px}.empty-form a.btn-form{padding:9px 41px 11px}.about{background:#fff}.about .left h1{font-size:40px;font-weight:900;line-height:1.2;margin-bottom:15px}.about .left h5{font-size:18px;font-weight:600;margin-bottom:25px}.about .left p{font-size:18px;margin-bottom:1em;width:100%;max-width:500px}.about .right{text-align:center}.about .right img{width:100%;max-width:283px}.about .right p{padding-top:15px;font-size:14px;margin-bottom:-3px}.about .right a{color:#9397a5;font-size:13px}.about .team{padding:105px 0 158px}.about .team .head{margin-bottom:24px}.about .team .head h2{font-size:24px;font-weight:600}.about .team .head p{font-size:18px}.about .team .head p a{text-decoration:underline;color:#6b7ddf}.about .team .img{margin-bottom:16px}.about .team .img img{width:100%;max-width:165px}.about .team .desc h4{font-size:18px;font-weight:600;margin-bottom:2px}.about .team .desc p{color:#9397a5}.detail-page{padding-top:110px}.detail-page .page-title{font-size:40px;font-weight:900;line-height:1.2;margin-bottom:6px}.detail-page .page-desc{font-size:18px}.price-active{border:1px solid #e1e4e8!important;box-shadow:0 1px 2px 0 rgba(0,0,0,.09)}.pricing .head{padding-bottom:65px}.pricing .head h1{font-size:40px;font-weight:900;margin-bottom:18px}.pricing .head p{font-size:18px}.pricing .check>span{color:#9397a5;font-size:17px}.pricing .check>span.active{color:#6b7ddf}.pricing .check>div{padding:0 21px 0 7px}.pricing .check>div input[type=checkbox]{height:0;width:0;visibility:hidden}.pricing .check>div input[type=checkbox]~label{color:#9397a5;cursor:pointer;position:relative;display:block;font-size:17px;margin-left:4.2rem;margin-bottom:0;padding-top:4px;margin-top:-25px}.pricing .check>div input[type=checkbox]~label:before{content:" ";text-align:right;font-size:1.6rem;line-height:2rem;top:.2rem;left:-4rem;color:#fff;width:58px;height:27px;background:#f2f3f5;border:1px solid #e1e4e8;display:block;border-radius:15px;position:absolute;-webkit-transition:.3s;transition:.3s}.pricing .check>div input[type=checkbox]~label:after{content:"";font-size:1.4rem;text-align:center;position:absolute;top:7px;left:-3.7rem;width:19px;height:19px;background-color:#6b7ddf;color:#fff;border-radius:1rem;-webkit-transition:.3s;transition:.3s}.pricing .check>div input[type=checkbox]:checked+label{color:#6b7ddf}.pricing .check>div input[type=checkbox]:checked+label:before{content:"";text-align:left}.pricing .check>div input[type=checkbox]:checked+label:after{left:-.7rem;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.pricing .check>p{border-radius:2px;border:1px solid #e1e4e8;letter-spacing:.2px;font-size:13px;font-weight:600;padding:4px 10px 3px}.pricing .pricing-list{padding:35px 0 106px}.pricing .pricing-list .pricing-section-top{min-height:70px}.pricing .pricing-list .item{padding:24px;border-radius:3px;border:1px solid #f2f3f5;background-color:#fff;margin-bottom:32px}.pricing .pricing-list .item h4{font-size:18px;font-weight:600}.pricing .pricing-list .item h4+p{font-size:15px}.pricing .pricing-list .item .btn-blue.active{font-weight:600}.pricing .pricing-list .item .btn-blue,.pricing .pricing-list .item .btn-gray{display:block;width:100%;font-size:15px;font-weight:600;text-align:center;text-transform:uppercase;padding:10px}.pricing .pricing-list .item .price{height:168px;padding:40px 0 80px;position:relative}.pricing .pricing-list .item .price p:first-child{font-size:20px}.pricing .pricing-list .item .price p:first-child span{font-size:24px;font-weight:600}.pricing .pricing-list .item .price p.per-year{font-size:15px}.pricing .pricing-list .item .price p.per-year span{text-decoration:line-through;color:#9397a5}.pricing .pricing-list .item .price p.popular{position:absolute;bottom:10px;font-size:14px;font-weight:600;color:#fa4d77}.pricing .pricing-list .list li{position:relative;padding-left:24px;line-height:2}.pricing .pricing-list .list li:before{position:absolute;left:0;top:14px;content:"";background:url(' +
                    Nt +
                    ') no-repeat;-o-object-fit:contain;object-fit:contain;width:14px;height:11px;background-size:14px}.pricing .pricing-foot{padding-bottom:110px}.pricing .pricing-foot .item{padding:30px 24px 27px;border-radius:3px}.pricing .pricing-foot .item h4{margin-bottom:0;font-size:18px;font-weight:600}.pricing .pricing-foot .item p{font-size:15px;line-height:1.5;padding:12px 0}.pricing .pricing-foot .item a{font-size:14px;font-weight:600}.pricing .pricing-foot .item a:hover{color:#fff}.pricing .pricing-foot .item.item1{color:#fff;background-image:-webkit-gradient(linear,left top,right top,from(#615cae),to(#506fbd));background-image:linear-gradient(90deg,#615cae,#506fbd)}.pricing .pricing-foot .item.item1 p{color:hsla(0,0%,100%,.9)}.pricing .pricing-foot .item.item2{background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f3f7),to(#e9ecf3));background-image:linear-gradient(180deg,#f2f3f7,#e9ecf3)}.pricing .pricing-foot .item.item2 a{color:#6b7ddf}.pricing .faq{margin-bottom:127px}.pricing .faq h2{font-size:32px;font-weight:900;padding-bottom:42px;line-height:1.5}.pricing .faq ul{padding:0}.pricing .faq ul li{padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid #e1e4e8}.pricing .faq ul li:last-child{border-bottom:0}.pricing .faq ul li h4{font-size:18px;font-weight:600;margin-bottom:10px}.trash-head{background-color:#f4f5f7;text-align:center;padding:15px;font-size:14px;margin:0 24px 20px}.trash-head a{color:#6b7ddf}.user-profile .left{height:100%}.user-profile .left>div{background:#fff;text-align:center;border-radius:2px}.user-profile .left .head{position:relative}.user-profile .left .head:before{content:"";display:block;width:100%;position:relative;height:61px;background-image:-webkit-gradient(linear,left top,right top,from(#615cae),to(#506fbd));background-image:linear-gradient(90deg,#615cae,#506fbd)}.user-profile .left .head .avatar{margin-top:-36px;position:relative}.user-profile .left .body{padding-bottom:24px}.user-profile .left .body h4{font-size:18px;font-weight:600;margin:12px 0 16px}.user-profile .left .body a{font-weight:600;font-size:14px;padding:7px 30px;color:#fff;border-radius:31px;background-color:#9397a5}.user-profile .left .body a.active{background:#6b7ddf}.user-profile .left .body .foot{margin-top:24px;border-top:1px solid #f0f1f2;padding:16px 0 0;font-size:15px}.user-profile .left .body .foot p{line-height:1.6;font-weight:500}.user-profile .left .body .foot span{color:#9297aa}.user-profile .right>div{border-radius:3px;background:#fff;padding:21px 24px 0}.user-profile .right .custom-tab{display:block}.user-profile .right .custom-tab .nav-tabs{border-bottom:none!important;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.user-profile .right .custom-tab .nav-tabs li:first-child{margin-right:34px}.user-profile .right .custom-tab .nav-tabs li a.nav-link{border:none;border-bottom:2px solid transparent;font-weight:600;color:#9397a5;padding:0 0 8px}.user-profile .right .custom-tab .nav-tabs li a.nav-link.active{color:#23282e;border-bottom-color:#6b7ddf}.user-profile .right .tab-body{padding:24px 0}.user-profile .border-box{position:relative;padding:24px;border:1px solid #f0f1f2;margin:16px 0 24px;border-radius:3px}.user-profile .border-box h5.title{position:absolute;top:-8px;left:10px;margin:0;font-size:13px;font-weight:600;display:inline-block;background:#fff;padding:0 10px;color:#9397a5}.user-profile .border-box.personal-info ul{margin:0}.user-profile .border-box.personal-info li{padding:16px 0;border-bottom:1px solid #f2f3f5}.user-profile .border-box.personal-info li p:first-child{color:#9397a5}.user-profile .border-box.personal-info li:last-child{border-bottom:none}.user-profile .border-box.personal-info a{color:#6b7ddf}.user-profile .border-box.personal-info a.delete{color:#fa4d77}.user-profile .border-box.newsletter{padding:15px}.user-profile .border-box.newsletter p{font-size:15px;color:#8492a6;margin-bottom:16px}.user-profile .border-box.storage p{font-size:15px;color:#171717}.user-profile .border-box.storage span{display:block;text-align:right;font-size:14px}.user-profile .border-box.storage .slider{margin:13px 0 11px;height:5px;border-radius:2.5px;display:block;background-color:#f2f2f2;position:relative;overflow:hidden}.user-profile .border-box.storage .slider i{display:block;position:absolute;border-radius:2.5px;height:100%;left:0;top:0;-webkit-transition:all .3s ease;transition:all .3s ease}.user-profile .border-box.storage .purple .slider i{background:#fa4d77}.user-profile .border-box.storage .purple span{color:#fa4d77}.user-profile .border-box.storage .blue .slider i{background:#6b7ddf}.user-profile .border-box.storage .blue span{color:#6b7ddf}.user-profile .border-box.membership ul{margin-bottom:0}.user-profile .border-box.membership ul li{width:50%}.user-profile .border-box.membership ul li h5{font-size:15px}.user-profile .border-box.membership ul li p{font-size:15px;margin:7px 0;font-weight:600}.user-profile .border-box.membership ul li p span{font-weight:400;color:#9397a5}.user-profile .border-box.membership ul li a{font-size:14px;color:#6b7ddf}.user-profile .border-box.membership ul li a.cancel{color:#9397a5;padding-left:19px}.user-profile .border-box.billing .custom-table{margin-bottom:0}.user-profile .border-box.billing .custom-table th{font-weight:600;color:#9397a5}.user-profile .border-box.billing .custom-table td,.user-profile .border-box.billing .custom-table th{font-size:15px;border-top:none;border-bottom:1px solid #f2f3f5}.user-profile .border-box.billing .custom-table tr:last-child td{border-bottom:none}.user-profile .border-box.billing .custom-table tr a{color:#6b7ddf}.user-profile .border-box.billing .empty{text-align:center;padding:50px 0;color:#9397a5}.verify-success{padding:100px 0;text-align:center}.verify-success h4{margin:15px 0 7px;font-size:24px;font-weight:600}.verify-success p{max-width:396px;line-height:1.33;margin:0 auto 27px}.verify-success .btn-blue{font-size:16px;font-weight:600;padding:10px 47px}.contact .btn-purple{margin-top:0}.contact .contact-bottom{margin-top:32px;margin-bottom:180px}.contact .company-detail{background-image:-webkit-gradient(linear,left top,right top,from(#615cae),to(#506fbd));background-image:linear-gradient(90deg,#615cae,#506fbd);border-radius:3px;padding:29px 32px 28px;color:#fff;margin-bottom:1em}.contact .company-detail i{margin-right:30px}.contact .company-detail h4{font-size:16px;font-weight:600;margin-bottom:11px}.contact .company-detail p{font-size:15px;line-height:1.6}.contact .technical{border:1px solid #eef0f6;border-radius:3px;background:#fff;padding:24px 32px}.contact .technical ul{margin-bottom:0}.contact .technical ul li:first-child{margin-bottom:32px}.contact .technical ul li h4{font-size:16px;font-weight:600;margin-bottom:11px}.contact .technical ul li p{font-size:15px;line-height:1.6}.contact .technical ul li a{font-size:15px;color:#6b7ddf}.contact .right{width:100%;max-width:488px}.modal-youtube .modal-content{background:transparent}@media (min-width:576px){.modal-youtube .modal-dialog{max-width:700px}}.modal-youtube iframe{height:329px}.show-per-page{position:absolute;right:20px;bottom:17px}.show-per-page p{margin-right:15px}.show-per-page select{width:auto}.checkout-page .back{font-size:18px}.checkout-page .head h4{font-size:32px}.checkout-page .plan-info .plan{border-radius:2px;background-color:#f5f6f8;padding:14px 16px}.checkout-page .plan-info>div{width:50%}.checkout-page .plan-info input{height:52px;border-color:#e1e4e8}.payments a{position:relative}.payments a p{display:none;position:absolute;right:0;top:0;padding:16px 10px;background:#f4f5f7}.payments a:hover p{display:inline}.grecaptcha-badge{display:none!important}.settings{margin-bottom:-24px}.settings .left{box-shadow:2px 3px 6px 0 rgba(210,214,219,.69);border-top-left-radius:12px}.settings .left .tabs{padding:32px 17px}.settings .left .tabs li{margin-bottom:16px;font-weight:600}.settings .left .tabs li.active a{color:#6b7ddf;position:relative}.settings .left .tabs li.active a i{opacity:1}.settings .left .tabs li.active a i.settings-svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.settings .left .tabs li.active a i.notification-svg{-webkit-transform:translateX(0);transform:translateX(0)}.settings .left .tabs li.active a i.notification-svg+span{padding-left:26px}.settings .left .tabs li.active a span{padding-left:23px}.settings .left .tabs li.active a small,.settings .left .tabs li a:hover small{color:#23282e}.settings .left .tabs h4{color:#9fa4b0;font-size:12px;font-weight:600}.settings .left .tabs small{width:49px;height:24px;border-radius:12px;background-color:#ffd87a;font-size:14px;font-weight:600;padding-top:2px}.settings .left .tabs i{position:absolute;-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0}.settings .left .tabs i.notification-svg{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.settings .left .tabs span{-webkit-transition:all .3s ease;transition:all .3s ease}.settings .right .tab-content{padding:48px 73px}.settings .right .tab-content h4{font-size:18px;font-weight:900;margin-bottom:10px}.settings .right .tab-content h4 a{font-size:14px;font-weight:400}.settings .bordered{width:100%;border:1px solid #e3e8ee;border-radius:3px}.settings .bordered div.item{padding:24px;border-bottom:1px solid #e3e8ee}.settings .bordered div.item p{font-size:14px;color:#9397a5;line-height:1.43}.settings .bordered div.no-border{border:none}.settings .bordered div.foot{padding:8px 24px;background:#f8fafc}.settings .bordered div.foot .btn-blue{padding:7px 16px}.settings .bordered div.foot.disabled .btn-blue{opacity:.5;cursor:not-allowed}.settings .bordered .form-input{padding:10px 16px;height:auto}.settings .bordered select{background:#fff}.settings .bordered label{display:block;font-size:16px;width:180px;-webkit-box-flex:0;flex:0 0 auto;padding-top:15px}.settings .bordered.link{border:1px solid #f2f3f5;max-width:160px;padding:11px 25px}.settings .bordered.link a{color:#34d183}.settings .bordered.link a svg{margin-left:14px;-webkit-transition:all .5s ease;transition:all .5s ease}.settings .bordered.link a:hover svg{-webkit-animation:bounce 1s ease-in-out both;animation:bounce 1s ease-in-out both}.settings .bordered.link a.disabled{opacity:.5}.settings .bordered.link a.disabled:hover svg{-webkit-animation:none;animation:none}.settings .bordered.check{padding:15px 14px;font-size:15px;border:1px solid #f2f3f5}.settings .bordered.check .square-checkbox{margin-right:0}.settings .bordered.check .custom-control-label{padding-top:1px}.settings .bordered .label-premium{font-size:14px;font-weight:600;width:75px;border-radius:12px}.settings .bordered .key-list{border:1px solid #e1e4e8;padding:6px 8px}.settings .bordered .key-list.active{border-color:#6b7ddf}.settings .bordered .key-list a{border-radius:50px;background-color:#e6eaf0;text-align:center;font-size:14px;font-weight:600;padding:4px 11px;margin:8px 0 8px 8px}.settings .bordered .form-input.active{border-color:#6b7ddf}.settings .bordered-delete{padding:31px 24px;border-color:#db1f4d}.settings .bordered-delete a{border:1px solid #db1f4d;padding:7px;width:115px;text-align:center;border-radius:3px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);font-size:14px}.settings .bordered-delete a:focus,.settings .bordered-delete a:hover{color:#db1f4d}.settings .custom-checkbox label{padding-top:1px;color:#9397a5}.settings .custom-checkbox label span{padding-left:5px}.settings .custom-checkbox label span.active{color:#6b7ddf}.settings .custom-checkbox label:after,.settings .custom-checkbox label:before{width:20px;height:20px;border-radius:20px}.settings .empty h5{font-size:16px}.settings .empty p{font-size:15px;line-height:1.33}.settings .export{padding:30px 45px}.settings .export i.file-icon{margin-right:0;margin-bottom:5px;background-size:40px;width:40px;height:50px;display:block}.settings .export span{font-size:15px}.accordion-tabs{border-radius:3px;border-color:#e3e8ee}.accordion-tabs__head{padding:18px 16px}.accordion-tabs__head span,.accordion-tabs__head svg{-webkit-transition:all .15s ease;transition:all .15s ease}.accordion-tabs__head[aria-expanded=true] svg{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.accordion-tabs__head[aria-expanded=true] svg g{stroke:#6b7ddf}.accordion-tabs__head:hover span,.accordion-tabs__head[aria-expanded=true] span{color:#6b7ddf}.accordion-tabs .card-body{padding-left:46px;padding-top:7px}.accordion-tabs .card-body .bordered{padding:14px 16px;border-color:#e3e8ee}.accordion-tabs .card-body .integration-list>div{flex-basis:147px;padding-right:10px;margin-bottom:10px}.accordion-tabs .card-body .integration-list:after{content:"";-webkit-box-flex:1;flex:auto}.accordion-tabs .card-body .integration-list__item{box-shadow:0 1px 2px 0 rgba(0,0,0,.09);border:1px solid #e1e4e8;border-radius:5px;background:#fff;text-align:center;padding:25px 10px 16px}.accordion-tabs .card-body .integration-list__item p{padding-top:13px}.accordion-tabs .card-body .integration-list__item img{height:60px}.landing-page{background:#fff}.section1{padding:115px 0 193px}.section1 .row{-webkit-box-align:center;align-items:center}.section1 .left h1{font-size:50px;font-weight:900;line-height:.96;margin:0 0 28px}.section1 .left p{font-size:20px;line-height:1.45;color:rgba(0,0,0,.6);margin:0 0 28px}.section1 .left .buttons a{display:inline-block}.section1 .left .buttons a.btn-landing{padding:16px 56px;box-shadow:0 4px 5px 0 rgba(0,0,0,.2);margin-right:30px}.section1 .left .buttons a:first-child+a{-webkit-transition:all .3s ease;transition:all .3s ease}.section1 .left .buttons a:first-child+a:hover{color:#fa4d77}.section1 .left .buttons a:first-child+a:hover svg path{fill:#fa4d77}.section1 .left .buttons a svg{margin-right:8px}.section1 .right .circle{background:url(' +
                    _t +
                    ') no-repeat;width:392px;height:392px;position:relative;background-size:392px 392px;margin-left:40px}.section1 .right .circle:before{content:"";width:168px;height:111px;position:absolute;right:0;top:20px}.section1 .right .circle .action-box{border:0}.section1 .right .circle .box{position:absolute;top:50%;right:28px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:#fff;border-radius:3px;padding:36px 16px 21px;width:445px;box-shadow:0 4px 1px 0 rgba(14,14,14,.09)}.section1 .right .circle .box .box-window{position:absolute;top:0}.section1 .right .circle .box .box-window i{width:7px;height:7px;border-radius:50%;display:inline-block;margin-right:3px}.section1 .right .circle .box .box-window i:first-child{background:#fa4d77}.section1 .right .circle .box .box-window i:first-child+i{background:#fbe72d}.section1 .right .circle .box .box-window i:last-child{background:#53e04a}.section2 .head{margin-bottom:49px;text-align:center}.section2 .head h2{font-size:32px;font-weight:700;margin-bottom:5px}.section2 .head p{color:rgba(0,0,0,.7);font-size:18px}.section2 .head .color-blue{font-weight:600}.section2 .body{text-align:center}.section2 .body .img{margin-bottom:19px}.section2 .body h4{font-size:20px;font-weight:700}.section2 .body p{line-height:1.3;color:rgba(0,0,0,.7)}.section3{padding:118px 0}.section3 ul{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.section4{padding-bottom:154px}.section4 .row{-webkit-box-align:center;align-items:center}.section4 svg{vertical-align:baseline}.section4 .head{text-align:center;margin-bottom:96px}.section4 .head h2{font-size:32px;margin-bottom:5px;font-weight:700}.section4 .head p{font-size:18px;color:rgba(0,0,0,.7);line-height:1.4}.section4 .color-blue{font-weight:600}.section4 .left ul li{color:rgba(0,0,0,.8);display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #eaeaea;line-height:1.4}.section4 .left ul li:last-child{border-bottom:0}.section4 .left ul li svg{margin-right:12px;width:16px}.section4 .left ul li span{line-height:1;font-size:18px;font-weight:600;color:#404347;display:block;margin-bottom:8px}.section4 .right{text-align:right}.section4 .right .img1 img{width:100%;max-width:344px}.section4 .right .img2{position:absolute;left:40px;top:55px}.section4 .right .img2 img:first-child{display:block;width:293px}.section4 .right .img2 img:last-child{position:relative;left:64px;margin-top:-25px}.section5{background-image:-webkit-gradient(linear,left top,left bottom,from(#f2f3f7),to(#e9ecf3));background-image:linear-gradient(180deg,#f2f3f7,#e9ecf3);margin-bottom:-2px}.section5 .row{-webkit-box-align:center;align-items:center}.section5 img{width:460px;margin-top:-30px}.section5 h2{font-size:48px;font-weight:700;line-height:1.4}.section5 p{font-size:24px;color:#020801;margin-bottom:25px}.section5 a.btn-landing{font-weight:600;font-size:13px;padding:13px 27px}.section6{padding-bottom:149px}.section6 .row{border:1px solid #f2f3f5}.section6 .left{padding:0 41px}.section6 .left h2{font-size:32px;font-weight:700;margin-bottom:13px}.section6 .left p{color:rgba(0,0,0,.7);margin-bottom:24px}.section6 .color-blue{font-weight:600}.section6 .right{padding-right:0}.section6 .right .bg{background:url(' +
                    St +
                    ') no-repeat;background-size:cover;position:relative;height:364px}.section6 .right .bg .item{width:88px;height:88px;box-shadow:0 8px 13px 0 rgba(0,0,0,.26);border-radius:50%;background:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:absolute;-webkit-animation:ballon 3s ease-in-out infinite;animation:ballon 3s ease-in-out infinite}.section6 .right .bg .item p{font-size:11px}.section6 .right .bg .item p span{font-size:22px;font-weight:600;display:block;line-height:1;margin-bottom:2px}.section6 .right .bg .item i{display:block}.section6 .right .bg .item.item1{top:8%;left:18%;-webkit-animation-delay:1s;animation-delay:1s}.section6 .right .bg .item.item1 i{background:url(' +
                    Tt +
                    ') no-repeat;width:44px;height:47px}.section6 .right .bg .item.item2{top:14%;right:16%;-webkit-animation-delay:1.2s;animation-delay:1.2s}.section6 .right .bg .item.item2 i{background:url(' +
                    Ot +
                    ') no-repeat;width:46px;height:46px;-o-object-fit:contain;object-fit:contain}.section6 .right .bg .item.item3{top:40%;left:40%;-webkit-animation-delay:1.5s;animation-delay:1.5s}.section6 .right .bg .item.item3 i{background:url(' +
                    Lt +
                    ') no-repeat;width:39px;height:39px}.section6 .right .bg .item.item4{bottom:8%;left:18%;-webkit-animation-delay:1.7s;animation-delay:1.7s}.section6 .right .bg .item.item4 i{background:url(' +
                    Zt +
                    ') no-repeat;width:33px;height:47px}.section6 .right .bg .item.item5{bottom:12%;right:16%;-webkit-animation-delay:2s;animation-delay:2s}.form-alternative{padding:115px 0}.form-alternative .head h2{font-size:40px;font-weight:900}.form-alternative .head p{margin:16px 0 60px;font-size:18px;line-height:1.56}.form-alternative .table-responsive{border:1px solid #eaeaea;padding:0 32px;box-shadow:0 1px 2px 0 rgba(0,0,0,.09);border-radius:3px}.form-alternative .table{margin-bottom:0}.form-alternative .table img{margin-left:15px}.form-alternative .table img.ok{width:15px}.form-alternative .table img.cancel{width:10px}.form-alternative .table tr th{border-top:none;font-size:15px;color:#9397a5;font-weight:600;padding-top:10px;padding-bottom:10px}.form-alternative .table tr td{font-weight:600;padding-top:14px;padding-bottom:14px}.form-alternative .table tr td:first-child{font-weight:400}.form-alternative .table tr td:first-child+td{color:#6b7ddf}.form-alternative .table tr td:last-child{text-align:left;color:#f62d47}.form-alternative .started{background-image:-webkit-gradient(linear,left top,right top,from(#615cae),to(#506fbd));background-image:linear-gradient(90deg,#615cae,#506fbd);border-radius:3px;padding:38px 24px 15px;color:#fff}.form-alternative .started h4{font-size:20px;font-weight:600;margin-bottom:0}.form-alternative .started p{line-height:1.4;color:hsla(0,0%,100%,.9);padding:16px 0 108px}.form-alternative .started .btn{display:block;background:#fff;border-radius:3px;color:#6b7ddf;margin-bottom:14px}.form-alternative .started span{font-size:13px;display:block;text-align:center}@media (max-width:768px){.action-box{padding:10px;word-break:break-word}.header .flex ul{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.m-header{box-shadow:0 1px 2px 0 rgba(0,0,0,.1);padding:16px 24px}.m-header div[class^=m-header-]{-webkit-box-flex:1;flex:1}#navModal .modal{padding-right:0!important}#navModal .modal-dialog{left:50%;width:50%;margin:0}#navModal .modal-content{background:#f4f5f7;border-radius:0}#navModal .modal-content,#navModal .modal-dialog{height:100%}#navModal .modal-top{padding-right:10px;padding-top:7px}#navModal .modal-bottom{padding-top:24px;padding-left:16px;line-height:40px}.section1{padding-top:40px!important;padding-bottom:40px!important}.section1 .left>p,.section1 h1{text-align:center}.section1 h1{font-size:28px!important;margin-bottom:14px!important}.section1 .left>p{font-size:18px}.section1 .circle{background:none!important;width:auto!important;height:auto!important;margin-left:0!important}.section1 .action-box{position:relative!important;-webkit-transform:none!important;transform:none!important;top:auto!important;right:auto!important;width:auto!important;border:1px solid #ededed!important;overflow:hidden;margin-top:24px;white-space:nowrap}.section1 .action-box p{font-size:13px}.section1 .cta-button{font-size:15px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.section1 .cta-button .btn-landing{margin-right:0!important;margin-bottom:24px}.section2 .head{margin-bottom:32px}.section2 .head h2{font-size:28px!important;margin-bottom:6px}.section2 .head p{font-size:16px!important}.section2 .body .img{margin-bottom:16px}.section2 .body h4{font-size:18px;margin-bottom:2px}.section3{padding:40px 0;overflow-y:overlay;max-width:100%;margin-right:0}.section3 ul{margin-bottom:0}.section3 li{margin-right:17px;margin-left:20px}.section6{padding-bottom:48px}.section6 h2{font-size:28px!important}.section6 .left{padding:24px}.section6 .left p{margin-bottom:16px}.section6 .right{padding-left:0}.section4{padding-bottom:16px!important}.section4 .head p{font-size:16px!important}.section4 .head h2{font-size:28px!important}.section5{text-align:center;padding-top:16px;padding-bottom:26px}.section5 h2{font-size:40px}.section5 p{font-size:20px;margin-bottom:16px}footer{padding:40px 24px}.form-integration .brand-tab{overflow:scroll;-webkit-box-pack:unset!important;justify-content:unset!important;padding-bottom:10px;margin-left:10px;margin-right:10px}.form-integration .brand-tab li a{padding:7px 15px;width:165px!important}.form-integration .brand-tab p{display:-webkit-box;display:flex;width:160px;-webkit-box-align:center;align-items:center}.form-integration .brand-tab p span{margin-right:3px}.form-detail .head{padding:24px 0 64px;height:133px}.form-detail .form-author{padding-right:7px}.form-detail .form-author ul{margin-bottom:0}.form-detail .form-detail-tabs{margin-top:0}.form-detail .settings .accordion-tabs .card-body{padding-left:18px;padding-right:18px}.form-detail .settings .accordion-tabs .integration-list{-webkit-box-pack:center!important;justify-content:center!important}.form-detail .settings .accordion-tabs .integration-list:after{content:none}.form-detail .submission-table{padding:0}.form-detail .submission-table .right .tab-content{padding:32px 0 0}.form-detail .submission-table .right .tab-content .item{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.form-detail .submission-table .right .tab-content .foot{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.form-detail .submission-table .right .tab-content .bordered-delete{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.form-detail .submission-table .right .tab-content .bordered-delete .pl-5{padding:0!important;margin-top:10px}.form-detail .submission-table .left{padding:14px 0 14px 20px;overflow:scroll}.form-detail .submission-table .left .tabs{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:0;width:430px;margin:0}.form-detail .submission-table .left .tabs li{margin:0 24px 0 0}.form-detail .submission-table .left .tabs li small{display:none!important}.form-detail .submission-table .left .tabs li.active a{color:#6b7ddf;position:relative}.form-detail .submission-table .left .tabs li.active a i{opacity:0}.form-detail .submission-table .left .tabs li.active a i.notification-svg,.form-detail .submission-table .left .tabs li.active a i.settings-svg{display:none}.form-detail .submission-table .left .tabs li.active a i.notification-svg+span,.form-detail .submission-table .left .tabs li.active a span{padding-left:0}.form-detail .submission-table ul.nav-tabs{margin-left:0}.form-detail .tab-body{border-radius:0;padding-bottom:3px}.form-detail .tab-head{padding:20px 16px!important;width:100%;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}.form-detail .tab-head .form-filter p{width:140px}.form-detail .btn-bordered{background:#fff}.form-detail .form-integrat{padding:24px 16px}.form-detail .form-settings{padding:16px}.form-detail .nav-tabs{width:100%;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}.form-detail .table-form{border:0}.form-detail .table-form .checkbox:before{content:""}.form-detail .table-form .checkbox .square-checkbox{margin-right:2px}.form-detail .table-form td{padding-top:6px;padding-bottom:6px}.form-detail .table-form td:before{font-weight:600;text-transform:capitalize}.form-detail .table-form .vcard{margin:0;padding-top:16px;padding-bottom:16px}.contact-bottom{margin-bottom:32px!important}.detail-page{margin-top:2px;padding-top:40px}.team{padding:32px 0!important}.team-member .col{flex-basis:50%;margin-bottom:24px}.pricing .pricing-list{padding:0}.pricing .pricing-list .item{margin:24px 16px 8px!important}.pricing .pricing-list .item .price{height:auto!important;padding:0 0 54px!important}.pricing .list{padding-left:24px}.pricing .pricing-foot{padding-bottom:24px}.pricing .pricing-foot .item{margin-bottom:16px}.pricing .faq{margin-bottom:24px!important}.pricing .faq h2{padding-bottom:16px!important}.form-alternative{padding:25px 0;margin-bottom:50px}.form-alternative .head p{margin-bottom:25px}.form-alternative .table-responsive{padding:0;font-size:14px}.user-profile .personal-info ul li{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline!important;align-items:baseline!important}.user-profile .personal-info ul li p{text-align:left!important}}@media (max-width:768px) and (min-width:576px){.submission-table{padding:0}.submission-table .right .tab-content{padding:32px 0 0}.submission-table .right .tab-content .bordered-delete{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.submission-table .right .tab-content .bordered-delete .pl-5{padding:0!important;margin-top:10px}.submission-table .left{padding:14px 0 14px 20px;overflow:auto}.submission-table .left .tabs{display:inline!important}.submission-table .left .tabs li{margin-bottom:16px!important;margin-right:0!important}.submission-table .left .tabs li small{display:block!important}.submission-table .left .tabs li.active a{color:#6b7ddf;position:relative}.submission-table .left .tabs li.active a i{opacity:0}.submission-table .left .tabs li.active a i.notification-svg,.submission-table .left .tabs li.active a i.settings-svg{display:none}.submission-table .left .tabs li.active a i.notification-svg+span,.submission-table .left .tabs li.active a span{padding-left:0}.submission-table ul.nav-tabs{margin-left:0}}',
                ''
            ]),
                (t.exports = e);
        },
        ,
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjEzIiB2aWV3Qm94PSIwIDAgNiAxMyI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzIzMjgyRSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNiAxTDAgNi41IDYgMTIiLz4KPC9zdmc+Cg==';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxnIGZpbGw9IiM5Mzk3QTUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQxLjE3MiAwTDAgNDEuMTcydjUuNjU2TDQ2LjgyOCAwek0zMC44MjggMGgtNS42NTZMMCAyNS4xNzJ2NS42NTZ6TTE0LjgyOCAwSDkuMTcyTDAgOS4xNzJ2NS42NTZ6TTYwIDBoLTIuODI4TDAgNTcuMTcyVjYwaDIuODI4TDYwIDIuODI4ek02MCAxOC44Mjh2LTUuNjU2TDEzLjE3MiA2MGg1LjY1NnpNNDUuMTcyIDYwaDUuNjU2TDYwIDUwLjgyOHYtNS42NTZ6TTYwIDI5LjE3MkwyOS4xNzIgNjBoNS42NTZMNjAgMzQuODI4eiIvPgogICAgPC9nPgo8L3N2Zz4K';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIxIDE1Ij4KICAgIDxwYXRoIGZpbGw9IiM5Mzk3QTUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE3LjM4OCA2LjI0NEMxNi43OSAyLjY4NyAxMy43MDggMCAxMC4wNjIgMCA2LjI5NyAwIDMuMTcgMi44MiAyLjY5NyA2LjUyNkE0LjQgNC40IDAgMCAwIDAgMTAuNTg4QzAgMTMuMDIxIDEuOTYzIDE1IDQuMzc1IDE1aDEyLjI1QzE5LjAzNyAxNSAyMSAxMy4wMiAyMSAxMC41ODhjMC0yLjE3LTEuNTYyLTMuOTgtMy42MTItNC4zNDR6TTEwLjUgMTIuMzUzTDYuMTI1IDcuOTRoMy41di0zLjUzaDEuNzV2My41M2gzLjVMMTAuNSAxMi4zNTN6Ii8+Cjwvc3ZnPgo=';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDUiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA0NSA1NiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTQyLjYzMiA1NEgyLjM2OEEyLjM1OCAyLjM1OCAwIDAgMSAwIDUxLjY1MlYyLjM0OEEyLjM1OCAyLjM1OCAwIDAgMSAyLjM2OCAwSDMwLjc5TDQ1IDE0LjA4N3YzNy41NjVBMi4zNTggMi4zNTggMCAwIDEgNDIuNjMyIDU0eiIvPgogICAgICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIxMDQuNCUiIGhlaWdodD0iMTA3LjQlIiB4PSItMi4yJSIgeT0iLTEuOSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC44NzEyIDAgMCAwIDAgMC44NzQxMzMzMzMgMCAwIDAgMCAwLjg4IDAgMCAwIDEgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8dXNlIGZpbGw9IiNGMkYzRjUiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICA8L2c+Cjwvc3ZnPgo=';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyOCIgcj0iMjgiIGZpbGw9IiNGRkYiIHN0cm9rZT0iIzM0RDE4MyIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICAgICAgPHBhdGggZmlsbD0iIzM0RDE4MyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjMuODU3IDM4Yy0uNDcxIDAtLjc4Ni0uMTctMS4xLS41MWwtNi4yODYtNi44YTEuNzM4IDEuNzM4IDAgMCAxIDAtMi4zOGMuNjI5LS42OCAxLjU3Mi0uNjggMi4yIDBsNS4xODYgNS42MUwzNS4zMyAyMS41MWMuNjI4LS42OCAxLjU3MS0uNjggMi4yIDAgLjYyOC42OC42MjggMS43IDAgMi4zOGwtMTIuNTcyIDEzLjZjLS4zMTQuMzQtLjYyOC41MS0xLjEuNTF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ5MkE2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utb3BhY2l0eT0iLjciIG9wYWNpdHk9Ii43MDQiPgogICAgICAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS4xNTQiIGQ9Ik0xMSAxTDEgMTEiLz4KICAgICAgICA8cGF0aCBkPSJNMTEgMTFMMSAxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/61a9a7a.svg';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9IiM3NDc4ODUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTIgNnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY2SDJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIgM1YxYzAtLjYtLjQtMS0xLTFINWMtLjYgMC0xIC40LTEgMXYySDB2MmgxNlYzaC00em0tMiAwSDZWMmg0djF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM3NDc4ODUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTExLjMxNiAwSDQuNjg0TDAgNC42ODR2Ni42MzJMNC42ODQgMTZoNi42MzJMMTYgMTEuMzE2VjQuNjg0TDExLjMxNiAwek04IDEyLjcxMWMtLjY0IDAtMS4xNTYtLjUxNS0xLjE1Ni0xLjE1NVM3LjM2IDEwLjQgOCAxMC40Yy42NCAwIDEuMTU2LjUxNiAxLjE1NiAxLjE1NiAwIC42NC0uNTE2IDEuMTU1LTEuMTU2IDEuMTU1em0uODg5LTMuODIySDcuMTFWMy41NTZIOC44OXY1LjMzM3oiLz4KPC9zdmc+Cg==';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/0bbf214.svg';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNkI3RERGIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjEuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPHBhdGggZD0iTTE1LjY1MiA4YTEuMzkgMS4zOSAwIDAgMC0xLjM5MS0xLjM5MWgtLjg3OGE1LjU0MyA1LjU0MyAwIDAgMC0uNTkzLTEuNDMybC42Mi0uNjJhMS4zOTEgMS4zOTEgMCAxIDAtMS45NjctMS45NjhsLS42Mi42MmE1LjU0MyA1LjU0MyAwIDAgMC0xLjQzMi0uNTkydi0uODc4YTEuMzkxIDEuMzkxIDAgMCAwLTIuNzgyIDB2Ljg3OGMtLjUxLjEzMi0uOTkuMzMyLTEuNDMyLjU5M2wtLjYyLS42MmExLjM5MSAxLjM5MSAwIDEgMC0xLjk2OCAxLjk2N2wuNjIuNjJjLS4yNi40NDItLjQ2LjkyMi0uNTkyIDEuNDMyaC0uODc4YTEuMzkxIDEuMzkxIDAgMCAwIDAgMi43ODJoLjg3OGMuMTMyLjUxLjMzMi45OS41OTMgMS40MzJsLS42Mi42MmExLjM5MSAxLjM5MSAwIDEgMCAxLjk2NyAxLjk2OGwuNjItLjYyYy40NDIuMjYuOTIyLjQ2IDEuNDMyLjU5MnYuODc4YTEuMzkxIDEuMzkxIDAgMCAwIDIuNzgyIDB2LS44NzhjLjUxLS4xMzIuOTktLjMzMiAxLjQzMi0uNTkzbC42Mi42MmExLjM5MSAxLjM5MSAwIDEgMCAxLjk2OC0xLjk2N2wtLjYyLS42MmMuMjYtLjQ0Mi40Ni0uOTIyLjU5Mi0xLjQzMmguODc4Yy43NjggMCAxLjM5MS0uNjIyIDEuMzkxLTEuMzkxeiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSIyLjA4NyIvPgogICAgPC9nPgo8L3N2Zz4K';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIwIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNkI3RERGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS42Ij4KICAgICAgICA8cmVjdCB3aWR0aD0iMTcuNiIgaGVpZ2h0PSIxNC40IiB4PSIuOCIgeT0iLjgiIHJ4PSIxLjYiLz4KICAgICAgICA8cGF0aCBkPSJNNCA0aDExLjIiLz4KICAgIDwvZz4KPC9zdmc+Cg==';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDEzIDE1Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNkI3RERGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMSAxNGw1LjMxOC0zLjU0NUwxMS42MzYgMTRWMi4xODJjMC0uNjUzLS41MjktMS4xODItMS4xODEtMS4xODJIMi4xODJDMS41MjkgMSAxIDEuNTMgMSAyLjE4MlYxNHoiLz4KPC9zdmc+Cg==';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQjlCQ0M1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4zIj4KICAgICAgICA8cGF0aCBkPSJNMTMuNTk0IDEuNDA2bC02LjUgNi41TTcuOTA2IDEuNDA2aDUuNjg4djUuNjg4TTExLjE1NiA4LjcxOXY0LjA2MmEuODEzLjgxMyAwIDAgMS0uODEyLjgxM0gyLjIxOWEuODEzLjgxMyAwIDAgMS0uODEzLS44MTNWNC42NTZjMC0uNDQ4LjM2NC0uODEyLjgxMy0uODEySDYuMjgiLz4KICAgIDwvZz4KPC9zdmc+Cg==';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNkI3RERGIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjEuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+CiAgICAgICAgPHBhdGggZD0iTTguNTMzIDIuMTMzSDE2TTAgMi4xMzNoMi4xMzNNMTQuNCA4SDE2TTAgOGg4Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iNC4yNjciIGN5PSIyLjEzMyIgcj0iMi4xMzMiLz4KICAgICAgICA8cGF0aCBkPSJNOC41MzMgMTMuODY3SDE2TTAgMTMuODY3aDIuMTMzIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iNC4yNjciIGN5PSIxMy44NjciIHI9IjIuMTMzIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAuMTMzIiBjeT0iOCIgcj0iMi4xMzMiLz4KICAgIDwvZz4KPC9zdmc+Cg==';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDIxIDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQzFDNEM3IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9IjEuNDA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIj4KICAgICAgICA8cGF0aCBkPSJNMCA2LjVTMy44IDAgOS41IDAgMTkgNi41IDE5IDYuNSAxNS4yIDEzIDkuNSAxMyAwIDYuNSAwIDYuNXoiLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iOS41IiBjeT0iNi41IiByeD0iMi44NSIgcnk9IjIuNzg2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOSIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDE5IDE5Ij4KICAgIDxnIGZpbGw9IiMyMzI4MkUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZD0iTTE3LjE0NiA2LjczMmwtMS42NzUgMS42OWMuMzI3LjQxMy41OTUuNzkuNzg3IDEuMDc4LS44OTQgMS4zNDItMy4zNTMgNC41MzYtNi41NDMgNC43MzJMNy41OCAxNi4zODdhNy40NTQgNy40NTQgMCAwIDAgMS44MzIuMjM4YzUuNTM3IDAgOS4xMS02LjI3NSA5LjI2LTYuNTQuMi0uMzYyLjIwMi0uODA0IDAtMS4xNjUtLjA1NC0uMS0uNTg3LTEuMDQ2LTEuNTI2LTIuMTg4ek0uMzQ1IDE4LjY1MmExLjE2OCAxLjE2OCAwIDAgMCAxLjY2MyAwbDE2LjQ3LTE2LjYyNWMuNDYtLjQ2NC40Ni0xLjIxNSAwLTEuNjhhMS4xNjcgMS4xNjcgMCAwIDAtMS42NjMgMGwtMy4yMyAzLjI2Yy0xLjIxNC0uNzItMi42MDctMS4yMzItNC4xNzMtMS4yMzItNS41OTQgMC05LjExNyA2LjI4LTkuMjY0IDYuNTQ4LS4xOTkuMzYtLjE5Ny43OTguMDAzIDEuMTU4LjA4Mi4xNDggMS4yMjggMi4xNCAzLjE2OCAzLjg5TC4zNDQgMTYuOTc0YTEuMTk0IDEuMTk0IDAgMCAwIDAgMS42Nzh6TTIuNTY1IDkuNUMzLjQ4IDguMTE3IDYuMDU2IDQuNzUgOS40MTMgNC43NWMuODczIDAgMS42OS4yMzkgMi40NDQuNjAzbC0xLjg0MiAxLjg2YTIuMjQ1IDIuMjQ1IDAgMCAwLS42MDItLjA4OEEyLjM2MyAyLjM2MyAwIDAgMCA3LjA1OSA5LjVjMCAuMjExLjAzNC40MTMuMDg3LjYwOGwtMi4xNTggMi4xNzhhMTQuOTI3IDE0LjkyNyAwIDAgMS0yLjQyMi0yLjc4N3oiLz4KICAgIDwvZz4KPC9zdmc+Cg==';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/7232c84.svg';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyMCAyNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTE4Ljk0NyAyNEgxLjA1M0ExLjA0OCAxLjA0OCAwIDAgMSAwIDIyLjk1N1YxLjA0M0MwIC40NjcuNDcxIDAgMS4wNTMgMGgxMi42MzFMMjAgNi4yNnYxNi42OTdjMCAuNTc2LS40NzEgMS4wNDMtMS4wNTMgMS4wNDN6Ii8+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgd2lkdGg9IjEwNSUiIGhlaWdodD0iMTA4LjMlIiB4PSItMi41JSIgeT0iLTIuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC44NzEyIDAgMCAwIDAgMC44NzQxMzMzMzMgMCAwIDAgMCAwLjg4IDAgMCAwIDEgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjNGNSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbD0iIzQzOUJGRiIgZD0iTTQgOWgxMXYySDR6TTQgMTNoMTF2Mkg0ek00IDE3aDd2Mkg0eiIvPgogICAgPC9nPgo8L3N2Zz4K';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyMCAyNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTE4Ljk0NyAyNEgxLjA1M0ExLjA0OCAxLjA0OCAwIDAgMSAwIDIyLjk1N1YxLjA0M0MwIC40NjcuNDcxIDAgMS4wNTMgMGgxMi42MzFMMjAgNi4yNnYxNi42OTdjMCAuNTc2LS40NzEgMS4wNDMtMS4wNTMgMS4wNDN6Ii8+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgd2lkdGg9IjEwNSUiIGhlaWdodD0iMTA4LjMlIiB4PSItMi41JSIgeT0iLTIuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC44NzEyIDAgMCAwIDAgMC44NzQxMzMzMzMgMCAwIDAgMCAwLjg4IDAgMCAwIDEgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjNGNSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbD0iIzBFQkQ2NiIgZD0iTTQgMTFoM3YzSDR6TTggMTFoM3YzSDh6TTQgMTVoM3YzSDR6TTggMTVoM3YzSDh6TTEyIDExaDN2M2gtM3pNMTIgMTVoM3YzaC0zeiIvPgogICAgPC9nPgo8L3N2Zz4K';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyMCAyNSI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYiIgZD0iTTE4Ljk0NyAyNEgxLjA1M0ExLjA0OCAxLjA0OCAwIDAgMSAwIDIyLjk1N1YxLjA0M0MwIC40NjcuNDcxIDAgMS4wNTMgMGgxMi42MzFMMjAgNi4yNnYxNi42OTdjMCAuNTc2LS40NzEgMS4wNDMtMS4wNTMgMS4wNDN6Ii8+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgd2lkdGg9IjEwNSUiIGhlaWdodD0iMTA4LjMlIiB4PSItMi41JSIgeT0iLTIuMSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC44NzEyIDAgMCAwIDAgMC44NzQxMzMzMzMgMCAwIDAgMCAwLjg4IDAgMCAwIDEgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjNGNSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbD0iIzkzOTdBNSIgZD0iTTQgOWgxMXYySDR6TTQgMTNoMTF2Mkg0ek00IDE3aDd2Mkg0eiIvPgogICAgPC9nPgo8L3N2Zz4K';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/c7d1986.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/271144f.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/bad264e.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/befe855.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/ed28fe3.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/edb0108.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/292a8cd.png';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/efe108e.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/e43916f.svg';
        },
        function(t, e) {
            t.exports =
                'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMyQTJEMzMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMEM0LjAzOCAwIDAgNC4wMzggMCA5czQuMDM4IDkgOSA5IDktNC4wMzggOS05LTQuMDM4LTktOS05em00LjUgOS41NjNIOC40MzdWMy45MzZoMS4xMjZ2NC41SDEzLjV2MS4xMjZ6Ii8+Cjwvc3ZnPgo=';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/aaaa90d.png';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/f8f964c.png';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/cdc1c1b.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/8b8b89d.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/57f5d63.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/ebc7dca.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/57bcfbf.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/a3b866d.png';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/0135e88.svg';
        },
        function(t, e, o) {
            t.exports = o.p + 'img/789be76.svg';
        },
        function(t, e, o) {
            'use strict';
            o.r(e);
            var n = o(8),
                r = o(50);
            o(52);
            n.default.use(r.a);
            e.default = function() {
                return new r.a.Store({ modules: {} });
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
        function(t, e, o) {
            'use strict';
            o.r(e);
            o(64), o(81), o(141), o(3), o(2);
            var n = {
                getForm: function(t, data) {
                    var e = t.commit;
                    this.$axios.get('/forms/' + data.id).then(function(t) {
                        var o = t.data.data;
                        e('setForms', o);
                    });
                },
                deleteForm: function(t, data) {
                    t.commit;
                    this.$axios.delete('/forms/' + data).then(function(t) {});
                },
                searchForm: function(t, data) {
                    var e = t.commit,
                        o = data.toLowerCase(),
                        n = this.state.formDetail.all.formData.values.filter(
                            function(t) {
                                return Object.values(t).some(function(t) {
                                    return String(t)
                                        .toLowerCase()
                                        .includes(o);
                                });
                            }
                        );
                    return n.length > 0 && e('setSearch', n), n.length;
                }
            };
            e.default = {
                namespaced: !0,
                state: { all: [] },
                getters: {},
                actions: n,
                mutations: {
                    setForms: function(t, e) {
                        t.all = e;
                    },
                    setSearch: function(t, e) {
                        t.all.formData.values = e;
                    }
                }
            };
        },
        function(t, e, o) {
            'use strict';
            o.r(e);
            var n = {
                getAllForms: function(t) {
                    var e = t.commit;
                    this.$axios.get('/forms').then(function(t) {
                        var o = t.data.data;
                        e('setForms', o);
                    });
                },
                addForm: function(t, data) {
                    t.commit;
                    var e = t.dispatch;
                    this.$axios
                        .post('/forms', data)
                        .then(function(t) {
                            return e('getAllForms'), t.data;
                        })
                        .catch(function(t) {
                            console.error('Error adding document: ', t);
                        });
                }
            };
            e.default = {
                namespaced: !0,
                state: { all: [] },
                getters: {},
                actions: n,
                mutations: {
                    setForms: function(t, e) {
                        t.all = e;
                    },
                    setData: function(t, e) {
                        t.all.status = e;
                    }
                }
            };
        }
    ],
    [[153, 47, 2, 48]]
]);
