(window.webpackJsonp = window.webpackJsonp || []).push([
    [22],
    {
        410: function(t, e, n) {
            'use strict';
            n.r(e);
            var r = { layout: 'docs' },
                o = n(11),
                component = Object(o.a)(
                    r,
                    function() {
                        var t = this.$createElement;
                        this._self._c;
                        return this._m(0);
                    },
                    [
                        function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n('div', [
                                n('h2', { staticClass: 'content-sub' }, [
                                    t._v('HTML5 Form Validation')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        While we’re handling the form backends of your forms,  \n        you may want to validate '
                                    ),
                                    n('br'),
                                    t._v(
                                        ' them before you publish to make sure \n        your users enter the correct data. Even though '
                                    ),
                                    n('br'),
                                    t._v(
                                        ' it is still\n        not being supported in \n        '
                                    ),
                                    n(
                                        'a',
                                        {
                                            attrs: {
                                                href:
                                                    'http://caniuse.com/#feat=form-validation'
                                            }
                                        },
                                        [t._v('some browsers')]
                                    ),
                                    t._v(
                                        ', \n        HTML5 gives you a lot, from marking fields '
                                    ),
                                    n('br'),
                                    t._v(
                                        ' as required, to size limits, \n        to ensuring emails look like emails. Here are the most common validations:\n    '
                                    )
                                ]),
                                n('p'),
                                n('h2', { staticClass: 'content-sub' }, [
                                    t._v('Required Attribute')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        This input type guarantees an email address is formatted correctly.\n    '
                                    )
                                ]),
                                n('p'),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v(
                                            '<input type="text" name="message" '
                                        ),
                                        n('span', [t._v('required')]),
                                        t._v('>')
                                    ])
                                ]),
                                t._v(' '),
                                n('h2', { staticClass: 'content-sub' }, [
                                    t._v('Email Attribute')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        This input type guarantees an email address is formatted correctly.\n    '
                                    )
                                ]),
                                n('p'),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v('<input '),
                                        n('span', [t._v('type="email"')]),
                                        t._v(' name="email">')
                                    ])
                                ]),
                                t._v(' '),
                                n('h2', { staticClass: 'content-sub' }, [
                                    t._v('Number Attribute')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        This input type ensures a number with a range.\n    '
                                    )
                                ]),
                                n('p'),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v('<input '),
                                        n('span', [
                                            t._v(
                                                ' type="number" min="18" max="99" value="30"'
                                            )
                                        ]),
                                        t._v(' name="age">')
                                    ])
                                ]),
                                t._v(' '),
                                n('h3', { staticClass: 'content-sub' }, [
                                    t._v('URL Attribute')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        This input type guarantees a URL is formatted correctly.\n    '
                                    )
                                ]),
                                n('p'),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v('<input '),
                                        n('span', [t._v('type="url"')]),
                                        t._v(' name="website">')
                                    ])
                                ]),
                                t._v(' '),
                                n('h3', { staticClass: 'content-sub' }, [
                                    t._v('Length Attributes')
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        ' \n        With these attributes, you can limit the characters in a text input or textarea.\n    '
                                    )
                                ]),
                                n('p'),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v('<input type="text" '),
                                        n('span', [t._v('maxlength="10"')]),
                                        t._v('>')
                                    ]),
                                    t._v(' '),
                                    n('br'),
                                    t._v(' '),
                                    n('p', [
                                        t._v('<textarea '),
                                        n('span', [t._v('minlength="20"')]),
                                        t._v('></textarea>')
                                    ])
                                ])
                            ]);
                        }
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
        }
    }
]);
