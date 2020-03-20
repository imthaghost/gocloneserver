(window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
        350: function(e, t, o) {
            e.exports = o.p + 'img/cd5e19b.gif';
        },
        351: function(e, t, o) {
            e.exports = o.p + 'img/1e9d027.gif';
        },
        352: function(e, t, o) {
            e.exports = o.p + 'videos/e44e737.mp4';
        },
        412: function(e, t, o) {
            'use strict';
            o.r(t);
            var n = [
                    function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n('div', [
                            n('div', { staticClass: 'docs' }, [
                                n('h2', { staticClass: 'content-sub' }, [
                                    e._v('Connect your Zap to Other Services')
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        '\n            After you complete the trigger step of your Zap, \n            you can start binding Getform\'s "New Submission" trigger with dozens of compatible services. \n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        '\n            Capturing sales leads and create customer profiles in Salesforce, \n            sending collected emails to Google Sheets, adding subscribers to your Mailchimp lists.\n            Limitless use cases are couple clicks away. \n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        '\n            We will use Google Spreadsheet as an example destination to bind our "New Submission" trigger.\n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        "\n            Now, let's recall our sample form we have created before. We have 3 input fields for our sample\n            contact form. name, email and phone fields as follows:. \n        "
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
                                            '\n                    <input type="text" name="name">'
                                        ),
                                        n('br'),
                                        e._v(
                                            '\n                    <input type="email" name="email">'
                                        ),
                                        n('br'),
                                        e._v(
                                            '\n                    <input type="tel" name="phone">'
                                        ),
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
                                        "\n            Let's go to Google Sheets and create a new Sheet for our form fields: \n        "
                                    )
                                ]),
                                e._v(' '),
                                n(
                                    'a',
                                    {
                                        attrs: {
                                            href: 'https://cl.ly/593e33edce5c',
                                            target: '_blank'
                                        }
                                    },
                                    [
                                        n('img', {
                                            staticStyle: {
                                                display: 'block',
                                                height: 'auto',
                                                'max-width': '80%'
                                            },
                                            attrs: { src: o(350) }
                                        })
                                    ]
                                ),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        "\n            Then, let's define the action of Google Sheets. We will create a new row on our Sheet with our \n            Getform submission data:\n        "
                                    )
                                ]),
                                e._v(' '),
                                n(
                                    'a',
                                    {
                                        attrs: {
                                            href: 'https://cl.ly/a343b6ac3f54',
                                            target: '_blank'
                                        }
                                    },
                                    [
                                        n('img', {
                                            staticStyle: {
                                                display: 'block',
                                                height: 'auto',
                                                'max-width': '80%'
                                            },
                                            attrs: { src: o(351) }
                                        })
                                    ]
                                ),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        "\n            Let's move on and complete the zap by defining the correspondence of the fields and test our zap:\n        "
                                    )
                                ]),
                                e._v(' '),
                                n(
                                    'video',
                                    {
                                        attrs: {
                                            width: '80%',
                                            autoplay: 'autoplay',
                                            loop: ''
                                        }
                                    },
                                    [
                                        n('source', {
                                            attrs: {
                                                src: o(352),
                                                type: 'video/mp4'
                                            }
                                        })
                                    ]
                                ),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        '\n            Congratulations, our Zap is now all set and activated 🎉 \n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        '\n            As you can see in the test action, now our Zap will go and grab our latest form submission,\n            and write it to our Sheet as a new row.\n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p', [
                                    e._v(
                                        "\n            You can visit the Zapier's Getform integration page "
                                    ),
                                    n(
                                        'a',
                                        {
                                            attrs: {
                                                href:
                                                    'https://zapier.com/apps/getform/integrations'
                                            }
                                        },
                                        [e._v('\n            here')]
                                    ),
                                    e._v(
                                        ' or select from our ready to use Zap Templates to get started: \n        '
                                    )
                                ]),
                                e._v(' '),
                                n('p'),
                                n('div', { attrs: { id: 'zap-templates' } }),
                                e._v(' '),
                                n('p')
                            ])
                        ]);
                    }
                ],
                r = {
                    head: {
                        script: [
                            {
                                src:
                                    'https://zapier.com/apps/embed/widget.js?services=getform&html_id=zap-templates&limit=10'
                            }
                        ]
                    },
                    layout: 'docs'
                },
                l = o(11),
                component = Object(l.a)(
                    r,
                    function() {
                        var e = this.$createElement;
                        this._self._c;
                        return this._m(0);
                    },
                    n,
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        }
    }
]);
