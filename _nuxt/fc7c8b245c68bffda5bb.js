(window.webpackJsonp = window.webpackJsonp || []).push([
    [20],
    {
        408: function(t, e, n) {
            'use strict';
            n.r(e);
            var o = {
                    head: {
                        script: [
                            {
                                src:
                                    'https://static.codepen.io/assets/embed/ei.js',
                                async: !0
                            }
                        ]
                    },
                    layout: 'docs'
                },
                r = n(11),
                component = Object(r.a)(
                    o,
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
                                n('h1', { staticClass: 'content-sub' }, [
                                    t._v('Sending submissions with AJAX')
                                ]),
                                t._v(' '),
                                n('p', { staticClass: 'mb-3' }, [
                                    t._v(
                                        " \n        If you don't want to redirect the user after they submit the form or want to add \n        extra validation logic to your form, you might want to consider using JavaScript\n        to submit. With Getform, you can send your form data with AJAX. \n        Here's an example code block you can use:\n    "
                                    )
                                ]),
                                t._v(' '),
                                n(
                                    'p',
                                    {
                                        staticClass: 'codepen',
                                        staticStyle: {
                                            height: '400px',
                                            'box-sizing': 'border-box',
                                            display: 'flex',
                                            'align-items': 'center',
                                            'justify-content': 'center',
                                            border: '2px solid black',
                                            margin: '1em 0',
                                            padding: '1em'
                                        },
                                        attrs: {
                                            'data-height': '400',
                                            'data-theme-id': 'dark',
                                            'data-default-tab': 'js',
                                            'data-user': 'getform',
                                            'data-slug-hash': 'vMrZwW',
                                            'data-pen-title':
                                                'HTML Ajax Form Example &amp; File Upload'
                                        }
                                    },
                                    [
                                        n('span', [
                                            t._v('See the Pen '),
                                            n(
                                                'a',
                                                {
                                                    attrs: {
                                                        href:
                                                            'https://codepen.io/getform/pen/vMrZwW/'
                                                    }
                                                },
                                                [
                                                    t._v(
                                                        '\n    HTML Ajax Form Example & File Upload'
                                                    )
                                                ]
                                            ),
                                            t._v(' by Getform ('),
                                            n(
                                                'a',
                                                {
                                                    attrs: {
                                                        href:
                                                            'https://codepen.io/getform'
                                                    }
                                                },
                                                [t._v('@getform')]
                                            ),
                                            t._v(')\n    on '),
                                            n(
                                                'a',
                                                {
                                                    attrs: {
                                                        href:
                                                            'https://codepen.io'
                                                    }
                                                },
                                                [t._v('Codepen')]
                                            ),
                                            t._v('.')
                                        ])
                                    ]
                                ),
                                t._v(' '),
                                n('p', { staticClass: 'mt-4' }, [
                                    n('b', [t._v('Note:')]),
                                    t._v(
                                        ' If you want to get your responses in JSON form, you need to add \n        '
                                    ),
                                    n('span', { staticClass: 'span-border' }, [
                                        t._v('dataType: "json"')
                                    ]),
                                    t._v(
                                        ' , it sets \n        Accept Http Header to '
                                    ),
                                    n('span', { staticClass: 'span-border' }, [
                                        t._v('application/json')
                                    ])
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v('  \n        After that you can add '),
                                    n('span', { staticClass: 'span-border' }, [
                                        t._v('id="ajaxForm"')
                                    ]),
                                    t._v(
                                        ' to your \n        HTML form to finish the setup like this: \n    '
                                    )
                                ]),
                                t._v(' '),
                                n('div', { staticClass: 'action-box' }, [
                                    n('p', [
                                        t._v('<form id="ajaxForm" action="'),
                                        n('span', [
                                            t._v(
                                                'https://getform.io/f/{your-endpoint}'
                                            )
                                        ]),
                                        t._v('" method="POST">\n        ')
                                    ]),
                                    t._v(' '),
                                    n('p', { staticClass: 'gray' }, [
                                        t._v(
                                            '\n                <input type="text" name="name" id=”name”>'
                                        ),
                                        n('br'),
                                        t._v(
                                            '\n                <input type="email" name="email" id=”email”>'
                                        ),
                                        n('br'),
                                        t._v(
                                            '\n                <button type="submit">Send</button>'
                                        ),
                                        n('br')
                                    ]),
                                    t._v(' '),
                                    n('p', [t._v('</form>')])
                                ]),
                                t._v(' '),
                                n('p', [
                                    t._v(
                                        "  \n        That's it! You can now send your form submissions using AJAX.\n    "
                                    )
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
