(window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
        404: function(t, n, e) {
            'use strict';
            e.r(n);
            var o = { layout: 'docs' },
                r = e(11),
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
                                n = t.$createElement,
                                e = t._self._c || n;
                            return e('div', [
                                e('h1', { staticClass: 'content-sub' }, [
                                    t._v('Uploading Files')
                                ]),
                                t._v(' '),
                                e('p', [
                                    t._v(
                                        '\n        While collecting submissions on Getform, you might want to collect files too.\n        Getform supports file uploads to your form. The size limit for your files is limited\n        to 25MB per submission.\n    '
                                    )
                                ]),
                                t._v(' '),
                                e('div', { staticClass: 'action-box' }, [
                                    e('p', [
                                        t._v(
                                            '//this is a sample form to accept file uploads'
                                        )
                                    ]),
                                    t._v(' '),
                                    e('p', [
                                        t._v('<form action="'),
                                        e('span', [
                                            t._v(
                                                'https://getform.io/f/{your-endpoint}'
                                            )
                                        ]),
                                        t._v(
                                            '" method="POST" \n            enctype="multipart/form-data">\n        '
                                        )
                                    ]),
                                    t._v(' '),
                                    e('p', { staticClass: 'gray' }, [
                                        t._v(
                                            '\n                <input type="text" name="name">'
                                        ),
                                        e('br'),
                                        t._v(
                                            '\n                <input type="email" name="email">'
                                        ),
                                        e('br'),
                                        t._v('\n                '),
                                        e('span', [
                                            t._v(
                                                '<input type="file" name="file">'
                                            )
                                        ]),
                                        e('br'),
                                        t._v(
                                            '\n                <button type="submit">Send</button>'
                                        ),
                                        e('br')
                                    ]),
                                    t._v(' '),
                                    e('p', [t._v('</form>')])
                                ]),
                                t._v(' '),
                                e('p', [
                                    e('span', { staticClass: 'span-num' }, [
                                        t._v('1.')
                                    ]),
                                    t._v('add '),
                                    e('span', { staticClass: 'span-border' }, [
                                        t._v('enctype=multipart/form-data"')
                                    ]),
                                    t._v(' into from tag.')
                                ]),
                                t._v(' '),
                                e('p', [
                                    e('span', { staticClass: 'span-num' }, [
                                        t._v('2.')
                                    ]),
                                    t._v('add '),
                                    e('span', { staticClass: 'span-border' }, [
                                        t._v('input type=“file” name=“file"')
                                    ])
                                ]),
                                t._v(' '),
                                e('p', [
                                    t._v(
                                        '\n        You can add more than one file input to send in one submission:\n    '
                                    )
                                ]),
                                t._v(' '),
                                e('div', { staticClass: 'action-box' }, [
                                    e('p', [
                                        t._v('<form action="'),
                                        e('span', [
                                            t._v(
                                                'https://getform.io/f/{your-endpoint}'
                                            )
                                        ]),
                                        t._v(
                                            '" method="POST" \n            enctype="multipart/form-data">\n        '
                                        )
                                    ]),
                                    t._v(' '),
                                    e('p', { staticClass: 'gray' }, [
                                        t._v(
                                            '\n                <input type="text" name="name">'
                                        ),
                                        e('br'),
                                        t._v('\n                '),
                                        e('span', [
                                            t._v(
                                                '<input type="file" name="resume">'
                                            )
                                        ]),
                                        e('br'),
                                        t._v('\n                '),
                                        e('span', [
                                            t._v(
                                                '<input type="file" name="photo">'
                                            )
                                        ]),
                                        e('br'),
                                        t._v('\n                '),
                                        e('span', [
                                            t._v(
                                                '<input type="file" name="document">'
                                            )
                                        ]),
                                        e('br'),
                                        t._v(
                                            '\n                <button type="submit">Send</button>'
                                        ),
                                        e('br')
                                    ]),
                                    t._v(' '),
                                    e('p', [t._v('</form>')])
                                ]),
                                t._v(' '),
                                e('p', [
                                    t._v(
                                        '\n        You can also use HTML5 multiple file upload syntax, your form should look like the following:\n    '
                                    )
                                ]),
                                t._v(' '),
                                e('div', { staticClass: 'action-box' }, [
                                    e('p', [
                                        t._v('<form action="'),
                                        e('span', [
                                            t._v(
                                                'https://getform.io/f/{your-endpoint}'
                                            )
                                        ]),
                                        t._v(
                                            '" method="POST" \n            enctype="multipart/form-data">\n        '
                                        )
                                    ]),
                                    t._v(' '),
                                    e('p', { staticClass: 'gray' }, [
                                        t._v(
                                            '\n                <input type="text" name="name">'
                                        ),
                                        e('br'),
                                        t._v('\n                <input '),
                                        e('span', [t._v('type="file"')]),
                                        t._v(' name="files[]"'),
                                        e('span', [t._v(' multiple')]),
                                        t._v('>'),
                                        e('br'),
                                        t._v(
                                            '\n                <button type="submit">Send</button>'
                                        ),
                                        e('br')
                                    ]),
                                    t._v(' '),
                                    e('p', [t._v('</form>')])
                                ]),
                                t._v(' '),
                                e('p', [
                                    t._v('\n        Important Note: \n    ')
                                ]),
                                t._v(' '),
                                e('ul', [
                                    e('li', [
                                        t._v(
                                            '\n            To receive your submissions correctly for the texts that belong to language \n            families other than Latin, you should include '
                                        ),
                                        e(
                                            'span',
                                            { staticClass: 'span-border' },
                                            [t._v(' accept-charset="UTF-8"')]
                                        ),
                                        t._v(
                                            ' attribute \n            to your form tag. \n        '
                                        )
                                    ])
                                ]),
                                t._v(' '),
                                e('p', [
                                    t._v(
                                        " Now, you're ready to accept files for your submissions!"
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
            n.default = component.exports;
        }
    }
]);
