(window.webpackJsonp = window.webpackJsonp || []).push([
    [38],
    {
        268: function(t, e, n) {
            'use strict';
            var o = {
                    name: 'FormLabel',
                    props: {
                        on: { type: Boolean, default: !0 },
                        label: { type: String, default: '' },
                        dispatch: { type: Boolean, default: !0 },
                        for: { type: String, default: null }
                    },
                    data: function() {
                        return {
                            formEl: void 0,
                            labelEl: void 0,
                            isActive: !1,
                            isFocused: !1
                        };
                    },
                    mounted: function() {
                        (this.formEl = this.$el.querySelector(
                            'input, textarea, select'
                        )),
                            this.formEl.addEventListener(
                                'input',
                                this.updateIsActive
                            ),
                            this.formEl.addEventListener(
                                'input',
                                this.updateIsFocused
                            ),
                            this.formEl.addEventListener(
                                'blur',
                                this.updateIsFocused
                            ),
                            this.formEl.addEventListener(
                                'focus',
                                this.updateIsFocused
                            ),
                            this.for ||
                                ((this.labelEl = this.$el.querySelector(
                                    'label'
                                )),
                                this.labelEl.addEventListener(
                                    'click',
                                    this.focusFormEl
                                )),
                            this.dispatchInput();
                    },
                    beforeDestroy: function() {
                        this.formEl.removeEventListener(
                            'input',
                            this.updateIsActive
                        ),
                            this.formEl.removeEventListener(
                                'input',
                                this.updateIsFocused
                            ),
                            this.formEl.removeEventListener(
                                'blur',
                                this.updateIsFocused
                            ),
                            this.formEl.removeEventListener(
                                'focus',
                                this.updateIsFocused
                            );
                    },
                    methods: {
                        dispatchInput: function() {
                            if (this.dispatch) {
                                var t = document.createEvent('HTMLEvents');
                                t.initEvent('input', !0, !1),
                                    this.formEl.dispatchEvent(t);
                            }
                        },
                        focusFormEl: function() {
                            this.formEl.focus();
                        },
                        updateIsActive: function(t) {
                            this.isActive = t.target.value.length > 0;
                        },
                        updateIsFocused: function(t) {
                            this.isFocused =
                                t.target === document.activeElement &&
                                this.isActive;
                        }
                    },
                    computed: {
                        inputId: function() {
                            return this.for;
                        },
                        classObject: function() {
                            return {
                                'vfl-label-on-input': this.on && this.isActive,
                                'vfl-label-on-focus': this.isFocused
                            };
                        },
                        formElType: function() {
                            return this.formEl
                                ? this.formEl.tagName.toLowerCase()
                                : '';
                        },
                        floatLabel: function() {
                            if (this.label) return this.label;
                            switch (this.formElType) {
                                case 'input':
                                case 'textarea':
                                    return this.formEl.placeholder;
                                case 'select':
                                    return this.formEl.querySelector(
                                        'option[disabled][selected]'
                                    ).innerHTML;
                                default:
                                    return '';
                            }
                        }
                    }
                },
                r = n(11),
                component = Object(r.a)(
                    o,
                    function() {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e(
                            'div',
                            { staticClass: 'vfl-has-label' },
                            [
                                e(
                                    'label',
                                    {
                                        staticClass: 'vfl-label',
                                        class: this.classObject,
                                        attrs: { for: this.inputId }
                                    },
                                    [
                                        this._v(
                                            '\n    ' +
                                                this._s(this.floatLabel) +
                                                '\n  '
                                        )
                                    ]
                                ),
                                this._v(' '),
                                this._t('default')
                            ],
                            2
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            e.a = component.exports;
        },
        394: function(t, e, n) {
            'use strict';
            n.r(e);
            var o = {
                    layout: 'loginRegister',
                    components: { FormLabel: n(268).a },
                    head: { bodyAttrs: { class: 'body-bg-white' } },
                    data: function() {
                        return { step: 1, email: '', message: '' };
                    },
                    methods: {
                        onBack: function() {
                            this.step = 1;
                        },
                        onSubmit: function(t) {
                            var e = this,
                                data = { email: this.email };
                            this.$axios
                                .post('/password/forgot', data)
                                .then(function(t) {
                                    !1 === t.data.success
                                        ? (e.message = t.data.message)
                                        : ((e.step = 2), (e.email = ''));
                                })
                                .catch(function(t) {
                                    console.error('Error sending mail: ', t);
                                });
                        },
                        validEmail: function(t) {
                            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                                t
                            );
                        }
                    }
                },
                r = n(11),
                component = Object(r.a)(
                    o,
                    function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n('div', [
                            n(
                                'form',
                                {
                                    staticClass: 'form-general mx-auto',
                                    on: {
                                        submit: function(e) {
                                            return (
                                                e.preventDefault(), t.onSubmit()
                                            );
                                        }
                                    }
                                },
                                [
                                    t._m(0),
                                    t._v(' '),
                                    1 === t.step
                                        ? n(
                                              'div',
                                              [
                                                  n(
                                                      'b-form-group',
                                                      [
                                                          n(
                                                              'FormLabel',
                                                              {
                                                                  attrs: {
                                                                      label:
                                                                          'Email Address'
                                                                  }
                                                              },
                                                              [
                                                                  n('input', {
                                                                      directives: [
                                                                          {
                                                                              name:
                                                                                  'model',
                                                                              rawName:
                                                                                  'v-model',
                                                                              value:
                                                                                  t.email,
                                                                              expression:
                                                                                  'email'
                                                                          }
                                                                      ],
                                                                      staticClass:
                                                                          'form-input',
                                                                      attrs: {
                                                                          type:
                                                                              'email',
                                                                          placeholder:
                                                                              'Email address'
                                                                      },
                                                                      domProps: {
                                                                          value:
                                                                              t.email
                                                                      },
                                                                      on: {
                                                                          input: function(
                                                                              e
                                                                          ) {
                                                                              e
                                                                                  .target
                                                                                  .composing ||
                                                                                  (t.email =
                                                                                      e.target.value);
                                                                          }
                                                                      }
                                                                  })
                                                              ]
                                                          )
                                                      ],
                                                      1
                                                  ),
                                                  t._v(' '),
                                                  n('b-form-group', [
                                                      n(
                                                          'button',
                                                          {
                                                              staticClass:
                                                                  'btn-form',
                                                              attrs: {
                                                                  type: 'submit'
                                                              }
                                                          },
                                                          [t._v('Send')]
                                                      )
                                                  ])
                                              ],
                                              1
                                          )
                                        : t._e(),
                                    t._v(' '),
                                    2 === t.step
                                        ? n(
                                              'div',
                                              [
                                                  n('b-form-group', [
                                                      n('p', [
                                                          t._v(
                                                              'Your password reset email has been sent. Please check your inbox. '
                                                          )
                                                      ]),
                                                      t._v(' '),
                                                      n('p', [
                                                          t._v(
                                                              'Sent to a wrong inbox? '
                                                          ),
                                                          n(
                                                              'a',
                                                              {
                                                                  on: {
                                                                      click: function(
                                                                          e
                                                                      ) {
                                                                          return t.onBack();
                                                                      }
                                                                  }
                                                              },
                                                              [t._v('Go Back')]
                                                          )
                                                      ])
                                                  ])
                                              ],
                                              1
                                          )
                                        : t._e()
                                ]
                            ),
                            t._v(' '),
                            n('div', { staticClass: 'already mt-3 mb-5' }, [
                                n(
                                    'p',
                                    [
                                        t._v('Remembered your password?  '),
                                        n(
                                            'nuxt-link',
                                            { attrs: { to: '/login' } },
                                            [t._v('Login')]
                                        )
                                    ],
                                    1
                                )
                            ])
                        ]);
                    },
                    [
                        function() {
                            var t = this.$createElement,
                                e = this._self._c || t;
                            return e('div', { staticClass: 'head' }, [
                                e('h1', { staticClass: 'mb-2' }, [
                                    this._v('Forgot Password')
                                ]),
                                this._v(' '),
                                e('p', [
                                    this._v(
                                        'Enter your email address to receive reset link 🤔'
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
