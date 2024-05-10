import {
  F as Si,
  a7 as Ea,
  a8 as fa,
  k as m,
  O as re,
  Y as ue,
  h as ce,
  d as _,
  H as q,
  a9 as $i,
  y as se,
  p as Ht,
  z as dt,
  aa as ga,
  ab as Ca,
  J as E,
  ac as Nt,
  ad as ka,
  l as sn,
  C as ya,
  U as wi,
  ae as Oi,
  af as De,
  A as va,
  ag as Pi,
  ah as Pn,
  E as _i,
  o as Ti,
  c as Mi,
  m as O,
  _ as ma,
  w as Aa,
  a as Ii,
  a6 as Fa,
} from './chunks/framework.cSrMGLof.js'
function Ge(e) {
  '@babel/helpers - typeof'
  return (
    (Ge =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Ge(e)
  )
}
function ba(e, t) {
  if (Ge(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var i = n.call(e, t || 'default')
    if (Ge(i) != 'object') return i
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function Da(e) {
  var t = ba(e, 'string')
  return Ge(t) == 'symbol' ? t : String(t)
}
function Ba(e, t, n) {
  return (
    (t = Da(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function _n(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    t &&
      (i = i.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable
      })),
      n.push.apply(n, i)
  }
  return n
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? _n(Object(n), !0).forEach(function (i) {
          Ba(e, i, n[i])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _n(Object(n)).forEach(function (i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
          })
  }
  return e
}
function g() {
  return (
    (g = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        }),
    g.apply(this, arguments)
  )
}
const xa = Array.isArray,
  Sa = (e) => typeof e == 'string',
  $a = (e) => e !== null && typeof e == 'object'
function Ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0
  return typeof e == 'function' ? e(t) : e ?? n
}
function wa(e) {
  let t
  const n = new Promise((a) => {
      t = e(() => {
        a(!0)
      })
    }),
    i = () => {
      t == null || t()
    }
  return (i.then = (a, r) => n.then(a, r)), (i.promise = n), i
}
function Z() {
  const e = []
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t]
    if (n) {
      if (Sa(n)) e.push(n)
      else if (xa(n))
        for (let i = 0; i < n.length; i++) {
          const a = Z(n[i])
          a && e.push(a)
        }
      else if ($a(n)) for (const i in n) n[i] && e.push(i)
    }
  }
  return e.join(' ')
}
function Oa(e) {
  return (
    e &&
    (e.type === Ea ||
      (e.type === Si && e.children.length === 0) ||
      (e.type === fa && e.children.trim() === ''))
  )
}
function ji() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  const t = []
  return (
    e.forEach((n) => {
      Array.isArray(n)
        ? t.push(...n)
        : (n == null ? void 0 : n.type) === Si
          ? t.push(...ji(n.children))
          : t.push(n)
    }),
    t.filter((n) => !Oa(n))
  )
}
const Pa = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return t
  },
  on = (e) => {
    const t = e
    return (
      (t.install = function (n) {
        n.component(t.displayName || t.name, e)
      }),
      e
    )
  }
function W(e) {
  return { type: Object, default: e }
}
function xt(e) {
  return { type: Boolean, default: e }
}
function Rt(e, t) {
  const n = { validator: () => !0, default: e }
  return n
}
function Tn(e) {
  return { type: Array, default: e }
}
function Mn(e) {
  return { type: String, default: e }
}
function _a(e, t) {
  return e ? { type: e, default: t } : Rt(t)
}
const ln = 'anticon',
  Ta = Symbol('GlobalFormContextKey'),
  Ma = (e) => {
    ue(Ta, e)
  },
  Ia = () => ({
    iconPrefixCls: String,
    getTargetContainer: { type: Function },
    getPopupContainer: { type: Function },
    prefixCls: String,
    getPrefixCls: { type: Function },
    renderEmpty: { type: Function },
    transformCellText: { type: Function },
    csp: W(),
    input: W(),
    autoInsertSpaceInButton: { type: Boolean, default: void 0 },
    locale: W(),
    pageHeader: W(),
    componentSize: { type: String },
    componentDisabled: { type: Boolean, default: void 0 },
    direction: { type: String, default: 'ltr' },
    space: W(),
    virtual: { type: Boolean, default: void 0 },
    dropdownMatchSelectWidth: { type: [Number, Boolean], default: !0 },
    form: W(),
    pagination: W(),
    theme: W(),
    select: W(),
    wave: W(),
  }),
  cn = Symbol('configProvider'),
  Li = {
    getPrefixCls: (e, t) => t || (e ? `ant-${e}` : 'ant'),
    iconPrefixCls: m(() => ln),
    getPopupContainer: m(() => () => document.body),
    direction: m(() => 'ltr'),
  },
  Hi = () => re(cn, Li),
  ja = (e) => ue(cn, e),
  Ni = Symbol('DisabledContextKey'),
  Ri = () => re(Ni, ce(void 0)),
  La = (e) => {
    const t = Ri()
    return (
      ue(
        Ni,
        m(() => {
          var n
          return (n = e.value) !== null && n !== void 0 ? n : t.value
        }),
      ),
      e
    )
  },
  Ha = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: '',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
  Na = {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'Ok',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: !0,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century',
  },
  Ra = Na,
  za = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  zi = za,
  Ga = {
    lang: g(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      Ra,
    ),
    timePickerLocale: g({}, zi),
  },
  In = Ga,
  z = '${label} is not a valid ${type}',
  We = {
    locale: 'en',
    Pagination: Ha,
    DatePicker: In,
    TimePicker: zi,
    Calendar: In,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: z,
          method: z,
          array: z,
          object: z,
          number: z,
          date: z,
          boolean: z,
          integer: z,
          float: z,
          regexp: z,
          email: z,
          url: z,
          hex: z,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
  },
  Gi = _({
    compatConfig: { MODE: 3 },
    name: 'LocaleReceiver',
    props: {
      componentName: String,
      defaultLocale: { type: [Object, Function] },
      children: { type: Function },
    },
    setup(e, t) {
      let { slots: n } = t
      const i = re('localeData', {}),
        a = m(() => {
          const { componentName: s = 'global', defaultLocale: o } = e,
            l = o || We[s || 'global'],
            { antLocale: c } = i,
            d = s && c ? c[s] : {}
          return g(g({}, typeof l == 'function' ? l() : l), d || {})
        }),
        r = m(() => {
          const { antLocale: s } = i,
            o = s && s.locale
          return s && s.exist && !o ? We.locale : o
        })
      return () => {
        const s = e.children || n.default,
          { antLocale: o } = i
        return s == null ? void 0 : s(a.value, r.value, o)
      }
    },
  })
function un(e) {
  for (var t = 0, n, i = 0, a = e.length; a >= 4; ++i, a -= 4)
    (n =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(i) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
const jn = '%'
class Wa {
  constructor(t) {
    ;(this.cache = new Map()), (this.instanceId = t)
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(jn) : t) || null
  }
  update(t, n) {
    const i = Array.isArray(t) ? t.join(jn) : t,
      a = this.cache.get(i),
      r = n(a)
    r === null ? this.cache.delete(i) : this.cache.set(i, r)
  }
}
const Xa = Wa,
  Wi = 'data-token-hash',
  Ee = 'data-css-hash',
  Fe = '__cssinjs_instance__'
function Xe() {
  const e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Ee}]`) || [],
      { firstChild: n } = document.head
    Array.from(t).forEach((a) => {
      ;(a[Fe] = a[Fe] || e), a[Fe] === e && document.head.insertBefore(a, n)
    })
    const i = {}
    Array.from(document.querySelectorAll(`style[${Ee}]`)).forEach((a) => {
      var r
      const s = a.getAttribute(Ee)
      i[s]
        ? a[Fe] === e &&
          ((r = a.parentNode) === null || r === void 0 || r.removeChild(a))
        : (i[s] = !0)
    })
  }
  return new Xa(e)
}
const Xi = Symbol('StyleContextKey'),
  Za = () => {
    var e, t, n
    const i = $i()
    let a
    if (i && i.appContext) {
      const r =
        (n =
          (t =
            (e = i.appContext) === null || e === void 0 ? void 0 : e.config) ===
            null || t === void 0
            ? void 0
            : t.globalProperties) === null || n === void 0
          ? void 0
          : n.__ANTDV_CSSINJS_CACHE__
      r
        ? (a = r)
        : ((a = Xe()),
          i.appContext.config.globalProperties &&
            (i.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = a))
    } else a = Xe()
    return a
  },
  Zi = { cache: Xe(), defaultCache: !0, hashPriority: 'low' },
  pt = () => {
    const e = Za()
    return re(Xi, q(g(g({}, Zi), { cache: e })))
  },
  Ua = (e) => {
    const t = pt(),
      n = q(g(g({}, Zi), { cache: Xe() }))
    return (
      se(
        [() => Ht(e), t],
        () => {
          const i = g({}, t.value),
            a = Ht(e)
          Object.keys(a).forEach((s) => {
            const o = a[s]
            a[s] !== void 0 && (i[s] = o)
          })
          const { cache: r } = a
          ;(i.cache = i.cache || Xe()),
            (i.defaultCache = !r && t.value.defaultCache),
            (n.value = i)
        },
        { immediate: !0 },
      ),
      ue(Xi, n),
      n
    )
  },
  Va = () => ({
    autoClear: xt(),
    mock: Mn(),
    cache: W(),
    defaultCache: xt(),
    hashPriority: Mn(),
    container: _a(),
    ssrInline: xt(),
    transformers: Tn(),
    linters: Tn(),
  })
on(
  _({
    name: 'AStyleProvider',
    inheritAttrs: !1,
    props: Va(),
    setup(e, t) {
      let { slots: n } = t
      return (
        Ua(e),
        () => {
          var i
          return (i = n.default) === null || i === void 0 ? void 0 : i.call(n)
        }
      )
    },
  }),
)
function Ui(e, t, n, i) {
  const a = pt(),
    r = q(''),
    s = q()
  dt(() => {
    r.value = [e, ...t.value].join('%')
  })
  const o = (l) => {
    a.value.cache.update(l, (c) => {
      const [d = 0, u] = c || []
      return d - 1 === 0 ? (i == null || i(u, !1), null) : [d - 1, u]
    })
  }
  return (
    se(
      r,
      (l, c) => {
        c && o(c),
          a.value.cache.update(l, (d) => {
            const [u = 0, p] = d || [],
              k = p || n()
            return [u + 1, k]
          }),
          (s.value = a.value.cache.get(r.value)[1])
      },
      { immediate: !0 },
    ),
    ga(() => {
      o(r.value)
    }),
    s
  )
}
function Pe() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function qa(e, t) {
  return e && e.contains ? e.contains(t) : !1
}
const Ln = 'data-vc-order',
  Ka = 'vc-util-key',
  zt = new Map()
function Vi() {
  let { mark: e } =
    arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  return e ? (e.startsWith('data-') ? e : `data-${e}`) : Ka
}
function ht(e) {
  return e.attachTo
    ? e.attachTo
    : document.querySelector('head') || document.body
}
function Ya(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function qi(e) {
  return Array.from((zt.get(e) || e).children).filter(
    (t) => t.tagName === 'STYLE',
  )
}
function Ki(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Pe()) return null
  const { csp: n, prepend: i } = t,
    a = document.createElement('style')
  a.setAttribute(Ln, Ya(i)),
    n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce),
    (a.innerHTML = e)
  const r = ht(t),
    { firstChild: s } = r
  if (i) {
    if (i === 'queue') {
      const o = qi(r).filter((l) =>
        ['prepend', 'prependQueue'].includes(l.getAttribute(Ln)),
      )
      if (o.length) return r.insertBefore(a, o[o.length - 1].nextSibling), a
    }
    r.insertBefore(a, s)
  } else r.appendChild(a)
  return a
}
function Yi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const n = ht(t)
  return qi(n).find((i) => i.getAttribute(Vi(t)) === e)
}
function Qi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const n = Yi(e, t)
  n && ht(t).removeChild(n)
}
function Qa(e, t) {
  const n = zt.get(e)
  if (!n || !qa(document, n)) {
    const i = Ki('', t),
      { parentNode: a } = i
    zt.set(e, a), e.removeChild(i)
  }
}
function lt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
  var i, a, r
  const s = ht(n)
  Qa(s, n)
  const o = Yi(t, n)
  if (o)
    return (
      !((i = n.csp) === null || i === void 0) &&
        i.nonce &&
        o.nonce !== ((a = n.csp) === null || a === void 0 ? void 0 : a.nonce) &&
        (o.nonce = (r = n.csp) === null || r === void 0 ? void 0 : r.nonce),
      o.innerHTML !== e && (o.innerHTML = e),
      o
    )
  const l = Ki(e, n)
  return l.setAttribute(Vi(n), t), l
}
function Ja(e, t) {
  if (e.length !== t.length) return !1
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
class Be {
  constructor() {
    ;(this.cache = new Map()), (this.keys = []), (this.cacheCallTimes = 0)
  }
  size() {
    return this.keys.length
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      i = { map: this.cache }
    return (
      t.forEach((a) => {
        var r
        i
          ? (i =
              (r = i == null ? void 0 : i.map) === null || r === void 0
                ? void 0
                : r.get(a))
          : (i = void 0)
      }),
      i != null && i.value && n && (i.value[1] = this.cacheCallTimes++),
      i == null ? void 0 : i.value
    )
  }
  get(t) {
    var n
    return (n = this.internalGet(t, !0)) === null || n === void 0
      ? void 0
      : n[0]
  }
  has(t) {
    return !!this.internalGet(t)
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > Be.MAX_CACHE_SIZE + Be.MAX_CACHE_OFFSET) {
        const [a] = this.keys.reduce(
          (r, s) => {
            const [, o] = r
            return this.internalGet(s)[1] < o ? [s, this.internalGet(s)[1]] : r
          },
          [this.keys[0], this.cacheCallTimes],
        )
        this.delete(a)
      }
      this.keys.push(t)
    }
    let i = this.cache
    t.forEach((a, r) => {
      if (r === t.length - 1) i.set(a, { value: [n, this.cacheCallTimes++] })
      else {
        const s = i.get(a)
        s ? s.map || (s.map = new Map()) : i.set(a, { map: new Map() }),
          (i = i.get(a).map)
      }
    })
  }
  deleteByPath(t, n) {
    var i
    const a = t.get(n[0])
    if (n.length === 1)
      return (
        a.map ? t.set(n[0], { map: a.map }) : t.delete(n[0]),
        (i = a.value) === null || i === void 0 ? void 0 : i[0]
      )
    const r = this.deleteByPath(a.map, n.slice(1))
    return (!a.map || a.map.size === 0) && !a.value && t.delete(n[0]), r
  }
  delete(t) {
    if (this.has(t))
      return (
        (this.keys = this.keys.filter((n) => !Ja(n, t))),
        this.deleteByPath(this.cache, t)
      )
  }
}
Be.MAX_CACHE_SIZE = 20
Be.MAX_CACHE_OFFSET = 5
function er() {}
let Ji = er,
  Hn = 0
class e2 {
  constructor(t) {
    ;(this.derivatives = Array.isArray(t) ? t : [t]),
      (this.id = Hn),
      t.length === 0 && Ji(t.length > 0),
      (Hn += 1)
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, i) => i(t, n), void 0)
  }
}
const St = new Be()
function t2(e) {
  const t = Array.isArray(e) ? e : [e]
  return St.has(t) || St.set(t, new e2(t)), St.get(t)
}
const Nn = new WeakMap()
function ct(e) {
  let t = Nn.get(e) || ''
  return (
    t ||
      (Object.keys(e).forEach((n) => {
        const i = e[n]
        ;(t += n),
          i instanceof e2
            ? (t += i.id)
            : i && typeof i == 'object'
              ? (t += ct(i))
              : (t += i)
      }),
      Nn.set(e, t)),
    t
  )
}
function tr(e, t) {
  return un(`${t}_${ct(e)}`)
}
const Ne = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ''),
  n2 = '_bAmBoO_'
function nr(e, t, n) {
  var i, a
  if (Pe()) {
    lt(e, Ne)
    const r = document.createElement('div')
    ;(r.style.position = 'fixed'),
      (r.style.left = '0'),
      (r.style.top = '0'),
      t == null || t(r),
      document.body.appendChild(r)
    const s = n
      ? n(r)
      : (i = getComputedStyle(r).content) === null || i === void 0
        ? void 0
        : i.includes(n2)
    return (
      (a = r.parentNode) === null || a === void 0 || a.removeChild(r), Qi(Ne), s
    )
  }
  return !1
}
let $t
function ir() {
  return (
    $t === void 0 &&
      ($t = nr(
        `@layer ${Ne} { .${Ne} { content: "${n2}"!important; } }`,
        (e) => {
          e.className = Ne
        },
      )),
    $t
  )
}
const Rn = {},
  ar = !0,
  rr = !1,
  sr = !ar && !rr ? 'css-dev-only-do-not-override' : 'css',
  de = new Map()
function or(e) {
  de.set(e, (de.get(e) || 0) + 1)
}
function lr(e, t) {
  typeof document < 'u' &&
    document.querySelectorAll(`style[${Wi}="${e}"]`).forEach((i) => {
      var a
      i[Fe] === t &&
        ((a = i.parentNode) === null || a === void 0 || a.removeChild(i))
    })
}
const cr = 0
function ur(e, t) {
  de.set(e, (de.get(e) || 0) - 1)
  const n = Array.from(de.keys()),
    i = n.filter((a) => (de.get(a) || 0) <= 0)
  n.length - i.length > cr &&
    i.forEach((a) => {
      lr(a, t), de.delete(a)
    })
}
const dr = (e, t, n, i) => {
  const a = n.getDerivativeToken(e)
  let r = g(g({}, a), t)
  return i && (r = i(r)), r
}
function pr(e, t) {
  let n =
    arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ce({})
  const i = pt(),
    a = m(() => g({}, ...t.value)),
    r = m(() => ct(a.value)),
    s = m(() => ct(n.value.override || Rn))
  return Ui(
    'token',
    m(() => [n.value.salt || '', e.value.id, r.value, s.value]),
    () => {
      const {
          salt: l = '',
          override: c = Rn,
          formatToken: d,
          getComputedToken: u,
        } = n.value,
        p = u ? u(a.value, c, e.value) : dr(a.value, c, e.value, d),
        f = tr(p, l)
      ;(p._tokenKey = f), or(f)
      const k = `${sr}-${un(f)}`
      return (p._hashId = k), [p, k]
    },
    (l) => {
      var c
      ur(
        l[0]._tokenKey,
        (c = i.value) === null || c === void 0 ? void 0 : c.cache.instanceId,
      )
    },
  )
}
var hr = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  i2 = 'comm',
  a2 = 'rule',
  r2 = 'decl',
  Er = '@import',
  fr = '@keyframes',
  gr = '@layer',
  s2 = Math.abs,
  dn = String.fromCharCode
function o2(e) {
  return e.trim()
}
function tt(e, t, n) {
  return e.replace(t, n)
}
function Cr(e, t, n) {
  return e.indexOf(t, n)
}
function Ze(e, t) {
  return e.charCodeAt(t) | 0
}
function Ue(e, t, n) {
  return e.slice(t, n)
}
function ae(e) {
  return e.length
}
function kr(e) {
  return e.length
}
function qe(e, t) {
  return t.push(e), e
}
var Et = 1,
  xe = 1,
  l2 = 0,
  U = 0,
  P = 0,
  _e = ''
function pn(e, t, n, i, a, r, s, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: i,
    props: a,
    children: r,
    line: Et,
    column: xe,
    length: s,
    return: '',
    siblings: o,
  }
}
function yr() {
  return P
}
function vr() {
  return (P = U > 0 ? Ze(_e, --U) : 0), xe--, P === 10 && ((xe = 1), Et--), P
}
function K() {
  return (P = U < l2 ? Ze(_e, U++) : 0), xe++, P === 10 && ((xe = 1), Et++), P
}
function fe() {
  return Ze(_e, U)
}
function nt() {
  return U
}
function ft(e, t) {
  return Ue(_e, e, t)
}
function Gt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function mr(e) {
  return (Et = xe = 1), (l2 = ae((_e = e))), (U = 0), []
}
function Ar(e) {
  return (_e = ''), e
}
function wt(e) {
  return o2(ft(U - 1, Wt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function Fr(e) {
  for (; (P = fe()) && P < 33; ) K()
  return Gt(e) > 2 || Gt(P) > 3 ? '' : ' '
}
function br(e, t) {
  for (
    ;
    --t &&
    K() &&
    !(P < 48 || P > 102 || (P > 57 && P < 65) || (P > 70 && P < 97));

  );
  return ft(e, nt() + (t < 6 && fe() == 32 && K() == 32))
}
function Wt(e) {
  for (; K(); )
    switch (P) {
      case e:
        return U
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wt(P)
        break
      case 40:
        e === 41 && Wt(e)
        break
      case 92:
        K()
        break
    }
  return U
}
function Dr(e, t) {
  for (; K() && e + P !== 57; ) if (e + P === 84 && fe() === 47) break
  return '/*' + ft(t, U - 1) + '*' + dn(e === 47 ? e : K())
}
function Br(e) {
  for (; !Gt(fe()); ) K()
  return ft(e, U)
}
function xr(e) {
  return Ar(it('', null, null, null, [''], (e = mr(e)), 0, [0], e))
}
function it(e, t, n, i, a, r, s, o, l) {
  for (
    var c = 0,
      d = 0,
      u = s,
      p = 0,
      f = 0,
      k = 0,
      C = 1,
      F = 1,
      v = 1,
      A = 0,
      x = '',
      b = a,
      D = r,
      S = i,
      h = x;
    F;

  )
    switch (((k = A), (A = K()))) {
      case 40:
        if (k != 108 && Ze(h, u - 1) == 58) {
          Cr((h += tt(wt(A), '&', '&\f')), '&\f', s2(c ? o[c - 1] : 0)) != -1 &&
            (v = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        h += wt(A)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        h += Fr(k)
        break
      case 92:
        h += br(nt() - 1, 7)
        continue
      case 47:
        switch (fe()) {
          case 42:
          case 47:
            qe(Sr(Dr(K(), nt()), t, n, l), l)
            break
          default:
            h += '/'
        }
        break
      case 123 * C:
        o[c++] = ae(h) * v
      case 125 * C:
      case 59:
      case 0:
        switch (A) {
          case 0:
          case 125:
            F = 0
          case 59 + d:
            v == -1 && (h = tt(h, /\f/g, '')),
              f > 0 &&
                ae(h) - u &&
                qe(
                  f > 32
                    ? Gn(h + ';', i, n, u - 1, l)
                    : Gn(tt(h, ' ', '') + ';', i, n, u - 2, l),
                  l,
                )
            break
          case 59:
            h += ';'
          default:
            if (
              (qe(
                (S = zn(h, t, n, c, d, a, o, x, (b = []), (D = []), u, r)),
                r,
              ),
              A === 123)
            )
              if (d === 0) it(h, t, S, S, b, r, u, o, D)
              else
                switch (p === 99 && Ze(h, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    it(
                      e,
                      S,
                      S,
                      i && qe(zn(e, S, S, 0, 0, a, o, x, a, (b = []), u, D), D),
                      a,
                      D,
                      u,
                      o,
                      i ? b : D,
                    )
                    break
                  default:
                    it(h, S, S, S, [''], D, 0, o, D)
                }
        }
        ;(c = d = f = 0), (C = v = 1), (x = h = ''), (u = s)
        break
      case 58:
        ;(u = 1 + ae(h)), (f = k)
      default:
        if (C < 1) {
          if (A == 123) --C
          else if (A == 125 && C++ == 0 && vr() == 125) continue
        }
        switch (((h += dn(A)), A * C)) {
          case 38:
            v = d > 0 ? 1 : ((h += '\f'), -1)
            break
          case 44:
            ;(o[c++] = (ae(h) - 1) * v), (v = 1)
            break
          case 64:
            fe() === 45 && (h += wt(K())),
              (p = fe()),
              (d = u = ae((x = h += Br(nt())))),
              A++
            break
          case 45:
            k === 45 && ae(h) == 2 && (C = 0)
        }
    }
  return r
}
function zn(e, t, n, i, a, r, s, o, l, c, d, u) {
  for (
    var p = a - 1, f = a === 0 ? r : [''], k = kr(f), C = 0, F = 0, v = 0;
    C < i;
    ++C
  )
    for (var A = 0, x = Ue(e, p + 1, (p = s2((F = s[C])))), b = e; A < k; ++A)
      (b = o2(F > 0 ? f[A] + ' ' + x : tt(x, /&\f/g, f[A]))) && (l[v++] = b)
  return pn(e, t, n, a === 0 ? a2 : o, l, c, d, u)
}
function Sr(e, t, n, i) {
  return pn(e, t, n, i2, dn(yr()), Ue(e, 2, -2), 0, i)
}
function Gn(e, t, n, i, a) {
  return pn(e, t, n, r2, Ue(e, 0, i), Ue(e, i + 1, -1), i, a)
}
function Xt(e, t) {
  for (var n = '', i = 0; i < e.length; i++) n += t(e[i], i, e, t) || ''
  return n
}
function $r(e, t, n, i) {
  switch (e.type) {
    case gr:
      if (e.children.length) break
    case Er:
    case r2:
      return (e.return = e.return || e.value)
    case i2:
      return ''
    case fr:
      return (e.return = e.value + '{' + Xt(e.children, i) + '}')
    case a2:
      if (!ae((e.value = e.props.join(',')))) return ''
  }
  return ae((n = Xt(e.children, i))) ? (e.return = e.value + '{' + n + '}') : ''
}
const Wn = 'data-ant-cssinjs-cache-path',
  wr = '_FILE_STYLE__'
let ge,
  c2 = !0
function Or() {
  var e
  if (!ge && ((ge = {}), Pe())) {
    const t = document.createElement('div')
    ;(t.className = Wn),
      (t.style.position = 'fixed'),
      (t.style.visibility = 'hidden'),
      (t.style.top = '-9999px'),
      document.body.appendChild(t)
    let n = getComputedStyle(t).content || ''
    ;(n = n.replace(/^"/, '').replace(/"$/, '')),
      n.split(';').forEach((a) => {
        const [r, s] = a.split(':')
        ge[r] = s
      })
    const i = document.querySelector(`style[${Wn}]`)
    i &&
      ((c2 = !1),
      (e = i.parentNode) === null || e === void 0 || e.removeChild(i)),
      document.body.removeChild(t)
  }
}
function Pr(e) {
  return Or(), !!ge[e]
}
function _r(e) {
  const t = ge[e]
  let n = null
  if (t && Pe())
    if (c2) n = wr
    else {
      const i = document.querySelector(`style[${Ee}="${ge[e]}"]`)
      i ? (n = i.innerHTML) : delete ge[e]
    }
  return [n, t]
}
const Xn = Pe(),
  Tr = '_skip_check_',
  u2 = '_multi_value_'
function Zn(e) {
  return Xt(xr(e), $r).replace(/\{%%%\:[^;];}/g, ';')
}
function Mr(e) {
  return typeof e == 'object' && e && (Tr in e || u2 in e)
}
function Ir(e, t, n) {
  if (!t) return e
  const i = `.${t}`,
    a = n === 'low' ? `:where(${i})` : i
  return e
    .split(',')
    .map((s) => {
      var o
      const l = s.trim().split(/\s+/)
      let c = l[0] || ''
      const d =
        ((o = c.match(/^\w+/)) === null || o === void 0 ? void 0 : o[0]) || ''
      return (c = `${d}${a}${c.slice(d.length)}`), [c, ...l.slice(1)].join(' ')
    })
    .join(',')
}
const Un = new Set(),
  Zt = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      {
        root: n,
        injectHash: i,
        parentSelectors: a,
      } = arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] }
    const {
      hashId: r,
      layer: s,
      path: o,
      hashPriority: l,
      transformers: c = [],
      linters: d = [],
    } = t
    let u = '',
      p = {}
    function f(F) {
      const v = F.getName(r)
      if (!p[v]) {
        const [A] = Zt(F.style, t, { root: !1, parentSelectors: a })
        p[v] = `@keyframes ${F.getName(r)}${A}`
      }
    }
    function k(F) {
      let v =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
      return (
        F.forEach((A) => {
          Array.isArray(A) ? k(A, v) : A && v.push(A)
        }),
        v
      )
    }
    if (
      (k(Array.isArray(e) ? e : [e]).forEach((F) => {
        const v = typeof F == 'string' && !n ? {} : F
        if (typeof v == 'string')
          u += `${v}
`
        else if (v._keyframe) f(v)
        else {
          const A = c.reduce((x, b) => {
            var D
            return (
              ((D = b == null ? void 0 : b.visit) === null || D === void 0
                ? void 0
                : D.call(b, x)) || x
            )
          }, v)
          Object.keys(A).forEach((x) => {
            var b
            const D = A[x]
            if (
              typeof D == 'object' &&
              D &&
              (x !== 'animationName' || !D._keyframe) &&
              !Mr(D)
            ) {
              let S = !1,
                h = x.trim(),
                B = !1
              ;(n || i) && r
                ? h.startsWith('@')
                  ? (S = !0)
                  : (h = Ir(x, r, l))
                : n && !r && (h === '&' || h === '') && ((h = ''), (B = !0))
              const [w, R] = Zt(D, t, {
                root: B,
                injectHash: S,
                parentSelectors: [...a, h],
              })
              ;(p = g(g({}, p), R)), (u += `${h}${w}`)
            } else {
              let S = function (B, w) {
                const R = B.replace(/[A-Z]/g, (Q) => `-${Q.toLowerCase()}`)
                let Y = w
                !hr[B] && typeof Y == 'number' && Y !== 0 && (Y = `${Y}px`),
                  B === 'animationName' &&
                    w != null &&
                    w._keyframe &&
                    (f(w), (Y = w.getName(r))),
                  (u += `${R}:${Y};`)
              }
              const h =
                (b = D == null ? void 0 : D.value) !== null && b !== void 0
                  ? b
                  : D
              typeof D == 'object' && D != null && D[u2] && Array.isArray(h)
                ? h.forEach((B) => {
                    S(x, B)
                  })
                : S(x, h)
            }
          })
        }
      }),
      !n)
    )
      u = `{${u}}`
    else if (s && ir()) {
      const F = s.split(',')
      ;(u = `@layer ${F[F.length - 1].trim()} {${u}}`),
        F.length > 1 && (u = `@layer ${s}{%%%:%}${u}`)
    }
    return [u, p]
  }
function jr(e, t) {
  return un(`${e.join('%')}${t}`)
}
function Ut(e, t) {
  const n = pt(),
    i = m(() => e.value.token._tokenKey),
    a = m(() => [i.value, ...e.value.path])
  let r = Xn
  return (
    Ui(
      'style',
      a,
      () => {
        const {
            path: s,
            hashId: o,
            layer: l,
            nonce: c,
            clientOnly: d,
            order: u = 0,
          } = e.value,
          p = a.value.join('|')
        if (Pr(p)) {
          const [h, B] = _r(p)
          if (h) return [h, i.value, B, {}, d, u]
        }
        const f = t(),
          {
            hashPriority: k,
            container: C,
            transformers: F,
            linters: v,
            cache: A,
          } = n.value,
          [x, b] = Zt(f, {
            hashId: o,
            hashPriority: k,
            layer: l,
            path: s.join('-'),
            transformers: F,
            linters: v,
          }),
          D = Zn(x),
          S = jr(a.value, D)
        if (r) {
          const h = { mark: Ee, prepend: 'queue', attachTo: C, priority: u },
            B = typeof c == 'function' ? c() : c
          B && (h.csp = { nonce: B })
          const w = lt(D, S, h)
          ;(w[Fe] = A.instanceId),
            w.setAttribute(Wi, i.value),
            Object.keys(b).forEach((R) => {
              Un.has(R) ||
                (Un.add(R),
                lt(Zn(b[R]), `_effect-${R}`, {
                  mark: Ee,
                  prepend: 'queue',
                  attachTo: C,
                }))
            })
        }
        return [D, i.value, S, b, d, u]
      },
      (s, o) => {
        let [, , l] = s
        ;(o || n.value.autoClear) && Xn && Qi(l, { mark: Ee })
      },
    ),
    (s) => s
  )
}
class Ce {
  constructor(t, n) {
    ;(this._keyframe = !0), (this.name = t), (this.style = n)
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
    return t ? `${t}-${this.name}` : this.name
  }
}
const Lr = '4.1.2'
function j(e, t) {
  Hr(e) && (e = '100%')
  var n = Nr(e)
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  )
}
function Ke(e) {
  return Math.min(1, Math.max(0, e))
}
function Hr(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function Nr(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function d2(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function Ye(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function he(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function Rr(e, t, n) {
  return { r: j(e, 255) * 255, g: j(t, 255) * 255, b: j(n, 255) * 255 }
}
function Vn(e, t, n) {
  ;(e = j(e, 255)), (t = j(t, 255)), (n = j(n, 255))
  var i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    r = 0,
    s = 0,
    o = (i + a) / 2
  if (i === a) (s = 0), (r = 0)
  else {
    var l = i - a
    switch (((s = o > 0.5 ? l / (2 - i - a) : l / (i + a)), i)) {
      case e:
        r = (t - n) / l + (t < n ? 6 : 0)
        break
      case t:
        r = (n - e) / l + 2
        break
      case n:
        r = (e - t) / l + 4
        break
    }
    r /= 6
  }
  return { h: r, s, l: o }
}
function Ot(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  )
}
function zr(e, t, n) {
  var i, a, r
  if (((e = j(e, 360)), (t = j(t, 100)), (n = j(n, 100)), t === 0))
    (a = n), (r = n), (i = n)
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      o = 2 * n - s
    ;(i = Ot(o, s, e + 1 / 3)), (a = Ot(o, s, e)), (r = Ot(o, s, e - 1 / 3))
  }
  return { r: i * 255, g: a * 255, b: r * 255 }
}
function Vt(e, t, n) {
  ;(e = j(e, 255)), (t = j(t, 255)), (n = j(n, 255))
  var i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    r = 0,
    s = i,
    o = i - a,
    l = i === 0 ? 0 : o / i
  if (i === a) r = 0
  else {
    switch (i) {
      case e:
        r = (t - n) / o + (t < n ? 6 : 0)
        break
      case t:
        r = (n - e) / o + 2
        break
      case n:
        r = (e - t) / o + 4
        break
    }
    r /= 6
  }
  return { h: r, s: l, v: s }
}
function Gr(e, t, n) {
  ;(e = j(e, 360) * 6), (t = j(t, 100)), (n = j(n, 100))
  var i = Math.floor(e),
    a = e - i,
    r = n * (1 - t),
    s = n * (1 - a * t),
    o = n * (1 - (1 - a) * t),
    l = i % 6,
    c = [n, s, r, r, o, n][l],
    d = [o, n, n, s, r, r][l],
    u = [r, r, o, n, n, s][l]
  return { r: c * 255, g: d * 255, b: u * 255 }
}
function qt(e, t, n, i) {
  var a = [
    he(Math.round(e).toString(16)),
    he(Math.round(t).toString(16)),
    he(Math.round(n).toString(16)),
  ]
  return i &&
    a[0].startsWith(a[0].charAt(1)) &&
    a[1].startsWith(a[1].charAt(1)) &&
    a[2].startsWith(a[2].charAt(1))
    ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
    : a.join('')
}
function Wr(e, t, n, i, a) {
  var r = [
    he(Math.round(e).toString(16)),
    he(Math.round(t).toString(16)),
    he(Math.round(n).toString(16)),
    he(Xr(i)),
  ]
  return a &&
    r[0].startsWith(r[0].charAt(1)) &&
    r[1].startsWith(r[1].charAt(1)) &&
    r[2].startsWith(r[2].charAt(1)) &&
    r[3].startsWith(r[3].charAt(1))
    ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0)
    : r.join('')
}
function Xr(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function qn(e) {
  return G(e) / 255
}
function G(e) {
  return parseInt(e, 16)
}
function Zr(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Kt = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}
function me(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    i = null,
    a = null,
    r = null,
    s = !1,
    o = !1
  return (
    typeof e == 'string' && (e = qr(e)),
    typeof e == 'object' &&
      (ne(e.r) && ne(e.g) && ne(e.b)
        ? ((t = Rr(e.r, e.g, e.b)),
          (s = !0),
          (o = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : ne(e.h) && ne(e.s) && ne(e.v)
          ? ((i = Ye(e.s)),
            (a = Ye(e.v)),
            (t = Gr(e.h, i, a)),
            (s = !0),
            (o = 'hsv'))
          : ne(e.h) &&
            ne(e.s) &&
            ne(e.l) &&
            ((i = Ye(e.s)),
            (r = Ye(e.l)),
            (t = zr(e.h, i, r)),
            (s = !0),
            (o = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = d2(n)),
    {
      ok: s,
      format: e.format || o,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  )
}
var Ur = '[-\\+]?\\d+%?',
  Vr = '[-\\+]?\\d*\\.\\d+%?',
  le = '(?:'.concat(Vr, ')|(?:').concat(Ur, ')'),
  Pt = '[\\s|\\(]+('
    .concat(le, ')[,|\\s]+(')
    .concat(le, ')[,|\\s]+(')
    .concat(le, ')\\s*\\)?'),
  _t = '[\\s|\\(]+('
    .concat(le, ')[,|\\s]+(')
    .concat(le, ')[,|\\s]+(')
    .concat(le, ')[,|\\s]+(')
    .concat(le, ')\\s*\\)?'),
  V = {
    CSS_UNIT: new RegExp(le),
    rgb: new RegExp('rgb' + Pt),
    rgba: new RegExp('rgba' + _t),
    hsl: new RegExp('hsl' + Pt),
    hsla: new RegExp('hsla' + _t),
    hsv: new RegExp('hsv' + Pt),
    hsva: new RegExp('hsva' + _t),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  }
function qr(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Kt[e]) (e = Kt[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = V.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = V.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = V.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = V.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = V.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = V.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = V.hex8.exec(e)),
                          n
                            ? {
                                r: G(n[1]),
                                g: G(n[2]),
                                b: G(n[3]),
                                a: qn(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = V.hex6.exec(e)),
                              n
                                ? {
                                    r: G(n[1]),
                                    g: G(n[2]),
                                    b: G(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = V.hex4.exec(e)),
                                  n
                                    ? {
                                        r: G(n[1] + n[1]),
                                        g: G(n[2] + n[2]),
                                        b: G(n[3] + n[3]),
                                        a: qn(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = V.hex3.exec(e)),
                                      n
                                        ? {
                                            r: G(n[1] + n[1]),
                                            g: G(n[2] + n[2]),
                                            b: G(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))))
}
function ne(e) {
  return !!V.CSS_UNIT.exec(String(e))
}
var I = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var i
      if (t instanceof e) return t
      typeof t == 'number' && (t = Zr(t)), (this.originalInput = t)
      var a = me(t)
      ;(this.originalInput = t),
        (this.r = a.r),
        (this.g = a.g),
        (this.b = a.b),
        (this.a = a.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (i = n.format) !== null && i !== void 0 ? i : a.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = a.ok)
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128
      }),
      (e.prototype.isLight = function () {
        return !this.isDark()
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb()
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          i,
          a,
          r = t.r / 255,
          s = t.g / 255,
          o = t.b / 255
        return (
          r <= 0.03928
            ? (n = r / 12.92)
            : (n = Math.pow((r + 0.055) / 1.055, 2.4)),
          s <= 0.03928
            ? (i = s / 12.92)
            : (i = Math.pow((s + 0.055) / 1.055, 2.4)),
          o <= 0.03928
            ? (a = o / 12.92)
            : (a = Math.pow((o + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * i + 0.0722 * a
        )
      }),
      (e.prototype.getAlpha = function () {
        return this.a
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = d2(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = Vt(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = Vt(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          i = Math.round(t.s * 100),
          a = Math.round(t.v * 100)
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(i, '%, ').concat(a, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(i, '%, ')
              .concat(a, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHsl = function () {
        var t = Vn(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = Vn(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          i = Math.round(t.s * 100),
          a = Math.round(t.l * 100)
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(i, '%, ').concat(a, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(i, '%, ')
              .concat(a, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), qt(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), Wr(this.r, this.g, this.b, this.a, t)
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t)
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        )
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        }
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          i = Math.round(this.b)
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(i, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(i, ', ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(j(n, 255) * 100), '%')
        }
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(j(n, 255) * 100)
        }
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent'
        if (this.a < 1) return !1
        for (
          var t = '#' + qt(this.r, this.g, this.b, !1),
            n = 0,
            i = Object.entries(Kt);
          n < i.length;
          n++
        ) {
          var a = i[n],
            r = a[0],
            s = a[1]
          if (t === s) return r
        }
        return !1
      }),
      (e.prototype.toString = function (t) {
        var n = !!t
        t = t ?? this.format
        var i = !1,
          a = this.a < 1 && this.a >= 0,
          r = !n && a && (t.startsWith('hex') || t === 'name')
        return r
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (i = this.toRgbString()),
            t === 'prgb' && (i = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (i = this.toHexString()),
            t === 'hex3' && (i = this.toHexString(!0)),
            t === 'hex4' && (i = this.toHex8String(!0)),
            t === 'hex8' && (i = this.toHex8String()),
            t === 'name' && (i = this.toName()),
            t === 'hsl' && (i = this.toHslString()),
            t === 'hsv' && (i = this.toHsvString()),
            i || this.toHexString())
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        )
      }),
      (e.prototype.clone = function () {
        return new e(this.toString())
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l += t / 100), (n.l = Ke(n.l)), new e(n)
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toRgb()
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100))),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100))),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100))),
          )),
          new e(n)
        )
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l -= t / 100), (n.l = Ke(n.l)), new e(n)
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t)
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t)
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s -= t / 100), (n.s = Ke(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = Ke(n.s)), new e(n)
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100)
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          i = (n.h + t) % 360
        return (n.h = i < 0 ? 360 + i : i), new e(n)
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50)
        var i = this.toRgb(),
          a = new e(t).toRgb(),
          r = n / 100,
          s = {
            r: (a.r - i.r) * r + i.r,
            g: (a.g - i.g) * r + i.g,
            b: (a.b - i.b) * r + i.b,
            a: (a.a - i.a) * r + i.a,
          }
        return new e(s)
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30)
        var i = this.toHsl(),
          a = 360 / n,
          r = [this]
        for (i.h = (i.h - ((a * t) >> 1) + 720) % 360; --t; )
          (i.h = (i.h + a) % 360), r.push(new e(i))
        return r
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl()
        return (t.h = (t.h + 180) % 360), new e(t)
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6)
        for (
          var n = this.toHsv(), i = n.h, a = n.s, r = n.v, s = [], o = 1 / t;
          t--;

        )
          s.push(new e({ h: i, s: a, v: r })), (r = (r + o) % 1)
        return s
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ]
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          i = new e(t).toRgb(),
          a = n.a + i.a * (1 - n.a)
        return new e({
          r: (n.r * n.a + i.r * i.a * (1 - n.a)) / a,
          g: (n.g * n.a + i.g * i.a * (1 - n.a)) / a,
          b: (n.b * n.a + i.b * i.a * (1 - n.a)) / a,
          a,
        })
      }),
      (e.prototype.triad = function () {
        return this.polyad(3)
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4)
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), i = n.h, a = [this], r = 360 / t, s = 1;
          s < t;
          s++
        )
          a.push(new e({ h: (i + s * r) % 360, s: n.s, l: n.l }))
        return a
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString()
      }),
      e
    )
  })(),
  Qe = 2,
  Kn = 0.16,
  Kr = 0.05,
  Yr = 0.05,
  Qr = 0.15,
  p2 = 5,
  h2 = 4,
  Jr = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ]
function Yn(e) {
  var t = e.r,
    n = e.g,
    i = e.b,
    a = Vt(t, n, i)
  return { h: a.h * 360, s: a.s, v: a.v }
}
function Je(e) {
  var t = e.r,
    n = e.g,
    i = e.b
  return '#'.concat(qt(t, n, i, !1))
}
function es(e, t, n) {
  var i = n / 100,
    a = {
      r: (t.r - e.r) * i + e.r,
      g: (t.g - e.g) * i + e.g,
      b: (t.b - e.b) * i + e.b,
    }
  return a
}
function Qn(e, t, n) {
  var i
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (i = n ? Math.round(e.h) - Qe * t : Math.round(e.h) + Qe * t)
      : (i = n ? Math.round(e.h) + Qe * t : Math.round(e.h) - Qe * t),
    i < 0 ? (i += 360) : i >= 360 && (i -= 360),
    i
  )
}
function Jn(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var i
  return (
    n ? (i = e.s - Kn * t) : t === h2 ? (i = e.s + Kn) : (i = e.s + Kr * t),
    i > 1 && (i = 1),
    n && t === p2 && i > 0.1 && (i = 0.1),
    i < 0.06 && (i = 0.06),
    Number(i.toFixed(2))
  )
}
function ei(e, t, n) {
  var i
  return (
    n ? (i = e.v + Yr * t) : (i = e.v - Qr * t),
    i > 1 && (i = 1),
    Number(i.toFixed(2))
  )
}
function ke(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      i = me(e),
      a = p2;
    a > 0;
    a -= 1
  ) {
    var r = Yn(i),
      s = Je(me({ h: Qn(r, a, !0), s: Jn(r, a, !0), v: ei(r, a, !0) }))
    n.push(s)
  }
  n.push(Je(i))
  for (var o = 1; o <= h2; o += 1) {
    var l = Yn(i),
      c = Je(me({ h: Qn(l, o), s: Jn(l, o), v: ei(l, o) }))
    n.push(c)
  }
  return t.theme === 'dark'
    ? Jr.map(function (d) {
        var u = d.index,
          p = d.opacity,
          f = Je(es(me(t.backgroundColor || '#141414'), me(n[u]), p * 100))
        return f
      })
    : n
}
var Tt = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  at = {},
  Mt = {}
Object.keys(Tt).forEach(function (e) {
  ;(at[e] = ke(Tt[e])),
    (at[e].primary = at[e][5]),
    (Mt[e] = ke(Tt[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Mt[e].primary = Mt[e][5])
})
var ts = at.blue
const ns = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  }
}
function is(e) {
  const { sizeUnit: t, sizeStep: n } = e
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  }
}
const E2 = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  as = g(g({}, E2), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
  }),
  gt = as
function rs(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: i } = t
  const {
      colorSuccess: a,
      colorWarning: r,
      colorError: s,
      colorInfo: o,
      colorPrimary: l,
      colorBgBase: c,
      colorTextBase: d,
    } = e,
    u = n(l),
    p = n(a),
    f = n(r),
    k = n(s),
    C = n(o),
    F = i(c, d)
  return g(g({}, F), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: p[1],
    colorSuccessBgHover: p[2],
    colorSuccessBorder: p[3],
    colorSuccessBorderHover: p[4],
    colorSuccessHover: p[4],
    colorSuccess: p[6],
    colorSuccessActive: p[7],
    colorSuccessTextHover: p[8],
    colorSuccessText: p[9],
    colorSuccessTextActive: p[10],
    colorErrorBg: k[1],
    colorErrorBgHover: k[2],
    colorErrorBorder: k[3],
    colorErrorBorderHover: k[4],
    colorErrorHover: k[5],
    colorError: k[6],
    colorErrorActive: k[7],
    colorErrorTextHover: k[8],
    colorErrorText: k[9],
    colorErrorTextActive: k[10],
    colorWarningBg: f[1],
    colorWarningBgHover: f[2],
    colorWarningBorder: f[3],
    colorWarningBorderHover: f[4],
    colorWarningHover: f[4],
    colorWarning: f[6],
    colorWarningActive: f[7],
    colorWarningTextHover: f[8],
    colorWarningText: f[9],
    colorWarningTextActive: f[10],
    colorInfoBg: C[1],
    colorInfoBgHover: C[2],
    colorInfoBorder: C[3],
    colorInfoBorderHover: C[4],
    colorInfoHover: C[4],
    colorInfo: C[6],
    colorInfoActive: C[7],
    colorInfoTextHover: C[8],
    colorInfoText: C[9],
    colorInfoTextActive: C[10],
    colorBgMask: new I('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  })
}
const ss = (e) => {
  let t = e,
    n = e,
    i = e,
    a = e
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
            ? (n = 7)
            : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (i = 1) : e >= 6 && (i = 2),
    e > 4 && e < 8 ? (a = 4) : e >= 8 && (a = 6),
    {
      borderRadius: e > 16 ? 16 : e,
      borderRadiusXS: i,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: a,
    }
  )
}
function os(e) {
  const { motionUnit: t, motionBase: n, borderRadius: i, lineWidth: a } = e
  return g(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: a + 1,
    },
    ss(i),
  )
}
const ie = (e, t) => new I(e).setAlpha(t).toRgbString(),
  je = (e, t) => new I(e).darken(t).toHexString(),
  ls = (e) => {
    const t = ke(e)
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    }
  },
  cs = (e, t) => {
    const n = e || '#fff',
      i = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: i,
      colorText: ie(i, 0.88),
      colorTextSecondary: ie(i, 0.65),
      colorTextTertiary: ie(i, 0.45),
      colorTextQuaternary: ie(i, 0.25),
      colorFill: ie(i, 0.15),
      colorFillSecondary: ie(i, 0.06),
      colorFillTertiary: ie(i, 0.04),
      colorFillQuaternary: ie(i, 0.02),
      colorBgLayout: je(n, 4),
      colorBgContainer: je(n, 0),
      colorBgElevated: je(n, 0),
      colorBgSpotlight: ie(i, 0.85),
      colorBorder: je(n, 15),
      colorBorderSecondary: je(n, 6),
    }
  }
function us(e) {
  const t = new Array(10).fill(null).map((n, i) => {
    const a = i - 1,
      r = e * Math.pow(2.71828, a / 5),
      s = i > 1 ? Math.floor(r) : Math.ceil(r)
    return Math.floor(s / 2) * 2
  })
  return (
    (t[1] = e),
    t.map((n) => {
      const i = n + 8
      return { size: n, lineHeight: i / n }
    })
  )
}
const ds = (e) => {
  const t = us(e),
    n = t.map((a) => a.size),
    i = t.map((a) => a.lineHeight)
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: i[1],
    lineHeightLG: i[2],
    lineHeightSM: i[0],
    lineHeightHeading1: i[6],
    lineHeightHeading2: i[5],
    lineHeightHeading3: i[4],
    lineHeightHeading4: i[3],
    lineHeightHeading5: i[2],
  }
}
function ps(e) {
  const t = Object.keys(E2)
    .map((n) => {
      const i = ke(e[n])
      return new Array(10)
        .fill(1)
        .reduce((a, r, s) => ((a[`${n}-${s + 1}`] = i[s]), a), {})
    })
    .reduce((n, i) => ((n = g(g({}, n), i)), n), {})
  return g(
    g(
      g(
        g(
          g(
            g(g({}, e), t),
            rs(e, {
              generateColorPalettes: ls,
              generateNeutralColorPalettes: cs,
            }),
          ),
          ds(e.fontSize),
        ),
        is(e),
      ),
      ns(e),
    ),
    os(e),
  )
}
function It(e) {
  return e >= 0 && e <= 255
}
function et(e, t) {
  const { r: n, g: i, b: a, a: r } = new I(e).toRgb()
  if (r < 1) return e
  const { r: s, g: o, b: l } = new I(t).toRgb()
  for (let c = 0.01; c <= 1; c += 0.01) {
    const d = Math.round((n - s * (1 - c)) / c),
      u = Math.round((i - o * (1 - c)) / c),
      p = Math.round((a - l * (1 - c)) / c)
    if (It(d) && It(u) && It(p))
      return new I({
        r: d,
        g: u,
        b: p,
        a: Math.round(c * 100) / 100,
      }).toRgbString()
  }
  return new I({ r: n, g: i, b: a, a: 1 }).toRgbString()
}
var hs = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
function Es(e) {
  const { override: t } = e,
    n = hs(e, ['override']),
    i = g({}, t)
  Object.keys(gt).forEach((f) => {
    delete i[f]
  })
  const a = g(g({}, n), i),
    r = 480,
    s = 576,
    o = 768,
    l = 992,
    c = 1200,
    d = 1600,
    u = 2e3
  return g(
    g(g({}, a), {
      colorLink: a.colorInfoText,
      colorLinkHover: a.colorInfoHover,
      colorLinkActive: a.colorInfoActive,
      colorFillContent: a.colorFillSecondary,
      colorFillContentHover: a.colorFill,
      colorFillAlter: a.colorFillQuaternary,
      colorBgContainerDisabled: a.colorFillTertiary,
      colorBorderBg: a.colorBgContainer,
      colorSplit: et(a.colorBorderSecondary, a.colorBgContainer),
      colorTextPlaceholder: a.colorTextQuaternary,
      colorTextDisabled: a.colorTextQuaternary,
      colorTextHeading: a.colorText,
      colorTextLabel: a.colorTextSecondary,
      colorTextDescription: a.colorTextTertiary,
      colorTextLightSolid: a.colorWhite,
      colorHighlight: a.colorError,
      colorBgTextHover: a.colorFillSecondary,
      colorBgTextActive: a.colorFill,
      colorIcon: a.colorTextTertiary,
      colorIconHover: a.colorText,
      colorErrorOutline: et(a.colorErrorBg, a.colorBgContainer),
      colorWarningOutline: et(a.colorWarningBg, a.colorBgContainer),
      fontSizeIcon: a.fontSizeSM,
      lineWidth: a.lineWidth,
      controlOutlineWidth: a.lineWidth * 2,
      controlInteractiveSize: a.controlHeight / 2,
      controlItemBgHover: a.colorFillTertiary,
      controlItemBgActive: a.colorPrimaryBg,
      controlItemBgActiveHover: a.colorPrimaryBgHover,
      controlItemBgActiveDisabled: a.colorFill,
      controlTmpOutline: a.colorFillQuaternary,
      controlOutline: et(a.colorPrimaryBg, a.colorBgContainer),
      lineType: a.lineType,
      borderRadius: a.borderRadius,
      borderRadiusXS: a.borderRadiusXS,
      borderRadiusSM: a.borderRadiusSM,
      borderRadiusLG: a.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: a.sizeXXS,
      paddingXS: a.sizeXS,
      paddingSM: a.sizeSM,
      padding: a.size,
      paddingMD: a.sizeMD,
      paddingLG: a.sizeLG,
      paddingXL: a.sizeXL,
      paddingContentHorizontalLG: a.sizeLG,
      paddingContentVerticalLG: a.sizeMS,
      paddingContentHorizontal: a.sizeMS,
      paddingContentVertical: a.sizeSM,
      paddingContentHorizontalSM: a.size,
      paddingContentVerticalSM: a.sizeXS,
      marginXXS: a.sizeXXS,
      marginXS: a.sizeXS,
      marginSM: a.sizeSM,
      margin: a.size,
      marginMD: a.sizeMD,
      marginLG: a.sizeLG,
      marginXL: a.sizeXL,
      marginXXL: a.sizeXXL,
      boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: r,
      screenXSMin: r,
      screenXSMax: s - 1,
      screenSM: s,
      screenSMMin: s,
      screenSMMax: o - 1,
      screenMD: o,
      screenMDMin: o,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: c - 1,
      screenXL: c,
      screenXLMin: c,
      screenXLMax: d - 1,
      screenXXL: d,
      screenXXLMin: d,
      screenXXLMax: u - 1,
      screenXXXL: u,
      screenXXXLMin: u,
      boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
      boxShadowCard: `
      0 1px 2px -2px ${new I('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new I('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new I('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    i,
  )
}
const f2 = (e) => ({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    listStyle: 'none',
    fontFamily: e.fontFamily,
  }),
  fs = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  gs = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active,\n  &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  Cs = (e, t) => {
    const { fontFamily: n, fontSize: i } = e,
      a = `[class^="${t}"], [class*=" ${t}"]`
    return {
      [a]: {
        fontFamily: n,
        fontSize: i,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [a]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        },
      },
    }
  }
function hn(e, t, n) {
  return (i) => {
    const a = m(() => (i == null ? void 0 : i.value)),
      [r, s, o] = kt(),
      { getPrefixCls: l, iconPrefixCls: c } = Hi(),
      d = m(() => l()),
      u = m(() => ({
        theme: r.value,
        token: s.value,
        hashId: o.value,
        path: ['Shared', d.value],
      }))
    Ut(u, () => [{ '&': gs(s.value) }])
    const p = m(() => ({
      theme: r.value,
      token: s.value,
      hashId: o.value,
      path: [e, a.value, c.value],
    }))
    return [
      Ut(p, () => {
        const { token: f, flush: k } = ys(s.value),
          C = typeof n == 'function' ? n(f) : n,
          F = g(g({}, C), s.value[e]),
          v = `.${a.value}`,
          A = Ct(
            f,
            {
              componentCls: v,
              prefixCls: a.value,
              iconCls: `.${c.value}`,
              antCls: `.${d.value}`,
            },
            F,
          ),
          x = t(A, {
            hashId: o.value,
            prefixCls: a.value,
            rootPrefixCls: d.value,
            iconPrefixCls: c.value,
            overrideComponentToken: s.value[e],
          })
        return k(e, F), [Cs(s.value, a.value), x]
      }),
      o,
    ]
  }
}
const g2 = typeof CSSINJS_STATISTIC < 'u'
let Yt = !0
function Ct() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!g2) return g({}, ...t)
  Yt = !1
  const i = {}
  return (
    t.forEach((a) => {
      Object.keys(a).forEach((s) => {
        Object.defineProperty(i, s, {
          configurable: !0,
          enumerable: !0,
          get: () => a[s],
        })
      })
    }),
    (Yt = !0),
    i
  )
}
function ks() {}
function ys(e) {
  let t,
    n = e,
    i = ks
  return (
    g2 &&
      ((t = new Set()),
      (n = new Proxy(e, {
        get(a, r) {
          return Yt && t.add(r), a[r]
        },
      })),
      (i = (a, r) => {
        Array.from(t)
      })),
    { token: n, keys: t, flush: i }
  )
}
const vs = t2(ps),
  C2 = { token: gt, hashed: !0 },
  k2 = Symbol('DesignTokenContext'),
  Qt = q(),
  ms = (e) => {
    ue(k2, e),
      se(
        e,
        () => {
          ;(Qt.value = Ht(e)), Ca(Qt)
        },
        { immediate: !0, deep: !0 },
      )
  },
  As = _({
    props: { value: W() },
    setup(e, t) {
      let { slots: n } = t
      return (
        ms(m(() => e.value)),
        () => {
          var i
          return (i = n.default) === null || i === void 0 ? void 0 : i.call(n)
        }
      )
    },
  })
function kt() {
  const e = re(
      k2,
      m(() => Qt.value || C2),
    ),
    t = m(() => `${Lr}-${e.value.hashed || ''}`),
    n = m(() => e.value.theme || vs),
    i = pr(
      n,
      m(() => [gt, e.value.token]),
      m(() => ({
        salt: t.value,
        override: g({ override: e.value.token }, e.value.components),
        formatToken: Es,
      })),
    )
  return [n, m(() => i.value[0]), m(() => (e.value.hashed ? i.value[1] : ''))]
}
const y2 = _({
  compatConfig: { MODE: 3 },
  setup() {
    const [, e] = kt(),
      t = m(() =>
        new I(e.value.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {},
      )
    return () =>
      E(
        'svg',
        {
          style: t.value,
          width: '184',
          height: '152',
          viewBox: '0 0 184 152',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        [
          E('g', { fill: 'none', 'fill-rule': 'evenodd' }, [
            E('g', { transform: 'translate(24 31.67)' }, [
              E(
                'ellipse',
                {
                  'fill-opacity': '.8',
                  fill: '#F5F5F7',
                  cx: '67.797',
                  cy: '106.89',
                  rx: '67.797',
                  ry: '12.668',
                },
                null,
              ),
              E(
                'path',
                {
                  d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                  fill: '#AEB8C2',
                },
                null,
              ),
              E(
                'path',
                {
                  d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                  fill: 'url(#linearGradient-1)',
                  transform: 'translate(13.56)',
                },
                null,
              ),
              E(
                'path',
                {
                  d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                  fill: '#F5F5F7',
                },
                null,
              ),
              E(
                'path',
                {
                  d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                  fill: '#DCE0E6',
                },
                null,
              ),
            ]),
            E(
              'path',
              {
                d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                fill: '#DCE0E6',
              },
              null,
            ),
            E('g', { transform: 'translate(149.65 15.383)', fill: '#FFF' }, [
              E(
                'ellipse',
                { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' },
                null,
              ),
              E(
                'path',
                { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' },
                null,
              ),
            ]),
          ]),
        ],
      )
  },
})
y2.PRESENTED_IMAGE_DEFAULT = !0
const Fs = y2,
  v2 = _({
    compatConfig: { MODE: 3 },
    setup() {
      const [, e] = kt(),
        t = m(() => {
          const {
            colorFill: n,
            colorFillTertiary: i,
            colorFillQuaternary: a,
            colorBgContainer: r,
          } = e.value
          return {
            borderColor: new I(n).onBackground(r).toHexString(),
            shadowColor: new I(i).onBackground(r).toHexString(),
            contentColor: new I(a).onBackground(r).toHexString(),
          }
        })
      return () =>
        E(
          'svg',
          {
            width: '64',
            height: '41',
            viewBox: '0 0 64 41',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          [
            E(
              'g',
              {
                transform: 'translate(0 1)',
                fill: 'none',
                'fill-rule': 'evenodd',
              },
              [
                E(
                  'ellipse',
                  {
                    fill: t.value.shadowColor,
                    cx: '32',
                    cy: '33',
                    rx: '32',
                    ry: '7',
                  },
                  null,
                ),
                E(
                  'g',
                  { 'fill-rule': 'nonzero', stroke: t.value.borderColor },
                  [
                    E(
                      'path',
                      {
                        d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                      },
                      null,
                    ),
                    E(
                      'path',
                      {
                        d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                        fill: t.value.contentColor,
                      },
                      null,
                    ),
                  ],
                ),
              ],
            ),
          ],
        )
    },
  })
v2.PRESENTED_IMAGE_SIMPLE = !0
const bs = v2,
  Ds = (e) => {
    const {
      componentCls: t,
      margin: n,
      marginXS: i,
      marginXL: a,
      fontSize: r,
      lineHeight: s,
    } = e
    return {
      [t]: {
        marginInline: i,
        fontSize: r,
        lineHeight: s,
        textAlign: 'center',
        [`${t}-image`]: {
          height: e.emptyImgHeight,
          marginBottom: i,
          opacity: e.opacityImage,
          img: { height: '100%' },
          svg: { height: '100%', margin: 'auto' },
        },
        [`${t}-footer`]: { marginTop: n },
        '&-normal': {
          marginBlock: a,
          color: e.colorTextDisabled,
          [`${t}-image`]: { height: e.emptyImgHeightMD },
        },
        '&-small': {
          marginBlock: i,
          color: e.colorTextDisabled,
          [`${t}-image`]: { height: e.emptyImgHeightSM },
        },
      },
    }
  },
  Bs = hn('Empty', (e) => {
    const { componentCls: t, controlHeightLG: n } = e,
      i = Ct(e, {
        emptyImgCls: `${t}-img`,
        emptyImgHeight: n * 2.5,
        emptyImgHeightMD: n,
        emptyImgHeightSM: n * 0.875,
      })
    return [Ds(i)]
  })
var xs = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
const m2 = E(Fs, null, null),
  A2 = E(bs, null, null),
  Ss = () => ({
    prefixCls: String,
    imageStyle: W(),
    image: Rt(),
    description: Rt(),
  }),
  En = _({
    name: 'AEmpty',
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: Ss(),
    setup(e, t) {
      let { slots: n = {}, attrs: i } = t
      const { direction: a, prefixCls: r } = yt('empty', e),
        [s, o] = Bs(r)
      return () => {
        var l, c
        const d = r.value,
          u = g(g({}, e), i),
          {
            image: p = ((l = n.image) === null || l === void 0
              ? void 0
              : l.call(n)) || m2,
            description: f = ((c = n.description) === null || c === void 0
              ? void 0
              : c.call(n)) || void 0,
            imageStyle: k,
            class: C = '',
          } = u,
          F = xs(u, ['image', 'description', 'imageStyle', 'class'])
        return s(
          E(
            Gi,
            {
              componentName: 'Empty',
              children: (v) => {
                const A = typeof f < 'u' ? f : v.description,
                  x = typeof A == 'string' ? A : 'empty'
                let b = null
                return (
                  typeof p == 'string'
                    ? (b = E('img', { alt: x, src: p }, null))
                    : (b = p),
                  E(
                    'div',
                    M(
                      {
                        class: Z(d, C, o.value, {
                          [`${d}-normal`]: p === A2,
                          [`${d}-rtl`]: a.value === 'rtl',
                        }),
                      },
                      F,
                    ),
                    [
                      E('div', { class: `${d}-image`, style: k }, [b]),
                      A && E('p', { class: `${d}-description` }, [A]),
                      n.default &&
                        E('div', { class: `${d}-footer` }, [ji(n.default())]),
                    ],
                  )
                )
              },
            },
            null,
          ),
        )
      }
    },
  })
En.PRESENTED_IMAGE_DEFAULT = m2
En.PRESENTED_IMAGE_SIMPLE = A2
const Le = on(En),
  F2 = (e) => {
    const { prefixCls: t } = yt('empty', e)
    return ((i) => {
      switch (i) {
        case 'Table':
        case 'List':
          return E(Le, { image: Le.PRESENTED_IMAGE_SIMPLE }, null)
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return E(
            Le,
            { image: Le.PRESENTED_IMAGE_SIMPLE, class: `${t.value}-small` },
            null,
          )
        default:
          return E(Le, null, null)
      }
    })(e.componentName)
  }
function $s(e) {
  return E(F2, { componentName: e }, null)
}
const b2 = Symbol('SizeContextKey'),
  D2 = () => re(b2, ce(void 0)),
  ws = (e) => {
    const t = D2()
    return (
      ue(
        b2,
        m(() => e.value || t.value),
      ),
      e
    )
  },
  yt = (e, t) => {
    const n = D2(),
      i = Ri(),
      a = re(
        cn,
        g(g({}, Li), { renderEmpty: (h) => Nt(F2, { componentName: h }) }),
      ),
      r = m(() => a.getPrefixCls(e, t.prefixCls)),
      s = m(() => {
        var h, B
        return (h = t.direction) !== null && h !== void 0
          ? h
          : (B = a.direction) === null || B === void 0
            ? void 0
            : B.value
      }),
      o = m(() => {
        var h
        return (h = t.iconPrefixCls) !== null && h !== void 0
          ? h
          : a.iconPrefixCls.value
      }),
      l = m(() => a.getPrefixCls()),
      c = m(() => {
        var h
        return (h = a.autoInsertSpaceInButton) === null || h === void 0
          ? void 0
          : h.value
      }),
      d = a.renderEmpty,
      u = a.space,
      p = a.pageHeader,
      f = a.form,
      k = m(() => {
        var h, B
        return (h = t.getTargetContainer) !== null && h !== void 0
          ? h
          : (B = a.getTargetContainer) === null || B === void 0
            ? void 0
            : B.value
      }),
      C = m(() => {
        var h, B, w
        return (B =
          (h = t.getContainer) !== null && h !== void 0
            ? h
            : t.getPopupContainer) !== null && B !== void 0
          ? B
          : (w = a.getPopupContainer) === null || w === void 0
            ? void 0
            : w.value
      }),
      F = m(() => {
        var h, B
        return (h = t.dropdownMatchSelectWidth) !== null && h !== void 0
          ? h
          : (B = a.dropdownMatchSelectWidth) === null || B === void 0
            ? void 0
            : B.value
      }),
      v = m(() => {
        var h
        return (
          (t.virtual === void 0
            ? ((h = a.virtual) === null || h === void 0 ? void 0 : h.value) !==
              !1
            : t.virtual !== !1) && F.value !== !1
        )
      }),
      A = m(() => t.size || n.value),
      x = m(() => {
        var h, B, w
        return (h = t.autocomplete) !== null && h !== void 0
          ? h
          : (w = (B = a.input) === null || B === void 0 ? void 0 : B.value) ===
                null || w === void 0
            ? void 0
            : w.autocomplete
      }),
      b = m(() => {
        var h
        return (h = t.disabled) !== null && h !== void 0 ? h : i.value
      }),
      D = m(() => {
        var h
        return (h = t.csp) !== null && h !== void 0 ? h : a.csp
      }),
      S = m(() => {
        var h, B
        return (h = t.wave) !== null && h !== void 0
          ? h
          : (B = a.wave) === null || B === void 0
            ? void 0
            : B.value
      })
    return {
      configProvider: a,
      prefixCls: r,
      direction: s,
      size: A,
      getTargetContainer: k,
      getPopupContainer: C,
      space: u,
      pageHeader: p,
      form: f,
      autoInsertSpaceInButton: c,
      renderEmpty: d,
      virtual: v,
      dropdownMatchSelectWidth: F,
      rootPrefixCls: l,
      getPrefixCls: a.getPrefixCls,
      autocomplete: x,
      csp: D,
      iconPrefixCls: o,
      disabled: b,
      select: a.select,
      wave: S,
    }
  }
function ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n]
    ;(i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i)
  }
}
function B2(e, t, n) {
  return t && ti(e.prototype, t), n && ti(e, n), e
}
function rt() {
  return (rt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
      }
      return e
    }).apply(this, arguments)
}
function x2(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t)
}
function S2(e, t) {
  if (e == null) return {}
  var n,
    i,
    a = {},
    r = Object.keys(e)
  for (i = 0; i < r.length; i++) t.indexOf((n = r[i])) >= 0 || (a[n] = e[n])
  return a
}
function ni(e) {
  return (
    ((t = e) != null && typeof t == 'object' && Array.isArray(t) === !1) == 1 &&
    Object.prototype.toString.call(e) === '[object Object]'
  )
  var t
}
var $2 = Object.prototype,
  w2 = $2.toString,
  Os = $2.hasOwnProperty,
  O2 = /^\s*function (\w+)/
function ii(e) {
  var t,
    n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e
  if (n) {
    var i = n.toString().match(O2)
    return i ? i[1] : ''
  }
  return ''
}
var ye = function (e) {
    var t, n
    return (
      ni(e) !== !1 &&
      typeof (t = e.constructor) == 'function' &&
      ni((n = t.prototype)) !== !1 &&
      n.hasOwnProperty('isPrototypeOf') !== !1
    )
  },
  Ps = function (e) {
    return e
  },
  H = Ps,
  Ve = function (e, t) {
    return Os.call(e, t)
  },
  _s =
    Number.isInteger ||
    function (e) {
      return typeof e == 'number' && isFinite(e) && Math.floor(e) === e
    },
  Se =
    Array.isArray ||
    function (e) {
      return w2.call(e) === '[object Array]'
    },
  $e = function (e) {
    return w2.call(e) === '[object Function]'
  },
  ut = function (e) {
    return ye(e) && Ve(e, '_vueTypes_name')
  },
  P2 = function (e) {
    return (
      ye(e) &&
      (Ve(e, 'type') ||
        ['_vueTypes_name', 'validator', 'default', 'required'].some(
          function (t) {
            return Ve(e, t)
          },
        ))
    )
  }
function fn(e, t) {
  return Object.defineProperty(e.bind(t), '__original', { value: e })
}
function ve(e, t, n) {
  var i
  n === void 0 && (n = !1)
  var a = !0,
    r = ''
  i = ye(e) ? e : { type: e }
  var s = ut(i) ? i._vueTypes_name + ' - ' : ''
  if (P2(i) && i.type !== null) {
    if (i.type === void 0 || i.type === !0 || (!i.required && t === void 0))
      return a
    Se(i.type)
      ? ((a = i.type.some(function (u) {
          return ve(u, t, !0) === !0
        })),
        (r = i.type
          .map(function (u) {
            return ii(u)
          })
          .join(' or ')))
      : (a =
          (r = ii(i)) === 'Array'
            ? Se(t)
            : r === 'Object'
              ? ye(t)
              : r === 'String' ||
                  r === 'Number' ||
                  r === 'Boolean' ||
                  r === 'Function'
                ? (function (u) {
                    if (u == null) return ''
                    var p = u.constructor.toString().match(O2)
                    return p ? p[1] : ''
                  })(t) === r
                : t instanceof i.type)
  }
  if (!a) {
    var o = s + 'value "' + t + '" should be of type "' + r + '"'
    return n === !1 ? (H(o), !1) : o
  }
  if (Ve(i, 'validator') && $e(i.validator)) {
    var l = H,
      c = []
    if (
      ((H = function (u) {
        c.push(u)
      }),
      (a = i.validator(t)),
      (H = l),
      !a)
    ) {
      var d =
        (c.length > 1 ? '* ' : '') +
        c.join(`
* `)
      return (c.length = 0), n === !1 ? (H(d), a) : d
    }
  }
  return a
}
function X(e, t) {
  var n = Object.defineProperties(t, {
      _vueTypes_name: { value: e, writable: !0 },
      isRequired: {
        get: function () {
          return (this.required = !0), this
        },
      },
      def: {
        value: function (a) {
          return a !== void 0 || this.default
            ? $e(a) || ve(this, a, !0) === !0
              ? ((this.default = Se(a)
                  ? function () {
                      return [].concat(a)
                    }
                  : ye(a)
                    ? function () {
                        return Object.assign({}, a)
                      }
                    : a),
                this)
              : (H(
                  this._vueTypes_name + ' - invalid default value: "' + a + '"',
                ),
                this)
            : this
        },
      },
    }),
    i = n.validator
  return $e(i) && (n.validator = fn(i, n)), n
}
function ee(e, t) {
  var n = X(e, t)
  return Object.defineProperty(n, 'validate', {
    value: function (i) {
      return (
        $e(this.validator) &&
          H(
            this._vueTypes_name +
              ` - calling .validate() will overwrite the current custom validator function. Validator info:
` +
              JSON.stringify(this),
          ),
        (this.validator = fn(i, this)),
        this
      )
    },
  })
}
function ai(e, t, n) {
  var i,
    a,
    r =
      ((i = t),
      (a = {}),
      Object.getOwnPropertyNames(i).forEach(function (u) {
        a[u] = Object.getOwnPropertyDescriptor(i, u)
      }),
      Object.defineProperties({}, a))
  if (((r._vueTypes_name = e), !ye(n))) return r
  var s,
    o,
    l = n.validator,
    c = S2(n, ['validator'])
  if ($e(l)) {
    var d = r.validator
    d && (d = (o = (s = d).__original) !== null && o !== void 0 ? o : s),
      (r.validator = fn(
        d
          ? function (u) {
              return d.call(this, u) && l.call(this, u)
            }
          : l,
        r,
      ))
  }
  return Object.assign(r, c)
}
function vt(e) {
  return e.replace(/^(?!\s*$)/gm, '  ')
}
var Ts = function () {
    return ee('any', {})
  },
  Ms = function () {
    return ee('function', { type: Function })
  },
  Is = function () {
    return ee('boolean', { type: Boolean })
  },
  js = function () {
    return ee('string', { type: String })
  },
  Ls = function () {
    return ee('number', { type: Number })
  },
  Hs = function () {
    return ee('array', { type: Array })
  },
  Ns = function () {
    return ee('object', { type: Object })
  },
  Rs = function () {
    return X('integer', {
      type: Number,
      validator: function (e) {
        return _s(e)
      },
    })
  },
  zs = function () {
    return X('symbol', {
      validator: function (e) {
        return typeof e == 'symbol'
      },
    })
  }
function Gs(e, t) {
  if (
    (t === void 0 && (t = 'custom validation failed'), typeof e != 'function')
  )
    throw new TypeError(
      '[VueTypes error]: You must provide a function as argument',
    )
  return X(e.name || '<<anonymous function>>', {
    validator: function (n) {
      var i = e(n)
      return i || H(this._vueTypes_name + ' - ' + t), i
    },
  })
}
function Ws(e) {
  if (!Se(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument.',
    )
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".',
    n = e.reduce(function (i, a) {
      if (a != null) {
        var r = a.constructor
        i.indexOf(r) === -1 && i.push(r)
      }
      return i
    }, [])
  return X('oneOf', {
    type: n.length > 0 ? n : void 0,
    validator: function (i) {
      var a = e.indexOf(i) !== -1
      return a || H(t), a
    },
  })
}
function Xs(e) {
  if (!Se(e))
    throw new TypeError(
      '[VueTypes error]: You must provide an array as argument',
    )
  for (var t = !1, n = [], i = 0; i < e.length; i += 1) {
    var a = e[i]
    if (P2(a)) {
      if (ut(a) && a._vueTypes_name === 'oneOf') {
        n = n.concat(a.type)
        continue
      }
      if (($e(a.validator) && (t = !0), a.type !== !0 && a.type)) {
        n = n.concat(a.type)
        continue
      }
    }
    n.push(a)
  }
  return (
    (n = n.filter(function (r, s) {
      return n.indexOf(r) === s
    })),
    X(
      'oneOfType',
      t
        ? {
            type: n,
            validator: function (r) {
              var s = [],
                o = e.some(function (l) {
                  var c = ve(
                    ut(l) && l._vueTypes_name === 'oneOf' ? l.type || null : l,
                    r,
                    !0,
                  )
                  return typeof c == 'string' && s.push(c), c === !0
                })
              return (
                o ||
                  H(
                    'oneOfType - provided value does not match any of the ' +
                      s.length +
                      ` passed-in validators:
` +
                      vt(
                        s.join(`
`),
                      ),
                  ),
                o
              )
            },
          }
        : { type: n },
    )
  )
}
function Zs(e) {
  return X('arrayOf', {
    type: Array,
    validator: function (t) {
      var n,
        i = t.every(function (a) {
          return (n = ve(e, a, !0)) === !0
        })
      return (
        i ||
          H(
            `arrayOf - value validation error:
` + vt(n),
          ),
        i
      )
    },
  })
}
function Us(e) {
  return X('instanceOf', { type: e })
}
function Vs(e) {
  return X('objectOf', {
    type: Object,
    validator: function (t) {
      var n,
        i = Object.keys(t).every(function (a) {
          return (n = ve(e, t[a], !0)) === !0
        })
      return (
        i ||
          H(
            `objectOf - value validation error:
` + vt(n),
          ),
        i
      )
    },
  })
}
function qs(e) {
  var t = Object.keys(e),
    n = t.filter(function (a) {
      var r
      return !!(!((r = e[a]) === null || r === void 0) && r.required)
    }),
    i = X('shape', {
      type: Object,
      validator: function (a) {
        var r = this
        if (!ye(a)) return !1
        var s = Object.keys(a)
        if (
          n.length > 0 &&
          n.some(function (l) {
            return s.indexOf(l) === -1
          })
        ) {
          var o = n.filter(function (l) {
            return s.indexOf(l) === -1
          })
          return (
            H(
              o.length === 1
                ? 'shape - required property "' + o[0] + '" is not defined.'
                : 'shape - required properties "' +
                    o.join('", "') +
                    '" are not defined.',
            ),
            !1
          )
        }
        return s.every(function (l) {
          if (t.indexOf(l) === -1)
            return (
              r._vueTypes_isLoose === !0 ||
              (H(
                'shape - shape definition does not include a "' +
                  l +
                  '" property. Allowed keys: "' +
                  t.join('", "') +
                  '".',
              ),
              !1)
            )
          var c = ve(e[l], a[l], !0)
          return (
            typeof c == 'string' &&
              H(
                'shape - "' +
                  l +
                  `" property validation error:
 ` +
                  vt(c),
              ),
            c === !0
          )
        })
      },
    })
  return (
    Object.defineProperty(i, '_vueTypes_isLoose', { writable: !0, value: !1 }),
    Object.defineProperty(i, 'loose', {
      get: function () {
        return (this._vueTypes_isLoose = !0), this
      },
    }),
    i
  )
}
var J = (function () {
  function e() {}
  return (
    (e.extend = function (t) {
      var n = this
      if (Se(t))
        return (
          t.forEach(function (u) {
            return n.extend(u)
          }),
          this
        )
      var i = t.name,
        a = t.validate,
        r = a !== void 0 && a,
        s = t.getter,
        o = s !== void 0 && s,
        l = S2(t, ['name', 'validate', 'getter'])
      if (Ve(this, i))
        throw new TypeError(
          '[VueTypes error]: Type "' + i + '" already defined',
        )
      var c,
        d = l.type
      return ut(d)
        ? (delete l.type,
          Object.defineProperty(
            this,
            i,
            o
              ? {
                  get: function () {
                    return ai(i, d, l)
                  },
                }
              : {
                  value: function () {
                    var u,
                      p = ai(i, d, l)
                    return (
                      p.validator &&
                        (p.validator = (u = p.validator).bind.apply(
                          u,
                          [p].concat([].slice.call(arguments)),
                        )),
                      p
                    )
                  },
                },
          ))
        : ((c = o
            ? {
                get: function () {
                  var u = Object.assign({}, l)
                  return r ? ee(i, u) : X(i, u)
                },
                enumerable: !0,
              }
            : {
                value: function () {
                  var u,
                    p,
                    f = Object.assign({}, l)
                  return (
                    (u = r ? ee(i, f) : X(i, f)),
                    f.validator &&
                      (u.validator = (p = f.validator).bind.apply(
                        p,
                        [u].concat([].slice.call(arguments)),
                      )),
                    u
                  )
                },
                enumerable: !0,
              }),
          Object.defineProperty(this, i, c))
    }),
    B2(e, null, [
      {
        key: 'any',
        get: function () {
          return Ts()
        },
      },
      {
        key: 'func',
        get: function () {
          return Ms().def(this.defaults.func)
        },
      },
      {
        key: 'bool',
        get: function () {
          return Is().def(this.defaults.bool)
        },
      },
      {
        key: 'string',
        get: function () {
          return js().def(this.defaults.string)
        },
      },
      {
        key: 'number',
        get: function () {
          return Ls().def(this.defaults.number)
        },
      },
      {
        key: 'array',
        get: function () {
          return Hs().def(this.defaults.array)
        },
      },
      {
        key: 'object',
        get: function () {
          return Ns().def(this.defaults.object)
        },
      },
      {
        key: 'integer',
        get: function () {
          return Rs().def(this.defaults.integer)
        },
      },
      {
        key: 'symbol',
        get: function () {
          return zs()
        },
      },
    ]),
    e
  )
})()
function _2(e) {
  var t
  return (
    e === void 0 &&
      (e = {
        func: function () {},
        bool: !0,
        string: '',
        number: 0,
        array: function () {
          return []
        },
        object: function () {
          return {}
        },
        integer: 0,
      }),
    ((t = (function (n) {
      function i() {
        return n.apply(this, arguments) || this
      }
      return (
        x2(i, n),
        B2(i, null, [
          {
            key: 'sensibleDefaults',
            get: function () {
              return rt({}, this.defaults)
            },
            set: function (a) {
              this.defaults = a !== !1 ? rt({}, a !== !0 ? a : e) : {}
            },
          },
        ]),
        i
      )
    })(J)).defaults = rt({}, e)),
    t
  )
}
;(J.defaults = {}),
  (J.custom = Gs),
  (J.oneOf = Ws),
  (J.instanceOf = Us),
  (J.oneOfType = Xs),
  (J.arrayOf = Zs),
  (J.objectOf = Vs),
  (J.shape = qs),
  (J.utils = {
    validate: function (e, t) {
      return ve(t, e, !0) === !0
    },
    toType: function (e, t, n) {
      return n === void 0 && (n = !1), n ? ee(e, t) : X(e, t)
    },
  })
;(function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  return x2(t, e), t
})(_2())
const T2 = _2({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0,
})
T2.extend([
  { name: 'looseBool', getter: !0, type: Boolean, default: void 0 },
  { name: 'style', getter: !0, type: [String, Object], default: void 0 },
  { name: 'VueNode', getter: !0, type: null },
])
const Ks = T2
function Ys(e) {
  let { prefixCls: t, animation: n, transitionName: i } = e
  return n ? { name: `${t}-${n}` } : i ? { name: i } : {}
}
Pa('bottomLeft', 'bottomRight', 'topLeft', 'topRight')
const M2 = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return g(
      e
        ? {
            name: e,
            appear: !0,
            appearActiveClass: `${e}`,
            appearToClass: `${e}-appear ${e}-appear-active`,
            enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
            enterActiveClass: `${e}`,
            enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
            leaveActiveClass: `${e} ${e}-leave`,
            leaveToClass: `${e}-leave-active`,
          }
        : { css: !1 },
      t,
    )
  },
  I2 = Symbol('PortalContextKey'),
  Qs = function (e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inTriggerContext: !0 }
    ue(I2, {
      inTriggerContext: t.inTriggerContext,
      shouldRender: m(() => {
        const {
          sPopupVisible: n,
          popupRef: i,
          forceRender: a,
          autoDestroy: r,
        } = e || {}
        let s = !1
        return (n || i || a) && (s = !0), !n && r && (s = !1), s
      }),
    })
  },
  Js = () => {
    Qs({}, { inTriggerContext: !1 })
    const e = re(I2, { shouldRender: m(() => !1), inTriggerContext: !1 })
    return {
      shouldRender: m(() => e.shouldRender.value || e.inTriggerContext === !1),
    }
  },
  e3 = _({
    compatConfig: { MODE: 3 },
    name: 'Portal',
    inheritAttrs: !1,
    props: { getContainer: Ks.func.isRequired, didUpdate: Function },
    setup(e, t) {
      let { slots: n } = t,
        i = !0,
        a
      const { shouldRender: r } = Js()
      function s() {
        r.value && (a = e.getContainer())
      }
      ka(() => {
        ;(i = !1), s()
      }),
        sn(() => {
          a || s()
        })
      const o = se(r, () => {
        r.value && !a && (a = e.getContainer()), a && o()
      })
      return (
        ya(() => {
          wi(() => {
            var l
            r.value &&
              ((l = e.didUpdate) === null || l === void 0 || l.call(e, e))
          })
        }),
        () => {
          var l
          return r.value
            ? i
              ? (l = n.default) === null || l === void 0
                ? void 0
                : l.call(n)
              : a
                ? E(Oi, { to: a }, n)
                : null
            : null
        }
      )
    },
  })
var t3 = Symbol('iconContext'),
  j2 = function () {
    return re(t3, {
      prefixCls: ce('anticon'),
      rootClassName: ce(''),
      csp: ce(),
    })
  }
function gn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function n3(e, t) {
  return e && e.contains ? e.contains(t) : !1
}
var ri = 'data-vc-order',
  i3 = 'vc-icon-key',
  Jt = new Map()
function L2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : i3
}
function Cn(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function a3(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function H2(e) {
  return Array.from((Jt.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function N2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!gn()) return null
  var n = t.csp,
    i = t.prepend,
    a = document.createElement('style')
  a.setAttribute(ri, a3(i)),
    n && n.nonce && (a.nonce = n.nonce),
    (a.innerHTML = e)
  var r = Cn(t),
    s = r.firstChild
  if (i) {
    if (i === 'queue') {
      var o = H2(r).filter(function (l) {
        return ['prepend', 'prependQueue'].includes(l.getAttribute(ri))
      })
      if (o.length) return r.insertBefore(a, o[o.length - 1].nextSibling), a
    }
    r.insertBefore(a, s)
  } else r.appendChild(a)
  return a
}
function r3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Cn(t)
  return H2(n).find(function (i) {
    return i.getAttribute(L2(t)) === e
  })
}
function s3(e, t) {
  var n = Jt.get(e)
  if (!n || !n3(document, n)) {
    var i = N2('', t),
      a = i.parentNode
    Jt.set(e, a), e.removeChild(i)
  }
}
function o3(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    i = Cn(n)
  s3(i, n)
  var a = r3(t, n)
  if (a)
    return (
      n.csp &&
        n.csp.nonce &&
        a.nonce !== n.csp.nonce &&
        (a.nonce = n.csp.nonce),
      a.innerHTML !== e && (a.innerHTML = e),
      a
    )
  var r = N2(e, n)
  return r.setAttribute(L2(n), t), r
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        l3(e, a, n[a])
      })
  }
  return e
}
function l3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function oi(e) {
  return (
    typeof e == 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (typeof e.icon == 'object' || typeof e.icon == 'function')
  )
}
function en(e, t, n) {
  return n
    ? Nt(
        e.tag,
        si({ key: t }, n, e.attrs),
        (e.children || []).map(function (i, a) {
          return en(i, ''.concat(t, '-').concat(e.tag, '-').concat(a))
        }),
      )
    : Nt(
        e.tag,
        si({ key: t }, e.attrs),
        (e.children || []).map(function (i, a) {
          return en(i, ''.concat(t, '-').concat(e.tag, '-').concat(a))
        }),
      )
}
function R2(e) {
  return ke(e)[0]
}
function z2(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
var c3 = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
function G2(e) {
  return e && e.getRootNode && e.getRootNode()
}
function u3(e) {
  return gn() ? G2(e) instanceof ShadowRoot : !1
}
function d3(e) {
  return u3(e) ? G2(e) : null
}
var p3 = function () {
    var t = j2(),
      n = t.prefixCls,
      i = t.csp,
      a = $i(),
      r = c3
    n && (r = r.replace(/anticon/g, n.value)),
      wi(function () {
        if (gn()) {
          var s = a.vnode.el,
            o = d3(s)
          o3(r, '@ant-design-vue-icons', {
            prepend: !0,
            csp: i.value,
            attachTo: o,
          })
        }
      })
  },
  h3 = ['icon', 'primaryColor', 'secondaryColor']
function E3(e, t) {
  if (e == null) return {}
  var n = f3(e, t),
    i,
    a
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    for (a = 0; a < r.length; a++)
      (i = r[a]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (n[i] = e[i])
  }
  return n
}
function f3(e, t) {
  if (e == null) return {}
  var n = {},
    i = Object.keys(e),
    a,
    r
  for (r = 0; r < i.length; r++)
    (a = i[r]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
  return n
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        g3(e, a, n[a])
      })
  }
  return e
}
function g3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Re = De({ primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 })
function C3(e) {
  var t = e.primaryColor,
    n = e.secondaryColor
  ;(Re.primaryColor = t),
    (Re.secondaryColor = n || R2(t)),
    (Re.calculated = !!n)
}
function k3() {
  return st({}, Re)
}
var Te = function (t, n) {
  var i = st({}, t, n.attrs),
    a = i.icon,
    r = i.primaryColor,
    s = i.secondaryColor,
    o = E3(i, h3),
    l = Re
  if (
    (r && (l = { primaryColor: r, secondaryColor: s || R2(r) }), oi(a), !oi(a))
  )
    return null
  var c = a
  return (
    c &&
      typeof c.icon == 'function' &&
      (c = st({}, c, { icon: c.icon(l.primaryColor, l.secondaryColor) })),
    en(
      c.icon,
      'svg-'.concat(c.name),
      st({}, o, {
        'data-icon': c.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      }),
    )
  )
}
Te.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String,
}
Te.inheritAttrs = !1
Te.displayName = 'IconBase'
Te.getTwoToneColors = k3
Te.setTwoToneColors = C3
const kn = Te
function y3(e, t) {
  return F3(e) || A3(e, t) || m3(e, t) || v3()
}
function v3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function m3(e, t) {
  if (e) {
    if (typeof e == 'string') return li(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return li(e, t)
  }
}
function li(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
  return i
}
function A3(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var i = [],
      a = !0,
      r = !1,
      s,
      o
    try {
      for (
        n = n.call(e);
        !(a = (s = n.next()).done) && (i.push(s.value), !(t && i.length === t));
        a = !0
      );
    } catch (l) {
      ;(r = !0), (o = l)
    } finally {
      try {
        !a && n.return != null && n.return()
      } finally {
        if (r) throw o
      }
    }
    return i
  }
}
function F3(e) {
  if (Array.isArray(e)) return e
}
function W2(e) {
  var t = z2(e),
    n = y3(t, 2),
    i = n[0],
    a = n[1]
  return kn.setTwoToneColors({ primaryColor: i, secondaryColor: a })
}
function b3() {
  var e = kn.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var D3 = _({
    name: 'InsertStyles',
    setup: function () {
      return (
        p3(),
        function () {
          return null
        }
      )
    },
  }),
  B3 = [
    'class',
    'icon',
    'spin',
    'rotate',
    'tabindex',
    'twoToneColor',
    'onClick',
  ]
function x3(e, t) {
  return O3(e) || w3(e, t) || $3(e, t) || S3()
}
function S3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function $3(e, t) {
  if (e) {
    if (typeof e == 'string') return ci(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ci(e, t)
  }
}
function ci(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
  return i
}
function w3(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var i = [],
      a = !0,
      r = !1,
      s,
      o
    try {
      for (
        n = n.call(e);
        !(a = (s = n.next()).done) && (i.push(s.value), !(t && i.length === t));
        a = !0
      );
    } catch (l) {
      ;(r = !0), (o = l)
    } finally {
      try {
        !a && n.return != null && n.return()
      } finally {
        if (r) throw o
      }
    }
    return i
  }
}
function O3(e) {
  if (Array.isArray(e)) return e
}
function ui(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        He(e, a, n[a])
      })
  }
  return e
}
function He(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function P3(e, t) {
  if (e == null) return {}
  var n = _3(e, t),
    i,
    a
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    for (a = 0; a < r.length; a++)
      (i = r[a]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (n[i] = e[i])
  }
  return n
}
function _3(e, t) {
  if (e == null) return {}
  var n = {},
    i = Object.keys(e),
    a,
    r
  for (r = 0; r < i.length; r++)
    (a = i[r]), !(t.indexOf(a) >= 0) && (n[a] = e[a])
  return n
}
W2(ts.primary)
var Me = function (t, n) {
  var i,
    a = ui({}, t, n.attrs),
    r = a.class,
    s = a.icon,
    o = a.spin,
    l = a.rotate,
    c = a.tabindex,
    d = a.twoToneColor,
    u = a.onClick,
    p = P3(a, B3),
    f = j2(),
    k = f.prefixCls,
    C = f.rootClassName,
    F =
      ((i = {}),
      He(i, C.value, !!C.value),
      He(i, k.value, !0),
      He(i, ''.concat(k.value, '-').concat(s.name), !!s.name),
      He(i, ''.concat(k.value, '-spin'), !!o || s.name === 'loading'),
      i),
    v = c
  v === void 0 && u && (v = -1)
  var A = l
      ? {
          msTransform: 'rotate('.concat(l, 'deg)'),
          transform: 'rotate('.concat(l, 'deg)'),
        }
      : void 0,
    x = z2(d),
    b = x3(x, 2),
    D = b[0],
    S = b[1]
  return E(
    'span',
    ui({ role: 'img', 'aria-label': s.name }, p, {
      onClick: u,
      class: [F, r],
      tabindex: v,
    }),
    [
      E(kn, { icon: s, primaryColor: D, secondaryColor: S, style: A }, null),
      E(D3, null, null),
    ],
  )
}
Me.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array],
}
Me.displayName = 'AntdIcon'
Me.inheritAttrs = !1
Me.getTwoToneColor = b3
Me.setTwoToneColor = W2
const te = Me
var T3 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
        },
      },
    ],
  },
  name: 'loading',
  theme: 'outlined',
}
const M3 = T3
function di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        I3(e, a, n[a])
      })
  }
  return e
}
function I3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var yn = function (t, n) {
  var i = di({}, t, n.attrs)
  return E(te, di({}, i, { icon: M3 }), null)
}
yn.displayName = 'LoadingOutlined'
yn.inheritAttrs = !1
const vn = yn
var j3 = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
        },
      },
    ],
  },
  name: 'close',
  theme: 'outlined',
}
const L3 = j3
function pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        H3(e, a, n[a])
      })
  }
  return e
}
function H3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var mn = function (t, n) {
  var i = pi({}, t, n.attrs)
  return E(te, pi({}, i, { icon: L3 }), null)
}
mn.displayName = 'CloseOutlined'
mn.inheritAttrs = !1
const An = mn
var N3 = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z',
        },
      },
    ],
  },
  name: 'close-circle',
  theme: 'filled',
}
const R3 = N3
function hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        z3(e, a, n[a])
      })
  }
  return e
}
function z3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Fn = function (t, n) {
  var i = hi({}, t, n.attrs)
  return E(te, hi({}, i, { icon: R3 }), null)
}
Fn.displayName = 'CloseCircleFilled'
Fn.inheritAttrs = !1
const mt = Fn
var G3 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
    ],
  },
  name: 'check-circle',
  theme: 'outlined',
}
const W3 = G3
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        X3(e, a, n[a])
      })
  }
  return e
}
function X3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var bn = function (t, n) {
  var i = Ei({}, t, n.attrs)
  return E(te, Ei({}, i, { icon: W3 }), null)
}
bn.displayName = 'CheckCircleOutlined'
bn.inheritAttrs = !1
const Z3 = bn
var U3 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z',
        },
      },
    ],
  },
  name: 'exclamation-circle',
  theme: 'outlined',
}
const V3 = U3
function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        q3(e, a, n[a])
      })
  }
  return e
}
function q3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Dn = function (t, n) {
  var i = fi({}, t, n.attrs)
  return E(te, fi({}, i, { icon: V3 }), null)
}
Dn.displayName = 'ExclamationCircleOutlined'
Dn.inheritAttrs = !1
const K3 = Dn
var Y3 = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'info-circle',
  theme: 'outlined',
}
const Q3 = Y3
function gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        J3(e, a, n[a])
      })
  }
  return e
}
function J3(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Bn = function (t, n) {
  var i = gi({}, t, n.attrs)
  return E(te, gi({}, i, { icon: Q3 }), null)
}
Bn.displayName = 'InfoCircleOutlined'
Bn.inheritAttrs = !1
const eo = Bn
var to = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z',
        },
      },
    ],
  },
  name: 'close-circle',
  theme: 'outlined',
}
const no = to
function Ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        io(e, a, n[a])
      })
  }
  return e
}
function io(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var xn = function (t, n) {
  var i = Ci({}, t, n.attrs)
  return E(te, Ci({}, i, { icon: no }), null)
}
xn.displayName = 'CloseCircleOutlined'
xn.inheritAttrs = !1
const ao = xn
var ro = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
        },
      },
    ],
  },
  name: 'check-circle',
  theme: 'filled',
}
const so = ro
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        oo(e, a, n[a])
      })
  }
  return e
}
function oo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Sn = function (t, n) {
  var i = ki({}, t, n.attrs)
  return E(te, ki({}, i, { icon: so }), null)
}
Sn.displayName = 'CheckCircleFilled'
Sn.inheritAttrs = !1
const At = Sn
var lo = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
        },
      },
    ],
  },
  name: 'exclamation-circle',
  theme: 'filled',
}
const co = lo
function yi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        uo(e, a, n[a])
      })
  }
  return e
}
function uo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var $n = function (t, n) {
  var i = yi({}, t, n.attrs)
  return E(te, yi({}, i, { icon: co }), null)
}
$n.displayName = 'ExclamationCircleFilled'
$n.inheritAttrs = !1
const Ft = $n
var po = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
        },
      },
    ],
  },
  name: 'info-circle',
  theme: 'filled',
}
const ho = po
function vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {},
      i = Object.keys(n)
    typeof Object.getOwnPropertySymbols == 'function' &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (a) {
          return Object.getOwnPropertyDescriptor(n, a).enumerable
        }),
      )),
      i.forEach(function (a) {
        Eo(e, a, n[a])
      })
  }
  return e
}
function Eo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var wn = function (t, n) {
  var i = vi({}, t, n.attrs)
  return E(te, vi({}, i, { icon: ho }), null)
}
wn.displayName = 'InfoCircleFilled'
wn.inheritAttrs = !1
const bt = wn
let jt = g({}, We.Modal)
function fo(e) {
  e ? (jt = g(g({}, jt), e)) : (jt = g({}, We.Modal))
}
const tn = 'internalMark',
  ot = _({
    compatConfig: { MODE: 3 },
    name: 'ALocaleProvider',
    props: { locale: { type: Object }, ANT_MARK__: String },
    setup(e, t) {
      let { slots: n } = t
      Ji(e.ANT_MARK__ === tn)
      const i = De({
        antLocale: g(g({}, e.locale), { exist: !0 }),
        ANT_MARK__: tn,
      })
      return (
        ue('localeData', i),
        se(
          () => e.locale,
          (a) => {
            fo(a && a.Modal), (i.antLocale = g(g({}, a), { exist: !0 }))
          },
          { immediate: !0 },
        ),
        () => {
          var a
          return (a = n.default) === null || a === void 0 ? void 0 : a.call(n)
        }
      )
    },
  })
ot.install = function (e) {
  return e.component(ot.name, ot), e
}
const go = on(ot),
  X2 = _({
    name: 'Notice',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'duration',
      'updateMark',
      'noticeKey',
      'closeIcon',
      'closable',
      'props',
      'onClick',
      'onClose',
      'holder',
      'visible',
    ],
    setup(e, t) {
      let { attrs: n, slots: i } = t,
        a,
        r = !1
      const s = m(() => (e.duration === void 0 ? 4.5 : e.duration)),
        o = () => {
          s.value &&
            !r &&
            (a = setTimeout(() => {
              c()
            }, s.value * 1e3))
        },
        l = () => {
          a && (clearTimeout(a), (a = null))
        },
        c = (u) => {
          u && u.stopPropagation(), l()
          const { onClose: p, noticeKey: f } = e
          p && p(f)
        },
        d = () => {
          l(), o()
        }
      return (
        sn(() => {
          o()
        }),
        va(() => {
          ;(r = !0), l()
        }),
        se(
          [s, () => e.updateMark, () => e.visible],
          (u, p) => {
            let [f, k, C] = u,
              [F, v, A] = p
            ;(f !== F || k !== v || (C !== A && A)) && d()
          },
          { flush: 'post' },
        ),
        () => {
          var u, p
          const {
              prefixCls: f,
              closable: k,
              closeIcon: C = (u = i.closeIcon) === null || u === void 0
                ? void 0
                : u.call(i),
              onClick: F,
              holder: v,
            } = e,
            { class: A, style: x } = n,
            b = `${f}-notice`,
            D = Object.keys(n).reduce(
              (h, B) => (
                (B.startsWith('data-') ||
                  B.startsWith('aria-') ||
                  B === 'role') &&
                  (h[B] = n[B]),
                h
              ),
              {},
            ),
            S = E(
              'div',
              M(
                {
                  class: Z(b, A, { [`${b}-closable`]: k }),
                  style: x,
                  onMouseenter: l,
                  onMouseleave: o,
                  onClick: F,
                },
                D,
              ),
              [
                E('div', { class: `${b}-content` }, [
                  (p = i.default) === null || p === void 0 ? void 0 : p.call(i),
                ]),
                k
                  ? E('a', { tabindex: 0, onClick: c, class: `${b}-close` }, [
                      C || E('span', { class: `${b}-close-x` }, null),
                    ])
                  : null,
              ],
            )
          return v ? E(Oi, { to: v }, { default: () => S }) : S
        }
      )
    },
  })
var Co = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
let mi = 0
const ko = Date.now()
function Ai() {
  const e = mi
  return (mi += 1), `rcNotification_${ko}_${e}`
}
const nn = _({
  name: 'Notification',
  inheritAttrs: !1,
  props: [
    'prefixCls',
    'transitionName',
    'animation',
    'maxCount',
    'closeIcon',
    'hashId',
  ],
  setup(e, t) {
    let { attrs: n, expose: i, slots: a } = t
    const r = new Map(),
      s = ce([]),
      o = m(() => {
        const { prefixCls: d, animation: u = 'fade' } = e
        let p = e.transitionName
        return !p && u && (p = `${d}-${u}`), M2(p)
      }),
      l = (d, u) => {
        const p = d.key || Ai(),
          f = g(g({}, d), { key: p }),
          { maxCount: k } = e,
          C = s.value.map((v) => v.notice.key).indexOf(p),
          F = s.value.concat()
        C !== -1
          ? F.splice(C, 1, { notice: f, holderCallback: u })
          : (k &&
              s.value.length >= k &&
              ((f.key = F[0].notice.key),
              (f.updateMark = Ai()),
              (f.userPassKey = p),
              F.shift()),
            F.push({ notice: f, holderCallback: u })),
          (s.value = F)
      },
      c = (d) => {
        s.value = s.value.filter((u) => {
          let {
            notice: { key: p, userPassKey: f },
          } = u
          return (f || p) !== d
        })
      }
    return (
      i({ add: l, remove: c, notices: s }),
      () => {
        var d
        const {
            prefixCls: u,
            closeIcon: p = (d = a.closeIcon) === null || d === void 0
              ? void 0
              : d.call(a, { prefixCls: u }),
          } = e,
          f = s.value.map((C, F) => {
            let { notice: v, holderCallback: A } = C
            const x = F === s.value.length - 1 ? v.updateMark : void 0,
              { key: b, userPassKey: D } = v,
              { content: S } = v,
              h = g(
                g(
                  g(
                    {
                      prefixCls: u,
                      closeIcon:
                        typeof p == 'function' ? p({ prefixCls: u }) : p,
                    },
                    v,
                  ),
                  v.props,
                ),
                {
                  key: b,
                  noticeKey: D || b,
                  updateMark: x,
                  onClose: (B) => {
                    var w
                    c(B), (w = v.onClose) === null || w === void 0 || w.call(v)
                  },
                  onClick: v.onClick,
                },
              )
            return A
              ? E(
                  'div',
                  {
                    key: b,
                    class: `${u}-hook-holder`,
                    ref: (B) => {
                      typeof b > 'u' ||
                        (B ? (r.set(b, B), A(B, h)) : r.delete(b))
                    },
                  },
                  null,
                )
              : E(X2, M(M({}, h), {}, { class: Z(h.class, e.hashId) }), {
                  default: () => [
                    typeof S == 'function' ? S({ prefixCls: u }) : S,
                  ],
                })
          }),
          k = { [u]: 1, [n.class]: !!n.class, [e.hashId]: !0 }
        return E(
          'div',
          { class: k, style: n.style || { top: '65px', left: '50%' } },
          [E(Pi, M({ tag: 'div' }, o.value), { default: () => [f] })],
        )
      }
    )
  },
})
nn.newInstance = function (t, n) {
  const i = t || {},
    {
      name: a = 'notification',
      getContainer: r,
      appContext: s,
      prefixCls: o,
      rootPrefixCls: l,
      transitionName: c,
      hasTransitionName: d,
      useStyle: u,
    } = i,
    p = Co(i, [
      'name',
      'getContainer',
      'appContext',
      'prefixCls',
      'rootPrefixCls',
      'transitionName',
      'hasTransitionName',
      'useStyle',
    ]),
    f = document.createElement('div')
  r ? r().appendChild(f) : document.body.appendChild(f)
  const k = _({
      compatConfig: { MODE: 3 },
      name: 'NotificationWrapper',
      setup(F, v) {
        let { attrs: A } = v
        const x = q(),
          b = m(() => L.getPrefixCls(a, o)),
          [, D] = u(b)
        return (
          sn(() => {
            n({
              notice(S) {
                var h
                ;(h = x.value) === null || h === void 0 || h.add(S)
              },
              removeNotice(S) {
                var h
                ;(h = x.value) === null || h === void 0 || h.remove(S)
              },
              destroy() {
                Pn(null, f), f.parentNode && f.parentNode.removeChild(f)
              },
              component: x,
            })
          }),
          () => {
            const S = L,
              h = S.getRootPrefixCls(l, b.value),
              B = d ? c : `${b.value}-${c}`
            return E(El, M(M({}, S), {}, { prefixCls: h }), {
              default: () => [
                E(
                  nn,
                  M(
                    M({ ref: x }, A),
                    {},
                    { prefixCls: b.value, transitionName: B, hashId: D.value },
                  ),
                  null,
                ),
              ],
            })
          }
        )
      },
    }),
    C = E(k, p)
  ;(C.appContext = s || C.appContext), Pn(C, f)
}
const Z2 = nn
let Fi = 0
const yo = Date.now()
function bi() {
  const e = Fi
  return (Fi += 1), `rcNotification_${yo}_${e}`
}
const vo = _({
    name: 'HookNotification',
    inheritAttrs: !1,
    props: [
      'prefixCls',
      'transitionName',
      'animation',
      'maxCount',
      'closeIcon',
      'hashId',
      'remove',
      'notices',
      'getStyles',
      'getClassName',
      'onAllRemoved',
      'getContainer',
    ],
    setup(e, t) {
      let { attrs: n, slots: i } = t
      const a = new Map(),
        r = m(() => e.notices),
        s = m(() => {
          let d = e.transitionName
          if (!d && e.animation)
            switch (typeof e.animation) {
              case 'string':
                d = e.animation
                break
              case 'function':
                d = e.animation().name
                break
              case 'object':
                d = e.animation.name
                break
              default:
                d = `${e.prefixCls}-fade`
                break
            }
          return M2(d)
        }),
        o = (d) => e.remove(d),
        l = ce({})
      se(r, () => {
        const d = {}
        Object.keys(l.value).forEach((u) => {
          d[u] = []
        }),
          e.notices.forEach((u) => {
            const { placement: p = 'topRight' } = u.notice
            p && ((d[p] = d[p] || []), d[p].push(u))
          }),
          (l.value = d)
      })
      const c = m(() => Object.keys(l.value))
      return () => {
        var d
        const {
            prefixCls: u,
            closeIcon: p = (d = i.closeIcon) === null || d === void 0
              ? void 0
              : d.call(i, { prefixCls: u }),
          } = e,
          f = c.value.map((k) => {
            var C, F
            const v = l.value[k],
              A =
                (C = e.getClassName) === null || C === void 0
                  ? void 0
                  : C.call(e, k),
              x =
                (F = e.getStyles) === null || F === void 0
                  ? void 0
                  : F.call(e, k),
              b = v.map((h, B) => {
                let { notice: w, holderCallback: R } = h
                const Y = B === r.value.length - 1 ? w.updateMark : void 0,
                  { key: Q, userPassKey: Dt } = w,
                  { content: Ie } = w,
                  y = g(
                    g(
                      g(
                        {
                          prefixCls: u,
                          closeIcon:
                            typeof p == 'function' ? p({ prefixCls: u }) : p,
                        },
                        w,
                      ),
                      w.props,
                    ),
                    {
                      key: Q,
                      noticeKey: Dt || Q,
                      updateMark: Y,
                      onClose: ($) => {
                        var T
                        o($),
                          (T = w.onClose) === null || T === void 0 || T.call(w)
                      },
                      onClick: w.onClick,
                    },
                  )
                return R
                  ? E(
                      'div',
                      {
                        key: Q,
                        class: `${u}-hook-holder`,
                        ref: ($) => {
                          typeof Q > 'u' ||
                            ($ ? (a.set(Q, $), R($, y)) : a.delete(Q))
                        },
                      },
                      null,
                    )
                  : E(X2, M(M({}, y), {}, { class: Z(y.class, e.hashId) }), {
                      default: () => [
                        typeof Ie == 'function' ? Ie({ prefixCls: u }) : Ie,
                      ],
                    })
              }),
              D = {
                [u]: 1,
                [`${u}-${k}`]: 1,
                [n.class]: !!n.class,
                [e.hashId]: !0,
                [A]: !!A,
              }
            function S() {
              var h
              v.length > 0 ||
                (Reflect.deleteProperty(l.value, k),
                (h = e.onAllRemoved) === null || h === void 0 || h.call(e))
            }
            return E(
              'div',
              {
                key: k,
                class: D,
                style: n.style || x || { top: '65px', left: '50%' },
              },
              [
                E(Pi, M(M({ tag: 'div' }, s.value), {}, { onAfterLeave: S }), {
                  default: () => [b],
                }),
              ],
            )
          })
        return E(e3, { getContainer: e.getContainer }, { default: () => [f] })
      }
    },
  }),
  mo = vo
var Ao = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
const Fo = () => document.body
let Di = 0
function bo() {
  const e = {}
  for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
    n[i] = arguments[i]
  return (
    n.forEach((a) => {
      a &&
        Object.keys(a).forEach((r) => {
          const s = a[r]
          s !== void 0 && (e[r] = s)
        })
    }),
    e
  )
}
function U2() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const {
      getContainer: t = Fo,
      motion: n,
      prefixCls: i,
      maxCount: a,
      getClassName: r,
      getStyles: s,
      onAllRemoved: o,
    } = e,
    l = Ao(e, [
      'getContainer',
      'motion',
      'prefixCls',
      'maxCount',
      'getClassName',
      'getStyles',
      'onAllRemoved',
    ]),
    c = q([]),
    d = q(),
    u = (v, A) => {
      const x = v.key || bi(),
        b = g(g({}, v), { key: x }),
        D = c.value.map((h) => h.notice.key).indexOf(x),
        S = c.value.concat()
      D !== -1
        ? S.splice(D, 1, { notice: b, holderCallback: A })
        : (a &&
            c.value.length >= a &&
            ((b.key = S[0].notice.key),
            (b.updateMark = bi()),
            (b.userPassKey = x),
            S.shift()),
          S.push({ notice: b, holderCallback: A })),
        (c.value = S)
    },
    p = (v) => {
      c.value = c.value.filter((A) => {
        let {
          notice: { key: x, userPassKey: b },
        } = A
        return (b || x) !== v
      })
    },
    f = () => {
      c.value = []
    },
    k = () =>
      E(
        mo,
        {
          ref: d,
          prefixCls: i,
          maxCount: a,
          notices: c.value,
          remove: p,
          getClassName: r,
          getStyles: s,
          animation: n,
          hashId: e.hashId,
          onAllRemoved: o,
          getContainer: t,
        },
        null,
      ),
    C = q([]),
    F = {
      open: (v) => {
        const A = bo(l, v)
        ;(A.key === null || A.key === void 0) &&
          ((A.key = `vc-notification-${Di}`), (Di += 1)),
          (C.value = [...C.value, { type: 'open', config: A }])
      },
      close: (v) => {
        C.value = [...C.value, { type: 'close', key: v }]
      },
      destroy: () => {
        C.value = [...C.value, { type: 'destroy' }]
      },
    }
  return (
    se(C, () => {
      C.value.length &&
        (C.value.forEach((v) => {
          switch (v.type) {
            case 'open':
              u(v.config)
              break
            case 'close':
              p(v.key)
              break
            case 'destroy':
              f()
              break
          }
        }),
        (C.value = []))
    }),
    [F, k]
  )
}
const Do = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        boxShadowSecondary: i,
        colorBgElevated: a,
        colorSuccess: r,
        colorError: s,
        colorWarning: o,
        colorInfo: l,
        fontSizeLG: c,
        motionEaseInOutCirc: d,
        motionDurationSlow: u,
        marginXS: p,
        paddingXS: f,
        borderRadiusLG: k,
        zIndexPopup: C,
        messageNoticeContentPadding: F,
      } = e,
      v = new Ce('MessageMoveIn', {
        '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
        '100%': { padding: f, transform: 'translateY(0)', opacity: 1 },
      }),
      A = new Ce('MessageMoveOut', {
        '0%': { maxHeight: e.height, padding: f, opacity: 1 },
        '100%': { maxHeight: 0, padding: 0, opacity: 0 },
      })
    return [
      {
        [t]: g(g({}, f2(e)), {
          position: 'fixed',
          top: p,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          pointerEvents: 'none',
          zIndex: C,
          [`${t}-move-up`]: { animationFillMode: 'forwards' },
          [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
            animationName: v,
            animationDuration: u,
            animationPlayState: 'paused',
            animationTimingFunction: d,
          },
          [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
          [`${t}-move-up-leave`]: {
            animationName: A,
            animationDuration: u,
            animationPlayState: 'paused',
            animationTimingFunction: d,
          },
          [`${t}-move-up-leave${t}-move-up-leave-active`]: {
            animationPlayState: 'running',
          },
          '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
        }),
      },
      {
        [`${t}-notice`]: {
          padding: f,
          textAlign: 'center',
          [n]: {
            verticalAlign: 'text-bottom',
            marginInlineEnd: p,
            fontSize: c,
          },
          [`${t}-notice-content`]: {
            display: 'inline-block',
            padding: F,
            background: a,
            borderRadius: k,
            boxShadow: i,
            pointerEvents: 'all',
          },
          [`${t}-success ${n}`]: { color: r },
          [`${t}-error ${n}`]: { color: s },
          [`${t}-warning ${n}`]: { color: o },
          [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: { color: l },
        },
      },
      { [`${t}-notice-pure-panel`]: { padding: 0, textAlign: 'start' } },
    ]
  },
  V2 = hn(
    'Message',
    (e) => {
      const t = Ct(e, {
        messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
      })
      return [Do(t)]
    },
    (e) => ({ height: 150, zIndexPopup: e.zIndexPopupBase + 10 }),
  ),
  Bo = {
    info: E(bt, null, null),
    success: E(At, null, null),
    error: E(mt, null, null),
    warning: E(Ft, null, null),
    loading: E(vn, null, null),
  },
  xo = _({
    name: 'PureContent',
    inheritAttrs: !1,
    props: ['prefixCls', 'type', 'icon'],
    setup(e, t) {
      let { slots: n } = t
      return () => {
        var i
        return E(
          'div',
          {
            class: Z(
              `${e.prefixCls}-custom-content`,
              `${e.prefixCls}-${e.type}`,
            ),
          },
          [
            e.icon || Bo[e.type],
            E('span', null, [
              (i = n.default) === null || i === void 0 ? void 0 : i.call(n),
            ]),
          ],
        )
      }
    },
  })
var So = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
const $o = 8,
  wo = 3,
  Oo = _({
    name: 'Holder',
    inheritAttrs: !1,
    props: [
      'top',
      'prefixCls',
      'getContainer',
      'maxCount',
      'duration',
      'rtl',
      'transitionName',
      'onAllRemoved',
    ],
    setup(e, t) {
      let { expose: n } = t
      var i, a
      const { getPrefixCls: r, getPopupContainer: s } = yt('message', e),
        o = m(() => r('message', e.prefixCls)),
        [, l] = V2(o),
        c = () => {
          var C
          const F = (C = e.top) !== null && C !== void 0 ? C : $o
          return {
            left: '50%',
            transform: 'translateX(-50%)',
            top: typeof F == 'number' ? `${F}px` : F,
          }
        },
        d = () => Z(l.value, e.rtl ? `${o.value}-rtl` : ''),
        u = () => {
          var C
          return Ys({
            prefixCls: o.value,
            animation:
              (C = e.animation) !== null && C !== void 0 ? C : 'move-up',
            transitionName: e.transitionName,
          })
        },
        p = E('span', { class: `${o.value}-close-x` }, [
          E(An, { class: `${o.value}-close-icon` }, null),
        ]),
        [f, k] = U2({
          getStyles: c,
          prefixCls: o.value,
          getClassName: d,
          motion: u,
          closable: !1,
          closeIcon: p,
          duration: (i = e.duration) !== null && i !== void 0 ? i : wo,
          getContainer:
            (a = e.staticGetContainer) !== null && a !== void 0 ? a : s.value,
          maxCount: e.maxCount,
          onAllRemoved: e.onAllRemoved,
        })
      return n(g(g({}, f), { prefixCls: o, hashId: l })), k
    },
  })
let Bi = 0
function Po(e) {
  const t = q(null),
    n = Symbol('messageHolderKey'),
    i = (l) => {
      var c
      ;(c = t.value) === null || c === void 0 || c.close(l)
    },
    a = (l) => {
      if (!t.value) {
        const D = () => {}
        return (D.then = () => {}), D
      }
      const { open: c, prefixCls: d, hashId: u } = t.value,
        p = `${d}-notice`,
        { content: f, icon: k, type: C, key: F, class: v, onClose: A } = l,
        x = So(l, ['content', 'icon', 'type', 'key', 'class', 'onClose'])
      let b = F
      return (
        b == null && ((Bi += 1), (b = `antd-message-${Bi}`)),
        wa(
          (D) => (
            c(
              g(g({}, x), {
                key: b,
                content: () =>
                  E(
                    xo,
                    {
                      prefixCls: d,
                      type: C,
                      icon: typeof k == 'function' ? k() : k,
                    },
                    { default: () => [typeof f == 'function' ? f() : f] },
                  ),
                placement: 'top',
                class: Z(C && `${p}-${C}`, u, v),
                onClose: () => {
                  A == null || A(), D()
                },
              }),
            ),
            () => {
              i(b)
            }
          ),
        )
      )
    },
    s = {
      open: a,
      destroy: (l) => {
        var c
        l !== void 0
          ? i(l)
          : (c = t.value) === null || c === void 0 || c.destroy()
      },
    }
  return (
    ['info', 'success', 'warning', 'error', 'loading'].forEach((l) => {
      const c = (d, u, p) => {
        let f
        d && typeof d == 'object' && 'content' in d
          ? (f = d)
          : (f = { content: d })
        let k, C
        typeof u == 'function' ? (C = u) : ((k = u), (C = p))
        const F = g(g({ onClose: C, duration: k }, f), { type: l })
        return a(F)
      }
      s[l] = c
    }),
    [s, () => E(Oo, M(M({ key: n }, e), {}, { ref: t }), null)]
  )
}
function _o(e) {
  return Po(e)
}
let q2 = 3,
  K2,
  N,
  To = 1,
  Y2 = '',
  Q2 = 'move-up',
  J2 = !1,
  ea = () => document.body,
  ta,
  na = !1
function Mo() {
  return To++
}
function Io(e) {
  e.top !== void 0 && ((K2 = e.top), (N = null)),
    e.duration !== void 0 && (q2 = e.duration),
    e.prefixCls !== void 0 && (Y2 = e.prefixCls),
    e.getContainer !== void 0 && ((ea = e.getContainer), (N = null)),
    e.transitionName !== void 0 &&
      ((Q2 = e.transitionName), (N = null), (J2 = !0)),
    e.maxCount !== void 0 && ((ta = e.maxCount), (N = null)),
    e.rtl !== void 0 && (na = e.rtl)
}
function jo(e, t) {
  if (N) {
    t(N)
    return
  }
  Z2.newInstance(
    {
      appContext: e.appContext,
      prefixCls: e.prefixCls || Y2,
      rootPrefixCls: e.rootPrefixCls,
      transitionName: Q2,
      hasTransitionName: J2,
      style: { top: K2 },
      getContainer: ea || e.getPopupContainer,
      maxCount: ta,
      name: 'message',
      useStyle: V2,
    },
    (n) => {
      if (N) {
        t(N)
        return
      }
      ;(N = n), t(n)
    },
  )
}
const ia = { info: bt, success: At, error: mt, warning: Ft, loading: vn },
  Lo = Object.keys(ia)
function Ho(e) {
  const t = e.duration !== void 0 ? e.duration : q2,
    n = e.key || Mo(),
    i = new Promise((r) => {
      const s = () => (typeof e.onClose == 'function' && e.onClose(), r(!0))
      jo(e, (o) => {
        o.notice({
          key: n,
          duration: t,
          style: e.style || {},
          class: e.class,
          content: (l) => {
            let { prefixCls: c } = l
            const d = ia[e.type],
              u = d ? E(d, null, null) : '',
              p = Z(`${c}-custom-content`, {
                [`${c}-${e.type}`]: e.type,
                [`${c}-rtl`]: na === !0,
              })
            return E('div', { class: p }, [
              typeof e.icon == 'function' ? e.icon() : e.icon || u,
              E('span', null, [
                typeof e.content == 'function' ? e.content() : e.content,
              ]),
            ])
          },
          onClose: s,
          onClick: e.onClick,
        })
      })
    }),
    a = () => {
      N && N.removeNotice(n)
    }
  return (a.then = (r, s) => i.then(r, s)), (a.promise = i), a
}
function No(e) {
  return Object.prototype.toString.call(e) === '[object Object]' && !!e.content
}
const we = {
  open: Ho,
  config: Io,
  destroy(e) {
    if (N)
      if (e) {
        const { removeNotice: t } = N
        t(e)
      } else {
        const { destroy: t } = N
        t(), (N = null)
      }
  },
}
function Ro(e, t) {
  e[t] = (n, i, a) =>
    No(n)
      ? e.open(g(g({}, n), { type: t }))
      : (typeof i == 'function' && ((a = i), (i = void 0)),
        e.open({ content: n, duration: i, type: t, onClose: a }))
}
Lo.forEach((e) => Ro(we, e))
we.warn = we.warning
we.useMessage = _o
const zo = (e) => {
    const { componentCls: t, width: n, notificationMarginEdge: i } = e,
      a = new Ce('antNotificationTopFadeIn', {
        '0%': { marginTop: '-100%', opacity: 0 },
        '100%': { marginTop: 0, opacity: 1 },
      }),
      r = new Ce('antNotificationBottomFadeIn', {
        '0%': { marginBottom: '-100%', opacity: 0 },
        '100%': { marginBottom: 0, opacity: 1 },
      }),
      s = new Ce('antNotificationLeftFadeIn', {
        '0%': { right: { _skip_check_: !0, value: n }, opacity: 0 },
        '100%': { right: { _skip_check_: !0, value: 0 }, opacity: 1 },
      })
    return {
      [`&${t}-top, &${t}-bottom`]: { marginInline: 0 },
      [`&${t}-top`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
          { animationName: a },
      },
      [`&${t}-bottom`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
          { animationName: r },
      },
      [`&${t}-topLeft, &${t}-bottomLeft`]: {
        marginInlineEnd: 0,
        marginInlineStart: i,
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:
          { animationName: s },
      },
    }
  },
  Go = (e) => {
    const {
        iconCls: t,
        componentCls: n,
        boxShadowSecondary: i,
        fontSizeLG: a,
        notificationMarginBottom: r,
        borderRadiusLG: s,
        colorSuccess: o,
        colorInfo: l,
        colorWarning: c,
        colorError: d,
        colorTextHeading: u,
        notificationBg: p,
        notificationPadding: f,
        notificationMarginEdge: k,
        motionDurationMid: C,
        motionEaseInOut: F,
        fontSize: v,
        lineHeight: A,
        width: x,
        notificationIconSize: b,
      } = e,
      D = `${n}-notice`,
      S = new Ce('antNotificationFadeIn', {
        '0%': { left: { _skip_check_: !0, value: x }, opacity: 0 },
        '100%': { left: { _skip_check_: !0, value: 0 }, opacity: 1 },
      }),
      h = new Ce('antNotificationFadeOut', {
        '0%': { maxHeight: e.animationMaxHeight, marginBottom: r, opacity: 1 },
        '100%': {
          maxHeight: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
        },
      })
    return [
      {
        [n]: g(
          g(
            g(g({}, f2(e)), {
              position: 'fixed',
              zIndex: e.zIndexPopup,
              marginInlineEnd: k,
              [`${n}-hook-holder`]: { position: 'relative' },
              [`&${n}-top, &${n}-bottom`]: {
                [`${n}-notice`]: { marginInline: 'auto auto' },
              },
              [`&${n}-topLeft, &${n}-bottomLeft`]: {
                [`${n}-notice`]: {
                  marginInlineEnd: 'auto',
                  marginInlineStart: 0,
                },
              },
              [`${n}-fade-enter, ${n}-fade-appear`]: {
                animationDuration: e.motionDurationMid,
                animationTimingFunction: F,
                animationFillMode: 'both',
                opacity: 0,
                animationPlayState: 'paused',
              },
              [`${n}-fade-leave`]: {
                animationTimingFunction: F,
                animationFillMode: 'both',
                animationDuration: C,
                animationPlayState: 'paused',
              },
              [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:
                { animationName: S, animationPlayState: 'running' },
              [`${n}-fade-leave${n}-fade-leave-active`]: {
                animationName: h,
                animationPlayState: 'running',
              },
            }),
            zo(e),
          ),
          {
            '&-rtl': {
              direction: 'rtl',
              [`${n}-notice-btn`]: { float: 'left' },
            },
          },
        ),
      },
      {
        [D]: {
          position: 'relative',
          width: x,
          maxWidth: `calc(100vw - ${k * 2}px)`,
          marginBottom: r,
          marginInlineStart: 'auto',
          padding: f,
          overflow: 'hidden',
          lineHeight: A,
          wordWrap: 'break-word',
          background: p,
          borderRadius: s,
          boxShadow: i,
          [`${n}-close-icon`]: { fontSize: v, cursor: 'pointer' },
          [`${D}-message`]: {
            marginBottom: e.marginXS,
            color: u,
            fontSize: a,
            lineHeight: e.lineHeightLG,
          },
          [`${D}-description`]: { fontSize: v },
          [`&${D}-closable ${D}-message`]: { paddingInlineEnd: e.paddingLG },
          [`${D}-with-icon ${D}-message`]: {
            marginBottom: e.marginXS,
            marginInlineStart: e.marginSM + b,
            fontSize: a,
          },
          [`${D}-with-icon ${D}-description`]: {
            marginInlineStart: e.marginSM + b,
            fontSize: v,
          },
          [`${D}-icon`]: {
            position: 'absolute',
            fontSize: b,
            lineHeight: 0,
            [`&-success${t}`]: { color: o },
            [`&-info${t}`]: { color: l },
            [`&-warning${t}`]: { color: c },
            [`&-error${t}`]: { color: d },
          },
          [`${D}-close`]: {
            position: 'absolute',
            top: e.notificationPaddingVertical,
            insetInlineEnd: e.notificationPaddingHorizontal,
            color: e.colorIcon,
            outline: 'none',
            width: e.notificationCloseButtonSize,
            height: e.notificationCloseButtonSize,
            borderRadius: e.borderRadiusSM,
            transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              color: e.colorIconHover,
              backgroundColor: e.wireframe ? 'transparent' : e.colorFillContent,
            },
          },
          [`${D}-btn`]: { float: 'right', marginTop: e.marginSM },
        },
      },
      { [`${D}-pure-panel`]: { margin: 0 } },
    ]
  },
  aa = hn(
    'Notification',
    (e) => {
      const t = e.paddingMD,
        n = e.paddingLG,
        i = Ct(e, {
          notificationBg: e.colorBgElevated,
          notificationPaddingVertical: t,
          notificationPaddingHorizontal: n,
          notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
          notificationMarginBottom: e.margin,
          notificationMarginEdge: e.marginLG,
          animationMaxHeight: 150,
          notificationIconSize: e.fontSizeLG * e.lineHeightLG,
          notificationCloseButtonSize: e.controlHeightLG * 0.55,
        })
      return [Go(i)]
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50, width: 384 }),
  )
function Wo(e, t) {
  return (
    t ||
    E('span', { class: `${e}-close-x` }, [
      E(An, { class: `${e}-close-icon` }, null),
    ])
  )
}
E(bt, null, null),
  E(At, null, null),
  E(mt, null, null),
  E(Ft, null, null),
  E(vn, null, null)
const Xo = { success: At, info: bt, error: mt, warning: Ft }
function Zo(e) {
  let {
      prefixCls: t,
      icon: n,
      type: i,
      message: a,
      description: r,
      btn: s,
    } = e,
    o = null
  if (n) o = E('span', { class: `${t}-icon` }, [Ae(n)])
  else if (i) {
    const l = Xo[i]
    o = E(l, { class: `${t}-icon ${t}-icon-${i}` }, null)
  }
  return E('div', { class: Z({ [`${t}-with-icon`]: o }), role: 'alert' }, [
    o,
    E('div', { class: `${t}-message` }, [a]),
    E('div', { class: `${t}-description` }, [r]),
    s && E('div', { class: `${t}-btn` }, [s]),
  ])
}
function ra(e, t, n) {
  let i
  switch (
    ((t = typeof t == 'number' ? `${t}px` : t),
    (n = typeof n == 'number' ? `${n}px` : n),
    e)
  ) {
    case 'top':
      i = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: t,
        bottom: 'auto',
      }
      break
    case 'topLeft':
      i = { left: 0, top: t, bottom: 'auto' }
      break
    case 'topRight':
      i = { right: 0, top: t, bottom: 'auto' }
      break
    case 'bottom':
      i = {
        left: '50%',
        transform: 'translateX(-50%)',
        right: 'auto',
        top: 'auto',
        bottom: n,
      }
      break
    case 'bottomLeft':
      i = { left: 0, top: 'auto', bottom: n }
      break
    default:
      i = { right: 0, top: 'auto', bottom: n }
      break
  }
  return i
}
function Uo(e) {
  return { name: `${e}-fade` }
}
var Vo = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
const xi = 24,
  qo = 4.5,
  Ko = _({
    name: 'Holder',
    inheritAttrs: !1,
    props: ['prefixCls', 'class', 'type', 'icon', 'content', 'onAllRemoved'],
    setup(e, t) {
      let { expose: n } = t
      const { getPrefixCls: i, getPopupContainer: a } = yt('notification', e),
        r = m(() => e.prefixCls || i('notification')),
        s = (p) => {
          var f, k
          return ra(
            p,
            (f = e.top) !== null && f !== void 0 ? f : xi,
            (k = e.bottom) !== null && k !== void 0 ? k : xi,
          )
        },
        [, o] = aa(r),
        l = () => Z(o.value, { [`${r.value}-rtl`]: e.rtl }),
        c = () => Uo(r.value),
        [d, u] = U2({
          prefixCls: r.value,
          getStyles: s,
          getClassName: l,
          motion: c,
          closable: !0,
          closeIcon: Wo(r.value),
          duration: qo,
          getContainer: () => {
            var p, f
            return (
              ((p = e.getPopupContainer) === null || p === void 0
                ? void 0
                : p.call(e)) ||
              ((f = a.value) === null || f === void 0 ? void 0 : f.call(a)) ||
              document.body
            )
          },
          maxCount: e.maxCount,
          hashId: o.value,
          onAllRemoved: e.onAllRemoved,
        })
      return n(g(g({}, d), { prefixCls: r.value, hashId: o })), u
    },
  })
function Yo(e) {
  const t = q(null),
    n = Symbol('notificationHolderKey'),
    i = (o) => {
      if (!t.value) return
      const { open: l, prefixCls: c, hashId: d } = t.value,
        u = `${c}-notice`,
        { message: p, description: f, icon: k, type: C, btn: F, class: v } = o,
        A = Vo(o, ['message', 'description', 'icon', 'type', 'btn', 'class'])
      return l(
        g(g({ placement: 'topRight' }, A), {
          content: () =>
            E(
              Zo,
              {
                prefixCls: u,
                icon: typeof k == 'function' ? k() : k,
                type: C,
                message: typeof p == 'function' ? p() : p,
                description: typeof f == 'function' ? f() : f,
                btn: typeof F == 'function' ? F() : F,
              },
              null,
            ),
          class: Z(C && `${u}-${C}`, d, v),
        }),
      )
    },
    r = {
      open: i,
      destroy: (o) => {
        var l, c
        o !== void 0
          ? (l = t.value) === null || l === void 0 || l.close(o)
          : (c = t.value) === null || c === void 0 || c.destroy()
      },
    }
  return (
    ['success', 'info', 'warning', 'error'].forEach((o) => {
      r[o] = (l) => i(g(g({}, l), { type: o }))
    }),
    [r, () => E(Ko, M(M({ key: n }, e), {}, { ref: t }), null)]
  )
}
function Qo(e) {
  return Yo(e)
}
const pe = {}
let sa = 4.5,
  oa = '24px',
  la = '24px',
  an = '',
  ca = 'topRight',
  ua = () => document.body,
  da = null,
  rn = !1,
  pa
function Jo(e) {
  const {
    duration: t,
    placement: n,
    bottom: i,
    top: a,
    getContainer: r,
    closeIcon: s,
    prefixCls: o,
  } = e
  o !== void 0 && (an = o),
    t !== void 0 && (sa = t),
    n !== void 0 && (ca = n),
    i !== void 0 && (la = typeof i == 'number' ? `${i}px` : i),
    a !== void 0 && (oa = typeof a == 'number' ? `${a}px` : a),
    r !== void 0 && (ua = r),
    s !== void 0 && (da = s),
    e.rtl !== void 0 && (rn = e.rtl),
    e.maxCount !== void 0 && (pa = e.maxCount)
}
function el(e, t) {
  let {
    prefixCls: n,
    placement: i = ca,
    getContainer: a = ua,
    top: r,
    bottom: s,
    closeIcon: o = da,
    appContext: l,
  } = e
  const { getPrefixCls: c } = hl(),
    d = c('notification', n || an),
    u = `${d}-${i}-${rn}`,
    p = pe[u]
  if (p) {
    Promise.resolve(p).then((k) => {
      t(k)
    })
    return
  }
  const f = Z(`${d}-${i}`, { [`${d}-rtl`]: rn === !0 })
  Z2.newInstance(
    {
      name: 'notification',
      prefixCls: n || an,
      useStyle: aa,
      class: f,
      style: ra(i, r ?? oa, s ?? la),
      appContext: l,
      getContainer: a,
      closeIcon: (k) => {
        let { prefixCls: C } = k
        return E('span', { class: `${C}-close-x` }, [
          Ae(o, {}, E(An, { class: `${C}-close-icon` }, null)),
        ])
      },
      maxCount: pa,
      hasTransitionName: !0,
    },
    (k) => {
      ;(pe[u] = k), t(k)
    },
  )
}
const tl = { success: Z3, info: eo, error: ao, warning: K3 }
function nl(e) {
  const { icon: t, type: n, description: i, message: a, btn: r } = e,
    s = e.duration === void 0 ? sa : e.duration
  el(e, (o) => {
    o.notice({
      content: (l) => {
        let { prefixCls: c } = l
        const d = `${c}-notice`
        let u = null
        if (t) u = () => E('span', { class: `${d}-icon` }, [Ae(t)])
        else if (n) {
          const p = tl[n]
          u = () => E(p, { class: `${d}-icon ${d}-icon-${n}` }, null)
        }
        return E('div', { class: u ? `${d}-with-icon` : '' }, [
          u && u(),
          E('div', { class: `${d}-message` }, [
            !i && u
              ? E(
                  'span',
                  { class: `${d}-message-single-line-auto-margin` },
                  null,
                )
              : null,
            Ae(a),
          ]),
          E('div', { class: `${d}-description` }, [Ae(i)]),
          r ? E('span', { class: `${d}-btn` }, [Ae(r)]) : null,
        ])
      },
      duration: s,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class,
    })
  })
}
const Oe = {
    open: nl,
    close(e) {
      Object.keys(pe).forEach((t) =>
        Promise.resolve(pe[t]).then((n) => {
          n.removeNotice(e)
        }),
      )
    },
    config: Jo,
    destroy() {
      Object.keys(pe).forEach((e) => {
        Promise.resolve(pe[e]).then((t) => {
          t.destroy()
        }),
          delete pe[e]
      })
    },
  },
  il = ['success', 'info', 'warning', 'error']
il.forEach((e) => {
  Oe[e] = (t) => Oe.open(g(g({}, t), { type: e }))
})
Oe.warn = Oe.warning
Oe.useNotification = Qo
const al = Oe,
  rl = `-ant-${Date.now()}-${Math.random()}`
function sl(e, t) {
  const n = {},
    i = (s, o) => {
      let l = s.clone()
      return (l = (o == null ? void 0 : o(l)) || l), l.toRgbString()
    },
    a = (s, o) => {
      const l = new I(s),
        c = ke(l.toRgbString())
      ;(n[`${o}-color`] = i(l)),
        (n[`${o}-color-disabled`] = c[1]),
        (n[`${o}-color-hover`] = c[4]),
        (n[`${o}-color-active`] = c[6]),
        (n[`${o}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (n[`${o}-color-deprecated-bg`] = c[0]),
        (n[`${o}-color-deprecated-border`] = c[2])
    }
  if (t.primaryColor) {
    a(t.primaryColor, 'primary')
    const s = new I(t.primaryColor),
      o = ke(s.toRgbString())
    o.forEach((c, d) => {
      n[`primary-${d + 1}`] = c
    }),
      (n['primary-color-deprecated-l-35'] = i(s, (c) => c.lighten(35))),
      (n['primary-color-deprecated-l-20'] = i(s, (c) => c.lighten(20))),
      (n['primary-color-deprecated-t-20'] = i(s, (c) => c.tint(20))),
      (n['primary-color-deprecated-t-50'] = i(s, (c) => c.tint(50))),
      (n['primary-color-deprecated-f-12'] = i(s, (c) =>
        c.setAlpha(c.getAlpha() * 0.12),
      ))
    const l = new I(o[0])
    ;(n['primary-color-active-deprecated-f-30'] = i(l, (c) =>
      c.setAlpha(c.getAlpha() * 0.3),
    )),
      (n['primary-color-active-deprecated-d-02'] = i(l, (c) => c.darken(2)))
  }
  return (
    t.successColor && a(t.successColor, 'success'),
    t.warningColor && a(t.warningColor, 'warning'),
    t.errorColor && a(t.errorColor, 'error'),
    t.infoColor && a(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim()
  )
}
function ol(e, t) {
  const n = sl(e, t)
  Pe() && lt(n, `${rl}-dynamic-theme`)
}
const ll = (e) => {
  const [t, n] = kt()
  return Ut(
    m(() => ({
      theme: t.value,
      token: n.value,
      hashId: '',
      path: ['ant-design-icons', e.value],
    })),
    () => [
      {
        [`.${e.value}`]: g(g({}, fs()), {
          [`.${e.value} .${e.value}-icon`]: { display: 'block' },
        }),
      },
    ],
  )
}
function cl(e, t) {
  const n = m(() => (e == null ? void 0 : e.value) || {}),
    i = m(() =>
      n.value.inherit === !1 || !(t != null && t.value) ? C2 : t.value,
    )
  return m(() => {
    if (!(e != null && e.value)) return t == null ? void 0 : t.value
    const r = g({}, i.value.components)
    return (
      Object.keys(e.value.components || {}).forEach((s) => {
        r[s] = g(g({}, r[s]), e.value.components[s])
      }),
      g(g(g({}, i.value), n.value), {
        token: g(g({}, i.value.token), n.value.token),
        components: r,
      })
    )
  })
}
var ul = function (e, t) {
  var n = {}
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
      t.indexOf(i[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
        (n[i[a]] = e[i[a]])
  return n
}
const dl = 'ant'
function be() {
  return L.prefixCls || dl
}
function ha() {
  return L.iconPrefixCls || ln
}
const On = De({}),
  L = De({})
dt(() => {
  g(L, On),
    (L.prefixCls = be()),
    (L.iconPrefixCls = ha()),
    (L.getPrefixCls = (e, t) => t || (e ? `${L.prefixCls}-${e}` : L.prefixCls)),
    (L.getRootPrefixCls = () => (L.prefixCls ? L.prefixCls : be()))
})
let Lt
const pl = (e) => {
    Lt && Lt(),
      (Lt = dt(() => {
        g(On, De(e)), g(L, De(e))
      })),
      e.theme && ol(be(), e.theme)
  },
  hl = () => ({
    getPrefixCls: (e, t) => t || (e ? `${be()}-${e}` : be()),
    getIconPrefixCls: ha,
    getRootPrefixCls: () => (L.prefixCls ? L.prefixCls : be()),
  }),
  ze = _({
    compatConfig: { MODE: 3 },
    name: 'AConfigProvider',
    inheritAttrs: !1,
    props: Ia(),
    setup(e, t) {
      let { slots: n } = t
      const i = Hi(),
        a = (y, $) => {
          const { prefixCls: T = 'ant' } = e
          if ($) return $
          const oe = T || i.getPrefixCls('')
          return y ? `${oe}-${y}` : oe
        },
        r = m(() => e.iconPrefixCls || i.iconPrefixCls.value || ln),
        s = m(() => r.value !== i.iconPrefixCls.value),
        o = m(() => {
          var y
          return (
            e.csp || ((y = i.csp) === null || y === void 0 ? void 0 : y.value)
          )
        }),
        l = ll(r),
        c = cl(
          m(() => e.theme),
          m(() => {
            var y
            return (y = i.theme) === null || y === void 0 ? void 0 : y.value
          }),
        ),
        d = (y) => (e.renderEmpty || n.renderEmpty || i.renderEmpty || $s)(y),
        u = m(() => {
          var y, $
          return (y = e.autoInsertSpaceInButton) !== null && y !== void 0
            ? y
            : ($ = i.autoInsertSpaceInButton) === null || $ === void 0
              ? void 0
              : $.value
        }),
        p = m(() => {
          var y
          return (
            e.locale ||
            ((y = i.locale) === null || y === void 0 ? void 0 : y.value)
          )
        })
      se(
        p,
        () => {
          On.locale = p.value
        },
        { immediate: !0 },
      )
      const f = m(() => {
          var y
          return (
            e.direction ||
            ((y = i.direction) === null || y === void 0 ? void 0 : y.value)
          )
        }),
        k = m(() => {
          var y, $
          return (y = e.space) !== null && y !== void 0
            ? y
            : ($ = i.space) === null || $ === void 0
              ? void 0
              : $.value
        }),
        C = m(() => {
          var y, $
          return (y = e.virtual) !== null && y !== void 0
            ? y
            : ($ = i.virtual) === null || $ === void 0
              ? void 0
              : $.value
        }),
        F = m(() => {
          var y, $
          return (y = e.dropdownMatchSelectWidth) !== null && y !== void 0
            ? y
            : ($ = i.dropdownMatchSelectWidth) === null || $ === void 0
              ? void 0
              : $.value
        }),
        v = m(() => {
          var y
          return e.getTargetContainer !== void 0
            ? e.getTargetContainer
            : (y = i.getTargetContainer) === null || y === void 0
              ? void 0
              : y.value
        }),
        A = m(() => {
          var y
          return e.getPopupContainer !== void 0
            ? e.getPopupContainer
            : (y = i.getPopupContainer) === null || y === void 0
              ? void 0
              : y.value
        }),
        x = m(() => {
          var y
          return e.pageHeader !== void 0
            ? e.pageHeader
            : (y = i.pageHeader) === null || y === void 0
              ? void 0
              : y.value
        }),
        b = m(() => {
          var y
          return e.input !== void 0
            ? e.input
            : (y = i.input) === null || y === void 0
              ? void 0
              : y.value
        }),
        D = m(() => {
          var y
          return e.pagination !== void 0
            ? e.pagination
            : (y = i.pagination) === null || y === void 0
              ? void 0
              : y.value
        }),
        S = m(() => {
          var y
          return e.form !== void 0
            ? e.form
            : (y = i.form) === null || y === void 0
              ? void 0
              : y.value
        }),
        h = m(() => {
          var y
          return e.select !== void 0
            ? e.select
            : (y = i.select) === null || y === void 0
              ? void 0
              : y.value
        }),
        B = m(() => e.componentSize),
        w = m(() => e.componentDisabled),
        R = m(() => {
          var y, $
          return (y = e.wave) !== null && y !== void 0
            ? y
            : ($ = i.wave) === null || $ === void 0
              ? void 0
              : $.value
        }),
        Y = {
          csp: o,
          autoInsertSpaceInButton: u,
          locale: p,
          direction: f,
          space: k,
          virtual: C,
          dropdownMatchSelectWidth: F,
          getPrefixCls: a,
          iconPrefixCls: r,
          theme: m(() => {
            var y, $
            return (y = c.value) !== null && y !== void 0
              ? y
              : ($ = i.theme) === null || $ === void 0
                ? void 0
                : $.value
          }),
          renderEmpty: d,
          getTargetContainer: v,
          getPopupContainer: A,
          pageHeader: x,
          input: b,
          pagination: D,
          form: S,
          select: h,
          componentSize: B,
          componentDisabled: w,
          transformCellText: m(() => e.transformCellText),
          wave: R,
        },
        Q = m(() => {
          const y = c.value || {},
            { algorithm: $, token: T } = y,
            oe = ul(y, ['algorithm', 'token']),
            Bt = $ && (!Array.isArray($) || $.length > 0) ? t2($) : void 0
          return g(g({}, oe), { theme: Bt, token: g(g({}, gt), T) })
        }),
        Dt = m(() => {
          var y, $
          let T = {}
          return (
            p.value &&
              (T =
                ((y = p.value.Form) === null || y === void 0
                  ? void 0
                  : y.defaultValidateMessages) ||
                (($ = We.Form) === null || $ === void 0
                  ? void 0
                  : $.defaultValidateMessages) ||
                {}),
            e.form &&
              e.form.validateMessages &&
              (T = g(g({}, T), e.form.validateMessages)),
            T
          )
        })
      ja(Y), Ma({ validateMessages: Dt }), ws(B), La(w)
      const Ie = (y) => {
        var $, T
        let oe = s.value
          ? l(($ = n.default) === null || $ === void 0 ? void 0 : $.call(n))
          : (T = n.default) === null || T === void 0
            ? void 0
            : T.call(n)
        if (e.theme) {
          const Bt = (function () {
            return oe
          })()
          oe = E(As, { value: Q.value }, { default: () => [Bt] })
        }
        return E(
          go,
          { locale: p.value || y, ANT_MARK__: tn },
          { default: () => [oe] },
        )
      }
      return (
        dt(() => {
          f.value &&
            (we.config({ rtl: f.value === 'rtl' }),
            al.config({ rtl: f.value === 'rtl' }))
        }),
        () => E(Gi, { children: (y, $, T) => Ie(T) }, null)
      )
    },
  })
ze.config = pl
ze.install = function (e) {
  e.component(ze.name, ze)
}
const El = ze,
  fl = { class: 'loading-content' },
  gl = { class: 'loading-item' },
  Cl = { class: 'loading-item' },
  kl = { class: 'loading-item' },
  yl = { class: 'loading-item' },
  vl = { class: 'loading-content' },
  ml = { class: 'loading-item' },
  Al = { class: 'loading-item' },
  Fl = { class: 'loading-item' },
  bl = { class: 'loading-item' },
  Dl = { class: 'loading-content' },
  Bl = { class: 'loading-item' },
  xl = { class: 'loading-item' },
  Sl = { class: 'loading-item' },
  $l = { class: 'loading-item' },
  wl = _({
    __name: 'loading',
    setup(e) {
      const t = (n) => {
        let i = `<ZaiLoading type="${n}"></ZaiLoading>`
        navigator.clipboard.writeText(i).then(() => {
          we.success(`${i} copied 🎉`)
        })
      }
      return (n, i) => {
        const a = _i('ZaiLoading')
        return (
          Ti(),
          Mi('div', null, [
            O('div', fl, [
              O('div', gl, [
                E(a, {
                  type: 'classic',
                  onClick: i[0] || (i[0] = (r) => t('classic')),
                }),
              ]),
              O('div', Cl, [
                E(a, {
                  type: 'dots',
                  onClick: i[1] || (i[1] = (r) => t('dots')),
                }),
              ]),
              O('div', kl, [
                E(a, {
                  type: 'bars',
                  onClick: i[2] || (i[2] = (r) => t('bars')),
                }),
              ]),
              O('div', yl, [
                E(a, {
                  type: 'spinner',
                  onClick: i[3] || (i[3] = (r) => t('spinner')),
                }),
              ]),
            ]),
            O('div', vl, [
              O('div', ml, [
                E(a, {
                  type: 'shapes',
                  onClick: i[4] || (i[4] = (r) => t('shapes')),
                }),
              ]),
              O('div', Al, [
                E(a, {
                  type: 'progress',
                  onClick: i[5] || (i[5] = (r) => t('progress')),
                }),
              ]),
              O('div', Fl, [
                E(a, {
                  type: 'wavy',
                  onClick: i[6] || (i[6] = (r) => t('wavy')),
                }),
              ]),
              O('div', bl, [
                E(a, {
                  type: 'flipping',
                  onClick: i[7] || (i[7] = (r) => t('flipping')),
                }),
              ]),
            ]),
            O('div', Dl, [
              O('div', Bl, [
                E(a, {
                  type: 'pulsing',
                  onClick: i[8] || (i[8] = (r) => t('pulsing')),
                }),
              ]),
              O('div', xl, [
                E(a, {
                  type: 'hypnotic',
                  onClick: i[9] || (i[9] = (r) => t('hypnotic')),
                }),
              ]),
              O('div', Sl, [
                E(a, {
                  type: 'line',
                  onClick: i[10] || (i[10] = (r) => t('line')),
                }),
              ]),
              O('div', $l, [
                E(a, {
                  type: 'continuous',
                  onClick: i[11] || (i[11] = (r) => t('continuous')),
                }),
              ]),
            ]),
          ])
        )
      }
    },
  }),
  Ol = ma(wl, [['__scopeId', 'data-v-f9aab424']]),
  Pl = O(
    'h1',
    { id: 'loading-加载中', tabindex: '-1' },
    [
      Ii('loading...加载中 '),
      O(
        'a',
        {
          class: 'header-anchor',
          href: '#loading-加载中',
          'aria-label': 'Permalink to "loading...加载中"',
        },
        '​',
      ),
    ],
    -1,
  ),
  _l = O('p', null, '常用的loading组件。', -1),
  Tl = O(
    'h2',
    { id: '基础用法', tabindex: '-1' },
    [
      Ii('基础用法 '),
      O(
        'a',
        {
          class: 'header-anchor',
          href: '#基础用法',
          'aria-label': 'Permalink to "基础用法"',
        },
        '​',
      ),
    ],
    -1,
  ),
  Ml = O('p', null, "使用 'type' 来定义 loading 样式。可进行点击复制代码.", -1),
  Il = Fa(
    '<h2 id="属性值" tabindex="-1">属性值 <a class="header-anchor" href="#属性值" aria-label="Permalink to &quot;属性值&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性名</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必传</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">类型</td><td style="text-align:left;">enum - &#39;classic&#39; | &#39;dots&#39; | &#39;bars&#39; | &#39;spinner&#39; | &#39;shapes&#39; | &#39;progress&#39; | &#39;wavy&#39; | &#39;flipping&#39; | &#39;pulsing&#39; | &#39;hypnotic&#39; | &#39;line&#39; | &#39;continuous&#39;</td><td style="text-align:left;">&#39;classic&#39;</td><td style="text-align:left;">false</td></tr></tbody></table>',
    2,
  ),
  Hl = JSON.parse(
    '{"title":"zai-loading","description":"loading...加载中","frontmatter":{"title":"zai-loading","description":"loading...加载中"},"headers":[],"relativePath":"components/feedback/loading.md","filePath":"components/feedback/loading.md"}',
  ),
  jl = { name: 'components/feedback/loading.md' },
  Nl = _({
    ...jl,
    setup(e) {
      return (t, n) => {
        const i = _i('demo-preview')
        return (
          Ti(),
          Mi('div', null, [
            Pl,
            _l,
            Tl,
            Ml,
            E(
              i,
              {
                title: '基础用法',
                description: 'loading 组件的基础用法',
                code: "%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cdiv%20class=%22loading-content%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22classic%22%20@click=%22onCopy('classic')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22dots%22%20@click=%22onCopy('dots')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22bars%22%20@click=%22onCopy('bars')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22spinner%22%20@click=%22onCopy('spinner')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3Cdiv%20class=%22loading-content%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22shapes%22%20@click=%22onCopy('shapes')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22progress%22%20@click=%22onCopy('progress')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22wavy%22%20@click=%22onCopy('wavy')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22flipping%22%20@click=%22onCopy('flipping')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3Cdiv%20class=%22loading-content%22%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22pulsing%22%20@click=%22onCopy('pulsing')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22hypnotic%22%20@click=%22onCopy('hypnotic')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%20type=%22line%22%20@click=%22onCopy('line')%22%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%20%20%3Cdiv%20class=%22loading-item%22%3E%0D%0A%20%20%20%20%20%20%20%20%3CZaiLoading%0D%0A%20%20%20%20%20%20%20%20%20%20type=%22continuous%22%0D%0A%20%20%20%20%20%20%20%20%20%20@click=%22onCopy('continuous')%22%0D%0A%20%20%20%20%20%20%20%20%3E%3C/ZaiLoading%3E%0D%0A%20%20%20%20%20%20%3C/div%3E%0D%0A%20%20%20%20%3C/div%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A%0D%0A%3Cscript%20setup%20lang=%22ts%22%3E%0D%0Aimport%20%7B%20message%20%7D%20from%20'ant-design-vue'%0D%0Aconst%20onCopy%20=%20(type:%20string)%20=%3E%20%7B%0D%0A%20%20let%20str%20=%20%60%3CZaiLoading%20type=%22$%7Btype%7D%22%3E%3C/ZaiLoading%3E%60%0D%0A%20%20navigator.clipboard.writeText(str).then(()%20=%3E%20%7B%0D%0A%20%20%20%20message.success(%60$%7Bstr%7D%20copied%20%F0%9F%8E%89%60)%0D%0A%20%20%7D)%0D%0A%7D%0D%0A%3C/script%3E%0D%0A%3Cstyle%20lang=%22less%22%20scoped%3E%0D%0A.loading-content%20%7B%0D%0A%20%20width:%20100%25;%0D%0A%20%20display:%20flex;%0D%0A%20%20justify-content:%20space-around;%0D%0A%0D%0A%20%20.loading-item%20%7B%0D%0A%20%20%20%20width:%20200px;%0D%0A%20%20%20%20height:%20200px;%0D%0A%20%20%20%20margin-top:%2010px;%0D%0A%20%20%20%20border:%201px%20solid%20#e7eaf0;%0D%0A%20%20%20%20display:%20flex;%0D%0A%20%20%20%20align-items:%20center;%0D%0A%20%20%20%20justify-content:%20center;%0D%0A%20%20%7D%0D%0A%7D%0D%0A%3C/style%3E%0D%0A",
                showCode:
                  "%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-content%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22classic%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'classic'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22dots%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'dots'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22bars%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'bars'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22spinner%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'spinner'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-content%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22shapes%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'shapes'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22progress%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'progress'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22wavy%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'wavy'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22flipping%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'flipping'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-content%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22pulsing%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'pulsing'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22hypnotic%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'hypnotic'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22line%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'line'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22loading-item%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%20%20%20%20%20%20%20%20%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22continuous%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%20%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EonCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'continuous'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%20%20%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3EZaiLoading%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20message%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'ant-design-vue'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20onCopy%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23E36209%3B--shiki-dark%3A%23FFAB70%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20string%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%20let%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20str%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20%60%26%23x3C%3BZaiLoading%20type%3D%22%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%7D%22%3E%26%23x3C%3B%2FZaiLoading%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20navigator.clipboard.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EwriteText%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(str).%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Ethen%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(()%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20message.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Esuccess%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%60%24%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3Estr%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%7D%20copied%20%F0%9F%8E%89%60%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22less%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20scoped%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E.loading-content%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20width%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%25%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20display%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Eflex%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20justify-content%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Espace-around%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%20.loading-item%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20width%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E200%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20height%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E200%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20margin-top%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E10%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20border%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20solid%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%23e7eaf0%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20display%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Eflex%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20align-items%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Ecenter%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20%20%20%20justify-content%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Ecenter%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",
                suffixName: 'vue',
                absolutePath:
                  'E:\\workspace\\big-v\\vue3-ts-vite\\vue3-ts-vite\\demo\\loading\\loading.vue',
                relativePath: '../../../demo/loading/loading.vue',
              },
              { default: Aa(() => [E(Ol)]), _: 1 },
            ),
            Il,
          ])
        )
      }
    },
  })
export { Hl as __pageData, Nl as default }
