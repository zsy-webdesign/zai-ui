/**
 * @vue/shared v3.4.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ms(e, t) {
  const n = new Set(e.split(','))
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s)
}
const ee = {},
  wt = [],
  xe = () => {},
  Wi = () => !1,
  en = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Is = (e) => e.startsWith('onUpdate:'),
  re = Object.assign,
  Ps = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  qi = Object.prototype.hasOwnProperty,
  Y = (e, t) => qi.call(e, t),
  j = Array.isArray,
  Et = (e) => tn(e) === '[object Map]',
  Pt = (e) => tn(e) === '[object Set]',
  cr = (e) => tn(e) === '[object Date]',
  K = (e) => typeof e == 'function',
  ne = (e) => typeof e == 'string',
  tt = (e) => typeof e == 'symbol',
  Z = (e) => e !== null && typeof e == 'object',
  co = (e) => (Z(e) || K(e)) && K(e.then) && K(e.catch),
  ao = Object.prototype.toString,
  tn = (e) => ao.call(e),
  Gi = (e) => tn(e).slice(8, -1),
  uo = (e) => tn(e) === '[object Object]',
  Ns = (e) =>
    ne(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Ct = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  kn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  zi = /-(\w)/g,
  Ne = kn((e) => e.replace(zi, (t, n) => (n ? n.toUpperCase() : ''))),
  Xi = /\B([A-Z])/g,
  gt = kn((e) => e.replace(Xi, '-$1').toLowerCase()),
  Dn = kn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = kn((e) => (e ? `on${Dn(e)}` : '')),
  nt = (e, t) => !Object.is(e, t),
  xn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  Rn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Gt = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Yi = (e) => {
    const t = ne(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let ar
const fo = () =>
  ar ||
  (ar =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Fs(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = ne(s) ? el(s) : Fs(s)
      if (r) for (const o in r) t[o] = r[o]
    }
    return t
  } else if (ne(e) || Z(e)) return e
}
const Ji = /;(?![^(]*\))/g,
  Qi = /:([^]+)/,
  Zi = /\/\*[^]*?\*\//g
function el(e) {
  const t = {}
  return (
    e
      .replace(Zi, '')
      .split(Ji)
      .forEach((n) => {
        if (n) {
          const s = n.split(Qi)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function $s(e) {
  let t = ''
  if (ne(e)) t = e
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const s = $s(e[n])
      s && (t += s + ' ')
    }
  else if (Z(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const tl =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  nl = Ms(tl)
function ho(e) {
  return !!e || e === ''
}
function sl(e, t) {
  if (e.length !== t.length) return !1
  let n = !0
  for (let s = 0; n && s < e.length; s++) n = pt(e[s], t[s])
  return n
}
function pt(e, t) {
  if (e === t) return !0
  let n = cr(e),
    s = cr(t)
  if (n || s) return n && s ? e.getTime() === t.getTime() : !1
  if (((n = tt(e)), (s = tt(t)), n || s)) return e === t
  if (((n = j(e)), (s = j(t)), n || s)) return n && s ? sl(e, t) : !1
  if (((n = Z(e)), (s = Z(t)), n || s)) {
    if (!n || !s) return !1
    const r = Object.keys(e).length,
      o = Object.keys(t).length
    if (r !== o) return !1
    for (const i in e) {
      const l = e.hasOwnProperty(i),
        c = t.hasOwnProperty(i)
      if ((l && !c) || (!l && c) || !pt(e[i], t[i])) return !1
    }
  }
  return String(e) === String(t)
}
function Hs(e, t) {
  return e.findIndex((n) => pt(n, t))
}
const Eu = (e) =>
    ne(e)
      ? e
      : e == null
        ? ''
        : j(e) || (Z(e) && (e.toString === ao || !K(e.toString)))
          ? JSON.stringify(e, po, 2)
          : String(e),
  po = (e, t) =>
    t && t.__v_isRef
      ? po(e, t.value)
      : Et(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (n, [s, r], o) => ((n[rs(s, o) + ' =>'] = r), n),
              {},
            ),
          }
        : Pt(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => rs(n)) }
          : tt(t)
            ? rs(t)
            : Z(t) && !j(t) && !uo(t)
              ? String(t)
              : t,
  rs = (e, t = '') => {
    var n
    return tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be
class rl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = be
      try {
        return (be = this), t()
      } finally {
        be = n
      }
    }
  }
  on() {
    be = this
  }
  off() {
    be = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function ol(e, t = be) {
  t && t.active && t.effects.push(e)
}
function go() {
  return be
}
function il(e) {
  be && be.cleanups.push(e)
}
let ft
class Vs {
  constructor(t, n, s, r) {
    ;(this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      ol(this, r)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), mt()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (ll(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), yt()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Qe,
      n = ft
    try {
      return (Qe = !0), (ft = this), this._runnings++, ur(this), this.fn()
    } finally {
      fr(this), this._runnings--, (ft = n), (Qe = t)
    }
  }
  stop() {
    var t
    this.active &&
      (ur(this),
      fr(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1))
  }
}
function ll(e) {
  return e.value
}
function ur(e) {
  e._trackId++, (e._depsLength = 0)
}
function fr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) mo(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function mo(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let Qe = !0,
  bs = 0
const yo = []
function mt() {
  yo.push(Qe), (Qe = !1)
}
function yt() {
  const e = yo.pop()
  Qe = e === void 0 ? !0 : e
}
function js() {
  bs++
}
function ks() {
  for (bs--; !bs && vs.length; ) vs.shift()()
}
function _o(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && mo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const vs = []
function bo(e, t, n) {
  js()
  for (const s of e.keys()) {
    let r
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && vs.push(s.scheduler)))
  }
  ks()
}
const vo = (e, t) => {
    const n = new Map()
    return (n.cleanup = e), (n.computed = t), n
  },
  Ln = new WeakMap(),
  dt = Symbol(''),
  ws = Symbol('')
function ye(e, t, n) {
  if (Qe && ft) {
    let s = Ln.get(e)
    s || Ln.set(e, (s = new Map()))
    let r = s.get(n)
    r || s.set(n, (r = vo(() => s.delete(n)))), _o(ft, r)
  }
}
function ke(e, t, n, s, r, o) {
  const i = Ln.get(e)
  if (!i) return
  let l = []
  if (t === 'clear') l = [...i.values()]
  else if (n === 'length' && j(e)) {
    const c = Number(s)
    i.forEach((a, f) => {
      ;(f === 'length' || (!tt(f) && f >= c)) && l.push(a)
    })
  } else
    switch ((n !== void 0 && l.push(i.get(n)), t)) {
      case 'add':
        j(e)
          ? Ns(n) && l.push(i.get('length'))
          : (l.push(i.get(dt)), Et(e) && l.push(i.get(ws)))
        break
      case 'delete':
        j(e) || (l.push(i.get(dt)), Et(e) && l.push(i.get(ws)))
        break
      case 'set':
        Et(e) && l.push(i.get(dt))
        break
    }
  js()
  for (const c of l) c && bo(c, 4)
  ks()
}
function cl(e, t) {
  var n
  return (n = Ln.get(e)) == null ? void 0 : n.get(t)
}
const al = Ms('__proto__,__v_isRef,__isVue'),
  wo = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(tt),
  ),
  dr = ul()
function ul() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = X(this)
        for (let o = 0, i = this.length; o < i; o++) ye(s, 'get', o + '')
        const r = s[t](...n)
        return r === -1 || r === !1 ? s[t](...n.map(X)) : r
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        mt(), js()
        const s = X(this)[t].apply(this, n)
        return ks(), yt(), s
      }
    }),
    e
  )
}
function fl(e) {
  const t = X(this)
  return ye(t, 'has', e), t.hasOwnProperty(e)
}
class Eo {
  constructor(t = !1, n = !1) {
    ;(this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return o
    if (n === '__v_raw')
      return s === (r ? (o ? xl : So) : o ? To : xo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = j(t)
    if (!r) {
      if (i && Y(dr, n)) return Reflect.get(dr, n, s)
      if (n === 'hasOwnProperty') return fl
    }
    const l = Reflect.get(t, n, s)
    return (tt(n) ? wo.has(n) : al(n)) || (r || ye(t, 'get', n), o)
      ? l
      : he(l)
        ? i && Ns(n)
          ? l
          : l.value
        : Z(l)
          ? r
            ? Kn(l)
            : Bn(l)
          : l
  }
}
class Co extends Eo {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let o = t[n]
    if (!this._isShallow) {
      const c = Lt(o)
      if (
        (!On(s) && !Lt(s) && ((o = X(o)), (s = X(s))), !j(t) && he(o) && !he(s))
      )
        return c ? !1 : ((o.value = s), !0)
    }
    const i = j(t) && Ns(n) ? Number(n) < t.length : Y(t, n),
      l = Reflect.set(t, n, s, r)
    return (
      t === X(r) && (i ? nt(s, o) && ke(t, 'set', n, s) : ke(t, 'add', n, s)), l
    )
  }
  deleteProperty(t, n) {
    const s = Y(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return r && s && ke(t, 'delete', n, void 0), r
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return (!tt(n) || !wo.has(n)) && ye(t, 'has', n), s
  }
  ownKeys(t) {
    return ye(t, 'iterate', j(t) ? 'length' : dt), Reflect.ownKeys(t)
  }
}
class dl extends Eo {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const hl = new Co(),
  pl = new dl(),
  gl = new Co(!0),
  Ds = (e) => e,
  Un = (e) => Reflect.getPrototypeOf(e)
function cn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const r = X(e),
    o = X(t)
  n || (nt(t, o) && ye(r, 'get', t), ye(r, 'get', o))
  const { has: i } = Un(r),
    l = s ? Ds : n ? Ks : zt
  if (i.call(r, t)) return l(e.get(t))
  if (i.call(r, o)) return l(e.get(o))
  e !== r && e.get(t)
}
function an(e, t = !1) {
  const n = this.__v_raw,
    s = X(n),
    r = X(e)
  return (
    t || (nt(e, r) && ye(s, 'has', e), ye(s, 'has', r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  )
}
function un(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ye(X(e), 'iterate', dt), Reflect.get(e, 'size', e)
  )
}
function hr(e) {
  e = X(e)
  const t = X(this)
  return Un(t).has.call(t, e) || (t.add(e), ke(t, 'add', e, e)), this
}
function pr(e, t) {
  t = X(t)
  const n = X(this),
    { has: s, get: r } = Un(n)
  let o = s.call(n, e)
  o || ((e = X(e)), (o = s.call(n, e)))
  const i = r.call(n, e)
  return (
    n.set(e, t), o ? nt(t, i) && ke(n, 'set', e, t) : ke(n, 'add', e, t), this
  )
}
function gr(e) {
  const t = X(this),
    { has: n, get: s } = Un(t)
  let r = n.call(t, e)
  r || ((e = X(e)), (r = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return r && ke(t, 'delete', e, void 0), o
}
function mr() {
  const e = X(this),
    t = e.size !== 0,
    n = e.clear()
  return t && ke(e, 'clear', void 0, void 0), n
}
function fn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      l = X(i),
      c = t ? Ds : e ? Ks : zt
    return (
      !e && ye(l, 'iterate', dt), i.forEach((a, f) => s.call(r, c(a), c(f), o))
    )
  }
}
function dn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = X(r),
      i = Et(o),
      l = e === 'entries' || (e === Symbol.iterator && i),
      c = e === 'keys' && i,
      a = r[e](...s),
      f = n ? Ds : t ? Ks : zt
    return (
      !t && ye(o, 'iterate', c ? ws : dt),
      {
        next() {
          const { value: h, done: p } = a.next()
          return p
            ? { value: h, done: p }
            : { value: l ? [f(h[0]), f(h[1])] : f(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ke(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function ml() {
  const e = {
      get(o) {
        return cn(this, o)
      },
      get size() {
        return un(this)
      },
      has: an,
      add: hr,
      set: pr,
      delete: gr,
      clear: mr,
      forEach: fn(!1, !1),
    },
    t = {
      get(o) {
        return cn(this, o, !1, !0)
      },
      get size() {
        return un(this)
      },
      has: an,
      add: hr,
      set: pr,
      delete: gr,
      clear: mr,
      forEach: fn(!1, !0),
    },
    n = {
      get(o) {
        return cn(this, o, !0)
      },
      get size() {
        return un(this, !0)
      },
      has(o) {
        return an.call(this, o, !0)
      },
      add: Ke('add'),
      set: Ke('set'),
      delete: Ke('delete'),
      clear: Ke('clear'),
      forEach: fn(!0, !1),
    },
    s = {
      get(o) {
        return cn(this, o, !0, !0)
      },
      get size() {
        return un(this, !0)
      },
      has(o) {
        return an.call(this, o, !0)
      },
      add: Ke('add'),
      set: Ke('set'),
      delete: Ke('delete'),
      clear: Ke('clear'),
      forEach: fn(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = dn(o, !1, !1)),
        (n[o] = dn(o, !0, !1)),
        (t[o] = dn(o, !1, !0)),
        (s[o] = dn(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [yl, _l, bl, vl] = ml()
function Us(e, t) {
  const n = t ? (e ? vl : bl) : e ? _l : yl
  return (s, r, o) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(Y(n, r) && r in s ? n : s, r, o)
}
const wl = { get: Us(!1, !1) },
  El = { get: Us(!1, !0) },
  Cl = { get: Us(!0, !1) },
  xo = new WeakMap(),
  To = new WeakMap(),
  So = new WeakMap(),
  xl = new WeakMap()
function Tl(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Sl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Tl(Gi(e))
}
function Bn(e) {
  return Lt(e) ? e : Bs(e, !1, hl, wl, xo)
}
function Al(e) {
  return Bs(e, !1, gl, El, To)
}
function Kn(e) {
  return Bs(e, !0, pl, Cl, So)
}
function Bs(e, t, n, s, r) {
  if (!Z(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = r.get(e)
  if (o) return o
  const i = Sl(e)
  if (i === 0) return e
  const l = new Proxy(e, i === 2 ? s : n)
  return r.set(e, l), l
}
function xt(e) {
  return Lt(e) ? xt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Lt(e) {
  return !!(e && e.__v_isReadonly)
}
function On(e) {
  return !!(e && e.__v_isShallow)
}
function Ao(e) {
  return xt(e) || Lt(e)
}
function X(e) {
  const t = e && e.__v_raw
  return t ? X(t) : e
}
function jt(e) {
  return Object.isExtensible(e) && Rn(e, '__v_skip', !0), e
}
const zt = (e) => (Z(e) ? Bn(e) : e),
  Ks = (e) => (Z(e) ? Kn(e) : e)
class Ro {
  constructor(t, n, s, r) {
    ;(this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Vs(
        () => t(this._value),
        () => Tt(this, this.effect._dirtyLevel === 2 ? 2 : 3),
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = X(this)
    return (
      (!t._cacheable || t.effect.dirty) &&
        nt(t._value, (t._value = t.effect.run())) &&
        Tt(t, 4),
      Ws(t),
      t.effect._dirtyLevel >= 2 && Tt(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Rl(e, t, n = !1) {
  let s, r
  const o = K(e)
  return (
    o ? ((s = e), (r = xe)) : ((s = e.get), (r = e.set)),
    new Ro(s, r, o || !r, n)
  )
}
function Ws(e) {
  var t
  Qe &&
    ft &&
    ((e = X(e)),
    _o(
      ft,
      (t = e.dep) != null
        ? t
        : (e.dep = vo(() => (e.dep = void 0), e instanceof Ro ? e : void 0)),
    ))
}
function Tt(e, t = 4, n) {
  e = X(e)
  const s = e.dep
  s && bo(s, t)
}
function he(e) {
  return !!(e && e.__v_isRef === !0)
}
function de(e) {
  return Oo(e, !1)
}
function Lo(e) {
  return Oo(e, !0)
}
function Oo(e, t) {
  return he(e) ? e : new Ll(e, t)
}
class Ll {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : X(t)),
      (this._value = n ? t : zt(t))
  }
  get value() {
    return Ws(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || On(t) || Lt(t)
    ;(t = n ? t : X(t)),
      nt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : zt(t)), Tt(this, 4))
  }
}
function Cu(e) {
  Tt(e, 4)
}
function Mo(e) {
  return he(e) ? e.value : e
}
const Ol = {
  get: (e, t, n) => Mo(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t]
    return he(r) && !he(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Io(e) {
  return xt(e) ? e : new Proxy(e, Ol)
}
class Ml {
  constructor(t) {
    ;(this.dep = void 0), (this.__v_isRef = !0)
    const { get: n, set: s } = t(
      () => Ws(this),
      () => Tt(this),
    )
    ;(this._get = n), (this._set = s)
  }
  get value() {
    return this._get()
  }
  set value(t) {
    this._set(t)
  }
}
function Il(e) {
  return new Ml(e)
}
class Pl {
  constructor(t, n, s) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return cl(X(this._object), this._key)
  }
}
class Nl {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function Fl(e, t, n) {
  return he(e)
    ? e
    : K(e)
      ? new Nl(e)
      : Z(e) && arguments.length > 1
        ? $l(e, t, n)
        : de(e)
}
function $l(e, t, n) {
  const s = e[t]
  return he(s) ? s : new Pl(e, t, n)
}
/**
 * @vue/runtime-core v3.4.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ze(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Wn(r, t, n)
  }
}
function Te(e, t, n, s) {
  if (K(e)) {
    const o = Ze(e, t, n, s)
    return (
      o &&
        co(o) &&
        o.catch((i) => {
          Wn(i, t, n)
        }),
      o
    )
  }
  const r = []
  for (let o = 0; o < e.length; o++) r.push(Te(e[o], t, n, s))
  return r
}
function Wn(e, t, n, s = !0) {
  const r = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const i = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; o; ) {
      const a = o.ec
      if (a) {
        for (let f = 0; f < a.length; f++) if (a[f](e, i, l) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      Ze(c, null, 10, [e, i, l])
      return
    }
  }
  Hl(e, n, r, s)
}
function Hl(e, t, n, s = !0) {
  console.error(e)
}
let Xt = !1,
  Es = !1
const fe = []
let Pe = 0
const St = []
let ze = null,
  ct = 0
const Po = Promise.resolve()
let qs = null
function nn(e) {
  const t = qs || Po
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Vl(e) {
  let t = Pe + 1,
    n = fe.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = fe[s],
      o = Yt(r)
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s)
  }
  return t
}
function Gs(e) {
  ;(!fe.length || !fe.includes(e, Xt && e.allowRecurse ? Pe + 1 : Pe)) &&
    (e.id == null ? fe.push(e) : fe.splice(Vl(e.id), 0, e), No())
}
function No() {
  !Xt && !Es && ((Es = !0), (qs = Po.then(Fo)))
}
function jl(e) {
  const t = fe.indexOf(e)
  t > Pe && fe.splice(t, 1)
}
function kl(e) {
  j(e)
    ? St.push(...e)
    : (!ze || !ze.includes(e, e.allowRecurse ? ct + 1 : ct)) && St.push(e),
    No()
}
function yr(e, t, n = Xt ? Pe + 1 : 0) {
  for (; n < fe.length; n++) {
    const s = fe[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      fe.splice(n, 1), n--, s()
    }
  }
}
function Mn(e) {
  if (St.length) {
    const t = [...new Set(St)].sort((n, s) => Yt(n) - Yt(s))
    if (((St.length = 0), ze)) {
      ze.push(...t)
      return
    }
    for (ze = t, ct = 0; ct < ze.length; ct++) ze[ct]()
    ;(ze = null), (ct = 0)
  }
}
const Yt = (e) => (e.id == null ? 1 / 0 : e.id),
  Dl = (e, t) => {
    const n = Yt(e) - Yt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Fo(e) {
  ;(Es = !1), (Xt = !0), fe.sort(Dl)
  try {
    for (Pe = 0; Pe < fe.length; Pe++) {
      const t = fe[Pe]
      t && t.active !== !1 && Ze(t, null, 14)
    }
  } finally {
    ;(Pe = 0),
      (fe.length = 0),
      Mn(),
      (Xt = !1),
      (qs = null),
      (fe.length || St.length) && Fo()
  }
}
function Ul(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || ee
  let r = n
  const o = t.startsWith('update:'),
    i = o && t.slice(7)
  if (i && i in s) {
    const f = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: h, trim: p } = s[f] || ee
    p && (r = n.map((v) => (ne(v) ? v.trim() : v))), h && (r = n.map(Gt))
  }
  let l,
    c = s[(l = Cn(t))] || s[(l = Cn(Ne(t)))]
  !c && o && (c = s[(l = Cn(gt(t)))]), c && Te(c, e, 6, r)
  const a = s[l + 'Once']
  if (a) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Te(a, e, 6, r)
  }
}
function $o(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const o = e.emits
  let i = {},
    l = !1
  if (!K(e)) {
    const c = (a) => {
      const f = $o(a, t, !0)
      f && ((l = !0), re(i, f))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !l
    ? (Z(e) && s.set(e, null), null)
    : (j(o) ? o.forEach((c) => (i[c] = null)) : re(i, o),
      Z(e) && s.set(e, i),
      i)
}
function qn(e, t) {
  return !e || !en(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, gt(t)) || Y(e, t))
}
let ie = null,
  Gn = null
function In(e) {
  const t = ie
  return (ie = e), (Gn = (e && e.type.__scopeId) || null), t
}
function xu(e) {
  Gn = e
}
function Tu() {
  Gn = null
}
function Bl(e, t = ie, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && Mr(-1)
    const o = In(t)
    let i
    try {
      i = e(...r)
    } finally {
      In(o), s._d && Mr(1)
    }
    return i
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function os(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: a,
    render: f,
    renderCache: h,
    data: p,
    setupState: v,
    ctx: L,
    inheritAttrs: P,
  } = e
  let U, W
  const J = In(e)
  try {
    if (n.shapeFlag & 4) {
      const y = r || s,
        M = y
      ;(U = Re(f.call(M, y, h, o, v, p, L))), (W = c)
    } else {
      const y = t
      ;(U = Re(
        y.length > 1 ? y(o, { attrs: c, slots: l, emit: a }) : y(o, null),
      )),
        (W = t.props ? c : Kl(c))
    }
  } catch (y) {
    ;(Kt.length = 0), Wn(y, e, 1), (U = ce(ve))
  }
  let g = U
  if (W && P !== !1) {
    const y = Object.keys(W),
      { shapeFlag: M } = g
    y.length && M & 7 && (i && y.some(Is) && (W = Wl(W, i)), (g = st(g, W)))
  }
  return (
    n.dirs && ((g = st(g)), (g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (g.transition = n.transition),
    (U = g),
    In(J),
    U
  )
}
const Kl = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || en(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Wl = (e, t) => {
    const n = {}
    for (const s in e) (!Is(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function ql(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: l, patchFlag: c } = t,
    a = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? _r(s, i, a) : !!i
    if (c & 8) {
      const f = t.dynamicProps
      for (let h = 0; h < f.length; h++) {
        const p = f[h]
        if (i[p] !== s[p] && !qn(a, p)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : s === i
        ? !1
        : s
          ? i
            ? _r(s, i, a)
            : !0
          : !!i
  return !1
}
function _r(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const o = s[r]
    if (t[o] !== e[o] && !qn(n, o)) return !0
  }
  return !1
}
function Gl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const zs = 'components'
function Su(e, t) {
  return Vo(zs, e, !0, t) || e
}
const Ho = Symbol.for('v-ndc')
function Au(e) {
  return ne(e) ? Vo(zs, e, !1) || e : e || Ho
}
function Vo(e, t, n = !0, s = !1) {
  const r = ie || ue
  if (r) {
    const o = r.type
    if (e === zs) {
      const l = Bc(o, !1)
      if (l && (l === t || l === Ne(t) || l === Dn(Ne(t)))) return o
    }
    const i = br(r[e] || o[e], t) || br(r.appContext[e], t)
    return !i && s ? o : i
  }
}
function br(e, t) {
  return e && (e[t] || e[Ne(t)] || e[Dn(Ne(t))])
}
const zl = (e) => e.__isSuspense
function jo(e, t) {
  t && t.pendingBranch
    ? j(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : kl(e)
}
const Xl = Symbol.for('v-scx'),
  Yl = () => Rt(Xl)
function ko(e, t) {
  return zn(e, null, t)
}
function Ru(e, t) {
  return zn(e, null, { flush: 'post' })
}
const hn = {}
function De(e, t, n) {
  return zn(e, t, n)
}
function zn(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: l } = ee,
) {
  if (t && o) {
    const R = t
    t = (...N) => {
      R(...N), M()
    }
  }
  const c = ue,
    a = (R) => (s === !0 ? R : ut(R, s === !1 ? 1 : void 0))
  let f,
    h = !1,
    p = !1
  if (
    (he(e)
      ? ((f = () => e.value), (h = On(e)))
      : xt(e)
        ? ((f = () => a(e)), (h = !0))
        : j(e)
          ? ((p = !0),
            (h = e.some((R) => xt(R) || On(R))),
            (f = () =>
              e.map((R) => {
                if (he(R)) return R.value
                if (xt(R)) return a(R)
                if (K(R)) return Ze(R, c, 2)
              })))
          : K(e)
            ? t
              ? (f = () => Ze(e, c, 2))
              : (f = () => (v && v(), Te(e, c, 3, [L])))
            : (f = xe),
    t && s)
  ) {
    const R = f
    f = () => ut(R())
  }
  let v,
    L = (R) => {
      v = g.onStop = () => {
        Ze(R, c, 4), (v = g.onStop = void 0)
      }
    },
    P
  if (Zn)
    if (
      ((L = xe),
      t ? n && Te(t, c, 3, [f(), p ? [] : void 0, L]) : f(),
      r === 'sync')
    ) {
      const R = Yl()
      P = R.__watcherHandles || (R.__watcherHandles = [])
    } else return xe
  let U = p ? new Array(e.length).fill(hn) : hn
  const W = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const R = g.run()
        ;(s || h || (p ? R.some((N, T) => nt(N, U[T])) : nt(R, U))) &&
          (v && v(),
          Te(t, c, 3, [R, U === hn ? void 0 : p && U[0] === hn ? [] : U, L]),
          (U = R))
      } else g.run()
  }
  W.allowRecurse = !!t
  let J
  r === 'sync'
    ? (J = W)
    : r === 'post'
      ? (J = () => me(W, c && c.suspense))
      : ((W.pre = !0), c && (W.id = c.uid), (J = () => Gs(W)))
  const g = new Vs(f, xe, J),
    y = go(),
    M = () => {
      g.stop(), y && Ps(y.effects, g)
    }
  return (
    t
      ? n
        ? W()
        : (U = g.run())
      : r === 'post'
        ? me(g.run.bind(g), c && c.suspense)
        : g.run(),
    P && P.push(M),
    M
  )
}
function Jl(e, t, n) {
  const s = this.proxy,
    r = ne(e) ? (e.includes('.') ? Do(s, e) : () => s[e]) : e.bind(s, s)
  let o
  K(t) ? (o = t) : ((o = t.handler), (n = t))
  const i = rn(this),
    l = zn(r, o.bind(s), n)
  return i(), l
}
function Do(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
function ut(e, t, n = 0, s) {
  if (!Z(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (n >= t) return e
    n++
  }
  if (((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), he(e))) ut(e.value, t, n, s)
  else if (j(e)) for (let r = 0; r < e.length; r++) ut(e[r], t, n, s)
  else if (Pt(e) || Et(e))
    e.forEach((r) => {
      ut(r, t, n, s)
    })
  else if (uo(e)) for (const r in e) ut(e[r], t, n, s)
  return e
}
function Lu(e, t) {
  if (ie === null) return e
  const n = es(ie) || ie.proxy,
    s = e.dirs || (e.dirs = [])
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, c = ee] = t[r]
    o &&
      (K(o) && (o = { mounted: o, updated: o }),
      o.deep && ut(i),
      s.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }))
  }
  return e
}
function Ie(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs
  for (let i = 0; i < r.length; i++) {
    const l = r[i]
    o && (l.oldValue = o[i].value)
    let c = l.dir[s]
    c && (mt(), Te(c, n, 8, [e.el, l, e, t]), yt())
  }
}
const Xe = Symbol('_leaveCb'),
  pn = Symbol('_enterCb')
function Uo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Nt(() => {
      e.isMounted = !0
    }),
    zo(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const we = [Function, Array],
  Bo = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: we,
    onEnter: we,
    onAfterEnter: we,
    onEnterCancelled: we,
    onBeforeLeave: we,
    onLeave: we,
    onAfterLeave: we,
    onLeaveCancelled: we,
    onBeforeAppear: we,
    onAppear: we,
    onAfterAppear: we,
    onAppearCancelled: we,
  },
  Ql = {
    name: 'BaseTransition',
    props: Bo,
    setup(e, { slots: t }) {
      const n = sn(),
        s = Uo()
      return () => {
        const r = t.default && Xs(t.default(), !0)
        if (!r || !r.length) return
        let o = r[0]
        if (r.length > 1) {
          for (const p of r)
            if (p.type !== ve) {
              o = p
              break
            }
        }
        const i = X(e),
          { mode: l } = i
        if (s.isLeaving) return is(o)
        const c = vr(o)
        if (!c) return is(o)
        const a = Jt(c, i, s, n)
        Qt(c, a)
        const f = n.subTree,
          h = f && vr(f)
        if (h && h.type !== ve && !at(c, h)) {
          const p = Jt(h, i, s, n)
          if ((Qt(h, p), l === 'out-in'))
            return (
              (s.isLeaving = !0),
              (p.afterLeave = () => {
                ;(s.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update())
              }),
              is(o)
            )
          l === 'in-out' &&
            c.type !== ve &&
            (p.delayLeave = (v, L, P) => {
              const U = Ko(s, h)
              ;(U[String(h.key)] = h),
                (v[Xe] = () => {
                  L(), (v[Xe] = void 0), delete a.delayedLeave
                }),
                (a.delayedLeave = P)
            })
        }
        return o
      }
    },
  },
  Zl = Ql
function Ko(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function Jt(e, t, n, s) {
  const {
      appear: r,
      mode: o,
      persisted: i = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: a,
      onEnterCancelled: f,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: v,
      onLeaveCancelled: L,
      onBeforeAppear: P,
      onAppear: U,
      onAfterAppear: W,
      onAppearCancelled: J,
    } = t,
    g = String(e.key),
    y = Ko(n, e),
    M = (T, F) => {
      T && Te(T, s, 9, F)
    },
    R = (T, F) => {
      const w = F[1]
      M(T, F),
        j(T) ? T.every((H) => H.length <= 1) && w() : T.length <= 1 && w()
    },
    N = {
      mode: o,
      persisted: i,
      beforeEnter(T) {
        let F = l
        if (!n.isMounted)
          if (r) F = P || l
          else return
        T[Xe] && T[Xe](!0)
        const w = y[g]
        w && at(e, w) && w.el[Xe] && w.el[Xe](), M(F, [T])
      },
      enter(T) {
        let F = c,
          w = a,
          H = f
        if (!n.isMounted)
          if (r) (F = U || c), (w = W || a), (H = J || f)
          else return
        let S = !1
        const q = (T[pn] = (oe) => {
          S ||
            ((S = !0),
            oe ? M(H, [T]) : M(w, [T]),
            N.delayedLeave && N.delayedLeave(),
            (T[pn] = void 0))
        })
        F ? R(F, [T, q]) : q()
      },
      leave(T, F) {
        const w = String(e.key)
        if ((T[pn] && T[pn](!0), n.isUnmounting)) return F()
        M(h, [T])
        let H = !1
        const S = (T[Xe] = (q) => {
          H ||
            ((H = !0),
            F(),
            q ? M(L, [T]) : M(v, [T]),
            (T[Xe] = void 0),
            y[w] === e && delete y[w])
        })
        ;(y[w] = e), p ? R(p, [T, S]) : S()
      },
      clone(T) {
        return Jt(T, t, n, s)
      },
    }
  return N
}
function is(e) {
  if (Xn(e)) return (e = st(e)), (e.children = null), e
}
function vr(e) {
  return Xn(e) ? (e.children ? e.children[0] : void 0) : e
}
function Qt(e, t) {
  e.shapeFlag & 6 && e.component
    ? Qt(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Xs(e, t = !1, n) {
  let s = [],
    r = 0
  for (let o = 0; o < e.length; o++) {
    let i = e[o]
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o)
    i.type === ge
      ? (i.patchFlag & 128 && r++, (s = s.concat(Xs(i.children, t, l))))
      : (t || i.type !== ve) && s.push(l != null ? st(i, { key: l }) : i)
  }
  if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2
  return s
}
/*! #__NO_SIDE_EFFECTS__ */ function Wo(e, t) {
  return K(e) ? re({ name: e.name }, t, { setup: e }) : e
}
const At = (e) => !!e.type.__asyncLoader,
  Xn = (e) => e.type.__isKeepAlive
function ec(e, t) {
  qo(e, 'a', t)
}
function tc(e, t) {
  qo(e, 'da', t)
}
function qo(e, t, n = ue) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Yn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) Xn(r.parent.vnode) && nc(s, t, n, r), (r = r.parent)
  }
}
function nc(e, t, n, s) {
  const r = Yn(t, e, s, !0)
  Jn(() => {
    Ps(s[t], r)
  }, n)
}
function Yn(e, t, n = ue, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          mt()
          const l = rn(n),
            c = Te(t, n, e, i)
          return l(), yt(), c
        })
    return s ? r.unshift(o) : r.push(o), o
  }
}
const Be =
    (e) =>
    (t, n = ue) =>
      (!Zn || e === 'sp') && Yn(e, (...s) => t(...s), n),
  sc = Be('bm'),
  Nt = Be('m'),
  rc = Be('bu'),
  Go = Be('u'),
  zo = Be('bum'),
  Jn = Be('um'),
  oc = Be('sp'),
  ic = Be('rtg'),
  lc = Be('rtc')
function cc(e, t = ue) {
  Yn('ec', e, t)
}
function Ou(e, t, n, s) {
  let r
  const o = n && n[s]
  if (j(e) || ne(e)) {
    r = new Array(e.length)
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, o && o[i])
  } else if (typeof e == 'number') {
    r = new Array(e)
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i])
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, l) => t(i, l, void 0, o && o[l]))
    else {
      const i = Object.keys(e)
      r = new Array(i.length)
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l]
        r[l] = t(e[a], a, l, o && o[l])
      }
    }
  else r = []
  return n && (n[s] = r), r
}
function Mu(e, t, n = {}, s, r) {
  if (ie.isCE || (ie.parent && At(ie.parent) && ie.parent.isCE))
    return t !== 'default' && (n.name = t), ce('slot', n, s && s())
  let o = e[t]
  o && o._c && (o._d = !1), li()
  const i = o && Xo(o(n)),
    l = ai(
      ge,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2,
    )
  return (
    !r && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']),
    o && o._c && (o._d = !0),
    l
  )
}
function Xo(e) {
  return e.some((t) =>
    Fn(t) ? !(t.type === ve || (t.type === ge && !Xo(t.children))) : !0,
  )
    ? e
    : null
}
function Iu(e, t) {
  const n = {}
  for (const s in e) n[t && /[A-Z]/.test(s) ? `on:${s}` : Cn(s)] = e[s]
  return n
}
const Cs = (e) => (e ? (hi(e) ? es(e) || e.proxy : Cs(e.parent)) : null),
  kt = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cs(e.parent),
    $root: (e) => Cs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ys(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Gs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = nn.bind(e.proxy)),
    $watch: (e) => Jl.bind(e),
  }),
  ls = (e, t) => e !== ee && !e.__isScriptSetup && Y(e, t),
  ac = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: c,
      } = e
      let a
      if (t[0] !== '$') {
        const v = i[t]
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (ls(s, t)) return (i[t] = 1), s[t]
          if (r !== ee && Y(r, t)) return (i[t] = 2), r[t]
          if ((a = e.propsOptions[0]) && Y(a, t)) return (i[t] = 3), o[t]
          if (n !== ee && Y(n, t)) return (i[t] = 4), n[t]
          xs && (i[t] = 0)
        }
      }
      const f = kt[t]
      let h, p
      if (f) return t === '$attrs' && ye(e, 'get', t), f(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (n !== ee && Y(n, t)) return (i[t] = 4), n[t]
      if (((p = c.config.globalProperties), Y(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e
      return ls(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && Y(s, t)
          ? ((s[t] = n), !0)
          : Y(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i,
    ) {
      let l
      return (
        !!n[i] ||
        (e !== ee && Y(e, i)) ||
        ls(t, i) ||
        ((l = o[0]) && Y(l, i)) ||
        Y(s, i) ||
        Y(kt, i) ||
        Y(r.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : Y(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Pu() {
  return uc().slots
}
function uc() {
  const e = sn()
  return e.setupContext || (e.setupContext = gi(e))
}
function wr(e) {
  return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let xs = !0
function fc(e) {
  const t = Ys(e),
    n = e.proxy,
    s = e.ctx
  ;(xs = !1), t.beforeCreate && Er(t.beforeCreate, e, 'bc')
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: c,
    inject: a,
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: v,
    updated: L,
    activated: P,
    deactivated: U,
    beforeDestroy: W,
    beforeUnmount: J,
    destroyed: g,
    unmounted: y,
    render: M,
    renderTracked: R,
    renderTriggered: N,
    errorCaptured: T,
    serverPrefetch: F,
    expose: w,
    inheritAttrs: H,
    components: S,
    directives: q,
    filters: oe,
  } = t
  if ((a && dc(a, s, null), i))
    for (const z in i) {
      const V = i[z]
      K(V) && (s[z] = V.bind(n))
    }
  if (r) {
    const z = r.call(n, n)
    Z(z) && (e.data = Bn(z))
  }
  if (((xs = !0), o))
    for (const z in o) {
      const V = o[z],
        $e = K(V) ? V.bind(n, n) : K(V.get) ? V.get.bind(n, n) : xe,
        on = !K(V) && K(V.set) ? V.set.bind(n) : xe,
        ot = se({ get: $e, set: on })
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => ot.value,
        set: (Oe) => (ot.value = Oe),
      })
    }
  if (l) for (const z in l) Yo(l[z], s, n, z)
  if (c) {
    const z = K(c) ? c.call(n) : c
    Reflect.ownKeys(z).forEach((V) => {
      _c(V, z[V])
    })
  }
  f && Er(f, e, 'c')
  function k(z, V) {
    j(V) ? V.forEach(($e) => z($e.bind(n))) : V && z(V.bind(n))
  }
  if (
    (k(sc, h),
    k(Nt, p),
    k(rc, v),
    k(Go, L),
    k(ec, P),
    k(tc, U),
    k(cc, T),
    k(lc, R),
    k(ic, N),
    k(zo, J),
    k(Jn, y),
    k(oc, F),
    j(w))
  )
    if (w.length) {
      const z = e.exposed || (e.exposed = {})
      w.forEach((V) => {
        Object.defineProperty(z, V, {
          get: () => n[V],
          set: ($e) => (n[V] = $e),
        })
      })
    } else e.exposed || (e.exposed = {})
  M && e.render === xe && (e.render = M),
    H != null && (e.inheritAttrs = H),
    S && (e.components = S),
    q && (e.directives = q)
}
function dc(e, t, n = xe) {
  j(e) && (e = Ts(e))
  for (const s in e) {
    const r = e[s]
    let o
    Z(r)
      ? 'default' in r
        ? (o = Rt(r.from || s, r.default, !0))
        : (o = Rt(r.from || s))
      : (o = Rt(r)),
      he(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o)
  }
}
function Er(e, t, n) {
  Te(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Yo(e, t, n, s) {
  const r = s.includes('.') ? Do(n, s) : () => n[s]
  if (ne(e)) {
    const o = t[e]
    K(o) && De(r, o)
  } else if (K(e)) De(r, e.bind(n))
  else if (Z(e))
    if (j(e)) e.forEach((o) => Yo(o, t, n, s))
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler]
      K(o) && De(r, o, e)
    }
}
function Ys(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}),
          r.length && r.forEach((a) => Pn(c, a, i, !0)),
          Pn(c, t, i)),
    Z(t) && o.set(t, c),
    c
  )
}
function Pn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t
  o && Pn(e, o, n, !0), r && r.forEach((i) => Pn(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const l = hc[i] || (n && n[i])
      e[i] = l ? l(e[i], t[i]) : t[i]
    }
  return e
}
const hc = {
  data: Cr,
  props: xr,
  emits: xr,
  methods: Vt,
  computed: Vt,
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  components: Vt,
  directives: Vt,
  watch: gc,
  provide: Cr,
  inject: pc,
}
function Cr(e, t) {
  return t
    ? e
      ? function () {
          return re(
            K(e) ? e.call(this, this) : e,
            K(t) ? t.call(this, this) : t,
          )
        }
      : t
    : e
}
function pc(e, t) {
  return Vt(Ts(e), Ts(t))
}
function Ts(e) {
  if (j(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Vt(e, t) {
  return e ? re(Object.create(null), e, t) : t
}
function xr(e, t) {
  return e
    ? j(e) && j(t)
      ? [...new Set([...e, ...t])]
      : re(Object.create(null), wr(e), wr(t ?? {}))
    : t
}
function gc(e, t) {
  if (!e) return t
  if (!t) return e
  const n = re(Object.create(null), e)
  for (const s in t) n[s] = pe(e[s], t[s])
  return n
}
function Jo() {
  return {
    app: null,
    config: {
      isNativeTag: Wi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let mc = 0
function yc(e, t) {
  return function (s, r = null) {
    K(s) || (s = re({}, s)), r != null && !Z(r) && (r = null)
    const o = Jo(),
      i = new WeakSet()
    let l = !1
    const c = (o.app = {
      _uid: mc++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Wc,
      get config() {
        return o.config
      },
      set config(a) {},
      use(a, ...f) {
        return (
          i.has(a) ||
            (a && K(a.install)
              ? (i.add(a), a.install(c, ...f))
              : K(a) && (i.add(a), a(c, ...f))),
          c
        )
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), c
      },
      component(a, f) {
        return f ? ((o.components[a] = f), c) : o.components[a]
      },
      directive(a, f) {
        return f ? ((o.directives[a] = f), c) : o.directives[a]
      },
      mount(a, f, h) {
        if (!l) {
          const p = ce(s, r)
          return (
            (p.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            f && t ? t(p, a) : e(p, a, h),
            (l = !0),
            (c._container = a),
            (a.__vue_app__ = c),
            es(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(a, f) {
        return (o.provides[a] = f), c
      },
      runWithContext(a) {
        const f = Dt
        Dt = c
        try {
          return a()
        } finally {
          Dt = f
        }
      },
    })
    return c
  }
}
let Dt = null
function _c(e, t) {
  if (ue) {
    let n = ue.provides
    const s = ue.parent && ue.parent.provides
    s === n && (n = ue.provides = Object.create(s)), (n[e] = t)
  }
}
function Rt(e, t, n = !1) {
  const s = ue || ie
  if (s || Dt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Dt._context.provides
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && K(t) ? t.call(s && s.proxy) : t
  }
}
function bc(e, t, n, s = !1) {
  const r = {},
    o = {}
  Rn(o, Qn, 1), (e.propsDefaults = Object.create(null)), Qo(e, t, r, o)
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0)
  n ? (e.props = s ? r : Al(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o)
}
function vc(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = X(r),
    [c] = e.propsOptions
  let a = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps
      for (let h = 0; h < f.length; h++) {
        let p = f[h]
        if (qn(e.emitsOptions, p)) continue
        const v = t[p]
        if (c)
          if (Y(o, p)) v !== o[p] && ((o[p] = v), (a = !0))
          else {
            const L = Ne(p)
            r[L] = Ss(c, l, L, v, e, !1)
          }
        else v !== o[p] && ((o[p] = v), (a = !0))
      }
    }
  } else {
    Qo(e, t, r, o) && (a = !0)
    let f
    for (const h in l)
      (!t || (!Y(t, h) && ((f = gt(h)) === h || !Y(t, f)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[f] !== void 0) &&
            (r[h] = Ss(c, l, h, void 0, e, !0))
          : delete r[h])
    if (o !== l) for (const h in o) (!t || !Y(t, h)) && (delete o[h], (a = !0))
  }
  a && ke(e, 'set', '$attrs')
}
function Qo(e, t, n, s) {
  const [r, o] = e.propsOptions
  let i = !1,
    l
  if (t)
    for (let c in t) {
      if (Ct(c)) continue
      const a = t[c]
      let f
      r && Y(r, (f = Ne(c)))
        ? !o || !o.includes(f)
          ? (n[f] = a)
          : ((l || (l = {}))[f] = a)
        : qn(e.emitsOptions, c) ||
          ((!(c in s) || a !== s[c]) && ((s[c] = a), (i = !0)))
    }
  if (o) {
    const c = X(n),
      a = l || ee
    for (let f = 0; f < o.length; f++) {
      const h = o[f]
      n[h] = Ss(r, c, h, a[h], e, !Y(a, h))
    }
  }
  return i
}
function Ss(e, t, n, s, r, o) {
  const i = e[n]
  if (i != null) {
    const l = Y(i, 'default')
    if (l && s === void 0) {
      const c = i.default
      if (i.type !== Function && !i.skipFactory && K(c)) {
        const { propsDefaults: a } = r
        if (n in a) s = a[n]
        else {
          const f = rn(r)
          ;(s = a[n] = c.call(null, t)), f()
        }
      } else s = c
    }
    i[0] && (o && !l ? (s = !1) : i[1] && (s === '' || s === gt(n)) && (s = !0))
  }
  return s
}
function Zo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e)
  if (r) return r
  const o = e.props,
    i = {},
    l = []
  let c = !1
  if (!K(e)) {
    const f = (h) => {
      c = !0
      const [p, v] = Zo(h, t, !0)
      re(i, p), v && l.push(...v)
    }
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!o && !c) return Z(e) && s.set(e, wt), wt
  if (j(o))
    for (let f = 0; f < o.length; f++) {
      const h = Ne(o[f])
      Tr(h) && (i[h] = ee)
    }
  else if (o)
    for (const f in o) {
      const h = Ne(f)
      if (Tr(h)) {
        const p = o[f],
          v = (i[h] = j(p) || K(p) ? { type: p } : re({}, p))
        if (v) {
          const L = Rr(Boolean, v.type),
            P = Rr(String, v.type)
          ;(v[0] = L > -1),
            (v[1] = P < 0 || L < P),
            (L > -1 || Y(v, 'default')) && l.push(h)
        }
      }
    }
  const a = [i, l]
  return Z(e) && s.set(e, a), a
}
function Tr(e) {
  return e[0] !== '$' && !Ct(e)
}
function Sr(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function Ar(e, t) {
  return Sr(e) === Sr(t)
}
function Rr(e, t) {
  return j(t) ? t.findIndex((n) => Ar(n, e)) : K(t) && Ar(t, e) ? 0 : -1
}
const ei = (e) => e[0] === '_' || e === '$stable',
  Js = (e) => (j(e) ? e.map(Re) : [Re(e)]),
  wc = (e, t, n) => {
    if (t._n) return t
    const s = Bl((...r) => Js(t(...r)), n)
    return (s._c = !1), s
  },
  ti = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (ei(r)) continue
      const o = e[r]
      if (K(o)) t[r] = wc(r, o, s)
      else if (o != null) {
        const i = Js(o)
        t[r] = () => i
      }
    }
  },
  ni = (e, t) => {
    const n = Js(t)
    e.slots.default = () => n
  },
  Ec = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = X(t)), Rn(t, '_', n)) : ti(t, (e.slots = {}))
    } else (e.slots = {}), t && ni(e, t)
    Rn(e.slots, Qn, 1)
  },
  Cc = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let o = !0,
      i = ee
    if (s.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (o = !1)
          : (re(r, t), !n && l === 1 && delete r._)
        : ((o = !t.$stable), ti(t, r)),
        (i = t)
    } else t && (ni(e, t), (i = { default: 1 }))
    if (o) for (const l in r) !ei(l) && i[l] == null && delete r[l]
  }
function Nn(e, t, n, s, r = !1) {
  if (j(e)) {
    e.forEach((p, v) => Nn(p, t && (j(t) ? t[v] : t), n, s, r))
    return
  }
  if (At(s) && !r) return
  const o = s.shapeFlag & 4 ? es(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: l, r: c } = e,
    a = t && t.r,
    f = l.refs === ee ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (a != null &&
      a !== c &&
      (ne(a)
        ? ((f[a] = null), Y(h, a) && (h[a] = null))
        : he(a) && (a.value = null)),
    K(c))
  )
    Ze(c, l, 12, [i, f])
  else {
    const p = ne(c),
      v = he(c)
    if (p || v) {
      const L = () => {
        if (e.f) {
          const P = p ? (Y(h, c) ? h[c] : f[c]) : c.value
          r
            ? j(P) && Ps(P, o)
            : j(P)
              ? P.includes(o) || P.push(o)
              : p
                ? ((f[c] = [o]), Y(h, c) && (h[c] = f[c]))
                : ((c.value = [o]), e.k && (f[e.k] = c.value))
        } else
          p
            ? ((f[c] = i), Y(h, c) && (h[c] = i))
            : v && ((c.value = i), e.k && (f[e.k] = i))
      }
      i ? ((L.id = -1), me(L, n)) : L()
    }
  }
}
let We = !1
const xc = (e) =>
    e.namespaceURI.includes('svg') && e.tagName !== 'foreignObject',
  Tc = (e) => e.namespaceURI.includes('MathML'),
  gn = (e) => {
    if (xc(e)) return 'svg'
    if (Tc(e)) return 'mathml'
  },
  mn = (e) => e.nodeType === 8
function Sc(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: s,
        createText: r,
        nextSibling: o,
        parentNode: i,
        remove: l,
        insert: c,
        createComment: a,
      },
    } = e,
    f = (g, y) => {
      if (!y.hasChildNodes()) {
        n(null, g, y), Mn(), (y._vnode = g)
        return
      }
      ;(We = !1),
        h(y.firstChild, g, null, null, null),
        Mn(),
        (y._vnode = g),
        We && console.error('Hydration completed but contains mismatches.')
    },
    h = (g, y, M, R, N, T = !1) => {
      const F = mn(g) && g.data === '[',
        w = () => P(g, y, M, R, N, F),
        { type: H, ref: S, shapeFlag: q, patchFlag: oe } = y
      let ae = g.nodeType
      ;(y.el = g), oe === -2 && ((T = !1), (y.dynamicChildren = null))
      let k = null
      switch (H) {
        case Ot:
          ae !== 3
            ? y.children === ''
              ? (c((y.el = r('')), i(g), g), (k = g))
              : (k = w())
            : (g.data !== y.children && ((We = !0), (g.data = y.children)),
              (k = o(g)))
          break
        case ve:
          J(g)
            ? ((k = o(g)), W((y.el = g.content.firstChild), g, M))
            : ae !== 8 || F
              ? (k = w())
              : (k = o(g))
          break
        case Bt:
          if ((F && ((g = o(g)), (ae = g.nodeType)), ae === 1 || ae === 3)) {
            k = g
            const z = !y.children.length
            for (let V = 0; V < y.staticCount; V++)
              z && (y.children += k.nodeType === 1 ? k.outerHTML : k.data),
                V === y.staticCount - 1 && (y.anchor = k),
                (k = o(k))
            return F ? o(k) : k
          } else w()
          break
        case ge:
          F ? (k = L(g, y, M, R, N, T)) : (k = w())
          break
        default:
          if (q & 1)
            (ae !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) &&
            !J(g)
              ? (k = w())
              : (k = p(g, y, M, R, N, T))
          else if (q & 6) {
            y.slotScopeIds = N
            const z = i(g)
            if (
              (F
                ? (k = U(g))
                : mn(g) && g.data === 'teleport start'
                  ? (k = U(g, g.data, 'teleport end'))
                  : (k = o(g)),
              t(y, z, null, M, R, gn(z), T),
              At(y))
            ) {
              let V
              F
                ? ((V = ce(ge)),
                  (V.anchor = k ? k.previousSibling : z.lastChild))
                : (V = g.nodeType === 3 ? di('') : ce('div')),
                (V.el = g),
                (y.component.subTree = V)
            }
          } else
            q & 64
              ? ae !== 8
                ? (k = w())
                : (k = y.type.hydrate(g, y, M, R, N, T, e, v))
              : q & 128 &&
                (k = y.type.hydrate(g, y, M, R, gn(i(g)), N, T, e, h))
      }
      return S != null && Nn(S, null, R, y), k
    },
    p = (g, y, M, R, N, T) => {
      T = T || !!y.dynamicChildren
      const {
          type: F,
          props: w,
          patchFlag: H,
          shapeFlag: S,
          dirs: q,
          transition: oe,
        } = y,
        ae = F === 'input' || F === 'option'
      if (ae || H !== -1) {
        q && Ie(y, null, M, 'created')
        let k = !1
        if (J(g)) {
          k = ri(R, oe) && M && M.vnode.props && M.vnode.props.appear
          const V = g.content.firstChild
          k && oe.beforeEnter(V), W(V, g, M), (y.el = g = V)
        }
        if (S & 16 && !(w && (w.innerHTML || w.textContent))) {
          let V = v(g.firstChild, y, g, M, R, N, T)
          for (; V; ) {
            We = !0
            const $e = V
            ;(V = V.nextSibling), l($e)
          }
        } else
          S & 8 &&
            g.textContent !== y.children &&
            ((We = !0), (g.textContent = y.children))
        if (w)
          if (ae || !T || H & 48)
            for (const V in w)
              ((ae && (V.endsWith('value') || V === 'indeterminate')) ||
                (en(V) && !Ct(V)) ||
                V[0] === '.') &&
                s(g, V, null, w[V], void 0, void 0, M)
          else w.onClick && s(g, 'onClick', null, w.onClick, void 0, void 0, M)
        let z
        ;(z = w && w.onVnodeBeforeMount) && Ee(z, M, y),
          q && Ie(y, null, M, 'beforeMount'),
          ((z = w && w.onVnodeMounted) || q || k) &&
            jo(() => {
              z && Ee(z, M, y), k && oe.enter(g), q && Ie(y, null, M, 'mounted')
            }, R)
      }
      return g.nextSibling
    },
    v = (g, y, M, R, N, T, F) => {
      F = F || !!y.dynamicChildren
      const w = y.children,
        H = w.length
      for (let S = 0; S < H; S++) {
        const q = F ? w[S] : (w[S] = Re(w[S]))
        if (g) g = h(g, q, R, N, T, F)
        else {
          if (q.type === Ot && !q.children) continue
          ;(We = !0), n(null, q, M, null, R, N, gn(M), T)
        }
      }
      return g
    },
    L = (g, y, M, R, N, T) => {
      const { slotScopeIds: F } = y
      F && (N = N ? N.concat(F) : F)
      const w = i(g),
        H = v(o(g), y, w, M, R, N, T)
      return H && mn(H) && H.data === ']'
        ? o((y.anchor = H))
        : ((We = !0), c((y.anchor = a(']')), w, H), H)
    },
    P = (g, y, M, R, N, T) => {
      if (((We = !0), (y.el = null), T)) {
        const H = U(g)
        for (;;) {
          const S = o(g)
          if (S && S !== H) l(S)
          else break
        }
      }
      const F = o(g),
        w = i(g)
      return l(g), n(null, y, w, F, M, R, gn(w), N), F
    },
    U = (g, y = '[', M = ']') => {
      let R = 0
      for (; g; )
        if (((g = o(g)), g && mn(g) && (g.data === y && R++, g.data === M))) {
          if (R === 0) return o(g)
          R--
        }
      return g
    },
    W = (g, y, M) => {
      const R = y.parentNode
      R && R.replaceChild(g, y)
      let N = M
      for (; N; )
        N.vnode.el === y && (N.vnode.el = N.subTree.el = g), (N = N.parent)
    },
    J = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === 'template'
  return [f, h]
}
const me = jo
function Ac(e) {
  return si(e)
}
function Rc(e) {
  return si(e, Sc)
}
function si(e, t) {
  const n = fo()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: c,
      setText: a,
      setElementText: f,
      parentNode: h,
      nextSibling: p,
      setScopeId: v = xe,
      insertStaticContent: L,
    } = e,
    P = (
      u,
      d,
      m,
      _ = null,
      b = null,
      x = null,
      O = void 0,
      C = null,
      A = !!d.dynamicChildren,
    ) => {
      if (u === d) return
      u && !at(u, d) && ((_ = ln(u)), Oe(u, b, x, !0), (u = null)),
        d.patchFlag === -2 && ((A = !1), (d.dynamicChildren = null))
      const { type: E, ref: I, shapeFlag: D } = d
      switch (E) {
        case Ot:
          U(u, d, m, _)
          break
        case ve:
          W(u, d, m, _)
          break
        case Bt:
          u == null && J(d, m, _, O)
          break
        case ge:
          S(u, d, m, _, b, x, O, C, A)
          break
        default:
          D & 1
            ? M(u, d, m, _, b, x, O, C, A)
            : D & 6
              ? q(u, d, m, _, b, x, O, C, A)
              : (D & 64 || D & 128) && E.process(u, d, m, _, b, x, O, C, A, _t)
      }
      I != null && b && Nn(I, u && u.ref, x, d || u, !d)
    },
    U = (u, d, m, _) => {
      if (u == null) s((d.el = l(d.children)), m, _)
      else {
        const b = (d.el = u.el)
        d.children !== u.children && a(b, d.children)
      }
    },
    W = (u, d, m, _) => {
      u == null ? s((d.el = c(d.children || '')), m, _) : (d.el = u.el)
    },
    J = (u, d, m, _) => {
      ;[u.el, u.anchor] = L(u.children, d, m, _, u.el, u.anchor)
    },
    g = ({ el: u, anchor: d }, m, _) => {
      let b
      for (; u && u !== d; ) (b = p(u)), s(u, m, _), (u = b)
      s(d, m, _)
    },
    y = ({ el: u, anchor: d }) => {
      let m
      for (; u && u !== d; ) (m = p(u)), r(u), (u = m)
      r(d)
    },
    M = (u, d, m, _, b, x, O, C, A) => {
      d.type === 'svg' ? (O = 'svg') : d.type === 'math' && (O = 'mathml'),
        u == null ? R(d, m, _, b, x, O, C, A) : F(u, d, b, x, O, C, A)
    },
    R = (u, d, m, _, b, x, O, C) => {
      let A, E
      const { props: I, shapeFlag: D, transition: $, dirs: B } = u
      if (
        ((A = u.el = i(u.type, x, I && I.is, I)),
        D & 8
          ? f(A, u.children)
          : D & 16 && T(u.children, A, null, _, b, cs(u, x), O, C),
        B && Ie(u, null, _, 'created'),
        N(A, u, u.scopeId, O, _),
        I)
      ) {
        for (const Q in I)
          Q !== 'value' &&
            !Ct(Q) &&
            o(A, Q, null, I[Q], x, u.children, _, b, He)
        'value' in I && o(A, 'value', null, I.value, x),
          (E = I.onVnodeBeforeMount) && Ee(E, _, u)
      }
      B && Ie(u, null, _, 'beforeMount')
      const G = ri(b, $)
      G && $.beforeEnter(A),
        s(A, d, m),
        ((E = I && I.onVnodeMounted) || G || B) &&
          me(() => {
            E && Ee(E, _, u), G && $.enter(A), B && Ie(u, null, _, 'mounted')
          }, b)
    },
    N = (u, d, m, _, b) => {
      if ((m && v(u, m), _)) for (let x = 0; x < _.length; x++) v(u, _[x])
      if (b) {
        let x = b.subTree
        if (d === x) {
          const O = b.vnode
          N(u, O, O.scopeId, O.slotScopeIds, b.parent)
        }
      }
    },
    T = (u, d, m, _, b, x, O, C, A = 0) => {
      for (let E = A; E < u.length; E++) {
        const I = (u[E] = C ? Ye(u[E]) : Re(u[E]))
        P(null, I, d, m, _, b, x, O, C)
      }
    },
    F = (u, d, m, _, b, x, O) => {
      const C = (d.el = u.el)
      let { patchFlag: A, dynamicChildren: E, dirs: I } = d
      A |= u.patchFlag & 16
      const D = u.props || ee,
        $ = d.props || ee
      let B
      if (
        (m && it(m, !1),
        (B = $.onVnodeBeforeUpdate) && Ee(B, m, d, u),
        I && Ie(d, u, m, 'beforeUpdate'),
        m && it(m, !0),
        E
          ? w(u.dynamicChildren, E, C, m, _, cs(d, b), x)
          : O || V(u, d, C, null, m, _, cs(d, b), x, !1),
        A > 0)
      ) {
        if (A & 16) H(C, d, D, $, m, _, b)
        else if (
          (A & 2 && D.class !== $.class && o(C, 'class', null, $.class, b),
          A & 4 && o(C, 'style', D.style, $.style, b),
          A & 8)
        ) {
          const G = d.dynamicProps
          for (let Q = 0; Q < G.length; Q++) {
            const te = G[Q],
              le = D[te],
              Ae = $[te]
            ;(Ae !== le || te === 'value') &&
              o(C, te, le, Ae, b, u.children, m, _, He)
          }
        }
        A & 1 && u.children !== d.children && f(C, d.children)
      } else !O && E == null && H(C, d, D, $, m, _, b)
      ;((B = $.onVnodeUpdated) || I) &&
        me(() => {
          B && Ee(B, m, d, u), I && Ie(d, u, m, 'updated')
        }, _)
    },
    w = (u, d, m, _, b, x, O) => {
      for (let C = 0; C < d.length; C++) {
        const A = u[C],
          E = d[C],
          I =
            A.el && (A.type === ge || !at(A, E) || A.shapeFlag & 70)
              ? h(A.el)
              : m
        P(A, E, I, null, _, b, x, O, !0)
      }
    },
    H = (u, d, m, _, b, x, O) => {
      if (m !== _) {
        if (m !== ee)
          for (const C in m)
            !Ct(C) && !(C in _) && o(u, C, m[C], null, O, d.children, b, x, He)
        for (const C in _) {
          if (Ct(C)) continue
          const A = _[C],
            E = m[C]
          A !== E && C !== 'value' && o(u, C, E, A, O, d.children, b, x, He)
        }
        'value' in _ && o(u, 'value', m.value, _.value, O)
      }
    },
    S = (u, d, m, _, b, x, O, C, A) => {
      const E = (d.el = u ? u.el : l('')),
        I = (d.anchor = u ? u.anchor : l(''))
      let { patchFlag: D, dynamicChildren: $, slotScopeIds: B } = d
      B && (C = C ? C.concat(B) : B),
        u == null
          ? (s(E, m, _), s(I, m, _), T(d.children || [], m, I, b, x, O, C, A))
          : D > 0 && D & 64 && $ && u.dynamicChildren
            ? (w(u.dynamicChildren, $, m, b, x, O, C),
              (d.key != null || (b && d === b.subTree)) && Qs(u, d, !0))
            : V(u, d, m, I, b, x, O, C, A)
    },
    q = (u, d, m, _, b, x, O, C, A) => {
      ;(d.slotScopeIds = C),
        u == null
          ? d.shapeFlag & 512
            ? b.ctx.activate(d, m, _, O, A)
            : oe(d, m, _, b, x, O, A)
          : ae(u, d, A)
    },
    oe = (u, d, m, _, b, x, O) => {
      const C = (u.component = jc(u, _, b))
      if ((Xn(u) && (C.ctx.renderer = _t), kc(C), C.asyncDep)) {
        if ((b && b.registerDep(C, k), !u.el)) {
          const A = (C.subTree = ce(ve))
          W(null, A, d, m)
        }
      } else k(C, u, d, m, b, x, O)
    },
    ae = (u, d, m) => {
      const _ = (d.component = u.component)
      if (ql(u, d, m))
        if (_.asyncDep && !_.asyncResolved) {
          z(_, d, m)
          return
        } else (_.next = d), jl(_.update), (_.effect.dirty = !0), _.update()
      else (d.el = u.el), (_.vnode = d)
    },
    k = (u, d, m, _, b, x, O) => {
      const C = () => {
          if (u.isMounted) {
            let { next: I, bu: D, u: $, parent: B, vnode: G } = u
            {
              const bt = oi(u)
              if (bt) {
                I && ((I.el = G.el), z(u, I, O)),
                  bt.asyncDep.then(() => {
                    u.isUnmounted || C()
                  })
                return
              }
            }
            let Q = I,
              te
            it(u, !1),
              I ? ((I.el = G.el), z(u, I, O)) : (I = G),
              D && xn(D),
              (te = I.props && I.props.onVnodeBeforeUpdate) && Ee(te, B, I, G),
              it(u, !0)
            const le = os(u),
              Ae = u.subTree
            ;(u.subTree = le),
              P(Ae, le, h(Ae.el), ln(Ae), u, b, x),
              (I.el = le.el),
              Q === null && Gl(u, le.el),
              $ && me($, b),
              (te = I.props && I.props.onVnodeUpdated) &&
                me(() => Ee(te, B, I, G), b)
          } else {
            let I
            const { el: D, props: $ } = d,
              { bm: B, m: G, parent: Q } = u,
              te = At(d)
            if (
              (it(u, !1),
              B && xn(B),
              !te && (I = $ && $.onVnodeBeforeMount) && Ee(I, Q, d),
              it(u, !0),
              D && ss)
            ) {
              const le = () => {
                ;(u.subTree = os(u)), ss(D, u.subTree, u, b, null)
              }
              te
                ? d.type.__asyncLoader().then(() => !u.isUnmounted && le())
                : le()
            } else {
              const le = (u.subTree = os(u))
              P(null, le, m, _, u, b, x), (d.el = le.el)
            }
            if ((G && me(G, b), !te && (I = $ && $.onVnodeMounted))) {
              const le = d
              me(() => Ee(I, Q, le), b)
            }
            ;(d.shapeFlag & 256 ||
              (Q && At(Q.vnode) && Q.vnode.shapeFlag & 256)) &&
              u.a &&
              me(u.a, b),
              (u.isMounted = !0),
              (d = m = _ = null)
          }
        },
        A = (u.effect = new Vs(C, xe, () => Gs(E), u.scope)),
        E = (u.update = () => {
          A.dirty && A.run()
        })
      ;(E.id = u.uid), it(u, !0), E()
    },
    z = (u, d, m) => {
      d.component = u
      const _ = u.vnode.props
      ;(u.vnode = d),
        (u.next = null),
        vc(u, d.props, _, m),
        Cc(u, d.children, m),
        mt(),
        yr(u),
        yt()
    },
    V = (u, d, m, _, b, x, O, C, A = !1) => {
      const E = u && u.children,
        I = u ? u.shapeFlag : 0,
        D = d.children,
        { patchFlag: $, shapeFlag: B } = d
      if ($ > 0) {
        if ($ & 128) {
          on(E, D, m, _, b, x, O, C, A)
          return
        } else if ($ & 256) {
          $e(E, D, m, _, b, x, O, C, A)
          return
        }
      }
      B & 8
        ? (I & 16 && He(E, b, x), D !== E && f(m, D))
        : I & 16
          ? B & 16
            ? on(E, D, m, _, b, x, O, C, A)
            : He(E, b, x, !0)
          : (I & 8 && f(m, ''), B & 16 && T(D, m, _, b, x, O, C, A))
    },
    $e = (u, d, m, _, b, x, O, C, A) => {
      ;(u = u || wt), (d = d || wt)
      const E = u.length,
        I = d.length,
        D = Math.min(E, I)
      let $
      for ($ = 0; $ < D; $++) {
        const B = (d[$] = A ? Ye(d[$]) : Re(d[$]))
        P(u[$], B, m, null, b, x, O, C, A)
      }
      E > I ? He(u, b, x, !0, !1, D) : T(d, m, _, b, x, O, C, A, D)
    },
    on = (u, d, m, _, b, x, O, C, A) => {
      let E = 0
      const I = d.length
      let D = u.length - 1,
        $ = I - 1
      for (; E <= D && E <= $; ) {
        const B = u[E],
          G = (d[E] = A ? Ye(d[E]) : Re(d[E]))
        if (at(B, G)) P(B, G, m, null, b, x, O, C, A)
        else break
        E++
      }
      for (; E <= D && E <= $; ) {
        const B = u[D],
          G = (d[$] = A ? Ye(d[$]) : Re(d[$]))
        if (at(B, G)) P(B, G, m, null, b, x, O, C, A)
        else break
        D--, $--
      }
      if (E > D) {
        if (E <= $) {
          const B = $ + 1,
            G = B < I ? d[B].el : _
          for (; E <= $; )
            P(null, (d[E] = A ? Ye(d[E]) : Re(d[E])), m, G, b, x, O, C, A), E++
        }
      } else if (E > $) for (; E <= D; ) Oe(u[E], b, x, !0), E++
      else {
        const B = E,
          G = E,
          Q = new Map()
        for (E = G; E <= $; E++) {
          const _e = (d[E] = A ? Ye(d[E]) : Re(d[E]))
          _e.key != null && Q.set(_e.key, E)
        }
        let te,
          le = 0
        const Ae = $ - G + 1
        let bt = !1,
          or = 0
        const Ft = new Array(Ae)
        for (E = 0; E < Ae; E++) Ft[E] = 0
        for (E = B; E <= D; E++) {
          const _e = u[E]
          if (le >= Ae) {
            Oe(_e, b, x, !0)
            continue
          }
          let Me
          if (_e.key != null) Me = Q.get(_e.key)
          else
            for (te = G; te <= $; te++)
              if (Ft[te - G] === 0 && at(_e, d[te])) {
                Me = te
                break
              }
          Me === void 0
            ? Oe(_e, b, x, !0)
            : ((Ft[Me - G] = E + 1),
              Me >= or ? (or = Me) : (bt = !0),
              P(_e, d[Me], m, null, b, x, O, C, A),
              le++)
        }
        const ir = bt ? Lc(Ft) : wt
        for (te = ir.length - 1, E = Ae - 1; E >= 0; E--) {
          const _e = G + E,
            Me = d[_e],
            lr = _e + 1 < I ? d[_e + 1].el : _
          Ft[E] === 0
            ? P(null, Me, m, lr, b, x, O, C, A)
            : bt && (te < 0 || E !== ir[te] ? ot(Me, m, lr, 2) : te--)
        }
      }
    },
    ot = (u, d, m, _, b = null) => {
      const { el: x, type: O, transition: C, children: A, shapeFlag: E } = u
      if (E & 6) {
        ot(u.component.subTree, d, m, _)
        return
      }
      if (E & 128) {
        u.suspense.move(d, m, _)
        return
      }
      if (E & 64) {
        O.move(u, d, m, _t)
        return
      }
      if (O === ge) {
        s(x, d, m)
        for (let D = 0; D < A.length; D++) ot(A[D], d, m, _)
        s(u.anchor, d, m)
        return
      }
      if (O === Bt) {
        g(u, d, m)
        return
      }
      if (_ !== 2 && E & 1 && C)
        if (_ === 0) C.beforeEnter(x), s(x, d, m), me(() => C.enter(x), b)
        else {
          const { leave: D, delayLeave: $, afterLeave: B } = C,
            G = () => s(x, d, m),
            Q = () => {
              D(x, () => {
                G(), B && B()
              })
            }
          $ ? $(x, G, Q) : Q()
        }
      else s(x, d, m)
    },
    Oe = (u, d, m, _ = !1, b = !1) => {
      const {
        type: x,
        props: O,
        ref: C,
        children: A,
        dynamicChildren: E,
        shapeFlag: I,
        patchFlag: D,
        dirs: $,
      } = u
      if ((C != null && Nn(C, null, m, u, !0), I & 256)) {
        d.ctx.deactivate(u)
        return
      }
      const B = I & 1 && $,
        G = !At(u)
      let Q
      if ((G && (Q = O && O.onVnodeBeforeUnmount) && Ee(Q, d, u), I & 6))
        Ki(u.component, m, _)
      else {
        if (I & 128) {
          u.suspense.unmount(m, _)
          return
        }
        B && Ie(u, null, d, 'beforeUnmount'),
          I & 64
            ? u.type.remove(u, d, m, b, _t, _)
            : E && (x !== ge || (D > 0 && D & 64))
              ? He(E, d, m, !1, !0)
              : ((x === ge && D & 384) || (!b && I & 16)) && He(A, d, m),
          _ && sr(u)
      }
      ;((G && (Q = O && O.onVnodeUnmounted)) || B) &&
        me(() => {
          Q && Ee(Q, d, u), B && Ie(u, null, d, 'unmounted')
        }, m)
    },
    sr = (u) => {
      const { type: d, el: m, anchor: _, transition: b } = u
      if (d === ge) {
        Bi(m, _)
        return
      }
      if (d === Bt) {
        y(u)
        return
      }
      const x = () => {
        r(m), b && !b.persisted && b.afterLeave && b.afterLeave()
      }
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: O, delayLeave: C } = b,
          A = () => O(m, x)
        C ? C(u.el, x, A) : A()
      } else x()
    },
    Bi = (u, d) => {
      let m
      for (; u !== d; ) (m = p(u)), r(u), (u = m)
      r(d)
    },
    Ki = (u, d, m) => {
      const { bum: _, scope: b, update: x, subTree: O, um: C } = u
      _ && xn(_),
        b.stop(),
        x && ((x.active = !1), Oe(O, u, d, m)),
        C && me(C, d),
        me(() => {
          u.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    He = (u, d, m, _ = !1, b = !1, x = 0) => {
      for (let O = x; O < u.length; O++) Oe(u[O], d, m, _, b)
    },
    ln = (u) =>
      u.shapeFlag & 6
        ? ln(u.component.subTree)
        : u.shapeFlag & 128
          ? u.suspense.next()
          : p(u.anchor || u.el)
  let ts = !1
  const rr = (u, d, m) => {
      u == null
        ? d._vnode && Oe(d._vnode, null, null, !0)
        : P(d._vnode || null, u, d, null, null, null, m),
        ts || ((ts = !0), yr(), Mn(), (ts = !1)),
        (d._vnode = u)
    },
    _t = {
      p: P,
      um: Oe,
      m: ot,
      r: sr,
      mt: oe,
      mc: T,
      pc: V,
      pbc: w,
      n: ln,
      o: e,
    }
  let ns, ss
  return (
    t && ([ns, ss] = t(_t)), { render: rr, hydrate: ns, createApp: yc(rr, ns) }
  )
}
function cs({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : n
}
function it({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function ri(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Qs(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (j(s) && j(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o]
      let l = r[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = Ye(r[o])), (l.el = i.el)),
        n || Qs(i, l)),
        l.type === Ot && (l.el = i.el)
    }
}
function Lc(e) {
  const t = e.slice(),
    n = [0]
  let s, r, o, i, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const a = e[s]
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        ;(t[s] = r), n.push(s)
        continue
      }
      for (o = 0, i = n.length - 1; o < i; )
        (l = (o + i) >> 1), e[n[l]] < a ? (o = l + 1) : (i = l)
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i])
  return n
}
function oi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : oi(t)
}
const Oc = (e) => e.__isTeleport,
  Ut = (e) => e && (e.disabled || e.disabled === ''),
  Lr = (e) => typeof SVGElement < 'u' && e instanceof SVGElement,
  Or = (e) => typeof MathMLElement == 'function' && e instanceof MathMLElement,
  As = (e, t) => {
    const n = e && e.to
    return ne(n) ? (t ? t(n) : null) : n
  },
  Mc = {
    name: 'Teleport',
    __isTeleport: !0,
    process(e, t, n, s, r, o, i, l, c, a) {
      const {
          mc: f,
          pc: h,
          pbc: p,
          o: { insert: v, querySelector: L, createText: P, createComment: U },
        } = a,
        W = Ut(t.props)
      let { shapeFlag: J, children: g, dynamicChildren: y } = t
      if (e == null) {
        const M = (t.el = P('')),
          R = (t.anchor = P(''))
        v(M, n, s), v(R, n, s)
        const N = (t.target = As(t.props, L)),
          T = (t.targetAnchor = P(''))
        N &&
          (v(T, N),
          i === 'svg' || Lr(N)
            ? (i = 'svg')
            : (i === 'mathml' || Or(N)) && (i = 'mathml'))
        const F = (w, H) => {
          J & 16 && f(g, w, H, r, o, i, l, c)
        }
        W ? F(n, R) : N && F(N, T)
      } else {
        t.el = e.el
        const M = (t.anchor = e.anchor),
          R = (t.target = e.target),
          N = (t.targetAnchor = e.targetAnchor),
          T = Ut(e.props),
          F = T ? n : R,
          w = T ? M : N
        if (
          (i === 'svg' || Lr(R)
            ? (i = 'svg')
            : (i === 'mathml' || Or(R)) && (i = 'mathml'),
          y
            ? (p(e.dynamicChildren, y, F, r, o, i, l), Qs(e, t, !0))
            : c || h(e, t, F, w, r, o, i, l, !1),
          W)
        )
          T
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : yn(t, n, M, a, 1)
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const H = (t.target = As(t.props, L))
          H && yn(t, H, null, a, 0)
        } else T && yn(t, R, N, a, 1)
      }
      ii(t)
    },
    remove(e, t, n, s, { um: r, o: { remove: o } }, i) {
      const {
        shapeFlag: l,
        children: c,
        anchor: a,
        targetAnchor: f,
        target: h,
        props: p,
      } = e
      if ((h && o(f), i && o(a), l & 16)) {
        const v = i || !Ut(p)
        for (let L = 0; L < c.length; L++) {
          const P = c[L]
          r(P, t, n, v, !!P.dynamicChildren)
        }
      }
    },
    move: yn,
    hydrate: Ic,
  }
function yn(e, t, n, { o: { insert: s }, m: r }, o = 2) {
  o === 0 && s(e.targetAnchor, t, n)
  const { el: i, anchor: l, shapeFlag: c, children: a, props: f } = e,
    h = o === 2
  if ((h && s(i, t, n), (!h || Ut(f)) && c & 16))
    for (let p = 0; p < a.length; p++) r(a[p], t, n, 2)
  h && s(l, t, n)
}
function Ic(
  e,
  t,
  n,
  s,
  r,
  o,
  { o: { nextSibling: i, parentNode: l, querySelector: c } },
  a,
) {
  const f = (t.target = As(t.props, c))
  if (f) {
    const h = f._lpa || f.firstChild
    if (t.shapeFlag & 16)
      if (Ut(t.props))
        (t.anchor = a(i(e), t, l(e), n, s, r, o)), (t.targetAnchor = h)
      else {
        t.anchor = i(e)
        let p = h
        for (; p; )
          if (
            ((p = i(p)), p && p.nodeType === 8 && p.data === 'teleport anchor')
          ) {
            ;(t.targetAnchor = p),
              (f._lpa = t.targetAnchor && i(t.targetAnchor))
            break
          }
        a(h, t, f, n, s, r, o)
      }
    ii(t)
  }
  return t.anchor && i(t.anchor)
}
const Nu = Mc
function ii(e) {
  const t = e.ctx
  if (t && t.ut) {
    let n = e.children[0].el
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute('data-v-owner', t.uid),
        (n = n.nextSibling)
    t.ut()
  }
}
const ge = Symbol.for('v-fgt'),
  Ot = Symbol.for('v-txt'),
  ve = Symbol.for('v-cmt'),
  Bt = Symbol.for('v-stc'),
  Kt = []
let Le = null
function li(e = !1) {
  Kt.push((Le = e ? null : []))
}
function Pc() {
  Kt.pop(), (Le = Kt[Kt.length - 1] || null)
}
let Zt = 1
function Mr(e) {
  Zt += e
}
function ci(e) {
  return (
    (e.dynamicChildren = Zt > 0 ? Le || wt : null),
    Pc(),
    Zt > 0 && Le && Le.push(e),
    e
  )
}
function Fu(e, t, n, s, r, o) {
  return ci(fi(e, t, n, s, r, o, !0))
}
function ai(e, t, n, s, r) {
  return ci(ce(e, t, n, s, r, !0))
}
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function at(e, t) {
  return e.type === t.type && e.key === t.key
}
const Qn = '__vInternal',
  ui = ({ key: e }) => e ?? null,
  Tn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ne(e) || he(e) || K(e)
        ? { i: ie, r: e, k: t, f: !!n }
        : e
      : null
  )
function fi(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === ge ? 0 : 1,
  i = !1,
  l = !1,
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ui(t),
    ref: t && Tn(t),
    scopeId: Gn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ie,
  }
  return (
    l
      ? (Zs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ne(n) ? 8 : 16),
    Zt > 0 &&
      !i &&
      Le &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Le.push(c),
    c
  )
}
const ce = Nc
function Nc(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Ho) && (e = ve), Fn(e))) {
    const l = st(e, t, !0)
    return (
      n && Zs(l, n),
      Zt > 0 &&
        !o &&
        Le &&
        (l.shapeFlag & 6 ? (Le[Le.indexOf(e)] = l) : Le.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((Kc(e) && (e = e.__vccOpts), t)) {
    t = Fc(t)
    let { class: l, style: c } = t
    l && !ne(l) && (t.class = $s(l)),
      Z(c) && (Ao(c) && !j(c) && (c = re({}, c)), (t.style = Fs(c)))
  }
  const i = ne(e) ? 1 : zl(e) ? 128 : Oc(e) ? 64 : Z(e) ? 4 : K(e) ? 2 : 0
  return fi(e, t, n, s, r, i, o, !0)
}
function Fc(e) {
  return e ? (Ao(e) || Qn in e ? re({}, e) : e) : null
}
function st(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    l = t ? $c(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ui(l),
    ref:
      t && t.ref ? (n && r ? (j(r) ? r.concat(Tn(t)) : [r, Tn(t)]) : Tn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function di(e = ' ', t = 0) {
  return ce(Ot, null, e, t)
}
function $u(e, t) {
  const n = ce(Bt, null, e)
  return (n.staticCount = t), n
}
function Hu(e = '', t = !1) {
  return t ? (li(), ai(ve, null, e)) : ce(ve, null, e)
}
function Re(e) {
  return e == null || typeof e == 'boolean'
    ? ce(ve)
    : j(e)
      ? ce(ge, null, e.slice())
      : typeof e == 'object'
        ? Ye(e)
        : ce(Ot, null, String(e))
}
function Ye(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e)
}
function Zs(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (j(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), Zs(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !(Qn in t)
        ? (t._ctx = ie)
        : r === 3 &&
          ie &&
          (ie.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    K(t)
      ? ((t = { default: t, _ctx: ie }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [di(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function $c(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class')
        t.class !== s.class && (t.class = $s([t.class, s.class]))
      else if (r === 'style') t.style = Fs([t.style, s.style])
      else if (en(r)) {
        const o = t[r],
          i = s[r]
        i &&
          o !== i &&
          !(j(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Ee(e, t, n, s = null) {
  Te(e, t, 7, [n, s])
}
const Hc = Jo()
let Vc = 0
function jc(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Hc,
    o = {
      uid: Vc++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new rl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Zo(s, r),
      emitsOptions: $o(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Ul.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let ue = null
const sn = () => ue || ie
let $n, Rs
{
  const e = fo(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o)
        }
      )
    }
  ;($n = t('__VUE_INSTANCE_SETTERS__', (n) => (ue = n))),
    (Rs = t('__VUE_SSR_SETTERS__', (n) => (Zn = n)))
}
const rn = (e) => {
    const t = ue
    return (
      $n(e),
      e.scope.on(),
      () => {
        e.scope.off(), $n(t)
      }
    )
  },
  Ir = () => {
    ue && ue.scope.off(), $n(null)
  }
function hi(e) {
  return e.vnode.shapeFlag & 4
}
let Zn = !1
function kc(e, t = !1) {
  t && Rs(t)
  const { props: n, children: s } = e.vnode,
    r = hi(e)
  bc(e, n, r, t), Ec(e, s)
  const o = r ? Dc(e, t) : void 0
  return t && Rs(!1), o
}
function Dc(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = jt(new Proxy(e.ctx, ac)))
  const { setup: s } = n
  if (s) {
    const r = (e.setupContext = s.length > 1 ? gi(e) : null),
      o = rn(e)
    mt()
    const i = Ze(s, e, 0, [e.props, r])
    if ((yt(), o(), co(i))) {
      if ((i.then(Ir, Ir), t))
        return i
          .then((l) => {
            Pr(e, l, t)
          })
          .catch((l) => {
            Wn(l, e, 0)
          })
      e.asyncDep = i
    } else Pr(e, i, t)
  } else pi(e, t)
}
function Pr(e, t, n) {
  K(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Z(t) && (e.setupState = Io(t)),
    pi(e, n)
}
let Nr
function pi(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && Nr && !s.render) {
      const r = s.template || Ys(e).template
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = s,
          a = re(re({ isCustomElement: o, delimiters: l }, i), c)
        s.render = Nr(r, a)
      }
    }
    e.render = s.render || xe
  }
  {
    const r = rn(e)
    mt()
    try {
      fc(e)
    } finally {
      yt(), r()
    }
  }
}
function Uc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return ye(e, 'get', '$attrs'), t[n]
      },
    }))
  )
}
function gi(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Uc(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function es(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Io(jt(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in kt) return kt[n](e)
        },
        has(t, n) {
          return n in t || n in kt
        },
      }))
    )
}
function Bc(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Kc(e) {
  return K(e) && '__vccOpts' in e
}
const se = (e, t) => Rl(e, t, Zn)
function Ls(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Z(t) && !j(t)
      ? Fn(t)
        ? ce(e, null, [t])
        : ce(e, t)
      : ce(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Fn(n) && (n = [n]),
      ce(e, t, n))
}
const Wc = '3.4.20'
/**
 * @vue/runtime-dom v3.4.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const qc = 'http://www.w3.org/2000/svg',
  Gc = 'http://www.w3.org/1998/Math/MathML',
  Je = typeof document < 'u' ? document : null,
  Fr = Je && Je.createElement('template'),
  zc = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? Je.createElementNS(qc, e)
          : t === 'mathml'
            ? Je.createElementNS(Gc, e)
            : Je.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => Je.createTextNode(e),
    createComment: (e) => Je.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Je.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Fr.innerHTML =
          s === 'svg'
            ? `<svg>${e}</svg>`
            : s === 'mathml'
              ? `<math>${e}</math>`
              : e
        const l = Fr.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  },
  qe = 'transition',
  $t = 'animation',
  Mt = Symbol('_vtc'),
  mi = (e, { slots: t }) => Ls(Zl, _i(e), t)
mi.displayName = 'Transition'
const yi = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Xc = (mi.props = re({}, Bo, yi)),
  lt = (e, t = []) => {
    j(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  $r = (e) => (e ? (j(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function _i(e) {
  const t = {}
  for (const S in e) S in yi || (t[S] = e[S])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: r,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: i = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: a = i,
      appearToClass: f = l,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    L = Yc(r),
    P = L && L[0],
    U = L && L[1],
    {
      onBeforeEnter: W,
      onEnter: J,
      onEnterCancelled: g,
      onLeave: y,
      onLeaveCancelled: M,
      onBeforeAppear: R = W,
      onAppear: N = J,
      onAppearCancelled: T = g,
    } = t,
    F = (S, q, oe) => {
      Ge(S, q ? f : l), Ge(S, q ? a : i), oe && oe()
    },
    w = (S, q) => {
      ;(S._isLeaving = !1), Ge(S, h), Ge(S, v), Ge(S, p), q && q()
    },
    H = (S) => (q, oe) => {
      const ae = S ? N : J,
        k = () => F(q, S, oe)
      lt(ae, [q, k]),
        Hr(() => {
          Ge(q, S ? c : o), Ve(q, S ? f : l), $r(ae) || Vr(q, s, P, k)
        })
    }
  return re(t, {
    onBeforeEnter(S) {
      lt(W, [S]), Ve(S, o), Ve(S, i)
    },
    onBeforeAppear(S) {
      lt(R, [S]), Ve(S, c), Ve(S, a)
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave(S, q) {
      S._isLeaving = !0
      const oe = () => w(S, q)
      Ve(S, h),
        vi(),
        Ve(S, p),
        Hr(() => {
          S._isLeaving && (Ge(S, h), Ve(S, v), $r(y) || Vr(S, s, U, oe))
        }),
        lt(y, [S, oe])
    },
    onEnterCancelled(S) {
      F(S, !1), lt(g, [S])
    },
    onAppearCancelled(S) {
      F(S, !0), lt(T, [S])
    },
    onLeaveCancelled(S) {
      w(S), lt(M, [S])
    },
  })
}
function Yc(e) {
  if (e == null) return null
  if (Z(e)) return [as(e.enter), as(e.leave)]
  {
    const t = as(e)
    return [t, t]
  }
}
function as(e) {
  return Yi(e)
}
function Ve(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[Mt] || (e[Mt] = new Set())).add(t)
}
function Ge(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s))
  const n = e[Mt]
  n && (n.delete(t), n.size || (e[Mt] = void 0))
}
function Hr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let Jc = 0
function Vr(e, t, n, s) {
  const r = (e._endId = ++Jc),
    o = () => {
      r === e._endId && s()
    }
  if (n) return setTimeout(o, n)
  const { type: i, timeout: l, propCount: c } = bi(e, t)
  if (!i) return s()
  const a = i + 'end'
  let f = 0
  const h = () => {
      e.removeEventListener(a, p), o()
    },
    p = (v) => {
      v.target === e && ++f >= c && h()
    }
  setTimeout(() => {
    f < c && h()
  }, l + 1),
    e.addEventListener(a, p)
}
function bi(e, t) {
  const n = window.getComputedStyle(e),
    s = (L) => (n[L] || '').split(', '),
    r = s(`${qe}Delay`),
    o = s(`${qe}Duration`),
    i = jr(r, o),
    l = s(`${$t}Delay`),
    c = s(`${$t}Duration`),
    a = jr(l, c)
  let f = null,
    h = 0,
    p = 0
  t === qe
    ? i > 0 && ((f = qe), (h = i), (p = o.length))
    : t === $t
      ? a > 0 && ((f = $t), (h = a), (p = c.length))
      : ((h = Math.max(i, a)),
        (f = h > 0 ? (i > a ? qe : $t) : null),
        (p = f ? (f === qe ? o.length : c.length) : 0))
  const v =
    f === qe && /\b(transform|all)(,|$)/.test(s(`${qe}Property`).toString())
  return { type: f, timeout: h, propCount: p, hasTransform: v }
}
function jr(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => kr(n) + kr(e[s])))
}
function kr(e) {
  return e === 'auto' ? 0 : Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function vi() {
  return document.body.offsetHeight
}
function Qc(e, t, n) {
  const s = e[Mt]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
        ? e.setAttribute('class', t)
        : (e.className = t)
}
const Hn = Symbol('_vod'),
  wi = Symbol('_vsh'),
  Vu = {
    beforeMount(e, { value: t }, { transition: n }) {
      ;(e[Hn] = e.style.display === 'none' ? '' : e.style.display),
        n && t ? n.beforeEnter(e) : Ht(e, t)
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e)
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), Ht(e, !0), s.enter(e))
            : s.leave(e, () => {
                Ht(e, !1)
              })
          : Ht(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Ht(e, t)
    },
  }
function Ht(e, t) {
  ;(e.style.display = t ? e[Hn] : 'none'), (e[wi] = !t)
}
const Zc = Symbol(''),
  ea = /(^|;)\s*display\s*:/
function ta(e, t, n) {
  const s = e.style,
    r = ne(n)
  let o = !1
  if (n && !r) {
    if (t)
      if (ne(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim()
          n[l] == null && Sn(s, l, '')
        }
      else for (const i in t) n[i] == null && Sn(s, i, '')
    for (const i in n) i === 'display' && (o = !0), Sn(s, i, n[i])
  } else if (r) {
    if (t !== n) {
      const i = s[Zc]
      i && (n += ';' + i), (s.cssText = n), (o = ea.test(n))
    }
  } else t && e.removeAttribute('style')
  Hn in e && ((e[Hn] = o ? s.display : ''), e[wi] && (s.display = 'none'))
}
const Dr = /\s*!important$/
function Sn(e, t, n) {
  if (j(n)) n.forEach((s) => Sn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = na(e, t)
    Dr.test(n)
      ? e.setProperty(gt(s), n.replace(Dr, ''), 'important')
      : (e[s] = n)
  }
}
const Ur = ['Webkit', 'Moz', 'ms'],
  us = {}
function na(e, t) {
  const n = us[t]
  if (n) return n
  let s = Ne(t)
  if (s !== 'filter' && s in e) return (us[t] = s)
  s = Dn(s)
  for (let r = 0; r < Ur.length; r++) {
    const o = Ur[r] + s
    if (o in e) return (us[t] = o)
  }
  return t
}
const Br = 'http://www.w3.org/1999/xlink'
function sa(e, t, n, s, r) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Br, t.slice(6, t.length))
      : e.setAttributeNS(Br, t, n)
  else {
    const o = nl(t)
    n == null || (o && !ho(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function ra(e, t, n, s, r, o, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, r, o), (e[t] = n ?? '')
    return
  }
  const l = e.tagName
  if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
    e._value = n
    const a = l === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      f = n ?? ''
    a !== f && (e.value = f), n == null && e.removeAttribute(t)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = ho(n))
      : n == null && a === 'string'
        ? ((n = ''), (c = !0))
        : a === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function je(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function oa(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const Kr = Symbol('_vei')
function ia(e, t, n, s, r = null) {
  const o = e[Kr] || (e[Kr] = {}),
    i = o[t]
  if (s && i) i.value = s
  else {
    const [l, c] = la(t)
    if (s) {
      const a = (o[t] = ua(s, r))
      je(e, l, a, c)
    } else i && (oa(e, l, i, c), (o[t] = void 0))
  }
}
const Wr = /(?:Once|Passive|Capture)$/
function la(e) {
  let t
  if (Wr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(Wr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : gt(e.slice(2)), t]
}
let fs = 0
const ca = Promise.resolve(),
  aa = () => fs || (ca.then(() => (fs = 0)), (fs = Date.now()))
function ua(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Te(fa(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = aa()), n
}
function fa(e, t) {
  if (j(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const qr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  da = (e, t, n, s, r, o, i, l, c) => {
    const a = r === 'svg'
    t === 'class'
      ? Qc(e, s, a)
      : t === 'style'
        ? ta(e, n, s)
        : en(t)
          ? Is(t) || ia(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : ha(e, t, s, a)
              )
            ? ra(e, t, s, o, i, l, c)
            : (t === 'true-value'
                ? (e._trueValue = s)
                : t === 'false-value' && (e._falseValue = s),
              sa(e, t, s, a))
  }
function ha(e, t, n, s) {
  if (s)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && qr(t) && K(n))
    )
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE')
      return !1
  }
  return qr(t) && ne(n) ? !1 : t in e
}
const Ei = new WeakMap(),
  Ci = new WeakMap(),
  Vn = Symbol('_moveCb'),
  Gr = Symbol('_enterCb'),
  xi = {
    name: 'TransitionGroup',
    props: re({}, Xc, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = sn(),
        s = Uo()
      let r, o
      return (
        Go(() => {
          if (!r.length) return
          const i = e.moveClass || `${e.name || 'v'}-move`
          if (!_a(r[0].el, n.vnode.el, i)) return
          r.forEach(ga), r.forEach(ma)
          const l = r.filter(ya)
          vi(),
            l.forEach((c) => {
              const a = c.el,
                f = a.style
              Ve(a, i),
                (f.transform = f.webkitTransform = f.transitionDuration = '')
              const h = (a[Vn] = (p) => {
                ;(p && p.target !== a) ||
                  ((!p || /transform$/.test(p.propertyName)) &&
                    (a.removeEventListener('transitionend', h),
                    (a[Vn] = null),
                    Ge(a, i)))
              })
              a.addEventListener('transitionend', h)
            })
        }),
        () => {
          const i = X(e),
            l = _i(i)
          let c = i.tag || ge
          ;(r = o), (o = t.default ? Xs(t.default()) : [])
          for (let a = 0; a < o.length; a++) {
            const f = o[a]
            f.key != null && Qt(f, Jt(f, l, s, n))
          }
          if (r)
            for (let a = 0; a < r.length; a++) {
              const f = r[a]
              Qt(f, Jt(f, l, s, n)), Ei.set(f, f.el.getBoundingClientRect())
            }
          return ce(c, null, o)
        }
      )
    },
  },
  pa = (e) => delete e.mode
xi.props
const ju = xi
function ga(e) {
  const t = e.el
  t[Vn] && t[Vn](), t[Gr] && t[Gr]()
}
function ma(e) {
  Ci.set(e, e.el.getBoundingClientRect())
}
function ya(e) {
  const t = Ei.get(e),
    n = Ci.get(e),
    s = t.left - n.left,
    r = t.top - n.top
  if (s || r) {
    const o = e.el.style
    return (
      (o.transform = o.webkitTransform = `translate(${s}px,${r}px)`),
      (o.transitionDuration = '0s'),
      e
    )
  }
}
function _a(e, t, n) {
  const s = e.cloneNode(),
    r = e[Mt]
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((c) => c && s.classList.remove(c))
    }),
    n.split(/\s+/).forEach((l) => l && s.classList.add(l)),
    (s.style.display = 'none')
  const o = t.nodeType === 1 ? t : t.parentNode
  o.appendChild(s)
  const { hasTransform: i } = bi(s)
  return o.removeChild(s), i
}
const rt = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return j(t) ? (n) => xn(t, n) : t
}
function ba(e) {
  e.target.composing = !0
}
function zr(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const Se = Symbol('_assign'),
  Xr = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Se] = rt(r)
      const o = s || (r.props && r.props.type === 'number')
      je(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let l = e.value
        n && (l = l.trim()), o && (l = Gt(l)), e[Se](l)
      }),
        n &&
          je(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (je(e, 'compositionstart', ba),
          je(e, 'compositionend', zr),
          je(e, 'change', zr))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: r } },
      o,
    ) {
      if (((e[Se] = rt(o)), e.composing)) return
      const i = r || e.type === 'number' ? Gt(e.value) : e.value,
        l = t ?? ''
      i !== l &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (n || (s && e.value.trim() === l))) ||
          (e.value = l))
    },
  },
  va = {
    deep: !0,
    created(e, t, n) {
      ;(e[Se] = rt(n)),
        je(e, 'change', () => {
          const s = e._modelValue,
            r = It(e),
            o = e.checked,
            i = e[Se]
          if (j(s)) {
            const l = Hs(s, r),
              c = l !== -1
            if (o && !c) i(s.concat(r))
            else if (!o && c) {
              const a = [...s]
              a.splice(l, 1), i(a)
            }
          } else if (Pt(s)) {
            const l = new Set(s)
            o ? l.add(r) : l.delete(r), i(l)
          } else i(Ti(e, o))
        })
    },
    mounted: Yr,
    beforeUpdate(e, t, n) {
      ;(e[Se] = rt(n)), Yr(e, t, n)
    },
  }
function Yr(e, { value: t, oldValue: n }, s) {
  ;(e._modelValue = t),
    j(t)
      ? (e.checked = Hs(t, s.props.value) > -1)
      : Pt(t)
        ? (e.checked = t.has(s.props.value))
        : t !== n && (e.checked = pt(t, Ti(e, !0)))
}
const wa = {
    created(e, { value: t }, n) {
      ;(e.checked = pt(t, n.props.value)),
        (e[Se] = rt(n)),
        je(e, 'change', () => {
          e[Se](It(e))
        })
    },
    beforeUpdate(e, { value: t, oldValue: n }, s) {
      ;(e[Se] = rt(s)), t !== n && (e.checked = pt(t, s.props.value))
    },
  },
  Ea = {
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, s) {
      const r = Pt(t)
      je(e, 'change', () => {
        const o = Array.prototype.filter
          .call(e.options, (i) => i.selected)
          .map((i) => (n ? Gt(It(i)) : It(i)))
        e[Se](e.multiple ? (r ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          nn(() => {
            e._assigning = !1
          })
      }),
        (e[Se] = rt(s))
    },
    mounted(e, { value: t, modifiers: { number: n } }) {
      Jr(e, t, n)
    },
    beforeUpdate(e, t, n) {
      e[Se] = rt(n)
    },
    updated(e, { value: t, modifiers: { number: n } }) {
      e._assigning || Jr(e, t, n)
    },
  }
function Jr(e, t, n) {
  const s = e.multiple,
    r = j(t)
  if (!(s && !r && !Pt(t))) {
    for (let o = 0, i = e.options.length; o < i; o++) {
      const l = e.options[o],
        c = It(l)
      if (s)
        if (r) {
          const a = typeof c
          a === 'string' || a === 'number'
            ? (l.selected = t.includes(n ? Gt(c) : c))
            : (l.selected = Hs(t, c) > -1)
        } else l.selected = t.has(c)
      else if (pt(It(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o)
        return
      }
    }
    !s && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function It(e) {
  return '_value' in e ? e._value : e.value
}
function Ti(e, t) {
  const n = t ? '_trueValue' : '_falseValue'
  return n in e ? e[n] : t
}
const ku = {
  created(e, t, n) {
    _n(e, t, n, null, 'created')
  },
  mounted(e, t, n) {
    _n(e, t, n, null, 'mounted')
  },
  beforeUpdate(e, t, n, s) {
    _n(e, t, n, s, 'beforeUpdate')
  },
  updated(e, t, n, s) {
    _n(e, t, n, s, 'updated')
  },
}
function Ca(e, t) {
  switch (e) {
    case 'SELECT':
      return Ea
    case 'TEXTAREA':
      return Xr
    default:
      switch (t) {
        case 'checkbox':
          return va
        case 'radio':
          return wa
        default:
          return Xr
      }
  }
}
function _n(e, t, n, s, r) {
  const i = Ca(e.tagName, n.props && n.props.type)[r]
  i && i(e, t, n, s)
}
const xa = ['ctrl', 'shift', 'alt', 'meta'],
  Ta = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => xa.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Du = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = Ta[t[i]]
          if (l && l(r, t)) return
        }
        return e(r, ...o)
      })
    )
  },
  Sa = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Uu = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}),
      s = t.join('.')
    return (
      n[s] ||
      (n[s] = (r) => {
        if (!('key' in r)) return
        const o = gt(r.key)
        if (t.some((i) => i === o || Sa[i] === o)) return e(r)
      })
    )
  },
  Si = re({ patchProp: da }, zc)
let Wt,
  Qr = !1
function Ai() {
  return Wt || (Wt = Ac(Si))
}
function Aa() {
  return (Wt = Qr ? Wt : Rc(Si)), (Qr = !0), Wt
}
const Bu = (...e) => {
    Ai().render(...e)
  },
  Ku = (...e) => {
    const t = Ai().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Li(s)
        if (!r) return
        const o = t._component
        !K(o) && !o.render && !o.template && (o.template = r.innerHTML),
          (r.innerHTML = '')
        const i = n(r, !1, Ri(r))
        return (
          r instanceof Element &&
            (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
          i
        )
      }),
      t
    )
  },
  Wu = (...e) => {
    const t = Aa().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (s) => {
        const r = Li(s)
        if (r) return n(r, !0, Ri(r))
      }),
      t
    )
  }
function Ri(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml'
}
function Li(e) {
  return ne(e) ? document.querySelector(e) : e
}
const qu = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, r] of t) n[s] = r
    return n
  },
  Gu = '/zai-ui/home-dark1.webp',
  zu = '/zai-ui/home-dark2.webp',
  Xu = '/zai-ui/home-light1.webp',
  Yu = '/zai-ui/home-light2.webp',
  Ra = 'modulepreload',
  La = function (e) {
    return '/zai-ui/' + e
  },
  Zr = {},
  Ju = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      const o = document.getElementsByTagName('link')
      r = Promise.all(
        n.map((i) => {
          if (((i = La(i)), i in Zr)) return
          Zr[i] = !0
          const l = i.endsWith('.css'),
            c = l ? '[rel="stylesheet"]' : ''
          if (!!s)
            for (let h = o.length - 1; h >= 0; h--) {
              const p = o[h]
              if (p.href === i && (!l || p.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${i}"]${c}`)) return
          const f = document.createElement('link')
          if (
            ((f.rel = l ? 'stylesheet' : Ra),
            l || ((f.as = 'script'), (f.crossOrigin = '')),
            (f.href = i),
            document.head.appendChild(f),
            l)
          )
            return new Promise((h, p) => {
              f.addEventListener('load', h),
                f.addEventListener('error', () =>
                  p(new Error(`Unable to preload CSS for ${i}`)),
                )
            })
        }),
      )
    }
    return r
      .then(() => t())
      .catch((o) => {
        const i = new Event('vite:preloadError', { cancelable: !0 })
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o
      })
  },
  Oa = window.__VP_SITE_DATA__
function er(e) {
  return go() ? (il(e), !0) : !1
}
function et(e) {
  return typeof e == 'function' ? e() : Mo(e)
}
const Oi = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const Ma = Object.prototype.toString,
  Ia = (e) => Ma.call(e) === '[object Object]',
  qt = () => {},
  Os = Pa()
function Pa() {
  var e, t
  return (
    Oi &&
    ((e = window == null ? void 0 : window.navigator) == null
      ? void 0
      : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((t = window == null ? void 0 : window.navigator) == null
        ? void 0
        : t.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(
          window == null ? void 0 : window.navigator.userAgent,
        )))
  )
}
function Na(e, t) {
  function n(...s) {
    return new Promise((r, o) => {
      Promise.resolve(
        e(() => t.apply(this, s), { fn: t, thisArg: this, args: s }),
      )
        .then(r)
        .catch(o)
    })
  }
  return n
}
const Mi = (e) => e()
function Fa(e = Mi) {
  const t = de(!0)
  function n() {
    t.value = !1
  }
  function s() {
    t.value = !0
  }
  const r = (...o) => {
    t.value && e(...o)
  }
  return { isActive: Kn(t), pause: n, resume: s, eventFilter: r }
}
function $a(e) {
  return e || sn()
}
function Ii(...e) {
  if (e.length !== 1) return Fl(...e)
  const t = e[0]
  return typeof t == 'function' ? Kn(Il(() => ({ get: t, set: qt }))) : de(t)
}
function Ha(e, t, n = {}) {
  const { eventFilter: s = Mi, ...r } = n
  return De(e, Na(s, t), r)
}
function Va(e, t, n = {}) {
  const { eventFilter: s, ...r } = n,
    { eventFilter: o, pause: i, resume: l, isActive: c } = Fa(s)
  return {
    stop: Ha(e, t, { ...r, eventFilter: o }),
    pause: i,
    resume: l,
    isActive: c,
  }
}
function tr(e, t = !0, n) {
  $a() ? Nt(e, n) : t ? e() : nn(e)
}
function vt(e) {
  var t
  const n = et(e)
  return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Fe = Oi ? window : void 0
function Ue(...e) {
  let t, n, s, r
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([n, s, r] = e), (t = Fe))
      : ([t, n, s, r] = e),
    !t)
  )
    return qt
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s])
  const o = [],
    i = () => {
      o.forEach((f) => f()), (o.length = 0)
    },
    l = (f, h, p, v) => (
      f.addEventListener(h, p, v), () => f.removeEventListener(h, p, v)
    ),
    c = De(
      () => [vt(t), et(r)],
      ([f, h]) => {
        if ((i(), !f)) return
        const p = Ia(h) ? { ...h } : h
        o.push(...n.flatMap((v) => s.map((L) => l(f, v, L, p))))
      },
      { immediate: !0, flush: 'post' },
    ),
    a = () => {
      c(), i()
    }
  return er(a), a
}
let eo = !1
function Qu(e, t, n = {}) {
  const {
    window: s = Fe,
    ignore: r = [],
    capture: o = !0,
    detectIframe: i = !1,
  } = n
  if (!s) return qt
  Os &&
    !eo &&
    ((eo = !0),
    Array.from(s.document.body.children).forEach((p) =>
      p.addEventListener('click', qt),
    ),
    s.document.documentElement.addEventListener('click', qt))
  let l = !0
  const c = (p) =>
      r.some((v) => {
        if (typeof v == 'string')
          return Array.from(s.document.querySelectorAll(v)).some(
            (L) => L === p.target || p.composedPath().includes(L),
          )
        {
          const L = vt(v)
          return L && (p.target === L || p.composedPath().includes(L))
        }
      }),
    f = [
      Ue(
        s,
        'click',
        (p) => {
          const v = vt(e)
          if (!(!v || v === p.target || p.composedPath().includes(v))) {
            if ((p.detail === 0 && (l = !c(p)), !l)) {
              l = !0
              return
            }
            t(p)
          }
        },
        { passive: !0, capture: o },
      ),
      Ue(
        s,
        'pointerdown',
        (p) => {
          const v = vt(e)
          l = !c(p) && !!(v && !p.composedPath().includes(v))
        },
        { passive: !0 },
      ),
      i &&
        Ue(s, 'blur', (p) => {
          setTimeout(() => {
            var v
            const L = vt(e)
            ;((v = s.document.activeElement) == null ? void 0 : v.tagName) ===
              'IFRAME' &&
              !(L != null && L.contains(s.document.activeElement)) &&
              t(p)
          }, 0)
        }),
    ].filter(Boolean)
  return () => f.forEach((p) => p())
}
function ja(e) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string'
      ? (t) => t.key === e
      : Array.isArray(e)
        ? (t) => e.includes(t.key)
        : () => !0
}
function Zu(...e) {
  let t,
    n,
    s = {}
  e.length === 3
    ? ((t = e[0]), (n = e[1]), (s = e[2]))
    : e.length === 2
      ? typeof e[1] == 'object'
        ? ((t = !0), (n = e[0]), (s = e[1]))
        : ((t = e[0]), (n = e[1]))
      : ((t = !0), (n = e[0]))
  const {
      target: r = Fe,
      eventName: o = 'keydown',
      passive: i = !1,
      dedupe: l = !1,
    } = s,
    c = ja(t)
  return Ue(
    r,
    o,
    (f) => {
      ;(f.repeat && et(l)) || (c(f) && n(f))
    },
    i,
  )
}
function ka() {
  const e = de(!1),
    t = sn()
  return (
    t &&
      Nt(() => {
        e.value = !0
      }, t),
    e
  )
}
function Da(e) {
  const t = ka()
  return se(() => (t.value, !!e()))
}
function Pi(e, t = {}) {
  const { window: n = Fe } = t,
    s = Da(() => n && 'matchMedia' in n && typeof n.matchMedia == 'function')
  let r
  const o = de(!1),
    i = (a) => {
      o.value = a.matches
    },
    l = () => {
      r &&
        ('removeEventListener' in r
          ? r.removeEventListener('change', i)
          : r.removeListener(i))
    },
    c = ko(() => {
      s.value &&
        (l(),
        (r = n.matchMedia(et(e))),
        'addEventListener' in r
          ? r.addEventListener('change', i)
          : r.addListener(i),
        (o.value = r.matches))
    })
  return (
    er(() => {
      c(), l(), (r = void 0)
    }),
    o
  )
}
const bn =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  vn = '__vueuse_ssr_handlers__',
  Ua = Ba()
function Ba() {
  return vn in bn || (bn[vn] = bn[vn] || {}), bn[vn]
}
function Ni(e, t) {
  return Ua[e] || t
}
function Ka(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number'
}
const Wa = {
    boolean: { read: (e) => e === 'true', write: (e) => String(e) },
    object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) },
    number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) },
    any: { read: (e) => e, write: (e) => String(e) },
    string: { read: (e) => e, write: (e) => String(e) },
    map: {
      read: (e) => new Map(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: (e) => new Set(JSON.parse(e)),
      write: (e) => JSON.stringify(Array.from(e)),
    },
    date: { read: (e) => new Date(e), write: (e) => e.toISOString() },
  },
  to = 'vueuse-storage'
function qa(e, t, n, s = {}) {
  var r
  const {
      flush: o = 'pre',
      deep: i = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: c = !0,
      mergeDefaults: a = !1,
      shallow: f,
      window: h = Fe,
      eventFilter: p,
      onError: v = (w) => {
        console.error(w)
      },
      initOnMounted: L,
    } = s,
    P = (f ? Lo : de)(typeof t == 'function' ? t() : t)
  if (!n)
    try {
      n = Ni('getDefaultStorage', () => {
        var w
        return (w = Fe) == null ? void 0 : w.localStorage
      })()
    } catch (w) {
      v(w)
    }
  if (!n) return P
  const U = et(t),
    W = Ka(U),
    J = (r = s.serializer) != null ? r : Wa[W],
    { pause: g, resume: y } = Va(P, () => R(P.value), {
      flush: o,
      deep: i,
      eventFilter: p,
    })
  h &&
    l &&
    tr(() => {
      Ue(h, 'storage', T), Ue(h, to, F), L && T()
    }),
    L || T()
  function M(w, H) {
    h &&
      h.dispatchEvent(
        new CustomEvent(to, {
          detail: { key: e, oldValue: w, newValue: H, storageArea: n },
        }),
      )
  }
  function R(w) {
    try {
      const H = n.getItem(e)
      if (w == null) M(H, null), n.removeItem(e)
      else {
        const S = J.write(w)
        H !== S && (n.setItem(e, S), M(H, S))
      }
    } catch (H) {
      v(H)
    }
  }
  function N(w) {
    const H = w ? w.newValue : n.getItem(e)
    if (H == null) return c && U != null && n.setItem(e, J.write(U)), U
    if (!w && a) {
      const S = J.read(H)
      return typeof a == 'function'
        ? a(S, U)
        : W === 'object' && !Array.isArray(S)
          ? { ...U, ...S }
          : S
    } else return typeof H != 'string' ? H : J.read(H)
  }
  function T(w) {
    if (!(w && w.storageArea !== n)) {
      if (w && w.key == null) {
        P.value = U
        return
      }
      if (!(w && w.key !== e)) {
        g()
        try {
          ;(w == null ? void 0 : w.newValue) !== J.write(P.value) &&
            (P.value = N(w))
        } catch (H) {
          v(H)
        } finally {
          w ? nn(y) : y()
        }
      }
    }
  }
  function F(w) {
    T(w.detail)
  }
  return P
}
function Fi(e) {
  return Pi('(prefers-color-scheme: dark)', e)
}
function Ga(e = {}) {
  const {
      selector: t = 'html',
      attribute: n = 'class',
      initialValue: s = 'auto',
      window: r = Fe,
      storage: o,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: c,
      emitAuto: a,
      disableTransition: f = !0,
    } = e,
    h = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    p = Fi({ window: r }),
    v = se(() => (p.value ? 'dark' : 'light')),
    L =
      c ||
      (i == null
        ? Ii(s)
        : qa(i, s, o, { window: r, listenToStorageChanges: l })),
    P = se(() => (L.value === 'auto' ? v.value : L.value)),
    U = Ni('updateHTMLAttrs', (y, M, R) => {
      const N =
        typeof y == 'string'
          ? r == null
            ? void 0
            : r.document.querySelector(y)
          : vt(y)
      if (!N) return
      let T
      if (
        (f &&
          ((T = r.document.createElement('style')),
          T.appendChild(
            document.createTextNode(
              '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
            ),
          ),
          r.document.head.appendChild(T)),
        M === 'class')
      ) {
        const F = R.split(/\s/g)
        Object.values(h)
          .flatMap((w) => (w || '').split(/\s/g))
          .filter(Boolean)
          .forEach((w) => {
            F.includes(w) ? N.classList.add(w) : N.classList.remove(w)
          })
      } else N.setAttribute(M, R)
      f && (r.getComputedStyle(T).opacity, document.head.removeChild(T))
    })
  function W(y) {
    var M
    U(t, n, (M = h[y]) != null ? M : y)
  }
  function J(y) {
    e.onChanged ? e.onChanged(y, W) : W(y)
  }
  De(P, J, { flush: 'post', immediate: !0 }), tr(() => J(P.value))
  const g = se({
    get() {
      return a ? L.value : P.value
    },
    set(y) {
      L.value = y
    },
  })
  try {
    return Object.assign(g, { store: L, system: v, state: P })
  } catch {
    return g
  }
}
function za(e = {}) {
  const { valueDark: t = 'dark', valueLight: n = '', window: s = Fe } = e,
    r = Ga({
      ...e,
      onChanged: (l, c) => {
        var a
        e.onChanged
          ? (a = e.onChanged) == null || a.call(e, l === 'dark', c, l)
          : c(l)
      },
      modes: { dark: t, light: n },
    }),
    o = se(() =>
      r.system ? r.system.value : Fi({ window: s }).value ? 'dark' : 'light',
    )
  return se({
    get() {
      return r.value === 'dark'
    },
    set(l) {
      const c = l ? 'dark' : 'light'
      o.value === c ? (r.value = 'auto') : (r.value = c)
    },
  })
}
function ds(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
      ? e.documentElement
      : e
}
function $i(e) {
  const t = window.getComputedStyle(e)
  if (
    t.overflowX === 'scroll' ||
    t.overflowY === 'scroll' ||
    (t.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (t.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0
  {
    const n = e.parentNode
    return !n || n.tagName === 'BODY' ? !1 : $i(n)
  }
}
function Xa(e) {
  const t = e || window.event,
    n = t.target
  return $i(n)
    ? !1
    : t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1)
}
const wn = new WeakMap()
function ef(e, t = !1) {
  const n = de(t)
  let s = null
  De(
    Ii(e),
    (i) => {
      const l = ds(et(i))
      if (l) {
        const c = l
        wn.get(c) || wn.set(c, c.style.overflow),
          n.value && (c.style.overflow = 'hidden')
      }
    },
    { immediate: !0 },
  )
  const r = () => {
      const i = ds(et(e))
      !i ||
        n.value ||
        (Os &&
          (s = Ue(
            i,
            'touchmove',
            (l) => {
              Xa(l)
            },
            { passive: !1 },
          )),
        (i.style.overflow = 'hidden'),
        (n.value = !0))
    },
    o = () => {
      var i
      const l = ds(et(e))
      !l ||
        !n.value ||
        (Os && (s == null || s()),
        (l.style.overflow = (i = wn.get(l)) != null ? i : ''),
        wn.delete(l),
        (n.value = !1))
    }
  return (
    er(o),
    se({
      get() {
        return n.value
      },
      set(i) {
        i ? r() : o()
      },
    })
  )
}
function tf(e = {}) {
  const { window: t = Fe, behavior: n = 'auto' } = e
  if (!t) return { x: de(0), y: de(0) }
  const s = de(t.scrollX),
    r = de(t.scrollY),
    o = se({
      get() {
        return s.value
      },
      set(l) {
        scrollTo({ left: l, behavior: n })
      },
    }),
    i = se({
      get() {
        return r.value
      },
      set(l) {
        scrollTo({ top: l, behavior: n })
      },
    })
  return (
    Ue(
      t,
      'scroll',
      () => {
        ;(s.value = t.scrollX), (r.value = t.scrollY)
      },
      { capture: !1, passive: !0 },
    ),
    { x: o, y: i }
  )
}
function nf(e = {}) {
  const {
      window: t = Fe,
      initialWidth: n = Number.POSITIVE_INFINITY,
      initialHeight: s = Number.POSITIVE_INFINITY,
      listenOrientation: r = !0,
      includeScrollbar: o = !0,
    } = e,
    i = de(n),
    l = de(s),
    c = () => {
      t &&
        (o
          ? ((i.value = t.innerWidth), (l.value = t.innerHeight))
          : ((i.value = t.document.documentElement.clientWidth),
            (l.value = t.document.documentElement.clientHeight)))
    }
  if ((c(), tr(c), Ue('resize', c, { passive: !0 }), r)) {
    const a = Pi('(orientation: portrait)')
    De(a, () => c())
  }
  return { width: i, height: l }
}
var hs = {
    BASE_URL: '/zai-ui/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  ps = {}
const Hi = /^(?:[a-z]+:|\/\/)/i,
  Ya = 'vitepress-theme-appearance',
  Ja = /#.*$/,
  Qa = /[?#].*$/,
  Za = /(?:(^|\/)index)?\.(?:md|html)$/,
  Ce = typeof document < 'u',
  Vi = {
    relativePath: '',
    filePath: '',
    title: '404',
    description: 'Not Found',
    headers: [],
    frontmatter: { sidebar: !1, layout: 'page' },
    lastUpdated: 0,
    isNotFound: !0,
  }
function eu(e, t, n = !1) {
  if (t === void 0) return !1
  if (((e = no(`/${e}`)), n)) return new RegExp(t).test(e)
  if (no(t) !== e) return !1
  const s = t.match(Ja)
  return s ? (Ce ? location.hash : '') === s[0] : !0
}
function no(e) {
  return decodeURI(e).replace(Qa, '').replace(Za, '$1')
}
function tu(e) {
  return Hi.test(e)
}
function nu(e, t) {
  var s, r, o, i, l, c, a
  const n =
    Object.keys(e.locales).find(
      (f) => f !== 'root' && !tu(f) && eu(t, `/${f}/`, !0),
    ) || 'root'
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((o = e.locales[n]) == null ? void 0 : o.title) ?? e.title,
    titleTemplate:
      ((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ??
      e.titleTemplate,
    description:
      ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: ki(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...((a = e.locales[n]) == null ? void 0 : a.themeConfig),
    },
  })
}
function ji(e, t) {
  const n = t.title || e.title,
    s = t.titleTemplate ?? e.titleTemplate
  if (typeof s == 'string' && s.includes(':title'))
    return s.replace(/:title/g, n)
  const r = su(e.title, s)
  return n === r.slice(3) ? n : `${n}${r}`
}
function su(e, t) {
  return t === !1
    ? ''
    : t === !0 || t === void 0
      ? ` | ${e}`
      : e === t
        ? ''
        : ` | ${t}`
}
function ru(e, t) {
  const [n, s] = t
  if (n !== 'meta') return !1
  const r = Object.entries(s)[0]
  return r == null ? !1 : e.some(([o, i]) => o === n && i[r[0]] === r[1])
}
function ki(e, t) {
  return [...e.filter((n) => !ru(t, n)), ...t]
}
const ou = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g,
  iu = /^[a-z]:/i
function so(e) {
  const t = iu.exec(e),
    n = t ? t[0] : ''
  return (
    n +
    e
      .slice(n.length)
      .replace(ou, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}
const gs = new Set()
function lu(e) {
  if (gs.size === 0) {
    const n =
      (typeof process == 'object' &&
        (ps == null ? void 0 : ps.VITE_EXTRA_EXTENSIONS)) ||
      (hs == null ? void 0 : hs.VITE_EXTRA_EXTENSIONS) ||
      ''
    ;(
      '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip' +
      (n && typeof n == 'string' ? ',' + n : '')
    )
      .split(',')
      .forEach((s) => gs.add(s))
  }
  const t = e.split('.').pop()
  return t == null || !gs.has(t.toLowerCase())
}
const cu = Symbol(),
  ht = Lo(Oa)
function sf(e) {
  const t = se(() => nu(ht.value, e.data.relativePath)),
    n = t.value.appearance,
    s =
      n === 'force-dark'
        ? de(!0)
        : n
          ? za({
              storageKey: Ya,
              initialValue: () => (typeof n == 'string' ? n : 'auto'),
              ...(typeof n == 'object' ? n : {}),
            })
          : de(!1)
  return {
    site: t,
    theme: se(() => t.value.themeConfig),
    page: se(() => e.data),
    frontmatter: se(() => e.data.frontmatter),
    params: se(() => e.data.params),
    lang: se(() => t.value.lang),
    dir: se(() => e.data.frontmatter.dir || t.value.dir),
    localeIndex: se(() => t.value.localeIndex || 'root'),
    title: se(() => ji(t.value, e.data)),
    description: se(() => e.data.description || t.value.description),
    isDark: s,
  }
}
function au() {
  const e = Rt(cu)
  if (!e) throw new Error('vitepress data not properly injected in app')
  return e
}
function uu(e, t) {
  return `${e}${t}`.replace(/\/+/g, '/')
}
function ro(e) {
  return Hi.test(e) || !e.startsWith('/') ? e : uu(ht.value.base, e)
}
function fu(e) {
  let t = e.replace(/\.html$/, '')
  if (((t = decodeURIComponent(t)), (t = t.replace(/\/$/, '/index')), Ce)) {
    const n = '/zai-ui/'
    t = so(t.slice(n.length).replace(/\//g, '_') || 'index') + '.md'
    let s = __VP_HASH_MAP__[t.toLowerCase()]
    if (
      (s ||
        ((t = t.endsWith('_index.md')
          ? t.slice(0, -9) + '.md'
          : t.slice(0, -3) + '_index.md'),
        (s = __VP_HASH_MAP__[t.toLowerCase()])),
      !s)
    )
      return null
    t = `${n}assets/${t}.${s}.js`
  } else t = `./${so(t.slice(1).replace(/\//g, '_'))}.md.js`
  return t
}
let An = []
function rf(e) {
  An.push(e),
    Jn(() => {
      An = An.filter((t) => t !== e)
    })
}
function du() {
  let e = ht.value.scrollOffset,
    t = 0,
    n = 24
  if (
    (typeof e == 'object' &&
      'padding' in e &&
      ((n = e.padding), (e = e.selector)),
    typeof e == 'number')
  )
    t = e
  else if (typeof e == 'string') t = oo(e, n)
  else if (Array.isArray(e))
    for (const s of e) {
      const r = oo(s, n)
      if (r) {
        t = r
        break
      }
    }
  return t
}
function oo(e, t) {
  const n = document.querySelector(e)
  if (!n) return 0
  const s = n.getBoundingClientRect().bottom
  return s < 0 ? 0 : s + t
}
const hu = Symbol(),
  nr = 'http://a.com',
  pu = () => ({ path: '/', component: null, data: Vi })
function of(e, t) {
  const n = Bn(pu()),
    s = { route: n, go: r }
  async function r(l = Ce ? location.href : '/') {
    var c, a
    ;(l = jn(l)),
      (await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l))) !==
        !1 &&
        (lo(l),
        await i(l),
        await ((a = s.onAfterRouteChanged) == null ? void 0 : a.call(s, l)))
  }
  let o = null
  async function i(l, c = 0, a = !1) {
    var p
    if (
      (await ((p = s.onBeforePageLoad) == null ? void 0 : p.call(s, l))) === !1
    )
      return
    const f = new URL(l, nr),
      h = (o = f.pathname)
    try {
      let v = await e(h)
      if (!v) throw new Error(`Page not found: ${h}`)
      if (o === h) {
        o = null
        const { default: L, __pageData: P } = v
        if (!L) throw new Error(`Invalid route component: ${L}`)
        ;(n.path = Ce ? h : ro(h)),
          (n.component = jt(L)),
          (n.data = jt(P)),
          Ce &&
            nn(() => {
              let U =
                ht.value.base +
                P.relativePath.replace(/(?:(^|\/)index)?\.md$/, '$1')
              if (
                (!ht.value.cleanUrls && !U.endsWith('/') && (U += '.html'),
                U !== f.pathname &&
                  ((f.pathname = U),
                  (l = U + f.search + f.hash),
                  history.replaceState(null, '', l)),
                f.hash && !c)
              ) {
                let W = null
                try {
                  W = document.getElementById(
                    decodeURIComponent(f.hash).slice(1),
                  )
                } catch (J) {
                  console.warn(J)
                }
                if (W) {
                  io(W, f.hash)
                  return
                }
              }
              window.scrollTo(0, c)
            })
      }
    } catch (v) {
      if (
        (!/fetch|Page not found/.test(v.message) &&
          !/^\/404(\.html|\/)?$/.test(l) &&
          console.error(v),
        !a)
      )
        try {
          const L = await fetch(ht.value.base + 'hashmap.json')
          ;(window.__VP_HASH_MAP__ = await L.json()), await i(l, c, !0)
          return
        } catch {}
      o === h &&
        ((o = null),
        (n.path = Ce ? h : ro(h)),
        (n.component = t ? jt(t) : null),
        (n.data = Vi))
    }
  }
  return (
    Ce &&
      (window.addEventListener(
        'click',
        (l) => {
          if (l.target.closest('button')) return
          const a = l.target.closest('a')
          if (
            a &&
            !a.closest('.vp-raw') &&
            (a instanceof SVGElement || !a.download)
          ) {
            const { target: f } = a,
              {
                href: h,
                origin: p,
                pathname: v,
                hash: L,
                search: P,
              } = new URL(
                a.href instanceof SVGAnimatedString ? a.href.animVal : a.href,
                a.baseURI,
              ),
              U = new URL(window.location.href)
            !l.ctrlKey &&
              !l.shiftKey &&
              !l.altKey &&
              !l.metaKey &&
              !f &&
              p === U.origin &&
              lu(v) &&
              (l.preventDefault(),
              v === U.pathname && P === U.search
                ? (L !== U.hash &&
                    (history.pushState(null, '', L),
                    window.dispatchEvent(new Event('hashchange'))),
                  L
                    ? io(a, L, a.classList.contains('header-anchor'))
                    : (lo(h, !1), window.scrollTo(0, 0)))
                : r(h))
          }
        },
        { capture: !0 },
      ),
      window.addEventListener('popstate', async (l) => {
        var c
        await i(jn(location.href), (l.state && l.state.scrollPosition) || 0),
          (c = s.onAfterRouteChanged) == null || c.call(s, location.href)
      }),
      window.addEventListener('hashchange', (l) => {
        l.preventDefault()
      })),
    s
  )
}
function gu() {
  const e = Rt(hu)
  if (!e) throw new Error('useRouter() is called without provider.')
  return e
}
function Di() {
  return gu().route
}
function io(e, t, n = !1) {
  let s = null
  try {
    s = e.classList.contains('header-anchor')
      ? e
      : document.getElementById(decodeURIComponent(t).slice(1))
  } catch (r) {
    console.warn(r)
  }
  if (s) {
    let r = function () {
      !n || Math.abs(i - window.scrollY) > window.innerHeight
        ? window.scrollTo(0, i)
        : window.scrollTo({ left: 0, top: i, behavior: 'smooth' })
    }
    const o = parseInt(window.getComputedStyle(s).paddingTop, 10),
      i = window.scrollY + s.getBoundingClientRect().top - du() + o
    requestAnimationFrame(r)
  }
}
function lo(e, t = !0) {
  if (Ce && jn(e) !== jn(location.href)) {
    const n = location.hash
    history.replaceState({ scrollPosition: window.scrollY }, document.title),
      history.pushState(null, '', e),
      t &&
        new URL(e, nr).hash !== n &&
        window.dispatchEvent(new Event('hashchange'))
  }
}
function jn(e) {
  const t = new URL(e, nr)
  return (
    (t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, '$1')),
    ht.value.cleanUrls
      ? (t.pathname = t.pathname.replace(/\.html$/, ''))
      : !t.pathname.endsWith('/') &&
        !t.pathname.endsWith('.html') &&
        (t.pathname += '.html'),
    t.pathname + t.search + t.hash
  )
}
const ms = () => An.forEach((e) => e()),
  lf = Wo({
    name: 'VitePressContent',
    props: { as: { type: [Object, String], default: 'div' } },
    setup(e) {
      const t = Di(),
        { site: n } = au()
      return () =>
        Ls(e.as, n.value.contentProps ?? { style: { position: 'relative' } }, [
          t.component
            ? Ls(t.component, {
                onVnodeMounted: ms,
                onVnodeUpdated: ms,
                onVnodeUnmounted: ms,
              })
            : '404 Page Not Found',
        ])
    },
  }),
  cf = Wo({
    setup(e, { slots: t }) {
      const n = de(!1)
      return (
        Nt(() => {
          n.value = !0
        }),
        () => (n.value && t.default ? t.default() : null)
      )
    },
  })
function af() {
  Ce &&
    window.addEventListener('click', (e) => {
      var n
      const t = e.target
      if (t.matches('.vp-code-group input')) {
        const s = (n = t.parentElement) == null ? void 0 : n.parentElement
        if (!s) return
        const r = Array.from(s.querySelectorAll('input')).indexOf(t)
        if (r < 0) return
        const o = s.querySelector('.blocks')
        if (!o) return
        const i = Array.from(o.children).find((a) =>
          a.classList.contains('active'),
        )
        if (!i) return
        const l = o.children[r]
        if (!l || i === l) return
        i.classList.remove('active'), l.classList.add('active')
        const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`)
        c == null || c.scrollIntoView({ block: 'nearest' })
      }
    })
}
function uf() {
  if (Ce) {
    const e = new WeakMap()
    window.addEventListener('click', (t) => {
      var s
      const n = t.target
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement,
          o = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling
        if (!r || !o) return
        const i = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className),
          l = ['.vp-copy-ignore', '.diff.remove'],
          c = o.cloneNode(!0)
        c.querySelectorAll(l.join(',')).forEach((f) => f.remove())
        let a = c.textContent || ''
        i && (a = a.replace(/^ *(\$|>) /gm, '').trim()),
          mu(a).then(() => {
            n.classList.add('copied'), clearTimeout(e.get(n))
            const f = setTimeout(() => {
              n.classList.remove('copied'), n.blur(), e.delete(n)
            }, 2e3)
            e.set(n, f)
          })
      }
    })
  }
}
async function mu(e) {
  try {
    return navigator.clipboard.writeText(e)
  } catch {
    const t = document.createElement('textarea'),
      n = document.activeElement
    ;(t.value = e),
      t.setAttribute('readonly', ''),
      (t.style.contain = 'strict'),
      (t.style.position = 'absolute'),
      (t.style.left = '-9999px'),
      (t.style.fontSize = '12pt')
    const s = document.getSelection(),
      r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null
    document.body.appendChild(t),
      t.select(),
      (t.selectionStart = 0),
      (t.selectionEnd = e.length),
      document.execCommand('copy'),
      document.body.removeChild(t),
      r && (s.removeAllRanges(), s.addRange(r)),
      n && n.focus()
  }
}
function ff(e, t) {
  let n = !0,
    s = []
  const r = (o) => {
    if (n) {
      ;(n = !1),
        o.forEach((l) => {
          const c = ys(l)
          for (const a of document.head.children)
            if (a.isEqualNode(c)) {
              s.push(a)
              return
            }
        })
      return
    }
    const i = o.map(ys)
    s.forEach((l, c) => {
      const a = i.findIndex((f) =>
        f == null ? void 0 : f.isEqualNode(l ?? null),
      )
      a !== -1 ? delete i[a] : (l == null || l.remove(), delete s[c])
    }),
      i.forEach((l) => l && document.head.appendChild(l)),
      (s = [...s, ...i].filter(Boolean))
  }
  ko(() => {
    const o = e.data,
      i = t.value,
      l = o && o.description,
      c = (o && o.frontmatter.head) || [],
      a = ji(i, o)
    a !== document.title && (document.title = a)
    const f = l || i.description
    let h = document.querySelector('meta[name=description]')
    h
      ? h.getAttribute('content') !== f && h.setAttribute('content', f)
      : ys(['meta', { name: 'description', content: f }]),
      r(ki(i.head, _u(c)))
  })
}
function ys([e, t, n]) {
  const s = document.createElement(e)
  for (const r in t) s.setAttribute(r, t[r])
  return n && (s.innerHTML = n), e === 'script' && !t.async && (s.async = !1), s
}
function yu(e) {
  return e[0] === 'meta' && e[1] && e[1].name === 'description'
}
function _u(e) {
  return e.filter((t) => !yu(t))
}
const _s = new Set(),
  Ui = () => document.createElement('link'),
  bu = (e) => {
    const t = Ui()
    ;(t.rel = 'prefetch'), (t.href = e), document.head.appendChild(t)
  },
  vu = (e) => {
    const t = new XMLHttpRequest()
    t.open('GET', e, (t.withCredentials = !0)), t.send()
  }
let En
const wu =
  Ce &&
  (En = Ui()) &&
  En.relList &&
  En.relList.supports &&
  En.relList.supports('prefetch')
    ? bu
    : vu
function df() {
  if (!Ce || !window.IntersectionObserver) return
  let e
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return
  const t = window.requestIdleCallback || setTimeout
  let n = null
  const s = () => {
    n && n.disconnect(),
      (n = new IntersectionObserver((o) => {
        o.forEach((i) => {
          if (i.isIntersecting) {
            const l = i.target
            n.unobserve(l)
            const { pathname: c } = l
            if (!_s.has(c)) {
              _s.add(c)
              const a = fu(c)
              a && wu(a)
            }
          }
        })
      })),
      t(() => {
        document.querySelectorAll('#app a').forEach((o) => {
          const { hostname: i, pathname: l } = new URL(
              o.href instanceof SVGAnimatedString ? o.href.animVal : o.href,
              o.baseURI,
            ),
            c = l.match(/\.\w+$/)
          ;(c && c[0] !== '.html') ||
            (o.target !== '_blank' &&
              i === location.hostname &&
              (l !== location.pathname ? n.observe(o) : _s.add(l)))
        })
      })
  }
  Nt(s)
  const r = Di()
  De(() => r.path, s),
    Jn(() => {
      n && n.disconnect()
    })
}
export {
  Uu as $,
  Jn as A,
  Ru as B,
  Go as C,
  du as D,
  Su as E,
  ge as F,
  Ou as G,
  Lo as H,
  rf as I,
  ce as J,
  Au as K,
  Hi as L,
  Di as M,
  $c as N,
  Rt as O,
  nf as P,
  Fs as Q,
  Qu as R,
  Zu as S,
  mi as T,
  nn as U,
  tf as V,
  Kn as W,
  ef as X,
  _c as Y,
  Iu as Z,
  qu as _,
  di as a,
  Du as a0,
  Pu as a1,
  Lu as a2,
  Vu as a3,
  ku as a4,
  Ku as a5,
  $u as a6,
  ve as a7,
  Ot as a8,
  sn as a9,
  zo as aa,
  Cu as ab,
  Ls as ac,
  sc as ad,
  Nu as ae,
  Bn as af,
  ju as ag,
  Bu as ah,
  Gu as ai,
  zu as aj,
  Xu as ak,
  Yu as al,
  ff as am,
  hu as an,
  sf as ao,
  cu as ap,
  lf as aq,
  cf as ar,
  ht as as,
  Wu as at,
  of as au,
  fu as av,
  Ju as aw,
  df as ax,
  uf as ay,
  af as az,
  ai as b,
  Fu as c,
  Wo as d,
  Hu as e,
  lu as f,
  ro as g,
  de as h,
  tu as i,
  Ce as j,
  se as k,
  Nt as l,
  fi as m,
  $s as n,
  li as o,
  Mo as p,
  xu as q,
  Mu as r,
  Tu as s,
  Eu as t,
  au as u,
  eu as v,
  Bl as w,
  Pi as x,
  De as y,
  ko as z,
}
