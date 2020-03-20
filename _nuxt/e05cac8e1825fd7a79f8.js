(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        401: function(e, t, n) {
            'use strict';
            n.r(t);
            var o = { layout: 'docs' },
                c = n(11),
                component = Object(c.a)(
                    o,
                    function() {
                        var e = this.$createElement;
                        this._self._c;
                        return this._m(0);
                    },
                    [
                        function() {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n('div', [
                                n('div', { staticClass: 'docs' }, [
                                    n('h2', { staticClass: 'content-sub' }, [
                                        e._v('Handling Checkboxes')
                                    ]),
                                    e._v(' '),
                                    n('p', [
                                        e._v(
                                            '\n            You can easily handle the checkbox data on Getform. If you have a checkbox field on your form,\n            simply add a hidden input field for "not selected" case and set its value to \n            '
                                        ),
                                        n(
                                            'span',
                                            { staticClass: 'span-border' },
                                            [e._v(' value="no" ')]
                                        ),
                                        e._v(
                                            '. For the selected case, do the same \n            with '
                                        ),
                                        n(
                                            'span',
                                            { staticClass: 'span-border' },
                                            [e._v(' value="yes" ')]
                                        )
                                    ]),
                                    e._v(' '),
                                    n('p', [
                                        e._v(
                                            '\n             Sample form should look like this:\n        '
                                        )
                                    ]),
                                    e._v(' '),
                                    n('div', { staticClass: 'action-box' }, [
                                        n('p', [
                                            e._v(
                                                '<form action="https://getform.io/f/{your-endpoint}" method="POST">'
                                            )
                                        ]),
                                        e._v(' '),
                                        n('p', [
                                            e._v(
                                                '\n                    <input type="email" name="email">'
                                            ),
                                            n('br'),
                                            e._v(
                                                '\n                    // Checkbox handle'
                                            ),
                                            n('br'),
                                            e._v(
                                                '\n                    <input '
                                            ),
                                            n('span', [e._v('type="hidden"')]),
                                            e._v(' name="subscribe" '),
                                            n('span', [e._v('value="no"')]),
                                            e._v('>'),
                                            n('br'),
                                            e._v(
                                                '\n                    <input type="checkbox" name="subscribe" '
                                            ),
                                            n('span', [e._v('value="yes"')]),
                                            e._v(' checked>'),
                                            n('br'),
                                            e._v(
                                                '\n                    <button type="submit">Send</button>'
                                            ),
                                            n('br')
                                        ]),
                                        e._v(' '),
                                        n('p', [e._v('</form>')])
                                    ]),
                                    e._v(' '),
                                    n('p', [
                                        e._v(
                                            '\n        Important Note: \n        '
                                        )
                                    ]),
                                    e._v(' '),
                                    n('ul', [
                                        n('li', [
                                            e._v(
                                                "\n                You should give the same name to both of your checkbox fields' "
                                            ),
                                            n(
                                                'span',
                                                { staticClass: 'span-border' },
                                                [e._v('name')]
                                            ),
                                            e._v(
                                                " attributes.\n                Otherwise, your checkbox values won't be submitted correctly.\n            "
                                            )
                                        ])
                                    ]),
                                    e._v(' '),
                                    n('p', [
                                        e._v(
                                            '\n             Now, you can handle the checkboxes for your forms!\n        '
                                        )
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
            t.default = component.exports;
        }
    }
]);
