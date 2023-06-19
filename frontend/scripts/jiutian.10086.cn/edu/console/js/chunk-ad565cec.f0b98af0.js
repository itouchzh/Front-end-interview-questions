;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-ad565cec'],
    {
        '006d': function (t, e, a) {
            'use strict'
            a('7622')
        },
        '4b1f': function (t, e, a) {},
        7047: function (t, e) {
            t.exports =
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAD8ElEQVRoQ+2ZW0/iUBCATy8UKIoosDWFEDc2mPRBH/RtX/wT/kr/h28mG5MlatA0hiV2AQWUW2nLZli6qdjC6QUo2POopzPzzZwzZ2Yg0BdbxBfjRSHwpkc8jHAY4Q3zwKqONMlxXFyW5T5CSFumT1cCnDk62iYGg8QQoX5TkpobD7wnCElKVVlF1wetp6fXdQGmsqIYr5VKPafH0gswz/MswzC6JElwHRwv10faMJqiae25XH5xAu0WWBCEZEtVWaCsSZKMEBo5JXYNLIoiU+/1dkejEeEU2g2wGTaBUF9yefddA4NnBUGItjUt5RTaKbBfsGCzJ2C30EaWxklafsL6AjwNHVVVpVKpwJ22Xefn5/RPSdriWbZbKpUUu40HBwexDkIp+L+XY2yW7znChjC40y+KsqMxTK9WKr07TSZW+8Ext5XKLqvryuPjY8sPmb4B+2HMMmSEwMvw8ip1hBGe5X14d5sUxawyQtO6U5qmlMvlAa5N2BGGLFzrdvdwBS9z3w5Nv+JCYwPncrm0EolECIIYKaMRtkcXCR6lKEbXNDLCMGr1/r6OowsLOJ/Pxwc0vQMCR9Fop35394YjfNF7OI5L6PH4NuiJKEq7Wq125+nEASb2BSGjqSpFUpQuPzyAJ/V5gpf0f4I7PMxClCe21eZ1UHOBzV4kk8k3+eamsyQYLDXQHw8ZJol7+uYBk9++f89CN4TrQSwrfd60LwhZOIGQX/6cndXR5aXtnGwmsNHGgX1kr/cmy3Kgomv4zZxj5jUZtsBQuP+SpAwInTT4cHcdTxh8DqatOL5YzAwVhYYNhXS6cX19PbTabAtcKBR2eyQZhY+iqtqqVCowuwrsMreSs1pUS2BzkeHkjVu1N4xaAexIINS0GvRZAuN8uGo4K/3mQE2uITxTH9YnYHMCYGKx4e/b20YQ4exsyufzewOaHtf7Vol2Gvh/kQEfOKlRg+KU09PTyFOjkR4D/yuUPhQjH4CnGwS4/F5AYrFYB7eoN/SADe12e8uLXqj5oXawCtpMYC9Kx9+y7LvT+RZ3fJzQ2+1xfezHmk5eCwV2kwPMz+HaAYPBWZZ9mTWKNUOZix0/YK2ep4VGGBROngfI9PM6LILn+fSQYcbVkl9rqUfaMBqKlx8nJ6+XdkX9xQWVu7pKQbLxC9SQsxJgUA6dzJAg+mmS7JfLZRX+Jooi9awoMVrT4kZW3Rhgv0Fw5a0swrgG+r0vBDZ7NMijWLeRDyMcRjigvy6ERxrTA1/uDk/39J8GAHyxmDamf5hODOw2qzrebmpJBZbCmWGfBvLzfnlwJn4NdofAaxAkTyaGEfbkvjX4OIzwGgTJk4l/AcUIZVuuKtZHAAAAAElFTkSuQmCC'
        },
        7141: function (t, e, a) {
            'use strict'
            a('4b1f')
        },
        7622: function (t, e, a) {},
        9275: function (t, e, a) {
            'use strict'
            var i = function () {
                    var t = this,
                        e = t._self._c
                    return e(
                        'a-modal',
                        {
                            attrs: {
                                width: '400px',
                                dialogClass: 'verify-dialog',
                                bodyStyle: { padding: 0, height: '388px' },
                                footer: null,
                                maskClosable: !1,
                            },
                            on: {
                                cancel: function (e) {
                                    return t.$emit('cancel')
                                },
                            },
                            model: {
                                value: t.visible,
                                callback: function (e) {
                                    t.visible = e
                                },
                                expression: 'visible',
                            },
                        },
                        [
                            e('rotate-captch', {
                                ref: 'rotateVerify',
                                attrs: { imgUrl: t.verifyImgUrl, result: t.result },
                                on: {
                                    onSliding: t.onSliding,
                                    end: (e) => t.$emit('end', { angle: e, uuid: t.verifyId }),
                                },
                            }),
                        ],
                        1
                    )
                },
                s = [],
                r = function () {
                    var t = this,
                        e = t._self._c
                    return e(
                        'div',
                        {
                            staticClass: 'check',
                            on: {
                                mousedown: function (e) {
                                    return t.handleMoveStartEvent(e)
                                },
                                touchstart: function (e) {
                                    return t.handleMoveStartEvent(e, 'touch')
                                },
                                touchmove: function (e) {
                                    return t.handleMoveEvent(e, 'touch')
                                },
                                touchend: function (e) {
                                    return t.handleMoveEndEvent(e, 'touch')
                                },
                            },
                        },
                        [
                            t._m(0),
                            e('div', { staticClass: 'img-con' }, [
                                e('img', {
                                    staticClass: 'verify-img',
                                    style: { transform: t.imgAngle },
                                    attrs: { src: t.imgUrl, alt: '' },
                                }),
                                t.result
                                    ? e('div', { staticClass: 'check-state' }, [
                                          t._v(t._s(t.result)),
                                      ])
                                    : t._e(),
                            ]),
                            e('p', [t._v('拖动滑块使图片角度为正')]),
                            e(
                                'div',
                                {
                                    ref: 'sliderCon',
                                    staticClass: 'slider-con',
                                    class: { 'err-anim': t.showError },
                                },
                                [
                                    e(
                                        'div',
                                        {
                                            ref: 'slider',
                                            staticClass: 'slider',
                                            class: { sliding: t.sliding },
                                            style: { '--move': t.slidMove + 'px' },
                                            attrs: { id: 'slider' },
                                        },
                                        [
                                            e('span', {
                                                staticClass: 'iconfont iconhuakuaishuxian1',
                                                staticStyle: { 'font-size': '16px', color: '#fff' },
                                            }),
                                        ]
                                    ),
                                ]
                            ),
                        ]
                    )
                },
                n = [
                    function () {
                        var t = this,
                            e = t._self._c
                        return e('h1', [
                            e('span', {
                                staticClass: 'iconfont icondunpai',
                                staticStyle: { color: '#62c978', 'font-size': '26px' },
                            }),
                            t._v(' 安全验证 '),
                        ])
                    },
                ],
                o = {
                    name: 'rotate-captch',
                    props: {
                        imgUrl: String,
                        result: {
                            validator(t) {
                                return ['正确', '错误', '验证中', '已过期'].includes(t)
                            },
                        },
                    },
                    data() {
                        return { sliding: !1, slidMove: 0, isMouseDown: !1 }
                    },
                    computed: {
                        angle() {
                            let t = this.sliderConWidth || 0,
                                e = this.sliderWidth || 0,
                                a = this.slidMove ? this.slidMove / (t - e) : 0
                            return 360 * a
                        },
                        imgAngle() {
                            return `rotate(${this.angle}deg)`
                        },
                        showError() {
                            return '错误' === this.result || '已过期' === this.result
                        },
                        checking() {
                            return '验证中' === this.result
                        },
                    },
                    mounted() {
                        this.bindEvents()
                    },
                    destroyed() {
                        document.removeEventListener('mousemove', this.handleMoveEvent),
                            document.removeEventListener('mouseup', this.handleMoveEndEvent)
                    },
                    methods: {
                        bindEvents() {
                            document.addEventListener('mousemove', this.handleMoveEvent),
                                document.addEventListener('mouseup', this.handleMoveEndEvent)
                        },
                        resetSlider() {
                            ;(this.sliding = !1), (this.slidMove = 0)
                        },
                        onStart(t, e) {
                            const a = document.getElementById('slider')
                            ;('slider' === t.target.id || a.contains(t.target)) &&
                                (this.checking ||
                                    (this.$emit('onSliding'),
                                    (this.sliding = !0),
                                    (this.sliderLeft =
                                        'mouse' === e ? t.clientX : t.changedTouches[0].pageX),
                                    (this.sliderConWidth = this.$refs.sliderCon.clientWidth),
                                    (this.sliderWidth = this.$refs.slider.clientWidth)))
                        },
                        onEnd() {
                            this.sliding && !1 === this.checking && this.$emit('end', this.angle)
                        },
                        onMove(t, e = 'mouse') {
                            const a = 'mouse' === e ? t.clientX : t.changedTouches[0].pageX
                            if (this.sliding && !1 === this.checking) {
                                let t = a - this.sliderLeft
                                t < 0
                                    ? (t = 0)
                                    : t > this.sliderConWidth - this.sliderWidth &&
                                      (t = this.sliderConWidth - this.sliderWidth),
                                    (this.slidMove = t)
                            }
                        },
                        handleMoveStartEvent(t, e = 'mouse') {
                            ;(this.isMouseDown = !0), this.onStart(t, e)
                        },
                        handleMoveEvent(t, e = 'mouse') {
                            if (!this.isMouseDown) return !1
                            this.onMove(t, e)
                        },
                        handleMoveEndEvent(t, e = 'mouse') {
                            ;(this.isMouseDown = !1), this.onEnd(t, e)
                        },
                    },
                },
                l = o,
                c = (a('7141'), a('bf56')),
                d = Object(c['a'])(l, r, n, !1, null, '530fd047', null),
                u = d.exports,
                m = a('fa7d'),
                h = {
                    components: { rotateCaptch: u },
                    props: {
                        verifyVisible: { type: Boolean, default: !1 },
                        delay: { type: [String, Number], default: 1e3 },
                    },
                    data() {
                        return {
                            visible: !1,
                            verifyImgUrl: '',
                            verifyId: '',
                            angle: void 0,
                            refreshTimmer: null,
                            result: void 0,
                        }
                    },
                    watch: {
                        verifyVisible(t) {
                            t ? this.openVerify() : (this.visible = !1)
                        },
                        result(t) {
                            ;(t !== m['h'].error.text && t !== m['h'].outDate.text) ||
                                setTimeout(() => {
                                    this.refreshVerify()
                                }, this.delay)
                        },
                    },
                    methods: {
                        setResult(t) {
                            this.result = t
                        },
                        openVerify() {
                            ;(this.visible = !0),
                                this.$nextTick(() => {
                                    this.refreshVerify(), this.setRefreshTimmer()
                                })
                        },
                        refreshVerify() {
                            ;(this.result = void 0),
                                this.getVerifyInfo(),
                                this.$refs.rotateVerify.resetSlider()
                        },
                        getVerifyInfo() {
                            this.$http.get('/messaging/sendImageCaptcha', {}, (t) => {
                                'OK' === t.state
                                    ? ((this.verifyImgUrl = t.body.imageBase64),
                                      (this.verifyId = t.body.uuid))
                                    : this.$message.error(
                                          t.errorMessage || '获取图片验证码失败，请稍后重试'
                                      )
                            })
                        },
                        setRefreshTimmer() {
                            this.refreshTimmer && this.clearRefreshTimmer(),
                                (this.refreshTimmer = setInterval(() => {
                                    this.visible ? this.refreshVerify() : this.clearRefreshTimmer()
                                }, 6e4))
                        },
                        clearRefreshTimmer() {
                            clearInterval(this.refreshTimmer), (this.refreshTimmer = null)
                        },
                        onSliding() {
                            this.clearRefreshTimmer()
                        },
                    },
                    destroyed() {
                        this.clearRefreshTimmer()
                    },
                },
                p = h,
                g = Object(c['a'])(p, i, s, !1, null, null, null)
            e['a'] = g.exports
        },
        afbf: function (t, e, a) {},
        b254: function (t, e, a) {
            'use strict'
            a.d(e, 'a', function () {
                return n
            })
            a('ad80')
            var i = a('751a'),
                s = a('1e28'),
                r = a('3d67')
            const n = (t, e) => {
                    const a = Object(s['c'])(t).url
                    if (t === s['g'].competition) {
                        const t = { projectId: e.projectId }
                        return Object(i['POST'])(`/dp_platform/resource/${a}/project_spec`, t).then(
                            o
                        )
                    }
                    return Object(i['GET'])(`/dp_platform/resource/${a}/spec`).then(o)
                },
                o = (t) => {
                    if (200 == t.code) {
                        let e = t.data.gpuSpecs
                        e.map((e) => (e.gpuLeftOK = t.data.specShow[e.specId]))
                        let a = []
                        return (
                            528 === t.data.gpuExceedLimitCode &&
                                a.push(
                                    `您最多可同时使用${r['c'].tokenParsed.DLP_TRAIN_USER_GPU_LIMIT}卡，目前剩余可用已不足，请停止其他实例后再试`
                                ),
                            512 === t.data.insufficientResCode &&
                                a.push('目前平台资源不足，请稍后再试'),
                            (a = a.join(',')),
                            { list: e, errorText: a }
                        )
                    }
                }
        },
        c052: function (t, e, a) {
            'use strict'
            a.r(e)
            var i = function () {
                    var t = this,
                        e = t._self._c
                    return e(
                        'div',
                        { staticClass: 'wrapper' },
                        [
                            e(
                                'jt-breadcrumb',
                                { staticClass: 'sub-title breadcrumb' },
                                [
                                    e(
                                        'jt-breadcrumb-item',
                                        [
                                            e(
                                                'router-link',
                                                { attrs: { to: t.$route.meta.parentInfo.url } },
                                                [
                                                    t._v(
                                                        ' ' +
                                                            t._s(t.$route.meta.parentInfo.name) +
                                                            ' '
                                                    ),
                                                ]
                                            ),
                                        ],
                                        1
                                    ),
                                    e('jt-breadcrumb-item', [
                                        t._v(
                                            ' ' + t._s(t.editMode ? '编辑实例' : '新建实例') + ' '
                                        ),
                                    ]),
                                ],
                                1
                            ),
                            e('jt-remaining-alert', {
                                attrs: {
                                    isDistributedTrain: t.isDistributedTrain,
                                    isEdit: t.editMode,
                                    type: 'alert',
                                    alertStyle: { margin: '20px' },
                                },
                                on: {
                                    remainingAlertDisplayChange: (e) =>
                                        (t.remainingAlertDisplay = e),
                                },
                            }),
                            t.$store.state.overViewData.all
                                ? e(
                                      'section',
                                      {
                                          staticClass: 'content',
                                          style: {
                                              marginTop: t.sectionHaveMarginTop ? '55px' : '0',
                                          },
                                      },
                                      [
                                          t.showAvailableCountAlert
                                              ? e(
                                                    'a-alert',
                                                    {
                                                        style: { marginBottom: '20px' },
                                                        attrs: {
                                                            type: 'error',
                                                            banner: '',
                                                            closable: '',
                                                        },
                                                        on: { close: t.closeAlert },
                                                    },
                                                    [
                                                        t.show_diversion_ecloud
                                                            ? e(
                                                                  'span',
                                                                  {
                                                                      attrs: { slot: 'message' },
                                                                      slot: 'message',
                                                                  },
                                                                  [
                                                                      t._v(
                                                                          '您的算力豆已不足，如需继续使用，请尽快获取新的算力豆，或前往"'
                                                                      ),
                                                                      e(
                                                                          'span',
                                                                          {
                                                                              staticClass:
                                                                                  'ecloud-span',
                                                                              on: {
                                                                                  click: t.getECloudToken,
                                                                              },
                                                                          },
                                                                          [t._v('移动云')]
                                                                      ),
                                                                      t._v('"使用付费版本 '),
                                                                  ]
                                                              )
                                                            : e(
                                                                  'span',
                                                                  {
                                                                      attrs: { slot: 'message' },
                                                                      slot: 'message',
                                                                  },
                                                                  [
                                                                      t._v(
                                                                          '您的算力豆已不足，如需继续使用，请尽快获取新的算力豆'
                                                                      ),
                                                                  ]
                                                              ),
                                                    ]
                                                )
                                              : t._e(),
                                          e(
                                              'jt-configProvider',
                                              {
                                                  scopedSlots: t._u(
                                                      [
                                                          {
                                                              key: 'renderEmpty',
                                                              fn: function () {
                                                                  return [
                                                                      e('jt-empty', {
                                                                          staticStyle: {
                                                                              height: '116px',
                                                                          },
                                                                          attrs: {
                                                                              image: t.emptyImage,
                                                                              imageStyle: {
                                                                                  margin: '28px auto 0',
                                                                                  width: '60px',
                                                                                  height: '60px',
                                                                              },
                                                                          },
                                                                      }),
                                                                  ]
                                                              },
                                                              proxy: !0,
                                                          },
                                                      ],
                                                      null,
                                                      !1,
                                                      1111103552
                                                  ),
                                              },
                                              [
                                                  e(
                                                      'div',
                                                      { staticClass: 'content-wrap' },
                                                      [
                                                          e('h2', [
                                                              t._v(
                                                                  ' ' +
                                                                      t._s(
                                                                          t.editMode
                                                                              ? '编辑实例'
                                                                              : '新建实例'
                                                                      ) +
                                                                      ' '
                                                              ),
                                                          ]),
                                                          e('jt-remaining-alert', {
                                                              attrs: {
                                                                  pageUrl: this.$route.meta.ajaxUrl,
                                                                  isDistributedTrain:
                                                                      t.isDistributedTrain,
                                                                  isEdit: t.editMode,
                                                                  type: 'quota',
                                                                  alertStyle: {
                                                                      marginTop: '12px',
                                                                      marginBottom: '-16px',
                                                                  },
                                                              },
                                                          }),
                                                          e(
                                                              'div',
                                                              { staticClass: 'form-content' },
                                                              [
                                                                  e(
                                                                      'jt-row',
                                                                      {
                                                                          staticClass:
                                                                              'form-row input-row',
                                                                          attrs: { gutter: 16 },
                                                                      },
                                                                      [
                                                                          e(
                                                                              'jt-col',
                                                                              {
                                                                                  staticClass:
                                                                                      'row-title',
                                                                                  attrs: {
                                                                                      span: 4,
                                                                                  },
                                                                              },
                                                                              [
                                                                                  e('span', [
                                                                                      t._v('*'),
                                                                                  ]),
                                                                                  t._v('实例名称'),
                                                                              ]
                                                                          ),
                                                                          e(
                                                                              'jt-col',
                                                                              {
                                                                                  staticClass:
                                                                                      'row-content',
                                                                                  attrs: {
                                                                                      span: 10,
                                                                                  },
                                                                              },
                                                                              [
                                                                                  e('jt-input', {
                                                                                      staticClass:
                                                                                          'jt-input',
                                                                                      class: {
                                                                                          error:
                                                                                              (t.instanceNameRepeat ||
                                                                                                  t.testNameError()) &&
                                                                                              t.nameNotInit,
                                                                                      },
                                                                                      attrs: {
                                                                                          placeholder:
                                                                                              '请输入',
                                                                                          disabled:
                                                                                              0 ===
                                                                                              t
                                                                                                  .$route
                                                                                                  .meta
                                                                                                  .ableEditName,
                                                                                      },
                                                                                      on: {
                                                                                          change: t.changeInstanceName,
                                                                                      },
                                                                                      model: {
                                                                                          value: t
                                                                                              .formData
                                                                                              .instanceName,
                                                                                          callback:
                                                                                              function (
                                                                                                  e
                                                                                              ) {
                                                                                                  t.$set(
                                                                                                      t.formData,
                                                                                                      'instanceName',
                                                                                                      e
                                                                                                  )
                                                                                              },
                                                                                          expression:
                                                                                              'formData.instanceName',
                                                                                      },
                                                                                  }),
                                                                                  1 ===
                                                                                  t.$route.meta
                                                                                      .ableEditName
                                                                                      ? e('div', [
                                                                                            (t.instanceNameRepeat ||
                                                                                                t.testNameError()) &&
                                                                                            t.nameNotInit
                                                                                                ? e(
                                                                                                      'div',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'input-tip error',
                                                                                                      },
                                                                                                      [
                                                                                                          t._v(
                                                                                                              ' ' +
                                                                                                                  t._s(
                                                                                                                      t.instanceNameErrorText
                                                                                                                  ) +
                                                                                                                  ' '
                                                                                                          ),
                                                                                                      ]
                                                                                                  )
                                                                                                : t._e(),
                                                                                            t.testError(
                                                                                                t
                                                                                                    .formData
                                                                                                    .instanceName
                                                                                            )
                                                                                                ? t._e()
                                                                                                : e(
                                                                                                      'div',
                                                                                                      {
                                                                                                          staticClass:
                                                                                                              'input-tip',
                                                                                                      },
                                                                                                      [
                                                                                                          t._v(
                                                                                                              t._s(
                                                                                                                  t.nameLimit
                                                                                                              ) +
                                                                                                                  '个字符以内，必须以中英文或数字开头，支持小括号、短横线和空格'
                                                                                                          ),
                                                                                                      ]
                                                                                                  ),
                                                                                        ])
                                                                                      : t._e(),
                                                                              ],
                                                                              1
                                                                          ),
                                                                      ],
                                                                      1
                                                                  ),
                                                                  1 === t.$route.meta.showDataset
                                                                      ? e(
                                                                            'jt-row',
                                                                            {
                                                                                staticClass:
                                                                                    'form-row input-row',
                                                                                attrs: {
                                                                                    gutter: 16,
                                                                                },
                                                                            },
                                                                            [
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-title',
                                                                                        attrs: {
                                                                                            span: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            ' 数据集 '
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content dataset-content',
                                                                                        attrs: {
                                                                                            span: 10,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e(
                                                                                            'div',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'tag-container',
                                                                                            },
                                                                                            [
                                                                                                0 ===
                                                                                                [
                                                                                                    ...t
                                                                                                        .selectedRows
                                                                                                        .publicDataSet,
                                                                                                    ...t
                                                                                                        .selectedRows
                                                                                                        .personDataSet,
                                                                                                ]
                                                                                                    .length
                                                                                                    ? e(
                                                                                                          'span',
                                                                                                          {
                                                                                                              staticClass:
                                                                                                                  'placeholder',
                                                                                                              on: {
                                                                                                                  click: t.handleSelectDataSet,
                                                                                                              },
                                                                                                          },
                                                                                                          [
                                                                                                              t._v(
                                                                                                                  ' 请选择 '
                                                                                                              ),
                                                                                                          ]
                                                                                                      )
                                                                                                    : e(
                                                                                                          'span',
                                                                                                          t._l(
                                                                                                              [
                                                                                                                  ...t
                                                                                                                      .selectedRows
                                                                                                                      .publicDataSet,
                                                                                                                  ...t
                                                                                                                      .selectedRows
                                                                                                                      .personDataSet,
                                                                                                              ],
                                                                                                              function (
                                                                                                                  a
                                                                                                              ) {
                                                                                                                  return e(
                                                                                                                      'jt-tag',
                                                                                                                      {
                                                                                                                          key: a.dataName,
                                                                                                                          attrs: {
                                                                                                                              closable:
                                                                                                                                  '',
                                                                                                                          },
                                                                                                                          on: {
                                                                                                                              close: function (
                                                                                                                                  e
                                                                                                                              ) {
                                                                                                                                  return t.handleRemoveTag(
                                                                                                                                      a.dataName
                                                                                                                                  )
                                                                                                                              },
                                                                                                                          },
                                                                                                                      },
                                                                                                                      [
                                                                                                                          t._v(
                                                                                                                              t._s(
                                                                                                                                  a.dataName
                                                                                                                              )
                                                                                                                          ),
                                                                                                                      ]
                                                                                                                  )
                                                                                                              }
                                                                                                          ),
                                                                                                          1
                                                                                                      ),
                                                                                                e(
                                                                                                    'em',
                                                                                                    {
                                                                                                        staticClass:
                                                                                                            'iconfont iconshujuku',
                                                                                                        on: {
                                                                                                            click: t.handleSelectDataSet,
                                                                                                        },
                                                                                                    }
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                        e(
                                                                                            'div',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'input-tip',
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    '最多可选三个数据，包括公开和个人数据'
                                                                                                ),
                                                                                            ]
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                            ],
                                                                            1
                                                                        )
                                                                      : t._e(),
                                                                  e(
                                                                      'jt-row',
                                                                      {
                                                                          staticClass:
                                                                              'form-row input-row',
                                                                          attrs: { gutter: 16 },
                                                                      },
                                                                      [
                                                                          e(
                                                                              'jt-col',
                                                                              {
                                                                                  staticClass:
                                                                                      'row-title',
                                                                                  attrs: {
                                                                                      span: 4,
                                                                                  },
                                                                              },
                                                                              [
                                                                                  e('span', [
                                                                                      t._v('*'),
                                                                                  ]),
                                                                                  t._v('资源套餐 '),
                                                                              ]
                                                                          ),
                                                                          e(
                                                                              'jt-col',
                                                                              {
                                                                                  staticClass:
                                                                                      'row-content',
                                                                                  attrs: {
                                                                                      span: 10,
                                                                                  },
                                                                              },
                                                                              [
                                                                                  e(
                                                                                      'jt-select',
                                                                                      {
                                                                                          staticStyle:
                                                                                              {
                                                                                                  width: '100%',
                                                                                              },
                                                                                          attrs: {
                                                                                              placeholder:
                                                                                                  '请选择',
                                                                                              getPopupContainer:
                                                                                                  (
                                                                                                      t
                                                                                                  ) =>
                                                                                                      t.parentNode,
                                                                                              disabled:
                                                                                                  0 ===
                                                                                                  t
                                                                                                      .$route
                                                                                                      .meta
                                                                                                      .ableEditSpec,
                                                                                          },
                                                                                          on: {
                                                                                              change: (
                                                                                                  e
                                                                                              ) =>
                                                                                                  t.gpuSpecChange(
                                                                                                      e
                                                                                                  ),
                                                                                          },
                                                                                          model: {
                                                                                              value: t
                                                                                                  .formData
                                                                                                  .gpuSpec,
                                                                                              callback:
                                                                                                  function (
                                                                                                      e
                                                                                                  ) {
                                                                                                      t.$set(
                                                                                                          t.formData,
                                                                                                          'gpuSpec',
                                                                                                          e
                                                                                                      )
                                                                                                  },
                                                                                              expression:
                                                                                                  'formData.gpuSpec',
                                                                                          },
                                                                                      },
                                                                                      t._l(
                                                                                          t.GpuSpecList,
                                                                                          function (
                                                                                              a,
                                                                                              i
                                                                                          ) {
                                                                                              return e(
                                                                                                  'jt-select-option',
                                                                                                  {
                                                                                                      key: i,
                                                                                                      attrs: {
                                                                                                          value: a.specId,
                                                                                                          disabled:
                                                                                                              t.gpuSpecAbleChoose(
                                                                                                                  a
                                                                                                              ),
                                                                                                      },
                                                                                                  },
                                                                                                  [
                                                                                                      t._v(
                                                                                                          ' ' +
                                                                                                              t._s(
                                                                                                                  t.getGpuSpecTxt(
                                                                                                                      a
                                                                                                                  )
                                                                                                              ) +
                                                                                                              ' '
                                                                                                      ),
                                                                                                  ]
                                                                                              )
                                                                                          }
                                                                                      ),
                                                                                      1
                                                                                  ),
                                                                                  t.GpuErrorText &&
                                                                                  t.show_diversion_ecloud
                                                                                      ? e(
                                                                                            'div',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'input-tip error',
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    t._s(
                                                                                                        t.GpuErrorText
                                                                                                    ) +
                                                                                                        '，或前往"'
                                                                                                ),
                                                                                                e(
                                                                                                    'span',
                                                                                                    {
                                                                                                        staticClass:
                                                                                                            'ecloud-span',
                                                                                                        on: {
                                                                                                            click: t.getECloudToken,
                                                                                                        },
                                                                                                    },
                                                                                                    [
                                                                                                        t._v(
                                                                                                            '移动云'
                                                                                                        ),
                                                                                                    ]
                                                                                                ),
                                                                                                t._v(
                                                                                                    '"使用付费版本'
                                                                                                ),
                                                                                            ]
                                                                                        )
                                                                                      : t.GpuErrorText
                                                                                      ? e(
                                                                                            'div',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'input-tip error',
                                                                                            },
                                                                                            [
                                                                                                t._v(
                                                                                                    t._s(
                                                                                                        t.GpuErrorText
                                                                                                    )
                                                                                                ),
                                                                                            ]
                                                                                        )
                                                                                      : t._e(),
                                                                              ],
                                                                              1
                                                                          ),
                                                                      ],
                                                                      1
                                                                  ),
                                                                  t.projectTypeDisplayRule[
                                                                      t.$route.meta.ajaxUrl
                                                                  ].showImageName
                                                                      ? e(
                                                                            'jt-row',
                                                                            {
                                                                                staticClass:
                                                                                    'form-row input-row',
                                                                                attrs: {
                                                                                    gutter: 16,
                                                                                },
                                                                            },
                                                                            [
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-title',
                                                                                        attrs: {
                                                                                            span: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e('span', [
                                                                                            t._v(
                                                                                                '*'
                                                                                            ),
                                                                                        ]),
                                                                                        t._v(
                                                                                            '运行镜像'
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content',
                                                                                        attrs: {
                                                                                            span: 10,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e(
                                                                                            'jt-select',
                                                                                            {
                                                                                                staticStyle:
                                                                                                    {
                                                                                                        width: '100%',
                                                                                                    },
                                                                                                attrs: {
                                                                                                    placeholder:
                                                                                                        '请选择',
                                                                                                    getPopupContainer:
                                                                                                        (
                                                                                                            t
                                                                                                        ) =>
                                                                                                            t.parentNode,
                                                                                                    disabled:
                                                                                                        0 ===
                                                                                                        t
                                                                                                            .$route
                                                                                                            .meta
                                                                                                            .ableEditSpec,
                                                                                                },
                                                                                                model: {
                                                                                                    value: t
                                                                                                        .formData
                                                                                                        .imageId,
                                                                                                    callback:
                                                                                                        function (
                                                                                                            e
                                                                                                        ) {
                                                                                                            t.$set(
                                                                                                                t.formData,
                                                                                                                'imageId',
                                                                                                                e
                                                                                                            )
                                                                                                        },
                                                                                                    expression:
                                                                                                        'formData.imageId',
                                                                                                },
                                                                                            },
                                                                                            t._l(
                                                                                                t.imageNameList,
                                                                                                function (
                                                                                                    a,
                                                                                                    i
                                                                                                ) {
                                                                                                    return e(
                                                                                                        'jt-select-option',
                                                                                                        {
                                                                                                            key: i,
                                                                                                            attrs: {
                                                                                                                value: a.id,
                                                                                                            },
                                                                                                        },
                                                                                                        [
                                                                                                            t._v(
                                                                                                                ' ' +
                                                                                                                    t._s(
                                                                                                                        a.name
                                                                                                                    ) +
                                                                                                                    ' '
                                                                                                            ),
                                                                                                        ]
                                                                                                    )
                                                                                                }
                                                                                            ),
                                                                                            1
                                                                                        ),
                                                                                    ],
                                                                                    1
                                                                                ),
                                                                            ],
                                                                            1
                                                                        )
                                                                      : t._e(),
                                                                  '1' == t.SHOW_INSTANCE_REMARK
                                                                      ? e(
                                                                            'jt-row',
                                                                            {
                                                                                staticClass:
                                                                                    'form-row input-row',
                                                                                attrs: {
                                                                                    gutter: 16,
                                                                                },
                                                                            },
                                                                            [
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-title',
                                                                                        attrs: {
                                                                                            span: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e('span', [
                                                                                            t._v(
                                                                                                '*'
                                                                                            ),
                                                                                        ]),
                                                                                        t._v(
                                                                                            '实例描述'
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content',
                                                                                        attrs: {
                                                                                            span: 10,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e(
                                                                                            'div',
                                                                                            {
                                                                                                staticClass:
                                                                                                    'textarea-input',
                                                                                            },
                                                                                            [
                                                                                                e(
                                                                                                    'jt-input',
                                                                                                    {
                                                                                                        staticClass:
                                                                                                            'jt-input',
                                                                                                        class: {
                                                                                                            error:
                                                                                                                '' !==
                                                                                                                    t
                                                                                                                        .formData
                                                                                                                        .remark &&
                                                                                                                (t
                                                                                                                    .descriptionLimit
                                                                                                                    .min >
                                                                                                                    t
                                                                                                                        .formData
                                                                                                                        .remark
                                                                                                                        .length ||
                                                                                                                    t
                                                                                                                        .formData
                                                                                                                        .remark
                                                                                                                        .length >
                                                                                                                        t
                                                                                                                            .descriptionLimit
                                                                                                                            .max),
                                                                                                        },
                                                                                                        attrs: {
                                                                                                            type: 'textarea',
                                                                                                            rows: 4,
                                                                                                            placeholder:
                                                                                                                '请输入该实例服务的研发项目信息，包括项目编号、项目名称、项目描述、所属领域等',
                                                                                                        },
                                                                                                        model: {
                                                                                                            value: t
                                                                                                                .formData
                                                                                                                .remark,
                                                                                                            callback:
                                                                                                                function (
                                                                                                                    e
                                                                                                                ) {
                                                                                                                    t.$set(
                                                                                                                        t.formData,
                                                                                                                        'remark',
                                                                                                                        e
                                                                                                                    )
                                                                                                                },
                                                                                                            expression:
                                                                                                                'formData.remark',
                                                                                                        },
                                                                                                    }
                                                                                                ),
                                                                                                e(
                                                                                                    'p',
                                                                                                    [
                                                                                                        t._v(
                                                                                                            ' 已输入 '
                                                                                                        ),
                                                                                                        e(
                                                                                                            'span',
                                                                                                            {
                                                                                                                class: {
                                                                                                                    error:
                                                                                                                        '' !==
                                                                                                                            t
                                                                                                                                .formData
                                                                                                                                .remark &&
                                                                                                                        (t
                                                                                                                            .descriptionLimit
                                                                                                                            .min >
                                                                                                                            t
                                                                                                                                .formData
                                                                                                                                .remark
                                                                                                                                .length ||
                                                                                                                            t
                                                                                                                                .formData
                                                                                                                                .remark
                                                                                                                                .length >
                                                                                                                                t
                                                                                                                                    .descriptionLimit
                                                                                                                                    .max),
                                                                                                                },
                                                                                                            },
                                                                                                            [
                                                                                                                t._v(
                                                                                                                    ' ' +
                                                                                                                        t._s(
                                                                                                                            t
                                                                                                                                .formData
                                                                                                                                .remark
                                                                                                                                .length
                                                                                                                        ) +
                                                                                                                        ' '
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                        t._v(
                                                                                                            ' / ' +
                                                                                                                t._s(
                                                                                                                    t
                                                                                                                        .descriptionLimit
                                                                                                                        .max
                                                                                                                ) +
                                                                                                                ' 字 '
                                                                                                        ),
                                                                                                    ]
                                                                                                ),
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        t
                                                                                            .descriptionLimit
                                                                                            .min >
                                                                                        t.formData
                                                                                            .remark
                                                                                            .length
                                                                                            ? e(
                                                                                                  'div',
                                                                                                  {
                                                                                                      staticClass:
                                                                                                          'input-tip',
                                                                                                      class: {
                                                                                                          error:
                                                                                                              '' !==
                                                                                                                  t
                                                                                                                      .formData
                                                                                                                      .remark &&
                                                                                                              (t
                                                                                                                  .descriptionLimit
                                                                                                                  .min >
                                                                                                                  t
                                                                                                                      .formData
                                                                                                                      .remark
                                                                                                                      .length ||
                                                                                                                  t
                                                                                                                      .formData
                                                                                                                      .remark
                                                                                                                      .length >
                                                                                                                      t
                                                                                                                          .descriptionLimit
                                                                                                                          .max),
                                                                                                      },
                                                                                                  },
                                                                                                  [
                                                                                                      t._v(
                                                                                                          ' 研发项目信息描述，含项目编号、项目名称等，不少于' +
                                                                                                              t._s(
                                                                                                                  t
                                                                                                                      .descriptionLimit
                                                                                                                      .min
                                                                                                              ) +
                                                                                                              '字 '
                                                                                                      ),
                                                                                                  ]
                                                                                              )
                                                                                            : t._e(),
                                                                                        t.formData
                                                                                            .remark
                                                                                            .length >
                                                                                        t
                                                                                            .descriptionLimit
                                                                                            .max
                                                                                            ? e(
                                                                                                  'div',
                                                                                                  {
                                                                                                      staticClass:
                                                                                                          'input-tip error',
                                                                                                  },
                                                                                                  [
                                                                                                      t._v(
                                                                                                          '不可超过' +
                                                                                                              t._s(
                                                                                                                  t
                                                                                                                      .descriptionLimit
                                                                                                                      .max
                                                                                                              ) +
                                                                                                              '个字'
                                                                                                      ),
                                                                                                  ]
                                                                                              )
                                                                                            : t._e(),
                                                                                    ]
                                                                                ),
                                                                            ],
                                                                            1
                                                                        )
                                                                      : t._e(),
                                                                  t.SHOW_STORAGE
                                                                      ? e(
                                                                            'jt-row',
                                                                            {
                                                                                staticClass:
                                                                                    'form-row',
                                                                                attrs: {
                                                                                    gutter: 16,
                                                                                },
                                                                            },
                                                                            [
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-title',
                                                                                        attrs: {
                                                                                            span: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e('span'),
                                                                                        t._v(
                                                                                            '剩余可用存储 '
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content buy-info',
                                                                                        attrs: {
                                                                                            span: 10,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            ' ' +
                                                                                                t._s(
                                                                                                    t.getUsage
                                                                                                ) +
                                                                                                ' '
                                                                                        ),
                                                                                        e(
                                                                                            'jt-remaining-alert',
                                                                                            {
                                                                                                attrs: {
                                                                                                    isEdit: t.editMode,
                                                                                                    isDistributedTrain:
                                                                                                        t.isDistributedTrain,
                                                                                                },
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                                    1
                                                                                ),
                                                                            ],
                                                                            1
                                                                        )
                                                                      : t._e(),
                                                                  1 === t.$route.meta.showDataset
                                                                      ? e(
                                                                            'jt-row',
                                                                            {
                                                                                staticClass:
                                                                                    'form-row',
                                                                                attrs: {
                                                                                    gutter: 16,
                                                                                },
                                                                            },
                                                                            [
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-title',
                                                                                        attrs: {
                                                                                            span: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        e('span'),
                                                                                        t._v(
                                                                                            '可用算力豆 '
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content buy-info',
                                                                                        attrs: {
                                                                                            span: 10,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        t._v(
                                                                                            ' ' +
                                                                                                t._s(
                                                                                                    t.computeMgrSummary.availableCount.toFixed(
                                                                                                        1
                                                                                                    )
                                                                                                ) +
                                                                                                ' '
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                                e(
                                                                                    'jt-col',
                                                                                    {
                                                                                        staticClass:
                                                                                            'row-content buy-info',
                                                                                        attrs: {
                                                                                            span: 14,
                                                                                            offset: 4,
                                                                                        },
                                                                                    },
                                                                                    [
                                                                                        t.$store
                                                                                            .state
                                                                                            .summaryData
                                                                                            .availableCount <
                                                                                            0.1 &&
                                                                                        t.show_diversion_ecloud
                                                                                            ? e(
                                                                                                  'span',
                                                                                                  {
                                                                                                      staticStyle:
                                                                                                          {
                                                                                                              color: '#ff454d',
                                                                                                              'margin-left':
                                                                                                                  '0px',
                                                                                                              cursor: 'auto',
                                                                                                          },
                                                                                                  },
                                                                                                  [
                                                                                                      t._v(
                                                                                                          '您的算力豆已不足，如需继续使用，请尽快获取新的算力豆，或前往"'
                                                                                                      ),
                                                                                                      e(
                                                                                                          'span',
                                                                                                          {
                                                                                                              staticClass:
                                                                                                                  'ecloud-span',
                                                                                                              on: {
                                                                                                                  click: t.getECloudToken,
                                                                                                              },
                                                                                                          },
                                                                                                          [
                                                                                                              t._v(
                                                                                                                  '移动云'
                                                                                                              ),
                                                                                                          ]
                                                                                                      ),
                                                                                                      t._v(
                                                                                                          '"使用付费版本 '
                                                                                                      ),
                                                                                                  ]
                                                                                              )
                                                                                            : t
                                                                                                  .$store
                                                                                                  .state
                                                                                                  .summaryData
                                                                                                  .availableCount <
                                                                                                  0.1 &&
                                                                                              !t.show_diversion_ecloud
                                                                                            ? e(
                                                                                                  'span',
                                                                                                  {
                                                                                                      staticStyle:
                                                                                                          {
                                                                                                              color: '#ff454d',
                                                                                                              'margin-left':
                                                                                                                  '0px',
                                                                                                              cursor: 'auto',
                                                                                                          },
                                                                                                  },
                                                                                                  [
                                                                                                      t._v(
                                                                                                          '您的算力豆已不足，如需继续使用，请尽快获取新的算力豆'
                                                                                                      ),
                                                                                                  ]
                                                                                              )
                                                                                            : t._e(),
                                                                                    ]
                                                                                ),
                                                                            ],
                                                                            1
                                                                        )
                                                                      : t._e(),
                                                                  e(
                                                                      'jt-row',
                                                                      {
                                                                          staticClass: 'form-row',
                                                                          attrs: { gutter: 16 },
                                                                      },
                                                                      [
                                                                          e(
                                                                              'jt-col',
                                                                              {
                                                                                  staticClass:
                                                                                      'row-content',
                                                                                  attrs: {
                                                                                      offset: 4,
                                                                                      span: 10,
                                                                                  },
                                                                              },
                                                                              [
                                                                                  e(
                                                                                      'div',
                                                                                      {
                                                                                          staticClass:
                                                                                              'button-group',
                                                                                      },
                                                                                      [
                                                                                          e(
                                                                                              'jt-button',
                                                                                              {
                                                                                                  staticClass:
                                                                                                      'button',
                                                                                                  staticStyle:
                                                                                                      {
                                                                                                          width: '120px',
                                                                                                      },
                                                                                                  attrs: {
                                                                                                      type: 'primary',
                                                                                                      disabled:
                                                                                                          t.ableClickCreateBtn(),
                                                                                                      loading:
                                                                                                          t.submitBtnLoading,
                                                                                                  },
                                                                                                  on: {
                                                                                                      click: () =>
                                                                                                          t.createInstance(),
                                                                                                  },
                                                                                              },
                                                                                              [
                                                                                                  t._v(
                                                                                                      ' 确定 '
                                                                                                  ),
                                                                                              ]
                                                                                          ),
                                                                                          1 ===
                                                                                              t
                                                                                                  .$route
                                                                                                  .meta
                                                                                                  .showCancel ||
                                                                                          t.editMode
                                                                                              ? e(
                                                                                                    'jt-button',
                                                                                                    {
                                                                                                        staticClass:
                                                                                                            'button',
                                                                                                        on: {
                                                                                                            click: t.cancelBtn,
                                                                                                        },
                                                                                                    },
                                                                                                    [
                                                                                                        t._v(
                                                                                                            ' 取消 '
                                                                                                        ),
                                                                                                    ]
                                                                                                )
                                                                                              : t._e(),
                                                                                      ],
                                                                                      1
                                                                                  ),
                                                                              ]
                                                                          ),
                                                                      ],
                                                                      1
                                                                  ),
                                                              ],
                                                              1
                                                          ),
                                                      ],
                                                      1
                                                  ),
                                              ]
                                          ),
                                      ],
                                      1
                                  )
                                : t._e(),
                            e('dataset-selector', {
                                attrs: {
                                    selectedRows: { ...t.selectedRows },
                                    visible: t.dlgVisible,
                                },
                                on: {
                                    cancel: function (e) {
                                        t.dlgVisible = !1
                                    },
                                    ok: t.onDialogOk,
                                },
                            }),
                            e('rotate-captch-modal', {
                                ref: 'rotateCaptchModalRef',
                                attrs: { verifyVisible: t.verifyVisible },
                                on: {
                                    end: t.rotateCaptchModalEnd,
                                    cancel: function (e) {
                                        t.verifyVisible = !1
                                    },
                                },
                            }),
                        ],
                        1
                    )
                },
                s = [],
                r = (a('ad80'), a('375d')),
                n = a('36af'),
                o = a('674f'),
                l = a('e69a'),
                c = a('12ad'),
                d = a('be40'),
                u = a('751a'),
                m = a('e53b'),
                h = a('fabc'),
                p = a('b254'),
                g = a('fa7d'),
                f = a('1e28'),
                v = a('9275'),
                b = {
                    name: 'creat-data',
                    components: {
                        'jt-select': r['d'],
                        'jt-select-option': r['d'].Option,
                        'jt-breadcrumb': n['a'],
                        'jt-breadcrumb-item': n['a'].Item,
                        JtEmpty: o['a'],
                        jtConfigProvider: l['a'],
                        jtRemainingAlert: d['a'],
                        datasetSelector: m['a'],
                        rotateCaptchModal: v['a'],
                    },
                    watch: {
                        'formData.instanceName'(t) {
                            t && (this.nameNotInit = !0),
                                [
                                    'index',
                                    'distributed_train',
                                    'model_train',
                                    'task_model',
                                ].includes(this.$route.meta.ajaxUrl) &&
                                    (this.formData.projectId = t)
                        },
                    },
                    data() {
                        return {
                            instanceTypeArray: f['g'],
                            visible: !1,
                            nameLimit: 30,
                            descriptionLimit: { min: 20, max: 80 },
                            emptyImage: a('7047'),
                            submitBtnLoading: !1,
                            formData: {
                                instanceName: '',
                                gpuSpec: void 0,
                                imageId: void 0,
                                remark: '',
                                memory: 0,
                                projectId: '',
                            },
                            availableLimit: 500,
                            GpuSpecList: [],
                            imageNameList: [],
                            remainingStorage: 0,
                            instanceNameRepeat: !1,
                            nameNotInit: !1,
                            instanceNameErrorText: '已有该实例名称，请重新命名',
                            GpuErrorText: '',
                            remainingAlertDisplay: !1,
                            editMode: !1,
                            instanceId: '',
                            computeMgrSummary: { availableCount: 0 },
                            dlgVisible: !1,
                            selectedRows: { personDataSet: [], publicDataSet: [] },
                            available: {},
                            instanceInfo: {},
                            getInstanceNameRepeatTimeout: null,
                            usagesType: h['f'],
                            projectTypeDisplayRule: f['h'],
                            rotateCaptchModalRef: null,
                            verifyVisible: !1,
                        }
                    },
                    computed: {
                        SHOW_STORAGE() {
                            return +window.envSetting.SHOW_STORAGE
                        },
                        getParamsData() {
                            return this.$route.params.item
                                ? JSON.parse(this.$route.params.item)
                                : ''
                        },
                        getParentPageInfo() {
                            return this.$router.options.routes
                                .find((t) => 'Home' === t.name)
                                .children.find((t) => t.name === this.getParamsData.fromPage)
                        },
                        SHOW_INSTANCE_REMARK() {
                            return window.envSetting.SHOW_INSTANCE_REMARK
                        },
                        getAlertHideStatus() {
                            return (t) => Object(g['c'])(t)
                        },
                        showAvailableCountAlert() {
                            return (
                                this.$store.state.summaryData.availableCount < 0.1 &&
                                !this.getAlertHideStatus('summaryDataAlert') &&
                                f['g'][this.$route.meta.ajaxUrl] !== f['g'].job
                            )
                        },
                        getInstanceDetail() {
                            if (-1 === location.href.indexOf('?')) return null
                            const t = decodeURI(
                                    location.href.substring(location.href.indexOf('?') + 1)
                                ),
                                e = {}
                            for (const a in t.split('&')) {
                                const i = t.split('&')[a].split('=')
                                e[i[0]] = i[1]
                            }
                            return e
                        },
                        ENABLE_DISTRIBUTE_STORAGE() {
                            return '1' == window.envSetting.ENABLE_DISTRIBUTE_STORAGE
                        },
                        isDistributedTrain() {
                            return this.$route.path.includes('distributed_train')
                        },
                        sectionHaveMarginTop() {
                            let t = !1
                            if (
                                this.$store.state.remainingAlertInit &&
                                this.SHOW_STORAGE &&
                                !Object(g['c'])('remainingAlert')
                            ) {
                                const e = {
                                    usages:
                                        this.$store.getters.remainingAlertDisplay(1, 'usages') ||
                                        this.$store.getters.remainingAlertDisplay(2, 'usages') ||
                                        this.$store.getters.remainingAlertDisplay(3, 'usages'),
                                    remainingAlert:
                                        this.$store.getters.remainingAlertDisplay(
                                            1,
                                            'remainingCapacity'
                                        ) ||
                                        this.$store.getters.remainingAlertDisplay(
                                            2,
                                            'remainingCapacity'
                                        ) ||
                                        this.$store.getters.remainingAlertDisplay(
                                            3,
                                            'remainingCapacity'
                                        ),
                                }
                                for (const a in e) {
                                    if (!this.SHOW_STORAGE) break
                                    if (
                                        (this.ENABLE_DISTRIBUTE_STORAGE || 'usages' !== a) &&
                                        e[a]
                                    ) {
                                        t = !0
                                        break
                                    }
                                }
                            }
                            return t
                        },
                        getUsage() {
                            return this.isDistributedTrain && this.ENABLE_DISTRIBUTE_STORAGE
                                ? isNaN(this.$store.state.usages.available)
                                    ? 'NA'
                                    : this.$store.getters.getUsage(
                                          this.$store.state.usages.available
                                      )
                                : isNaN(this.$store.state.remainingCapacity.available)
                                ? 'NA'
                                : this.$store.getters.getUsage('available')
                        },
                        show_diversion_ecloud() {
                            return (
                                this.$store.state.isBiSheng &&
                                this.$store.state.ecloudDiversionStatusSwitch
                            )
                        },
                    },
                    created() {
                        ;(this.instanceId =
                            this.$route.query.projectId || this.$route.query.instanceId),
                            (this.editMode = (() =>
                                f['g'][this.$route.meta.ajaxUrl] !== f['g'].job &&
                                (f['g'][this.$route.meta.ajaxUrl] === f['g'].competition
                                    ? '1' === this.$route.query.hasInstance
                                    : this.$route.query.projectId ||
                                      this.$route.query.instanceId))()),
                            this.$route.meta.ableEditName ||
                                ((this.formData.instanceName = this.$route.query.projectName),
                                (this.formData.projectId = this.$route.query.projectId)),
                            this.getUserOverview().then(async () => {
                                this.editMode && (await this.getInstanceInfo()),
                                    this.getGpuSpec(),
                                    this.getRemainingStorage(),
                                    this.getComputeMgr(),
                                    this.getAvailable()
                            })
                    },
                    methods: {
                        ...Object(c['b'])(['searchRemainingCapacity', 'getUserOverview']),
                        getInstanceInfo() {
                            return new Promise((t) => {
                                let e = Object(f['c'])(f['g'][this.$route.meta.ajaxUrl]).urls
                                    .instance_state_by_project
                                const a = {},
                                    i = f['g'][this.$route.meta.ajaxUrl] === f['g'].competition
                                i
                                    ? (a.projectId = this.instanceId)
                                    : (a.instanceIds = this.instanceId),
                                    this.$http.get(e, a, (e) => {
                                        var a
                                        200 == e.code &&
                                            ((this.instanceInfo = i
                                                ? e.data
                                                : e.data.instanceIdList[0]),
                                            (this.formData.instanceName =
                                                this.instanceInfo.instanceName),
                                            (this.formData.remark =
                                                null !== (a = this.instanceInfo.remark) &&
                                                void 0 !== a
                                                    ? a
                                                    : ''),
                                            this.instanceInfo.publicDataSet &&
                                                this.instanceInfo.publicDataSet
                                                    .split(',')
                                                    .map((t) => {
                                                        this.selectedRows.publicDataSet.push({
                                                            dataName: t.split(';')[0],
                                                            projectId: t.split(';')[1],
                                                        })
                                                    }),
                                            this.instanceInfo.personDataSet &&
                                                this.instanceInfo.personDataSet
                                                    .split(',')
                                                    .map((t) => {
                                                        this.selectedRows.personDataSet.push({
                                                            dataName: t,
                                                        })
                                                    }))
                                        t(e)
                                    })
                            })
                        },
                        getComputeMgr() {
                            Object(u['GET'])('/accounting/web/computemgr/summary').then((t) => {
                                t.errorCode || (this.computeMgrSummary = t.body)
                            })
                        },
                        handleRemoveTag(t) {
                            const e = this.selectedRows.personDataSet.concat(),
                                a = this.selectedRows.publicDataSet.concat()
                            let i = e.findIndex((e) => e.dataName === t)
                            i > -1 && e.splice(i, 1),
                                (i = a.findIndex((e) => e.dataName === t)),
                                i > -1 && a.splice(i, 1),
                                (this.selectedRows = { personDataSet: e, publicDataSet: a })
                        },
                        handleSelectDataSet() {
                            this.dlgVisible = !0
                        },
                        onDialogOk(t) {
                            ;(this.selectedRows = t), (this.dlgVisible = !1)
                        },
                        testError(t) {
                            let e = !1
                            return (
                                /[^a-zA-Z0-9\u4e00-\u9fa5]/.test(t[0]) && (e = !0),
                                /[^a-zA-Z0-9\u4e00-\u9fa5\(\)（）\-\s]/.test(t) && (e = !0),
                                this.formData.instanceName.length > this.nameLimit && (e = !0),
                                e
                            )
                        },
                        testNameError() {
                            if (0 === this.$route.meta.ableEditName) return !1
                            let t = !1
                            return (
                                this.testError(this.formData.instanceName) && (t = !0),
                                t
                                    ? (this.instanceNameErrorText =
                                          this.nameLimit +
                                          '个字符以内，必须以中英文或数字开头，支持小括号、短横线和空格')
                                    : this.formData.instanceName.includes('script')
                                    ? ((t = !0), (this.instanceNameErrorText = '不能包含“script”'))
                                    : '' == this.formData.instanceName &&
                                      ((t = !0), (this.instanceNameErrorText = '名称不能为空')),
                                t
                            )
                        },
                        afterVisibleChange() {
                            this.getRemainingStorage()
                        },
                        getRemainingStorage() {
                            this.searchRemainingCapacity(() => {
                                this.remainingStorage = this.dataSizeFormat(
                                    1024 *
                                        this.$store.state.remainingCapacity.available *
                                        1024 *
                                        1024,
                                    2,
                                    !1
                                )
                            })
                        },
                        showDrawer() {
                            this.visible = !0
                        },
                        onClose() {
                            this.visible = !1
                        },
                        getGpuSpec() {
                            Object(p['a'])(
                                f['g'][this.$route.meta.ajaxUrl],
                                this.$route.query ? this.$route.query : {}
                            ).then((t) => {
                                ;(this.GpuSpecList = t.list),
                                    1 === this.GpuSpecList.length &&
                                        (this.formData.gpuSpec = t.list[0].specId),
                                    (this.GpuErrorText = t.errorText),
                                    (this.formData.imageId = void 0),
                                    this.editMode &&
                                        (this.formData.gpuSpec = this.GpuSpecList.every(
                                            (t) => t.specId !== this.instanceInfo.gpuSpecId
                                        )
                                            ? ''
                                            : this.instanceInfo.gpuSpecId),
                                    this.projectTypeDisplayRule[this.$route.meta.ajaxUrl]
                                        .showImageName &&
                                        this.gpuSpecChange(this.formData.gpuSpec, !0)
                            })
                        },
                        gpuSpecChange(t, e) {
                            if (void 0 === t || null === t) return
                            if (
                                !this.projectTypeDisplayRule[this.$route.meta.ajaxUrl].showImageName
                            )
                                return
                            const a = { specId: t }
                            this.$http.get('/dp_platform/resource/image/spec_image', a, (t) => {
                                var a
                                200 === t.code &&
                                    ((this.imageNameList = t.data),
                                    this.editMode && e
                                        ? (this.formData.imageId = this.imageNameList.every(
                                              (t) => t.id !== this.instanceInfo.imageId
                                          )
                                              ? ''
                                              : this.instanceInfo.imageId)
                                        : (this.formData.imageId =
                                              null ===
                                                  (a = this.imageNameList.find(
                                                      (t) => 'ALL' === t.imageOwner
                                                  )) || void 0 === a
                                                  ? void 0
                                                  : a.id))
                            })
                        },
                        getAvailable() {
                            this.$http.get('/accounting/web/computemgr/available', {}, (t) => {
                                'OK' === t.state &&
                                    f['g'][this.$route.meta.ajaxUrl] !== f['g'].job &&
                                    (this.available = t.body.specMap)
                            })
                        },
                        getGpuSpecTxt(t) {
                            if (!this.available[t.specAttribute]) return '' + t.specName
                            let e = ''
                            switch (t.gpuLeftOK) {
                                case 520:
                                    e = '算力豆不足'
                                    break
                                case 512:
                                    e = '平台剩余可用资源不足'
                                    break
                                case 528:
                                    e = '个人剩余可用资源不足'
                                    break
                            }
                            return `${t.specName}（${this.available[t.specAttribute]}）${
                                e ? '- ' + e : ''
                            }`
                        },
                        gpuSpecAbleChoose(t) {
                            return this.available[t.specAttribute]
                                ? 200 !== t.gpuLeftOK ||
                                      this.$store.state.summaryData.availableCount <
                                          this.available[t.specAttribute].split('算力豆')[0]
                                : !t.gpuLeftOK
                        },
                        clearErrorType() {
                            ;(this.instanceNameErrorText = ''),
                                (this.instanceNameRepeat = !1),
                                (this.submitBtnLoading = !1)
                        },
                        async changeInstanceName() {
                            this.getInstanceNameRepeatTimeout &&
                                clearTimeout(this.getInstanceNameRepeatTimeout),
                                (this.getInstanceNameRepeatTimeout = await setTimeout(
                                    this.getInstanceNameRepeat,
                                    300
                                ))
                        },
                        getInstanceNameRepeat() {
                            if (
                                this.editMode &&
                                this.formData.instanceName.trim() === this.instanceInfo.instanceName
                            )
                                return void this.clearErrorType()
                            if (!this.formData.instanceName.trim())
                                return void this.clearErrorType()
                            if (this.testNameError()) return void this.clearErrorType()
                            const t = `/dp_platform/resource/${this.$route.meta.ajaxUrl}/instance_repeat`
                            this.$http.get(
                                t,
                                {
                                    instanceName: this.formData.instanceName.trim(),
                                    userId: this.$store.state.userId,
                                },
                                (t) => {
                                    ;(this.submitBtnLoading = !1),
                                        200 == t.code &&
                                            ((this.instanceNameRepeat = t.data.instanceNameRepeat),
                                            this.instanceNameRepeat
                                                ? (this.instanceNameErrorText =
                                                      '已有该实例名称，请重新命名')
                                                : this.clearErrorType())
                                }
                            )
                        },
                        dataSizeFormat(t, e = 2, a = !0) {
                            if (null === t || void 0 === t || '' === t) return '0.00 KB'
                            const i = void 0 === t.size ? t : t.size
                            if (0 === i) return '0.00 KB'
                            let s = ''
                            return (
                                i / 1024 < 1
                                    ? ((s = (100 * Math.ceil(i)) / 100), (s = s.toFixed(e) + ' B'))
                                    : i / 1024 / 1024 < 1
                                    ? ((s = (100 * Math.ceil(i / 1024)) / 100),
                                      (s = s.toFixed(e) + ' KB'))
                                    : i / 1024 / 1024 / 1024 < 1
                                    ? ((s = Math.ceil((i / 1024 / 1024) * 100) / 100),
                                      (s = s.toFixed(e) + ' MB'))
                                    : ((s = Math.ceil((i / 1024 / 1024 / 1024) * 100) / 100),
                                      (s = s.toFixed(e) + ' GB')),
                                s
                            )
                        },
                        ableClickCreateBtn() {
                            var t, e
                            let a = !1
                            for (const i in this.formData)
                                ('remark' === i && '0' == this.SHOW_INSTANCE_REMARK) ||
                                    (('imageId' !== i ||
                                        this.projectTypeDisplayRule[this.$route.meta.ajaxUrl]
                                            .showImageName) &&
                                        ((void 0 !== this.formData[i] && '' !== this.formData[i]) ||
                                            (a = !0)))
                            return (
                                this.GpuSpecList.find((t) => 200 === t.gpuLeftOK) || (a = !0),
                                '' !== this.formData.remark &&
                                    (this.descriptionLimit.min >
                                        (null === (t = this.formData.remark) || void 0 === t
                                            ? void 0
                                            : t.length) ||
                                        (null === (e = this.formData.remark) || void 0 === e
                                            ? void 0
                                            : e.length) > this.descriptionLimit.max) &&
                                    (a = !0),
                                this.$store.state.overViewData.all.runningNum !==
                                    this.$store.state.overViewData.all.runningInstanceQuota ||
                                    this.editMode ||
                                    (a = !0),
                                this.isDistributedTrain && this.ENABLE_DISTRIBUTE_STORAGE
                                    ? this.$store.state.usages.available ||
                                      !this.SHOW_STORAGE ||
                                      this.editMode ||
                                      (a = !0)
                                    : this.$store.state.remainingCapacity.available ||
                                      !this.SHOW_STORAGE ||
                                      this.editMode ||
                                      (a = !0),
                                a || this.instanceNameRepeat || this.testNameError()
                            )
                        },
                        cancelBtn() {
                            this.$router.go(-1)
                        },
                        createInstance(t) {
                            console.log(t, this.formData)
                            const e = this.$createElement,
                                a = this.editMode
                                    ? `/dp_platform/resource/${this.$route.meta.ajaxUrl}/update_instance`
                                    : `/dp_platform/resource/${this.$route.meta.ajaxUrl}/create_instance`
                            ;(this.submitBtnLoading = !0),
                                this.$store.commit('changeSubmitLoading', { show: !0 })
                            const i = { ...this.formData, verifyCode: t, gpuSpec: 2 }
                            this.$route.meta.showDataset &&
                                ((i.personDataSet = Object(h['d'])(
                                    this.selectedRows.personDataSet
                                )),
                                (i.publicDataSet = Object(h['e'])(
                                    this.selectedRows.publicDataSet
                                ))),
                                (i.instanceName = i.instanceName.trim()),
                                (i.projectId = i.projectId.trim()),
                                this.editMode && (i.instanceId = this.instanceInfo.instanceId),
                                this.$http.post(a, i, (t) => {
                                    var a
                                    if (
                                        ((this.submitBtnLoading = !1),
                                        this.$store.commit('changeSubmitLoading', { show: !1 }),
                                        t.code !== g['h'].verify.code)
                                    )
                                        if (t.code !== g['h'].error.code)
                                            if (t.code !== g['h'].outDate.code)
                                                if (200 == t.code)
                                                    (null !== (a = t.data) &&
                                                        void 0 !== a &&
                                                        a.instanceFlag) ||
                                                    this.editMode
                                                        ? this.editMode
                                                            ? this.cancelBtn()
                                                            : [
                                                                  f['g'].index,
                                                                  f['g'].distributed_train,
                                                                  f['g'].task_model,
                                                                  f['g'].model_train,
                                                              ].includes(
                                                                  f['g'][this.$route.meta.ajaxUrl]
                                                              )
                                                            ? this.$router.push(
                                                                  '/home/' + this.$route.meta.url
                                                              )
                                                            : this.$router.push(
                                                                  `/home/${this.$route.meta.url}/instance-info/${this.$route.query.projectId}`
                                                              )
                                                        : this.$message.error('新建实例失败')
                                                else if (
                                                    '510' == t.code ||
                                                    '511' == t.code ||
                                                    '512' == t.code ||
                                                    '519' == t.code
                                                )
                                                    this.$modelErrorNotification(t.code)
                                                else if (516 === t.code)
                                                    this.$message.error(
                                                        `不存在该${this.$route.meta.abbreviation}，新建实例失败`
                                                    )
                                                else if (540 === t.code)
                                                    this.$modelErrorNotification(t.code, {
                                                        message: '实例新建失败',
                                                        description: e('p', [t.msg]),
                                                    })
                                                else if (t.error) {
                                                    let a = Object(f['c'])(
                                                        f['g'][this.$route.meta.ajaxUrl]
                                                    ).typeDisplayName
                                                    this.$modelErrorNotification(t.code, {
                                                        message: this.editMode
                                                            ? '实例编辑失败'
                                                            : '实例新建失败',
                                                        description: e('p', [
                                                            t.msg || `您的 ${a} 实例新建失败`,
                                                        ]),
                                                    })
                                                } else
                                                    this.$modelErrorNotification(t.code, {
                                                        message: this.editMode
                                                            ? '实例编辑失败'
                                                            : null,
                                                        description: e('p', [t.msg || '实例错误']),
                                                    })
                                            else
                                                this.$refs.rotateCaptchModalRef.setResult(
                                                    g['h'].outDate.text
                                                )
                                        else
                                            this.$refs.rotateCaptchModalRef.setResult(
                                                g['h'].error.text
                                            )
                                    else this.verifyVisible = !0
                                })
                        },
                        closeAlert() {
                            Object(g['a'])('summaryDataAlert')
                        },
                        rotateCaptchModalEnd(t) {
                            this.$refs.rotateCaptchModalRef.setResult(g['h'].verify.text),
                                this.createInstance(t)
                        },
                        ...Object(c['b'])(['getECloudToken']),
                    },
                },
                y = b,
                S = (a('006d'), a('bf56')),
                w = Object(S['a'])(y, i, s, !1, null, '3e61410a', null)
            e['default'] = w.exports
        },
        c7dc: function (t, e, a) {
            'use strict'
            a('afbf')
        },
        e53b: function (t, e, a) {
            'use strict'
            var i = function () {
                    var t = this,
                        e = t._self._c
                    return e(
                        'a-modal',
                        {
                            attrs: {
                                dialogClass: 'dialog-container',
                                visible: t.visible,
                                title: '选择数据集',
                            },
                            on: {
                                cancel: function (e) {
                                    return t.$emit('cancel')
                                },
                            },
                        },
                        [
                            e(
                                'template',
                                { slot: 'footer' },
                                [
                                    e(
                                        'a-button',
                                        {
                                            key: 'back',
                                            on: {
                                                click: function (e) {
                                                    return t.$emit('cancel')
                                                },
                                            },
                                        },
                                        [t._v(' 取消 ')]
                                    ),
                                    e(
                                        'a-button',
                                        {
                                            key: 'submit',
                                            attrs: { type: 'primary' },
                                            on: { click: t.handleOk },
                                        },
                                        [
                                            t._v(
                                                ' ' +
                                                    t._s(`已选择${t.selectedNum}/${t.maxCount}`) +
                                                    ' '
                                            ),
                                        ]
                                    ),
                                ],
                                1
                            ),
                            e(
                                'div',
                                { staticClass: 'tab-container' },
                                [
                                    e(
                                        'a-radio-group',
                                        {
                                            staticClass: 'tab-group',
                                            model: {
                                                value: t.type,
                                                callback: function (e) {
                                                    t.type = e
                                                },
                                                expression: 'type',
                                            },
                                        },
                                        [
                                            e(
                                                'a-radio-button',
                                                { attrs: { value: 'publicDataSet' } },
                                                [t._v('公共数据集 ')]
                                            ),
                                            e(
                                                'a-radio-button',
                                                { attrs: { value: 'personDataSet' } },
                                                [t._v('个人数据集 ')]
                                            ),
                                        ],
                                        1
                                    ),
                                    e(
                                        'div',
                                        {
                                            attrs: { slot: 'tabBarExtraContent' },
                                            slot: 'tabBarExtraContent',
                                        },
                                        [
                                            e(
                                                'a',
                                                {
                                                    staticClass: 'iconfont reloadIcon',
                                                    on: {
                                                        click: function (e) {
                                                            return (
                                                                e.stopPropagation(),
                                                                t.getDataSet.apply(null, arguments)
                                                            )
                                                        },
                                                    },
                                                },
                                                [t._v('')]
                                            ),
                                            e(
                                                'a-input',
                                                {
                                                    staticClass: 'search-input',
                                                    attrs: { placeholder: '搜索数据集' },
                                                    on: {
                                                        keypress: function (e) {
                                                            return !e.type.indexOf('key') &&
                                                                t._k(
                                                                    e.keyCode,
                                                                    'enter',
                                                                    13,
                                                                    e.key,
                                                                    'Enter'
                                                                )
                                                                ? null
                                                                : t.init.apply(null, arguments)
                                                        },
                                                    },
                                                    model: {
                                                        value: t.keyword,
                                                        callback: function (e) {
                                                            t.keyword = e
                                                        },
                                                        expression: 'keyword',
                                                    },
                                                },
                                                [
                                                    e(
                                                        'span',
                                                        {
                                                            staticClass:
                                                                'iconfont search-icon search-fn-btn',
                                                            attrs: { slot: 'prefix' },
                                                            on: {
                                                                click: function (e) {
                                                                    return (
                                                                        e.stopPropagation(),
                                                                        t.getDataSet.apply(
                                                                            null,
                                                                            arguments
                                                                        )
                                                                    )
                                                                },
                                                            },
                                                            slot: 'prefix',
                                                        },
                                                        [t._v('')]
                                                    ),
                                                ]
                                            ),
                                        ],
                                        1
                                    ),
                                ],
                                1
                            ),
                            e(
                                'div',
                                { staticClass: 'table-container' },
                                [
                                    e(
                                        'a-table',
                                        {
                                            attrs: {
                                                pagination: !1,
                                                rowKey: 'dataName',
                                                scroll: { y: 340 },
                                                loading: t.loading,
                                                'data-source': t.list,
                                                rowSelection: t.rowSelection,
                                            },
                                        },
                                        [
                                            e('a-table-column', {
                                                key: 'dataName',
                                                attrs: {
                                                    title: '名称',
                                                    ellipsis: !0,
                                                    'data-index': 'dataName',
                                                },
                                            }),
                                            e('a-table-column', {
                                                key: 'dataDescribe',
                                                attrs: {
                                                    title: '数据描述',
                                                    ellipsis: !0,
                                                    'data-index': 'dataDescribe',
                                                },
                                            }),
                                        ],
                                        1
                                    ),
                                    0 != t.list.length
                                        ? e('div', { staticClass: 'pagination-box' }, [
                                              e(
                                                  'div',
                                                  [
                                                      t._v(
                                                          ' 共 ' + t._s(t.pagination.total) + ' 条 '
                                                      ),
                                                      e(
                                                          'span',
                                                          {
                                                              staticClass: 'pageOption',
                                                              staticStyle: {
                                                                  'margin-left': '15px',
                                                              },
                                                          },
                                                          [t._v('每页显示')]
                                                      ),
                                                      e(
                                                          'jt-select',
                                                          {
                                                              staticStyle: {
                                                                  'min-width': '50px',
                                                                  margin: '0 5px',
                                                              },
                                                              attrs: {
                                                                  defaultValue:
                                                                      t.pagination.pageSize,
                                                              },
                                                              on: {
                                                                  change: t.onTypeAShowSizeChange,
                                                              },
                                                          },
                                                          [
                                                              e('jt-icon', {
                                                                  style: {
                                                                      color: '#606266',
                                                                      marginRight: '-7px',
                                                                  },
                                                                  attrs: {
                                                                      slot: 'suffixIcon',
                                                                      type: 'caret-down',
                                                                  },
                                                                  slot: 'suffixIcon',
                                                              }),
                                                              e(
                                                                  'jt-select-option',
                                                                  { attrs: { value: 5 } },
                                                                  [t._v('5')]
                                                              ),
                                                              e(
                                                                  'jt-select-option',
                                                                  { attrs: { value: 10 } },
                                                                  [t._v('10')]
                                                              ),
                                                              e(
                                                                  'jt-select-option',
                                                                  { attrs: { value: 20 } },
                                                                  [t._v('20')]
                                                              ),
                                                          ],
                                                          1
                                                      ),
                                                      e('span', [t._v('条')]),
                                                  ],
                                                  1
                                              ),
                                              e(
                                                  'div',
                                                  [
                                                      e('jt-pagination', {
                                                          staticStyle: { 'text-align': 'right' },
                                                          attrs: {
                                                              showQuickJumper: '',
                                                              current: t.pagination.pageNum,
                                                              pageSize: t.pagination.pageSize,
                                                              total: t.pagination.total,
                                                          },
                                                          on: { change: t.onTypeAPageChange },
                                                      }),
                                                  ],
                                                  1
                                              ),
                                          ])
                                        : t._e(),
                                ],
                                1
                            ),
                        ],
                        2
                    )
                },
                s = [],
                r = a('fee5'),
                n = a('751a'),
                o = {
                    props: {
                        visible: Boolean,
                        selectedRows: { personDataSet: Array, publicDataSet: Array },
                    },
                    components: { JtPagination: r['a'] },
                    data() {
                        return {
                            keyword: '',
                            type: 'publicDataSet',
                            list: [],
                            currentSelectedRows: { personDataSet: [], publicDataSet: [] },
                            loading: !1,
                            pagination: { pageNum: 1, pageSize: 10, total: 0 },
                            maxCount: 3,
                        }
                    },
                    computed: {
                        rowSelection() {
                            return {
                                onChange: (t, e) => {
                                    ;(this.currentSelectedRows[this.type] = [
                                        ...this.currentSelectedRows[this.type].filter(
                                            (t) => !this.list.some((e) => e.dataName === t.dataName)
                                        ),
                                        ...e,
                                    ]),
                                        (this.list = this.list.concat())
                                },
                                getCheckboxProps: (t) => ({
                                    props: {
                                        name: t.name,
                                        disabled:
                                            this.selectedNum >= 3 &&
                                            !this.currentSelectedRows[this.type].some(
                                                (e) => e.dataName == t.dataName
                                            ),
                                    },
                                }),
                                selectedRowKeys: this.currentSelectedRows[this.type].map(
                                    (t) => t.dataName
                                ),
                                hideDefaultSelections: !0,
                                columnTitle: ' ',
                            }
                        },
                        selectedNum() {
                            return [
                                ...this.currentSelectedRows.personDataSet,
                                ...this.currentSelectedRows.publicDataSet,
                            ].length
                        },
                    },
                    watch: {
                        type() {
                            this.resetPage(), this.getDataSet()
                        },
                        'pagination.pageNum': 'getDataSet',
                        visible(t) {
                            t &&
                                ((this.currentSelectedRows = this.selectedRows),
                                (this.type = 'publicDataSet'),
                                this.getDataSet())
                        },
                        keyword() {
                            ;(this.pagination = { pageNum: 1, pageSize: 10, total: 0 }),
                                this.getDataSet()
                        },
                    },
                    methods: {
                        init() {
                            ;(this.pagination.pageNum = 1), this.getDataSet()
                        },
                        getDataSet() {
                            let t = null
                            t =
                                'personDataSet' === this.type
                                    ? this.getPersonDataSet.bind(this)
                                    : this.getPublicDataSet.bind(this)
                            const { pageSize: e, pageNum: a } = this.pagination,
                                i = { pageSize: e, pageNum: a, keyword: this.keyword }
                            ;(this.loading = !0),
                                t(i).then((t) => {
                                    ;(this.loading = !1),
                                        (this.list = t.list.concat()),
                                        (this.pagination.total = t.total),
                                        (this.currentSelectedRows[this.type] =
                                            this.currentSelectedRows[this.type].map((t) =>
                                                this.list.find((e) => e.dataName === t.dataName)
                                                    ? this.list.find(
                                                          (e) => e.dataName === t.dataName
                                                      )
                                                    : t
                                            ))
                                })
                        },
                        getPersonDataSet(t) {
                            return Object(n['POST'])(
                                '/dataset/web/personalDataset/findByUserId/myDataset',
                                t
                            ).then((t) => {
                                let e = [],
                                    a = 0
                                return (
                                    t.errorCode ||
                                        ((e = t.body.list.map((t) => ({
                                            ...t,
                                            dataId: t.id,
                                            dataName: t.datasetName,
                                            dataDescribe: t.datasetDescribe,
                                        }))),
                                        (a = t.body.totalCount)),
                                    { list: e, total: a }
                                )
                            })
                        },
                        getPublicDataSet(t) {
                            return Object(n['POST'])('/dataset/web/dataList', t).then((t) => {
                                let e = [],
                                    a = 0
                                return (
                                    t.errorCode ||
                                        ((e = t.body.list.concat()), (a = t.body.totalCount)),
                                    { list: e, total: a }
                                )
                            })
                        },
                        handleOk() {
                            this.$emit('ok', this.currentSelectedRows)
                        },
                        onTypeAPageChange(t) {
                            ;(this.pagination.pageNum = t), this.getDataSet()
                        },
                        onTypeAShowSizeChange(t) {
                            this.resetPage(), (this.pagination.pageSize = t), this.getDataSet()
                        },
                        resetPage() {
                            ;(this.pagination = { pageNum: 1, pageSize: 10, total: 0 }),
                                (this.keyword = '')
                        },
                    },
                },
                l = o,
                c = (a('c7dc'), a('bf56')),
                d = Object(c['a'])(l, i, s, !1, null, '141f8cae', null)
            e['a'] = d.exports
        },
        fabc: function (t, e, a) {
            'use strict'
            a.d(e, 'd', function () {
                return m
            }),
                a.d(e, 'e', function () {
                    return h
                }),
                a.d(e, 'a', function () {
                    return p
                }),
                a.d(e, 'f', function () {
                    return g
                }),
                a.d(e, 'b', function () {
                    return o
                }),
                a.d(e, 'c', function () {
                    return l
                })
            var i = a('1e28'),
                s = a('453f'),
                r = a.n(s),
                n = a('deaf')
            const o = (t) => {
                    const e = t.split('?')[0],
                        a = e.substring(d(e, '/', 2) + 1),
                        i = t.split('?')[1].split('=')[1],
                        s = `${e.replace('/lab', '')}/login?next=${encodeURIComponent('/' + a)}`
                    return r()({ url: e })
                        .then((t) => {
                            const e =
                                c('_xsrf') ||
                                t.data.match(
                                    /<input type="hidden" name="_xsrf" value="(\S*)"\/>/
                                )[1]
                            u(s, { _xsrf: e, password: i })
                        })
                        .catch(() => {})
                },
                l = (t) => {
                    const e = t.vscodeURL
                            .substring(d(t.vscodeURL, '/', 2) + 1)
                            .replace('/login', ''),
                        a = n['default'].prototype.$browser
                    if ('Safari' !== a)
                        return r()({ url: t.vscodeURL })
                            .then(() => {
                                u(t.vscodeURL, { base: e, password: t.podPwd })
                            })
                            .catch(() => {})
                    {
                        const a = '/' === e.charAt(0) ? e.slice(1, e.length) : e
                        u(t.vscodeURL, { currentBase: a, password: t.podPwd })
                    }
                }
            function c(t) {
                let e
                const a = new RegExp('(^| )' + t + '=([^;]*)(;|$)')
                return (e = document.cookie.match(a)) ? unescape(e[2]) : null
            }
            function d(t, e, a) {
                let i = t.indexOf(e)
                for (let s = 0; s < a; s++) i = t.indexOf(e, i + 1)
                return i
            }
            function u(t, e) {
                var a = document.createElement('form')
                for (var i in ((a.action = t),
                (a.target = '_blank'),
                (a.method = 'post'),
                (a.style.display = 'none'),
                e)) {
                    var s = document.createElement('input')
                    ;(s.name = i), (s.value = e[i]), a.appendChild(s)
                }
                document.body.appendChild(a), a.submit()
            }
            const m = (t) => t.map((t) => t.dataName).join(','),
                h = (t) => t.map((t) => [t.dataName, t.projectId].join(';')).join(','),
                p = (t) => {
                    for (const e in t) {
                        const a = t[e]
                        if (!/:/g.test(a.useTime) || a.instanceStatus != i['a'].RUNING) continue
                        const s = a.useTime.split(':')
                        let [r, n, o] = [Number(s[0]), Number(s[1]), Number(s[2])]
                        o++, o >= 60 && ((o = 0), n++), n >= 60 && ((n = 0), r++)
                        const l = `${r < 10 ? '0' + r : r}:${n < 10 ? '0' + n : n}:${
                            o < 10 ? '0' + o : o
                        }`
                        t[e].useTime = l
                    }
                    return new Promise((e) => {
                        e(t)
                    })
                },
                g = { usages: 'usages', remainingCapacity: 'remainingCapacity' }
        },
    },
])
