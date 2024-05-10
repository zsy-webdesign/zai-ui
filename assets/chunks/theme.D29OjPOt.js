import {
  d as _,
  o as a,
  c as l,
  r as p,
  a as D,
  t as T,
  n as S,
  b as L,
  w as f,
  e as g,
  T as be,
  _ as P,
  u as ct,
  i as ut,
  f as dt,
  g as Be,
  h as V,
  j as Q,
  k as b,
  l as Z,
  m as d,
  p as i,
  q as H,
  s as F,
  v as K,
  x as Ce,
  y as W,
  z as ke,
  A as x,
  B as We,
  C as pt,
  D as vt,
  E as q,
  F as N,
  G as A,
  H as Ge,
  I as ye,
  J as y,
  K as J,
  L as Re,
  M as we,
  N as Y,
  O as Le,
  P as ht,
  Q as U,
  R as ft,
  S as mt,
  U as _t,
  V as Ke,
  W as gt,
  X as qe,
  Y as Je,
  Z as $t,
  $ as bt,
  a0 as kt,
  a1 as ee,
  a2 as Te,
  a3 as je,
  a4 as yt,
  a5 as wt,
} from './framework.cSrMGLof.js'
const Lt = _({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(e) {
      return (t, n) => (
        a(),
        l(
          'span',
          { class: S(['VPBadge', t.type]) },
          [p(t.$slots, 'default', {}, () => [D(T(t.text), 1)])],
          2,
        )
      )
    },
  }),
  Pt = { key: 0, class: 'VPBackdrop' },
  Vt = _({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(e) {
      return (t, n) => (
        a(),
        L(
          be,
          { name: 'fade' },
          {
            default: f(() => [t.show ? (a(), l('div', Pt)) : g('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  St = P(Vt, [['__scopeId', 'data-v-b53ca58e']]),
  I = ct
function Mt(e, t) {
  let n,
    s = !1
  return () => {
    n && clearTimeout(n),
      s
        ? (n = setTimeout(e, t))
        : (e(), (s = !0) && setTimeout(() => (s = !1), t))
  }
}
function Ie(e) {
  return /^\//.test(e) ? e : `/${e}`
}
function He(e) {
  const {
    pathname: t,
    search: n,
    hash: s,
    protocol: o,
  } = new URL(e, 'http://a.com')
  if (ut(e) || e.startsWith('#') || !o.startsWith('http') || !dt(t)) return e
  const { site: r } = I(),
    u =
      t.endsWith('/') || t.endsWith('.html')
        ? e
        : e.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${t.replace(/(\.md)?$/, r.value.cleanUrls ? '' : '.html')}${n}${s}`,
          )
  return Be(u)
}
const Fe = V(Q ? location.hash : '')
Q &&
  window.addEventListener('hashchange', () => {
    Fe.value = location.hash
  })
function te({ removeCurrent: e = !0, correspondingLink: t = !1 } = {}) {
  const { site: n, localeIndex: s, page: o, theme: r } = I(),
    u = b(() => {
      var v, h
      return {
        label: (v = n.value.locales[s.value]) == null ? void 0 : v.label,
        link:
          ((h = n.value.locales[s.value]) == null ? void 0 : h.link) ||
          (s.value === 'root' ? '/' : `/${s.value}/`),
      }
    })
  return {
    localeLinks: b(() =>
      Object.entries(n.value.locales).flatMap(([v, h]) =>
        e && u.value.label === h.label
          ? []
          : {
              text: h.label,
              link:
                Ct(
                  h.link || (v === 'root' ? '/' : `/${v}/`),
                  r.value.i18nRouting !== !1 && t,
                  o.value.relativePath.slice(u.value.link.length - 1),
                  !n.value.cleanUrls,
                ) + Fe.value,
            },
      ),
    ),
    currentLang: u,
  }
}
function Ct(e, t, n, s) {
  return t
    ? e.replace(/\/$/, '') +
        Ie(
          n
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, s ? '.html' : ''),
        )
    : e
}
const Tt = (e) => (H('data-v-eb2fe866'), (e = e()), F(), e),
  It = { class: 'NotFound' },
  zt = { class: 'code' },
  Nt = { class: 'title' },
  Bt = Tt(() => d('div', { class: 'divider' }, null, -1)),
  Ht = { class: 'quote' },
  Ft = { class: 'action' },
  At = ['href', 'aria-label'],
  Et = _({
    __name: 'NotFound',
    setup(e) {
      const { site: t, theme: n } = I(),
        { localeLinks: s } = te({ removeCurrent: !1 }),
        o = V('/')
      return (
        Z(() => {
          var u
          const r = window.location.pathname
            .replace(t.value.base, '')
            .replace(/(^.*?\/).*$/, '/$1')
          s.value.length &&
            (o.value =
              ((u = s.value.find(({ link: c }) => c.startsWith(r))) == null
                ? void 0
                : u.link) || s.value[0].link)
        }),
        (r, u) => {
          var c, v, h, $, w
          return (
            a(),
            l('div', It, [
              d(
                'p',
                zt,
                T(((c = i(n).notFound) == null ? void 0 : c.code) ?? '404'),
                1,
              ),
              d(
                'h1',
                Nt,
                T(
                  ((v = i(n).notFound) == null ? void 0 : v.title) ??
                    'PAGE NOT FOUND',
                ),
                1,
              ),
              Bt,
              d(
                'blockquote',
                Ht,
                T(
                  ((h = i(n).notFound) == null ? void 0 : h.quote) ??
                    "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
                ),
                1,
              ),
              d('div', Ft, [
                d(
                  'a',
                  {
                    class: 'link',
                    href: i(Be)(o.value),
                    'aria-label':
                      (($ = i(n).notFound) == null ? void 0 : $.linkLabel) ??
                      'go to home',
                  },
                  T(
                    ((w = i(n).notFound) == null ? void 0 : w.linkText) ??
                      'Take me home',
                  ),
                  9,
                  At,
                ),
              ]),
            ])
          )
        }
      )
    },
  }),
  Dt = P(Et, [['__scopeId', 'data-v-eb2fe866']])
function Ye(e, t) {
  if (Array.isArray(e)) return se(e)
  if (e == null) return []
  t = Ie(t)
  const n = Object.keys(e)
      .sort((o, r) => r.split('/').length - o.split('/').length)
      .find((o) => t.startsWith(Ie(o))),
    s = n ? e[n] : []
  return Array.isArray(s) ? se(s) : se(s.items, s.base)
}
function Zt(e) {
  const t = []
  let n = 0
  for (const s in e) {
    const o = e[s]
    if (o.items) {
      n = t.push(o)
      continue
    }
    t[n] || t.push({ items: [] }), t[n].items.push(o)
  }
  return t
}
function Ot(e) {
  const t = []
  function n(s) {
    for (const o of s)
      o.text &&
        o.link &&
        t.push({ text: o.text, link: o.link, docFooterText: o.docFooterText }),
        o.items && n(o.items)
  }
  return n(e), t
}
function ze(e, t) {
  return Array.isArray(t)
    ? t.some((n) => ze(e, n))
    : K(e, t.link)
      ? !0
      : t.items
        ? ze(e, t.items)
        : !1
}
function se(e, t) {
  return [...e].map((n) => {
    const s = { ...n },
      o = s.base || t
    return (
      o && s.link && (s.link = o + s.link),
      s.items && (s.items = se(s.items, o)),
      s
    )
  })
}
function G() {
  const { frontmatter: e, page: t, theme: n } = I(),
    s = Ce('(min-width: 960px)'),
    o = V(!1),
    r = b(() => {
      const k = n.value.sidebar,
        m = t.value.relativePath
      return k ? Ye(k, m) : []
    }),
    u = V(r.value)
  W(r, (k, m) => {
    JSON.stringify(k) !== JSON.stringify(m) && (u.value = r.value)
  })
  const c = b(
      () =>
        e.value.sidebar !== !1 &&
        u.value.length > 0 &&
        e.value.layout !== 'home',
    ),
    v = b(() =>
      h
        ? e.value.aside == null
          ? n.value.aside === 'left'
          : e.value.aside === 'left'
        : !1,
    ),
    h = b(() =>
      e.value.layout === 'home'
        ? !1
        : e.value.aside != null
          ? !!e.value.aside
          : n.value.aside !== !1,
    ),
    $ = b(() => c.value && s.value),
    w = b(() => (c.value ? Zt(u.value) : []))
  function M() {
    o.value = !0
  }
  function C() {
    o.value = !1
  }
  function z() {
    o.value ? C() : M()
  }
  return {
    isOpen: o,
    sidebar: u,
    sidebarGroups: w,
    hasSidebar: c,
    hasAside: h,
    leftAside: v,
    isSidebarEnabled: $,
    open: M,
    close: C,
    toggle: z,
  }
}
function jt(e, t) {
  let n
  ke(() => {
    n = e.value ? document.activeElement : void 0
  }),
    Z(() => {
      window.addEventListener('keyup', s)
    }),
    x(() => {
      window.removeEventListener('keyup', s)
    })
  function s(o) {
    o.key === 'Escape' && e.value && (t(), n == null || n.focus())
  }
}
function Ut(e) {
  const { page: t } = I(),
    n = V(!1),
    s = b(() => e.value.collapsed != null),
    o = b(() => !!e.value.link),
    r = V(!1),
    u = () => {
      r.value = K(t.value.relativePath, e.value.link)
    }
  W([t, e, Fe], u), Z(u)
  const c = b(() =>
      r.value
        ? !0
        : e.value.items
          ? ze(t.value.relativePath, e.value.items)
          : !1,
    ),
    v = b(() => !!(e.value.items && e.value.items.length))
  ke(() => {
    n.value = !!(s.value && e.value.collapsed)
  }),
    We(() => {
      ;(r.value || c.value) && (n.value = !1)
    })
  function h() {
    s.value && (n.value = !n.value)
  }
  return {
    collapsed: n,
    collapsible: s,
    isLink: o,
    isActiveLink: r,
    hasActiveLink: c,
    hasChildren: v,
    toggle: h,
  }
}
function Wt() {
  const { hasSidebar: e } = G(),
    t = Ce('(min-width: 960px)'),
    n = Ce('(min-width: 1280px)')
  return {
    isAsideEnabled: b(() =>
      !n.value && !t.value ? !1 : e.value ? n.value : t.value,
    ),
  }
}
const Ne = []
function Qe(e) {
  return (
    (typeof e.outline == 'object' &&
      !Array.isArray(e.outline) &&
      e.outline.label) ||
    e.outlineTitle ||
    'On this page'
  )
}
function Ae(e) {
  const t = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((n) => n.id && n.hasChildNodes())
    .map((n) => {
      const s = Number(n.tagName[1])
      return { element: n, title: Gt(n), link: '#' + n.id, level: s }
    })
  return Rt(t, e)
}
function Gt(e) {
  let t = ''
  for (const n of e.childNodes)
    if (n.nodeType === 1) {
      if (
        n.classList.contains('VPBadge') ||
        n.classList.contains('header-anchor') ||
        n.classList.contains('ignore-header')
      )
        continue
      t += n.textContent
    } else n.nodeType === 3 && (t += n.textContent)
  return t.trim()
}
function Rt(e, t) {
  if (t === !1) return []
  const n = (typeof t == 'object' && !Array.isArray(t) ? t.level : t) || 2,
    [s, o] = typeof n == 'number' ? [n, n] : n === 'deep' ? [2, 6] : n
  ;(e = e.filter((u) => u.level >= s && u.level <= o)), (Ne.length = 0)
  for (const { element: u, link: c } of e) Ne.push({ element: u, link: c })
  const r = []
  e: for (let u = 0; u < e.length; u++) {
    const c = e[u]
    if (u === 0) r.push(c)
    else {
      for (let v = u - 1; v >= 0; v--) {
        const h = e[v]
        if (h.level < c.level) {
          ;(h.children || (h.children = [])).push(c)
          continue e
        }
      }
      r.push(c)
    }
  }
  return r
}
function Kt(e, t) {
  const { isAsideEnabled: n } = Wt(),
    s = Mt(r, 100)
  let o = null
  Z(() => {
    requestAnimationFrame(r), window.addEventListener('scroll', s)
  }),
    pt(() => {
      u(location.hash)
    }),
    x(() => {
      window.removeEventListener('scroll', s)
    })
  function r() {
    if (!n.value) return
    const c = window.scrollY,
      v = window.innerHeight,
      h = document.body.offsetHeight,
      $ = Math.abs(c + v - h) < 1,
      w = Ne.map(({ element: C, link: z }) => ({ link: z, top: qt(C) }))
        .filter(({ top: C }) => !Number.isNaN(C))
        .sort((C, z) => C.top - z.top)
    if (!w.length) {
      u(null)
      return
    }
    if (c < 1) {
      u(null)
      return
    }
    if ($) {
      u(w[w.length - 1].link)
      return
    }
    let M = null
    for (const { link: C, top: z } of w) {
      if (z > c + vt() + 4) break
      M = C
    }
    u(M)
  }
  function u(c) {
    o && o.classList.remove('active'),
      c == null
        ? (o = null)
        : (o = e.value.querySelector(`a[href="${decodeURIComponent(c)}"]`))
    const v = o
    v
      ? (v.classList.add('active'),
        (t.value.style.top = v.offsetTop + 39 + 'px'),
        (t.value.style.opacity = '1'))
      : ((t.value.style.top = '33px'), (t.value.style.opacity = '0'))
  }
}
function qt(e) {
  let t = 0
  for (; e !== document.body; ) {
    if (e === null) return NaN
    ;(t += e.offsetTop), (e = e.offsetParent)
  }
  return t
}
const Jt = ['href', 'title'],
  Yt = _({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(e) {
      function t({ target: n }) {
        const s = n.href.split('#')[1],
          o = document.getElementById(decodeURIComponent(s))
        o == null || o.focus({ preventScroll: !0 })
      }
      return (n, s) => {
        const o = q('VPDocOutlineItem', !0)
        return (
          a(),
          l(
            'ul',
            { class: S(['VPDocOutlineItem', n.root ? 'root' : 'nested']) },
            [
              (a(!0),
              l(
                N,
                null,
                A(
                  n.headers,
                  ({ children: r, link: u, title: c }) => (
                    a(),
                    l('li', null, [
                      d(
                        'a',
                        {
                          class: 'outline-link',
                          href: u,
                          onClick: t,
                          title: c,
                        },
                        T(c),
                        9,
                        Jt,
                      ),
                      r != null && r.length
                        ? (a(),
                          L(o, { key: 0, headers: r }, null, 8, ['headers']))
                        : g('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        )
      }
    },
  }),
  Xe = P(Yt, [['__scopeId', 'data-v-57d8e86a']]),
  Qt = (e) => (H('data-v-0a9ad493'), (e = e()), F(), e),
  Xt = { class: 'content' },
  xt = { class: 'outline-title', role: 'heading', 'aria-level': '2' },
  en = { 'aria-labelledby': 'doc-outline-aria-label' },
  tn = Qt(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'doc-outline-aria-label' },
      ' Table of Contents for current page ',
      -1,
    ),
  ),
  nn = _({
    __name: 'VPDocAsideOutline',
    setup(e) {
      const { frontmatter: t, theme: n } = I(),
        s = Ge([])
      ye(() => {
        s.value = Ae(t.value.outline ?? n.value.outline)
      })
      const o = V(),
        r = V()
      return (
        Kt(o, r),
        (u, c) => (
          a(),
          l(
            'div',
            {
              class: S([
                'VPDocAsideOutline',
                { 'has-outline': s.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: o,
              role: 'navigation',
            },
            [
              d('div', Xt, [
                d(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: r },
                  null,
                  512,
                ),
                d('div', xt, T(i(Qe)(i(n))), 1),
                d('nav', en, [
                  tn,
                  y(Xe, { headers: s.value, root: !0 }, null, 8, ['headers']),
                ]),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  on = P(nn, [['__scopeId', 'data-v-0a9ad493']]),
  sn = { class: 'VPDocAsideCarbonAds' },
  an = _({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(e) {
      const t = () => null
      return (n, s) => (
        a(),
        l('div', sn, [
          y(i(t), { 'carbon-ads': n.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  rn = (e) => (H('data-v-0d8d3f6d'), (e = e()), F(), e),
  ln = { class: 'VPDocAside' },
  cn = rn(() => d('div', { class: 'spacer' }, null, -1)),
  un = _({
    __name: 'VPDocAside',
    setup(e) {
      const { theme: t } = I()
      return (n, s) => (
        a(),
        l('div', ln, [
          p(n.$slots, 'aside-top', {}, void 0, !0),
          p(n.$slots, 'aside-outline-before', {}, void 0, !0),
          y(on),
          p(n.$slots, 'aside-outline-after', {}, void 0, !0),
          cn,
          p(n.$slots, 'aside-ads-before', {}, void 0, !0),
          i(t).carbonAds
            ? (a(),
              L(an, { key: 0, 'carbon-ads': i(t).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : g('', !0),
          p(n.$slots, 'aside-ads-after', {}, void 0, !0),
          p(n.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  dn = P(un, [['__scopeId', 'data-v-0d8d3f6d']])
function pn() {
  const { theme: e, page: t } = I()
  return b(() => {
    const { text: n = 'Edit this page', pattern: s = '' } =
      e.value.editLink || {}
    let o
    return (
      typeof s == 'function'
        ? (o = s(t.value))
        : (o = s.replace(/:path/g, t.value.filePath)),
      { url: o, text: n }
    )
  })
}
function vn() {
  const { page: e, theme: t, frontmatter: n } = I()
  return b(() => {
    var v, h, $, w, M, C, z, k
    const s = Ye(t.value.sidebar, e.value.relativePath),
      o = Ot(s),
      r = o.findIndex((m) => K(e.value.relativePath, m.link)),
      u =
        (((v = t.value.docFooter) == null ? void 0 : v.prev) === !1 &&
          !n.value.prev) ||
        n.value.prev === !1,
      c =
        (((h = t.value.docFooter) == null ? void 0 : h.next) === !1 &&
          !n.value.next) ||
        n.value.next === !1
    return {
      prev: u
        ? void 0
        : {
            text:
              (typeof n.value.prev == 'string'
                ? n.value.prev
                : typeof n.value.prev == 'object'
                  ? n.value.prev.text
                  : void 0) ??
              (($ = o[r - 1]) == null ? void 0 : $.docFooterText) ??
              ((w = o[r - 1]) == null ? void 0 : w.text),
            link:
              (typeof n.value.prev == 'object' ? n.value.prev.link : void 0) ??
              ((M = o[r - 1]) == null ? void 0 : M.link),
          },
      next: c
        ? void 0
        : {
            text:
              (typeof n.value.next == 'string'
                ? n.value.next
                : typeof n.value.next == 'object'
                  ? n.value.next.text
                  : void 0) ??
              ((C = o[r + 1]) == null ? void 0 : C.docFooterText) ??
              ((z = o[r + 1]) == null ? void 0 : z.text),
            link:
              (typeof n.value.next == 'object' ? n.value.next.link : void 0) ??
              ((k = o[r + 1]) == null ? void 0 : k.link),
          },
    }
  })
}
const j = _({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(e) {
      const t = e,
        n = b(() => t.tag ?? (t.href ? 'a' : 'span')),
        s = b(() => t.href && Re.test(t.href))
      return (o, r) => (
        a(),
        L(
          J(n.value),
          {
            class: S([
              'VPLink',
              {
                link: o.href,
                'vp-external-link-icon': s.value,
                'no-icon': o.noIcon,
              },
            ]),
            href: o.href ? i(He)(o.href) : void 0,
            target: o.target ?? (s.value ? '_blank' : void 0),
            rel: o.rel ?? (s.value ? 'noreferrer' : void 0),
          },
          { default: f(() => [p(o.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  hn = { class: 'VPLastUpdated' },
  fn = ['datetime'],
  mn = _({
    __name: 'VPDocFooterLastUpdated',
    setup(e) {
      const { theme: t, page: n, frontmatter: s, lang: o } = I(),
        r = b(() => new Date(s.value.lastUpdated ?? n.value.lastUpdated)),
        u = b(() => r.value.toISOString()),
        c = V('')
      return (
        Z(() => {
          ke(() => {
            var v, h, $
            c.value = new Intl.DateTimeFormat(
              (h =
                (v = t.value.lastUpdated) == null ? void 0 : v.formatOptions) !=
                null && h.forceLocale
                ? o.value
                : void 0,
              (($ = t.value.lastUpdated) == null
                ? void 0
                : $.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(r.value)
          })
        }),
        (v, h) => {
          var $
          return (
            a(),
            l('p', hn, [
              D(
                T(
                  (($ = i(t).lastUpdated) == null ? void 0 : $.text) ||
                    i(t).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              d('time', { datetime: u.value }, T(c.value), 9, fn),
            ])
          )
        }
      )
    },
  }),
  _n = P(mn, [['__scopeId', 'data-v-7cbdce65']]),
  gn = (e) => (H('data-v-bdab53b7'), (e = e()), F(), e),
  $n = { key: 0, class: 'VPDocFooter' },
  bn = { key: 0, class: 'edit-info' },
  kn = { key: 0, class: 'edit-link' },
  yn = gn(() =>
    d('span', { class: 'vpi-square-pen edit-link-icon' }, null, -1),
  ),
  wn = { key: 1, class: 'last-updated' },
  Ln = { key: 1, class: 'prev-next' },
  Pn = { class: 'pager' },
  Vn = ['innerHTML'],
  Sn = ['innerHTML'],
  Mn = { class: 'pager' },
  Cn = ['innerHTML'],
  Tn = ['innerHTML'],
  In = _({
    __name: 'VPDocFooter',
    setup(e) {
      const { theme: t, page: n, frontmatter: s } = I(),
        o = pn(),
        r = vn(),
        u = b(() => t.value.editLink && s.value.editLink !== !1),
        c = b(() => n.value.lastUpdated && s.value.lastUpdated !== !1),
        v = b(() => u.value || c.value || r.value.prev || r.value.next)
      return (h, $) => {
        var w, M, C, z
        return v.value
          ? (a(),
            l('footer', $n, [
              p(h.$slots, 'doc-footer-before', {}, void 0, !0),
              u.value || c.value
                ? (a(),
                  l('div', bn, [
                    u.value
                      ? (a(),
                        l('div', kn, [
                          y(
                            j,
                            {
                              class: 'edit-link-button',
                              href: i(o).url,
                              'no-icon': !0,
                            },
                            {
                              default: f(() => [yn, D(' ' + T(i(o).text), 1)]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : g('', !0),
                    c.value ? (a(), l('div', wn, [y(_n)])) : g('', !0),
                  ]))
                : g('', !0),
              ((w = i(r).prev) != null && w.link) ||
              ((M = i(r).next) != null && M.link)
                ? (a(),
                  l('nav', Ln, [
                    d('div', Pn, [
                      (C = i(r).prev) != null && C.link
                        ? (a(),
                          L(
                            j,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: i(r).prev.link,
                            },
                            {
                              default: f(() => {
                                var k
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((k = i(t).docFooter) == null
                                          ? void 0
                                          : k.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    Vn,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).prev.text,
                                    },
                                    null,
                                    8,
                                    Sn,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : g('', !0),
                    ]),
                    d('div', Mn, [
                      (z = i(r).next) != null && z.link
                        ? (a(),
                          L(
                            j,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: i(r).next.link,
                            },
                            {
                              default: f(() => {
                                var k
                                return [
                                  d(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        ((k = i(t).docFooter) == null
                                          ? void 0
                                          : k.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    Cn,
                                  ),
                                  d(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: i(r).next.text,
                                    },
                                    null,
                                    8,
                                    Tn,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : g('', !0),
                    ]),
                  ]))
                : g('', !0),
            ]))
          : g('', !0)
      }
    },
  }),
  zn = P(In, [['__scopeId', 'data-v-bdab53b7']]),
  Nn = (e) => (H('data-v-cd6cb129'), (e = e()), F(), e),
  Bn = { class: 'container' },
  Hn = Nn(() => d('div', { class: 'aside-curtain' }, null, -1)),
  Fn = { class: 'aside-container' },
  An = { class: 'aside-content' },
  En = { class: 'content' },
  Dn = { class: 'content-container' },
  Zn = { class: 'main' },
  On = _({
    __name: 'VPDoc',
    setup(e) {
      const { theme: t } = I(),
        n = we(),
        { hasSidebar: s, hasAside: o, leftAside: r } = G(),
        u = b(() => n.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (c, v) => {
        const h = q('Content')
        return (
          a(),
          l(
            'div',
            { class: S(['VPDoc', { 'has-sidebar': i(s), 'has-aside': i(o) }]) },
            [
              p(c.$slots, 'doc-top', {}, void 0, !0),
              d('div', Bn, [
                i(o)
                  ? (a(),
                    l(
                      'div',
                      { key: 0, class: S(['aside', { 'left-aside': i(r) }]) },
                      [
                        Hn,
                        d('div', Fn, [
                          d('div', An, [
                            y(dn, null, {
                              'aside-top': f(() => [
                                p(c.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': f(() => [
                                p(c.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': f(() => [
                                p(
                                  c.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': f(() => [
                                p(
                                  c.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': f(() => [
                                p(c.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': f(() => [
                                p(c.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : g('', !0),
                d('div', En, [
                  d('div', Dn, [
                    p(c.$slots, 'doc-before', {}, void 0, !0),
                    d('main', Zn, [
                      y(
                        h,
                        {
                          class: S([
                            'vp-doc',
                            [
                              u.value,
                              i(t).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    y(zn, null, {
                      'doc-footer-before': f(() => [
                        p(c.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    p(c.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              p(c.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  jn = P(On, [['__scopeId', 'data-v-cd6cb129']]),
  Un = _({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(e) {
      const t = e,
        n = b(() => t.href && Re.test(t.href)),
        s = b(() => (t.tag || t.href ? 'a' : 'button'))
      return (o, r) => (
        a(),
        L(
          J(s.value),
          {
            class: S(['VPButton', [o.size, o.theme]]),
            href: o.href ? i(He)(o.href) : void 0,
            target: t.target ?? (n.value ? '_blank' : void 0),
            rel: t.rel ?? (n.value ? 'noreferrer' : void 0),
          },
          { default: f(() => [D(T(o.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  Wn = P(Un, [['__scopeId', 'data-v-f1acf07d']]),
  Gn = ['src', 'alt'],
  Rn = _({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(e) {
      return (t, n) => {
        const s = q('VPImage', !0)
        return t.image
          ? (a(),
            l(
              N,
              { key: 0 },
              [
                typeof t.image == 'string' || 'src' in t.image
                  ? (a(),
                    l(
                      'img',
                      Y(
                        { key: 0, class: 'VPImage' },
                        typeof t.image == 'string'
                          ? t.$attrs
                          : { ...t.image, ...t.$attrs },
                        {
                          src: i(Be)(
                            typeof t.image == 'string' ? t.image : t.image.src,
                          ),
                          alt:
                            t.alt ??
                            (typeof t.image == 'string'
                              ? ''
                              : t.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      Gn,
                    ))
                  : (a(),
                    l(
                      N,
                      { key: 1 },
                      [
                        y(
                          s,
                          Y(
                            {
                              class: 'dark',
                              image: t.image.dark,
                              alt: t.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        y(
                          s,
                          Y(
                            {
                              class: 'light',
                              image: t.image.light,
                              alt: t.image.alt,
                            },
                            t.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : g('', !0)
      }
    },
  }),
  $e = P(Rn, [['__scopeId', 'data-v-3d22b0e2']]),
  Kn = (e) => (H('data-v-de9a9dd8'), (e = e()), F(), e),
  qn = { class: 'container' },
  Jn = { class: 'main' },
  Yn = { key: 0, class: 'name' },
  Qn = ['innerHTML'],
  Xn = ['innerHTML'],
  xn = ['innerHTML'],
  eo = { key: 0, class: 'actions' },
  to = { key: 0, class: 'image' },
  no = { class: 'image-container' },
  oo = Kn(() => d('div', { class: 'image-bg' }, null, -1)),
  so = _({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(e) {
      const t = Le('hero-image-slot-exists')
      return (n, s) => (
        a(),
        l(
          'div',
          { class: S(['VPHero', { 'has-image': n.image || i(t) }]) },
          [
            d('div', qn, [
              d('div', Jn, [
                p(n.$slots, 'home-hero-info-before', {}, void 0, !0),
                p(
                  n.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    n.name
                      ? (a(),
                        l('h1', Yn, [
                          d(
                            'span',
                            { innerHTML: n.name, class: 'clip' },
                            null,
                            8,
                            Qn,
                          ),
                        ]))
                      : g('', !0),
                    n.text
                      ? (a(),
                        l(
                          'p',
                          { key: 1, innerHTML: n.text, class: 'text' },
                          null,
                          8,
                          Xn,
                        ))
                      : g('', !0),
                    n.tagline
                      ? (a(),
                        l(
                          'p',
                          { key: 2, innerHTML: n.tagline, class: 'tagline' },
                          null,
                          8,
                          xn,
                        ))
                      : g('', !0),
                  ],
                  !0,
                ),
                p(n.$slots, 'home-hero-info-after', {}, void 0, !0),
                n.actions
                  ? (a(),
                    l('div', eo, [
                      (a(!0),
                      l(
                        N,
                        null,
                        A(
                          n.actions,
                          (o) => (
                            a(),
                            l('div', { key: o.link, class: 'action' }, [
                              y(
                                Wn,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: o.theme,
                                  text: o.text,
                                  href: o.link,
                                  target: o.target,
                                  rel: o.rel,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : g('', !0),
                p(n.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              n.image || i(t)
                ? (a(),
                  l('div', to, [
                    d('div', no, [
                      oo,
                      p(
                        n.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          n.image
                            ? (a(),
                              L(
                                $e,
                                { key: 0, class: 'image-src', image: n.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : g('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : g('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  ao = P(so, [['__scopeId', 'data-v-de9a9dd8']]),
  ro = _({
    __name: 'VPHomeHero',
    setup(e) {
      const { frontmatter: t } = I()
      return (n, s) =>
        i(t).hero
          ? (a(),
            L(
              ao,
              {
                key: 0,
                class: 'VPHomeHero',
                name: i(t).hero.name,
                text: i(t).hero.text,
                tagline: i(t).hero.tagline,
                image: i(t).hero.image,
                actions: i(t).hero.actions,
              },
              {
                'home-hero-info-before': f(() => [
                  p(n.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': f(() => [p(n.$slots, 'home-hero-info')]),
                'home-hero-info-after': f(() => [
                  p(n.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': f(() => [
                  p(n.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': f(() => [p(n.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : g('', !0)
    },
  }),
  io = (e) => (H('data-v-a43d6e3b'), (e = e()), F(), e),
  lo = { class: 'box' },
  co = { key: 0, class: 'icon' },
  uo = ['innerHTML'],
  po = ['innerHTML'],
  vo = ['innerHTML'],
  ho = { key: 4, class: 'link-text' },
  fo = { class: 'link-text-value' },
  mo = io(() =>
    d('span', { class: 'vpi-arrow-right link-text-icon' }, null, -1),
  ),
  _o = _({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(e) {
      return (t, n) => (
        a(),
        L(
          j,
          {
            class: 'VPFeature',
            href: t.link,
            rel: t.rel,
            target: t.target,
            'no-icon': !0,
            tag: t.link ? 'a' : 'div',
          },
          {
            default: f(() => [
              d('article', lo, [
                typeof t.icon == 'object' && t.icon.wrap
                  ? (a(),
                    l('div', co, [
                      y(
                        $e,
                        {
                          image: t.icon,
                          alt: t.icon.alt,
                          height: t.icon.height || 48,
                          width: t.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof t.icon == 'object'
                    ? (a(),
                      L(
                        $e,
                        {
                          key: 1,
                          image: t.icon,
                          alt: t.icon.alt,
                          height: t.icon.height || 48,
                          width: t.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ))
                    : t.icon
                      ? (a(),
                        l(
                          'div',
                          { key: 2, class: 'icon', innerHTML: t.icon },
                          null,
                          8,
                          uo,
                        ))
                      : g('', !0),
                d('h2', { class: 'title', innerHTML: t.title }, null, 8, po),
                t.details
                  ? (a(),
                    l(
                      'p',
                      { key: 3, class: 'details', innerHTML: t.details },
                      null,
                      8,
                      vo,
                    ))
                  : g('', !0),
                t.linkText
                  ? (a(),
                    l('div', ho, [d('p', fo, [D(T(t.linkText) + ' ', 1), mo])]))
                  : g('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag'],
        )
      )
    },
  }),
  go = P(_o, [['__scopeId', 'data-v-a43d6e3b']]),
  $o = { key: 0, class: 'VPFeatures' },
  bo = { class: 'container' },
  ko = { class: 'items' },
  yo = _({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(e) {
      const t = e,
        n = b(() => {
          const s = t.features.length
          if (s) {
            if (s === 2) return 'grid-2'
            if (s === 3) return 'grid-3'
            if (s % 3 === 0) return 'grid-6'
            if (s > 3) return 'grid-4'
          } else return
        })
      return (s, o) =>
        s.features
          ? (a(),
            l('div', $o, [
              d('div', bo, [
                d('div', ko, [
                  (a(!0),
                  l(
                    N,
                    null,
                    A(
                      s.features,
                      (r) => (
                        a(),
                        l(
                          'div',
                          { key: r.title, class: S(['item', [n.value]]) },
                          [
                            y(
                              go,
                              {
                                icon: r.icon,
                                title: r.title,
                                details: r.details,
                                link: r.link,
                                'link-text': r.linkText,
                                rel: r.rel,
                                target: r.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : g('', !0)
    },
  }),
  wo = P(yo, [['__scopeId', 'data-v-e5b6504d']]),
  Lo = _({
    __name: 'VPHomeFeatures',
    setup(e) {
      const { frontmatter: t } = I()
      return (n, s) =>
        i(t).features
          ? (a(),
            L(
              wo,
              { key: 0, class: 'VPHomeFeatures', features: i(t).features },
              null,
              8,
              ['features'],
            ))
          : g('', !0)
    },
  }),
  Po = _({
    __name: 'VPHomeContent',
    setup(e) {
      const { width: t } = ht({ includeScrollbar: !1 })
      return (n, s) => (
        a(),
        l(
          'div',
          {
            class: 'vp-doc container',
            style: U(
              i(t) ? { '--vp-offset': `calc(50% - ${i(t) / 2}px)` } : {},
            ),
          },
          [p(n.$slots, 'default', {}, void 0, !0)],
          4,
        )
      )
    },
  }),
  Vo = P(Po, [['__scopeId', 'data-v-2e71b406']]),
  So = { class: 'VPHome' },
  Mo = _({
    __name: 'VPHome',
    setup(e) {
      const { frontmatter: t } = I()
      return (n, s) => {
        const o = q('Content')
        return (
          a(),
          l('div', So, [
            p(n.$slots, 'home-hero-before', {}, void 0, !0),
            y(ro, null, {
              'home-hero-info-before': f(() => [
                p(n.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': f(() => [
                p(n.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': f(() => [
                p(n.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': f(() => [
                p(n.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': f(() => [
                p(n.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            p(n.$slots, 'home-hero-after', {}, void 0, !0),
            p(n.$slots, 'home-features-before', {}, void 0, !0),
            y(Lo),
            p(n.$slots, 'home-features-after', {}, void 0, !0),
            i(t).markdownStyles !== !1
              ? (a(), L(Vo, { key: 0 }, { default: f(() => [y(o)]), _: 1 }))
              : (a(), L(o, { key: 1 })),
          ])
        )
      }
    },
  }),
  Co = P(Mo, [['__scopeId', 'data-v-9f8626b0']]),
  To = {},
  Io = { class: 'VPPage' }
function zo(e, t) {
  const n = q('Content')
  return (
    a(),
    l('div', Io, [p(e.$slots, 'page-top'), y(n), p(e.$slots, 'page-bottom')])
  )
}
const No = P(To, [['render', zo]]),
  Bo = _({
    __name: 'VPContent',
    setup(e) {
      const { page: t, frontmatter: n } = I(),
        { hasSidebar: s } = G()
      return (o, r) => (
        a(),
        l(
          'div',
          {
            class: S([
              'VPContent',
              { 'has-sidebar': i(s), 'is-home': i(n).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            i(t).isNotFound
              ? p(o.$slots, 'not-found', { key: 0 }, () => [y(Dt)], !0)
              : i(n).layout === 'page'
                ? (a(),
                  L(
                    No,
                    { key: 1 },
                    {
                      'page-top': f(() => [
                        p(o.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': f(() => [
                        p(o.$slots, 'page-bottom', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                  ))
                : i(n).layout === 'home'
                  ? (a(),
                    L(
                      Co,
                      { key: 2 },
                      {
                        'home-hero-before': f(() => [
                          p(o.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-info-before': f(() => [
                          p(o.$slots, 'home-hero-info-before', {}, void 0, !0),
                        ]),
                        'home-hero-info': f(() => [
                          p(o.$slots, 'home-hero-info', {}, void 0, !0),
                        ]),
                        'home-hero-info-after': f(() => [
                          p(o.$slots, 'home-hero-info-after', {}, void 0, !0),
                        ]),
                        'home-hero-actions-after': f(() => [
                          p(
                            o.$slots,
                            'home-hero-actions-after',
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        'home-hero-image': f(() => [
                          p(o.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': f(() => [
                          p(o.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': f(() => [
                          p(o.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': f(() => [
                          p(o.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : i(n).layout && i(n).layout !== 'doc'
                    ? (a(), L(J(i(n).layout), { key: 3 }))
                    : (a(),
                      L(
                        jn,
                        { key: 4 },
                        {
                          'doc-top': f(() => [
                            p(o.$slots, 'doc-top', {}, void 0, !0),
                          ]),
                          'doc-bottom': f(() => [
                            p(o.$slots, 'doc-bottom', {}, void 0, !0),
                          ]),
                          'doc-footer-before': f(() => [
                            p(o.$slots, 'doc-footer-before', {}, void 0, !0),
                          ]),
                          'doc-before': f(() => [
                            p(o.$slots, 'doc-before', {}, void 0, !0),
                          ]),
                          'doc-after': f(() => [
                            p(o.$slots, 'doc-after', {}, void 0, !0),
                          ]),
                          'aside-top': f(() => [
                            p(o.$slots, 'aside-top', {}, void 0, !0),
                          ]),
                          'aside-outline-before': f(() => [
                            p(o.$slots, 'aside-outline-before', {}, void 0, !0),
                          ]),
                          'aside-outline-after': f(() => [
                            p(o.$slots, 'aside-outline-after', {}, void 0, !0),
                          ]),
                          'aside-ads-before': f(() => [
                            p(o.$slots, 'aside-ads-before', {}, void 0, !0),
                          ]),
                          'aside-ads-after': f(() => [
                            p(o.$slots, 'aside-ads-after', {}, void 0, !0),
                          ]),
                          'aside-bottom': f(() => [
                            p(o.$slots, 'aside-bottom', {}, void 0, !0),
                          ]),
                          _: 3,
                        },
                      )),
          ],
          2,
        )
      )
    },
  }),
  Ho = P(Bo, [['__scopeId', 'data-v-aa0b4253']]),
  Fo = { class: 'container' },
  Ao = ['innerHTML'],
  Eo = ['innerHTML'],
  Do = _({
    __name: 'VPFooter',
    setup(e) {
      const { theme: t, frontmatter: n } = I(),
        { hasSidebar: s } = G()
      return (o, r) =>
        i(t).footer && i(n).footer !== !1
          ? (a(),
            l(
              'footer',
              { key: 0, class: S(['VPFooter', { 'has-sidebar': i(s) }]) },
              [
                d('div', Fo, [
                  i(t).footer.message
                    ? (a(),
                      l(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: i(t).footer.message,
                        },
                        null,
                        8,
                        Ao,
                      ))
                    : g('', !0),
                  i(t).footer.copyright
                    ? (a(),
                      l(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: i(t).footer.copyright,
                        },
                        null,
                        8,
                        Eo,
                      ))
                    : g('', !0),
                ]),
              ],
              2,
            ))
          : g('', !0)
    },
  }),
  Zo = P(Do, [['__scopeId', 'data-v-9d9295bb']])
function xe() {
  const { theme: e, frontmatter: t } = I(),
    n = Ge([]),
    s = b(() => n.value.length > 0)
  return (
    ye(() => {
      n.value = Ae(t.value.outline ?? e.value.outline)
    }),
    { headers: n, hasLocalNav: s }
  )
}
const Oo = (e) => (H('data-v-050b109a'), (e = e()), F(), e),
  jo = Oo(() => d('span', { class: 'vpi-chevron-right icon' }, null, -1)),
  Uo = { class: 'header' },
  Wo = { class: 'outline' },
  Go = _({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(e) {
      const t = e,
        { theme: n } = I(),
        s = V(!1),
        o = V(0),
        r = V(),
        u = V()
      ft(r, () => {
        s.value = !1
      }),
        mt('Escape', () => {
          s.value = !1
        }),
        ye(() => {
          s.value = !1
        })
      function c() {
        ;(s.value = !s.value),
          (o.value =
            window.innerHeight + Math.min(window.scrollY - t.navHeight, 0))
      }
      function v($) {
        $.target.classList.contains('outline-link') &&
          (u.value && (u.value.style.transition = 'none'),
          _t(() => {
            s.value = !1
          }))
      }
      function h() {
        ;(s.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return ($, w) => (
        a(),
        l(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: U({ '--vp-vh': o.value + 'px' }),
            ref_key: 'main',
            ref: r,
          },
          [
            $.headers.length > 0
              ? (a(),
                l(
                  'button',
                  { key: 0, onClick: c, class: S({ open: s.value }) },
                  [D(T(i(Qe)(i(n))) + ' ', 1), jo],
                  2,
                ))
              : (a(),
                l(
                  'button',
                  { key: 1, onClick: h },
                  T(i(n).returnToTopLabel || 'Return to top'),
                  1,
                )),
            y(
              be,
              { name: 'flyout' },
              {
                default: f(() => [
                  s.value
                    ? (a(),
                      l(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: u,
                          class: 'items',
                          onClick: v,
                        },
                        [
                          d('div', Uo, [
                            d(
                              'a',
                              { class: 'top-link', href: '#', onClick: h },
                              T(i(n).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          d('div', Wo, [
                            y(Xe, { headers: $.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512,
                      ))
                    : g('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      )
    },
  }),
  Ro = P(Go, [['__scopeId', 'data-v-050b109a']]),
  Ko = (e) => (H('data-v-7c55e4cc'), (e = e()), F(), e),
  qo = { class: 'container' },
  Jo = ['aria-expanded'],
  Yo = Ko(() => d('span', { class: 'vpi-align-left menu-icon' }, null, -1)),
  Qo = { class: 'menu-text' },
  Xo = _({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(e) {
      const { theme: t, frontmatter: n } = I(),
        { hasSidebar: s } = G(),
        { headers: o } = xe(),
        { y: r } = Ke(),
        u = V(0)
      Z(() => {
        u.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        ye(() => {
          o.value = Ae(n.value.outline ?? t.value.outline)
        })
      const c = b(() => o.value.length === 0),
        v = b(() => c.value && !s.value),
        h = b(() => ({
          VPLocalNav: !0,
          'has-sidebar': s.value,
          empty: c.value,
          fixed: v.value,
        }))
      return ($, w) =>
        i(n).layout !== 'home' && (!v.value || i(r) >= u.value)
          ? (a(),
            l(
              'div',
              { key: 0, class: S(h.value) },
              [
                d('div', qo, [
                  i(s)
                    ? (a(),
                      l(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': $.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: w[0] || (w[0] = (M) => $.$emit('open-menu')),
                        },
                        [
                          Yo,
                          d('span', Qo, T(i(t).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        Jo,
                      ))
                    : g('', !0),
                  y(Ro, { headers: i(o), navHeight: u.value }, null, 8, [
                    'headers',
                    'navHeight',
                  ]),
                ]),
              ],
              2,
            ))
          : g('', !0)
    },
  }),
  xo = P(Xo, [['__scopeId', 'data-v-7c55e4cc']])
function es() {
  const e = V(!1)
  function t() {
    ;(e.value = !0), window.addEventListener('resize', o)
  }
  function n() {
    ;(e.value = !1), window.removeEventListener('resize', o)
  }
  function s() {
    e.value ? n() : t()
  }
  function o() {
    window.outerWidth >= 768 && n()
  }
  const r = we()
  return (
    W(() => r.path, n),
    { isScreenOpen: e, openScreen: t, closeScreen: n, toggleScreen: s }
  )
}
const ts = {},
  ns = { class: 'VPSwitch', type: 'button', role: 'switch' },
  os = { class: 'check' },
  ss = { key: 0, class: 'icon' }
function as(e, t) {
  return (
    a(),
    l('button', ns, [
      d('span', os, [
        e.$slots.default
          ? (a(), l('span', ss, [p(e.$slots, 'default', {}, void 0, !0)]))
          : g('', !0),
      ]),
    ])
  )
}
const rs = P(ts, [
    ['render', as],
    ['__scopeId', 'data-v-f22ee57a'],
  ]),
  et = (e) => (H('data-v-b7a5b6c5'), (e = e()), F(), e),
  is = et(() => d('span', { class: 'vpi-sun sun' }, null, -1)),
  ls = et(() => d('span', { class: 'vpi-moon moon' }, null, -1)),
  cs = _({
    __name: 'VPSwitchAppearance',
    setup(e) {
      const { isDark: t, theme: n } = I(),
        s = Le('toggle-appearance', () => {
          t.value = !t.value
        }),
        o = b(() =>
          t.value
            ? n.value.lightModeSwitchTitle || 'Switch to light theme'
            : n.value.darkModeSwitchTitle || 'Switch to dark theme',
        )
      return (r, u) => (
        a(),
        L(
          rs,
          {
            title: o.value,
            class: 'VPSwitchAppearance',
            'aria-checked': i(t),
            onClick: i(s),
          },
          { default: f(() => [is, ls]), _: 1 },
          8,
          ['title', 'aria-checked', 'onClick'],
        )
      )
    },
  }),
  Ee = P(cs, [['__scopeId', 'data-v-b7a5b6c5']]),
  us = { key: 0, class: 'VPNavBarAppearance' },
  ds = _({
    __name: 'VPNavBarAppearance',
    setup(e) {
      const { site: t } = I()
      return (n, s) =>
        i(t).appearance && i(t).appearance !== 'force-dark'
          ? (a(), l('div', us, [y(Ee)]))
          : g('', !0)
    },
  }),
  ps = P(ds, [['__scopeId', 'data-v-47d1e13f']]),
  De = V()
let tt = !1,
  Se = 0
function vs(e) {
  const t = V(!1)
  if (Q) {
    !tt && hs(), Se++
    const n = W(De, (s) => {
      var o, r, u
      s === e.el.value || ((o = e.el.value) != null && o.contains(s))
        ? ((t.value = !0), (r = e.onFocus) == null || r.call(e))
        : ((t.value = !1), (u = e.onBlur) == null || u.call(e))
    })
    x(() => {
      n(), Se--, Se || fs()
    })
  }
  return gt(t)
}
function hs() {
  document.addEventListener('focusin', nt),
    (tt = !0),
    (De.value = document.activeElement)
}
function fs() {
  document.removeEventListener('focusin', nt)
}
function nt() {
  De.value = document.activeElement
}
const ms = { class: 'VPMenuLink' },
  _s = _({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: t } = I()
      return (n, s) => (
        a(),
        l('div', ms, [
          y(
            j,
            {
              class: S({
                active: i(K)(
                  i(t).relativePath,
                  n.item.activeMatch || n.item.link,
                  !!n.item.activeMatch,
                ),
              }),
              href: n.item.link,
              target: n.item.target,
              rel: n.item.rel,
            },
            { default: f(() => [D(T(n.item.text), 1)]), _: 1 },
            8,
            ['class', 'href', 'target', 'rel'],
          ),
        ])
      )
    },
  }),
  Pe = P(_s, [['__scopeId', 'data-v-53057a1f']]),
  gs = { class: 'VPMenuGroup' },
  $s = { key: 0, class: 'title' },
  bs = _({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        a(),
        l('div', gs, [
          t.text ? (a(), l('p', $s, T(t.text), 1)) : g('', !0),
          (a(!0),
          l(
            N,
            null,
            A(
              t.items,
              (s) => (
                a(),
                l(
                  N,
                  null,
                  [
                    'link' in s
                      ? (a(), L(Pe, { key: 0, item: s }, null, 8, ['item']))
                      : g('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      )
    },
  }),
  ks = P(bs, [['__scopeId', 'data-v-f597c366']]),
  ys = { class: 'VPMenu' },
  ws = { key: 0, class: 'items' },
  Ls = _({
    __name: 'VPMenu',
    props: { items: {} },
    setup(e) {
      return (t, n) => (
        a(),
        l('div', ys, [
          t.items
            ? (a(),
              l('div', ws, [
                (a(!0),
                l(
                  N,
                  null,
                  A(
                    t.items,
                    (s) => (
                      a(),
                      l(
                        N,
                        { key: s.text },
                        [
                          'link' in s
                            ? (a(),
                              L(Pe, { key: 0, item: s }, null, 8, ['item']))
                            : (a(),
                              L(
                                ks,
                                { key: 1, text: s.text, items: s.items },
                                null,
                                8,
                                ['text', 'items'],
                              )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : g('', !0),
          p(t.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  Ps = P(Ls, [['__scopeId', 'data-v-51a0a256']]),
  Vs = (e) => (H('data-v-fcc7242b'), (e = e()), F(), e),
  Ss = ['aria-expanded', 'aria-label'],
  Ms = { key: 0, class: 'text' },
  Cs = ['innerHTML'],
  Ts = Vs(() => d('span', { class: 'vpi-chevron-down text-icon' }, null, -1)),
  Is = { key: 1, class: 'vpi-more-horizontal icon' },
  zs = { class: 'menu' },
  Ns = _({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(e) {
      const t = V(!1),
        n = V()
      vs({ el: n, onBlur: s })
      function s() {
        t.value = !1
      }
      return (o, r) => (
        a(),
        l(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: n,
            onMouseenter: r[1] || (r[1] = (u) => (t.value = !0)),
            onMouseleave: r[2] || (r[2] = (u) => (t.value = !1)),
          },
          [
            d(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': t.value,
                'aria-label': o.label,
                onClick: r[0] || (r[0] = (u) => (t.value = !t.value)),
              },
              [
                o.button || o.icon
                  ? (a(),
                    l('span', Ms, [
                      o.icon
                        ? (a(),
                          l(
                            'span',
                            { key: 0, class: S([o.icon, 'option-icon']) },
                            null,
                            2,
                          ))
                        : g('', !0),
                      o.button
                        ? (a(),
                          l(
                            'span',
                            { key: 1, innerHTML: o.button },
                            null,
                            8,
                            Cs,
                          ))
                        : g('', !0),
                      Ts,
                    ]))
                  : (a(), l('span', Is)),
              ],
              8,
              Ss,
            ),
            d('div', zs, [
              y(
                Ps,
                { items: o.items },
                {
                  default: f(() => [p(o.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      )
    },
  }),
  Ze = P(Ns, [['__scopeId', 'data-v-fcc7242b']]),
  Bs = ['href', 'aria-label', 'innerHTML'],
  Hs = _({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(e) {
      const t = e,
        n = b(() =>
          typeof t.icon == 'object'
            ? t.icon.svg
            : `<span class="vpi-social-${t.icon}" />`,
        )
      return (s, o) => (
        a(),
        l(
          'a',
          {
            class: 'VPSocialLink no-icon',
            href: s.link,
            'aria-label':
              s.ariaLabel ?? (typeof s.icon == 'string' ? s.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: n.value,
          },
          null,
          8,
          Bs,
        )
      )
    },
  }),
  Fs = P(Hs, [['__scopeId', 'data-v-4209a651']]),
  As = { class: 'VPSocialLinks' },
  Es = _({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(e) {
      return (t, n) => (
        a(),
        l('div', As, [
          (a(!0),
          l(
            N,
            null,
            A(
              t.links,
              ({ link: s, icon: o, ariaLabel: r }) => (
                a(),
                L(Fs, { key: s, icon: o, link: s, ariaLabel: r }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel',
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Oe = P(Es, [['__scopeId', 'data-v-5667e8a8']]),
  Ds = { key: 0, class: 'group translations' },
  Zs = { class: 'trans-title' },
  Os = { key: 1, class: 'group' },
  js = { class: 'item appearance' },
  Us = { class: 'label' },
  Ws = { class: 'appearance-action' },
  Gs = { key: 2, class: 'group' },
  Rs = { class: 'item social-links' },
  Ks = _({
    __name: 'VPNavBarExtra',
    setup(e) {
      const { site: t, theme: n } = I(),
        { localeLinks: s, currentLang: o } = te({ correspondingLink: !0 }),
        r = b(
          () =>
            (s.value.length && o.value.label) ||
            t.value.appearance ||
            n.value.socialLinks,
        )
      return (u, c) =>
        r.value
          ? (a(),
            L(
              Ze,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: f(() => [
                  i(s).length && i(o).label
                    ? (a(),
                      l('div', Ds, [
                        d('p', Zs, T(i(o).label), 1),
                        (a(!0),
                        l(
                          N,
                          null,
                          A(
                            i(s),
                            (v) => (
                              a(),
                              L(Pe, { key: v.link, item: v }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : g('', !0),
                  i(t).appearance && i(t).appearance !== 'force-dark'
                    ? (a(),
                      l('div', Os, [
                        d('div', js, [
                          d(
                            'p',
                            Us,
                            T(i(n).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          d('div', Ws, [y(Ee)]),
                        ]),
                      ]))
                    : g('', !0),
                  i(n).socialLinks
                    ? (a(),
                      l('div', Gs, [
                        d('div', Rs, [
                          y(
                            Oe,
                            {
                              class: 'social-links-list',
                              links: i(n).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : g('', !0),
                ]),
                _: 1,
              },
            ))
          : g('', !0)
    },
  }),
  qs = P(Ks, [['__scopeId', 'data-v-ee1926b4']]),
  Js = (e) => (H('data-v-1aa1f31b'), (e = e()), F(), e),
  Ys = ['aria-expanded'],
  Qs = Js(() =>
    d(
      'span',
      { class: 'container' },
      [
        d('span', { class: 'top' }),
        d('span', { class: 'middle' }),
        d('span', { class: 'bottom' }),
      ],
      -1,
    ),
  ),
  Xs = [Qs],
  xs = _({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(e) {
      return (t, n) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: S(['VPNavBarHamburger', { active: t.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': t.active,
            'aria-controls': 'VPNavScreen',
            onClick: n[0] || (n[0] = (s) => t.$emit('click')),
          },
          Xs,
          10,
          Ys,
        )
      )
    },
  }),
  ea = P(xs, [['__scopeId', 'data-v-1aa1f31b']]),
  ta = ['innerHTML'],
  na = _({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(e) {
      const { page: t } = I()
      return (n, s) => (
        a(),
        L(
          j,
          {
            class: S({
              VPNavBarMenuLink: !0,
              active: i(K)(
                i(t).relativePath,
                n.item.activeMatch || n.item.link,
                !!n.item.activeMatch,
              ),
            }),
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            tabindex: '0',
          },
          {
            default: f(() => [
              d('span', { innerHTML: n.item.text }, null, 8, ta),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  oa = P(na, [['__scopeId', 'data-v-3f92a82d']]),
  sa = _({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(e) {
      const t = e,
        { page: n } = I(),
        s = (r) =>
          'link' in r
            ? K(n.value.relativePath, r.link, !!t.item.activeMatch)
            : r.items.some(s),
        o = b(() => s(t.item))
      return (r, u) => (
        a(),
        L(
          Ze,
          {
            class: S({
              VPNavBarMenuGroup: !0,
              active:
                i(K)(
                  i(n).relativePath,
                  r.item.activeMatch,
                  !!r.item.activeMatch,
                ) || o.value,
            }),
            button: r.item.text,
            items: r.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      )
    },
  }),
  aa = (e) => (H('data-v-42f6004b'), (e = e()), F(), e),
  ra = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  ia = aa(() =>
    d(
      'span',
      { id: 'main-nav-aria-label', class: 'visually-hidden' },
      'Main Navigation',
      -1,
    ),
  ),
  la = _({
    __name: 'VPNavBarMenu',
    setup(e) {
      const { theme: t } = I()
      return (n, s) =>
        i(t).nav
          ? (a(),
            l('nav', ra, [
              ia,
              (a(!0),
              l(
                N,
                null,
                A(
                  i(t).nav,
                  (o) => (
                    a(),
                    l(
                      N,
                      { key: o.text },
                      [
                        'link' in o
                          ? (a(), L(oa, { key: 0, item: o }, null, 8, ['item']))
                          : (a(),
                            L(sa, { key: 1, item: o }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : g('', !0)
    },
  }),
  ca = P(la, [['__scopeId', 'data-v-42f6004b']])
function ua(e) {
  const { localeIndex: t, theme: n } = I()
  function s(o) {
    var z, k, m
    const r = o.split('.'),
      u = (z = n.value.search) == null ? void 0 : z.options,
      c = u && typeof u == 'object',
      v =
        (c &&
          ((m = (k = u.locales) == null ? void 0 : k[t.value]) == null
            ? void 0
            : m.translations)) ||
        null,
      h = (c && u.translations) || null
    let $ = v,
      w = h,
      M = e
    const C = r.pop()
    for (const B of r) {
      let E = null
      const O = M == null ? void 0 : M[B]
      O && (E = M = O)
      const R = w == null ? void 0 : w[B]
      R && (E = w = R)
      const X = $ == null ? void 0 : $[B]
      X && (E = $ = X), O || (M = E), R || (w = E), X || ($ = E)
    }
    return (
      ($ == null ? void 0 : $[C]) ??
      (w == null ? void 0 : w[C]) ??
      (M == null ? void 0 : M[C]) ??
      ''
    )
  }
  return s
}
const da = ['aria-label'],
  pa = { class: 'DocSearch-Button-Container' },
  va = d('span', { class: 'vp-icon DocSearch-Search-Icon' }, null, -1),
  ha = { class: 'DocSearch-Button-Placeholder' },
  fa = d(
    'span',
    { class: 'DocSearch-Button-Keys' },
    [
      d('kbd', { class: 'DocSearch-Button-Key' }),
      d('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
    ],
    -1,
  ),
  Ue = _({
    __name: 'VPNavBarSearchButton',
    setup(e) {
      const n = ua({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (s, o) => (
        a(),
        l(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': i(n)('button.buttonAriaLabel'),
          },
          [
            d('span', pa, [va, d('span', ha, T(i(n)('button.buttonText')), 1)]),
            fa,
          ],
          8,
          da,
        )
      )
    },
  }),
  ma = { class: 'VPNavBarSearch' },
  _a = { id: 'local-search' },
  ga = { key: 1, id: 'docsearch' },
  $a = _({
    __name: 'VPNavBarSearch',
    setup(e) {
      const t = () => null,
        n = () => null,
        { theme: s } = I(),
        o = V(!1),
        r = V(!1)
      Z(() => {})
      function u() {
        o.value || ((o.value = !0), setTimeout(c, 16))
      }
      function c() {
        const $ = new Event('keydown')
        ;($.key = 'k'),
          ($.metaKey = !0),
          window.dispatchEvent($),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || c()
          }, 16)
      }
      const v = V(!1),
        h = ''
      return ($, w) => {
        var M
        return (
          a(),
          l('div', ma, [
            i(h) === 'local'
              ? (a(),
                l(
                  N,
                  { key: 0 },
                  [
                    v.value
                      ? (a(),
                        L(i(t), {
                          key: 0,
                          onClose: w[0] || (w[0] = (C) => (v.value = !1)),
                        }))
                      : g('', !0),
                    d('div', _a, [
                      y(Ue, {
                        onClick: w[1] || (w[1] = (C) => (v.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : i(h) === 'algolia'
                ? (a(),
                  l(
                    N,
                    { key: 1 },
                    [
                      o.value
                        ? (a(),
                          L(
                            i(n),
                            {
                              key: 0,
                              algolia:
                                ((M = i(s).search) == null
                                  ? void 0
                                  : M.options) ?? i(s).algolia,
                              onVnodeBeforeMount:
                                w[2] || (w[2] = (C) => (r.value = !0)),
                            },
                            null,
                            8,
                            ['algolia'],
                          ))
                        : g('', !0),
                      r.value
                        ? g('', !0)
                        : (a(), l('div', ga, [y(Ue, { onClick: u })])),
                    ],
                    64,
                  ))
                : g('', !0),
          ])
        )
      }
    },
  }),
  ba = _({
    __name: 'VPNavBarSocialLinks',
    setup(e) {
      const { theme: t } = I()
      return (n, s) =>
        i(t).socialLinks
          ? (a(),
            L(
              Oe,
              { key: 0, class: 'VPNavBarSocialLinks', links: i(t).socialLinks },
              null,
              8,
              ['links'],
            ))
          : g('', !0)
    },
  }),
  ka = P(ba, [['__scopeId', 'data-v-c91099f9']]),
  ya = ['href', 'rel', 'target'],
  wa = { key: 1 },
  La = { key: 2 },
  Pa = _({
    __name: 'VPNavBarTitle',
    setup(e) {
      const { site: t, theme: n } = I(),
        { hasSidebar: s } = G(),
        { currentLang: o } = te(),
        r = b(() => {
          var v
          return typeof n.value.logoLink == 'string'
            ? n.value.logoLink
            : (v = n.value.logoLink) == null
              ? void 0
              : v.link
        }),
        u = b(() => {
          var v
          return typeof n.value.logoLink == 'string' ||
            (v = n.value.logoLink) == null
            ? void 0
            : v.rel
        }),
        c = b(() => {
          var v
          return typeof n.value.logoLink == 'string' ||
            (v = n.value.logoLink) == null
            ? void 0
            : v.target
        })
      return (v, h) => (
        a(),
        l(
          'div',
          { class: S(['VPNavBarTitle', { 'has-sidebar': i(s) }]) },
          [
            d(
              'a',
              {
                class: 'title',
                href: r.value ?? i(He)(i(o).link),
                rel: u.value,
                target: c.value,
              },
              [
                p(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                i(n).logo
                  ? (a(),
                    L(
                      $e,
                      { key: 0, class: 'logo', image: i(n).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : g('', !0),
                i(n).siteTitle
                  ? (a(), l('span', wa, T(i(n).siteTitle), 1))
                  : i(n).siteTitle === void 0
                    ? (a(), l('span', La, T(i(t).title), 1))
                    : g('', !0),
                p(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              ya,
            ),
          ],
          2,
        )
      )
    },
  }),
  Va = P(Pa, [['__scopeId', 'data-v-61e7ff99']]),
  Sa = { class: 'items' },
  Ma = { class: 'title' },
  Ca = _({
    __name: 'VPNavBarTranslations',
    setup(e) {
      const { theme: t } = I(),
        { localeLinks: n, currentLang: s } = te({ correspondingLink: !0 })
      return (o, r) =>
        i(n).length && i(s).label
          ? (a(),
            L(
              Ze,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: i(t).langMenuLabel || 'Change language',
              },
              {
                default: f(() => [
                  d('div', Sa, [
                    d('p', Ma, T(i(s).label), 1),
                    (a(!0),
                    l(
                      N,
                      null,
                      A(
                        i(n),
                        (u) => (
                          a(),
                          L(Pe, { key: u.link, item: u }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : g('', !0)
    },
  }),
  Ta = P(Ca, [['__scopeId', 'data-v-4d0ca39a']]),
  Ia = (e) => (H('data-v-15ae9f67'), (e = e()), F(), e),
  za = { class: 'wrapper' },
  Na = { class: 'container' },
  Ba = { class: 'title' },
  Ha = { class: 'content' },
  Fa = { class: 'content-body' },
  Aa = Ia(() =>
    d('div', { class: 'divider' }, [d('div', { class: 'divider-line' })], -1),
  ),
  Ea = _({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(e) {
      const { y: t } = Ke(),
        { hasSidebar: n } = G(),
        { hasLocalNav: s } = xe(),
        { frontmatter: o } = I(),
        r = V({})
      return (
        We(() => {
          r.value = {
            'has-sidebar': n.value,
            'has-local-nav': s.value,
            top: o.value.layout === 'home' && t.value === 0,
          }
        }),
        (u, c) => (
          a(),
          l(
            'div',
            { class: S(['VPNavBar', r.value]) },
            [
              d('div', za, [
                d('div', Na, [
                  d('div', Ba, [
                    y(Va, null, {
                      'nav-bar-title-before': f(() => [
                        p(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': f(() => [
                        p(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  d('div', Ha, [
                    d('div', Fa, [
                      p(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      y($a, { class: 'search' }),
                      y(ca, { class: 'menu' }),
                      y(Ta, { class: 'translations' }),
                      y(ps, { class: 'appearance' }),
                      y(ka, { class: 'social-links' }),
                      y(qs, { class: 'extra' }),
                      p(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      y(
                        ea,
                        {
                          class: 'hamburger',
                          active: u.isScreenOpen,
                          onClick:
                            c[0] || (c[0] = (v) => u.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              Aa,
            ],
            2,
          )
        )
      )
    },
  }),
  Da = P(Ea, [['__scopeId', 'data-v-15ae9f67']]),
  Za = { key: 0, class: 'VPNavScreenAppearance' },
  Oa = { class: 'text' },
  ja = _({
    __name: 'VPNavScreenAppearance',
    setup(e) {
      const { site: t, theme: n } = I()
      return (s, o) =>
        i(t).appearance && i(t).appearance !== 'force-dark'
          ? (a(),
            l('div', Za, [
              d('p', Oa, T(i(n).darkModeSwitchLabel || 'Appearance'), 1),
              y(Ee),
            ]))
          : g('', !0)
    },
  }),
  Ua = P(ja, [['__scopeId', 'data-v-d87c44ef']]),
  Wa = _({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(e) {
      const t = Le('close-screen')
      return (n, s) => (
        a(),
        L(
          j,
          {
            class: 'VPNavScreenMenuLink',
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: i(t),
          },
          { default: f(() => [D(T(n.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  Ga = P(Wa, [['__scopeId', 'data-v-afa97edc']]),
  Ra = _({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(e) {
      const t = Le('close-screen')
      return (n, s) => (
        a(),
        L(
          j,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: n.item.link,
            target: n.item.target,
            rel: n.item.rel,
            onClick: i(t),
          },
          { default: f(() => [D(T(n.item.text), 1)]), _: 1 },
          8,
          ['href', 'target', 'rel', 'onClick'],
        )
      )
    },
  }),
  ot = P(Ra, [['__scopeId', 'data-v-43983e60']]),
  Ka = { class: 'VPNavScreenMenuGroupSection' },
  qa = { key: 0, class: 'title' },
  Ja = _({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(e) {
      return (t, n) => (
        a(),
        l('div', Ka, [
          t.text ? (a(), l('p', qa, T(t.text), 1)) : g('', !0),
          (a(!0),
          l(
            N,
            null,
            A(
              t.items,
              (s) => (a(), L(ot, { key: s.text, item: s }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  Ya = P(Ja, [['__scopeId', 'data-v-d4cd4a11']]),
  Qa = (e) => (H('data-v-751bee72'), (e = e()), F(), e),
  Xa = ['aria-controls', 'aria-expanded'],
  xa = ['innerHTML'],
  er = Qa(() => d('span', { class: 'vpi-plus button-icon' }, null, -1)),
  tr = ['id'],
  nr = { key: 1, class: 'group' },
  or = _({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(e) {
      const t = e,
        n = V(!1),
        s = b(() => `NavScreenGroup-${t.text.replace(' ', '-').toLowerCase()}`)
      function o() {
        n.value = !n.value
      }
      return (r, u) => (
        a(),
        l(
          'div',
          { class: S(['VPNavScreenMenuGroup', { open: n.value }]) },
          [
            d(
              'button',
              {
                class: 'button',
                'aria-controls': s.value,
                'aria-expanded': n.value,
                onClick: o,
              },
              [
                d(
                  'span',
                  { class: 'button-text', innerHTML: r.text },
                  null,
                  8,
                  xa,
                ),
                er,
              ],
              8,
              Xa,
            ),
            d(
              'div',
              { id: s.value, class: 'items' },
              [
                (a(!0),
                l(
                  N,
                  null,
                  A(
                    r.items,
                    (c) => (
                      a(),
                      l(
                        N,
                        { key: c.text },
                        [
                          'link' in c
                            ? (a(),
                              l('div', { key: c.text, class: 'item' }, [
                                y(ot, { item: c }, null, 8, ['item']),
                              ]))
                            : (a(),
                              l('div', nr, [
                                y(
                                  Ya,
                                  { text: c.text, items: c.items },
                                  null,
                                  8,
                                  ['text', 'items'],
                                ),
                              ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              tr,
            ),
          ],
          2,
        )
      )
    },
  }),
  sr = P(or, [['__scopeId', 'data-v-751bee72']]),
  ar = { key: 0, class: 'VPNavScreenMenu' },
  rr = _({
    __name: 'VPNavScreenMenu',
    setup(e) {
      const { theme: t } = I()
      return (n, s) =>
        i(t).nav
          ? (a(),
            l('nav', ar, [
              (a(!0),
              l(
                N,
                null,
                A(
                  i(t).nav,
                  (o) => (
                    a(),
                    l(
                      N,
                      { key: o.text },
                      [
                        'link' in o
                          ? (a(), L(Ga, { key: 0, item: o }, null, 8, ['item']))
                          : (a(),
                            L(
                              sr,
                              { key: 1, text: o.text || '', items: o.items },
                              null,
                              8,
                              ['text', 'items'],
                            )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : g('', !0)
    },
  }),
  ir = _({
    __name: 'VPNavScreenSocialLinks',
    setup(e) {
      const { theme: t } = I()
      return (n, s) =>
        i(t).socialLinks
          ? (a(),
            L(
              Oe,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: i(t).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : g('', !0)
    },
  }),
  st = (e) => (H('data-v-555bd3af'), (e = e()), F(), e),
  lr = st(() => d('span', { class: 'vpi-languages icon lang' }, null, -1)),
  cr = st(() =>
    d('span', { class: 'vpi-chevron-down icon chevron' }, null, -1),
  ),
  ur = { class: 'list' },
  dr = _({
    __name: 'VPNavScreenTranslations',
    setup(e) {
      const { localeLinks: t, currentLang: n } = te({ correspondingLink: !0 }),
        s = V(!1)
      function o() {
        s.value = !s.value
      }
      return (r, u) =>
        i(t).length && i(n).label
          ? (a(),
            l(
              'div',
              {
                key: 0,
                class: S(['VPNavScreenTranslations', { open: s.value }]),
              },
              [
                d('button', { class: 'title', onClick: o }, [
                  lr,
                  D(' ' + T(i(n).label) + ' ', 1),
                  cr,
                ]),
                d('ul', ur, [
                  (a(!0),
                  l(
                    N,
                    null,
                    A(
                      i(t),
                      (c) => (
                        a(),
                        l('li', { key: c.link, class: 'item' }, [
                          y(
                            j,
                            { class: 'link', href: c.link },
                            { default: f(() => [D(T(c.text), 1)]), _: 2 },
                            1032,
                            ['href'],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : g('', !0)
    },
  }),
  pr = P(dr, [['__scopeId', 'data-v-555bd3af']]),
  vr = { class: 'container' },
  hr = _({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(e) {
      const t = V(null),
        n = qe(Q ? document.body : null)
      return (s, o) => (
        a(),
        L(
          be,
          {
            name: 'fade',
            onEnter: o[0] || (o[0] = (r) => (n.value = !0)),
            onAfterLeave: o[1] || (o[1] = (r) => (n.value = !1)),
          },
          {
            default: f(() => [
              s.open
                ? (a(),
                  l(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: t,
                      id: 'VPNavScreen',
                    },
                    [
                      d('div', vr, [
                        p(
                          s.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        y(rr, { class: 'menu' }),
                        y(pr, { class: 'translations' }),
                        y(Ua, { class: 'appearance' }),
                        y(ir, { class: 'social-links' }),
                        p(s.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : g('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  fr = P(hr, [['__scopeId', 'data-v-fc3f509b']]),
  mr = { key: 0, class: 'VPNav' },
  _r = _({
    __name: 'VPNav',
    setup(e) {
      const { isScreenOpen: t, closeScreen: n, toggleScreen: s } = es(),
        { frontmatter: o } = I(),
        r = b(() => o.value.navbar !== !1)
      return (
        Je('close-screen', n),
        ke(() => {
          Q && document.documentElement.classList.toggle('hide-nav', !r.value)
        }),
        (u, c) =>
          r.value
            ? (a(),
              l('header', mr, [
                y(
                  Da,
                  { 'is-screen-open': i(t), onToggleScreen: i(s) },
                  {
                    'nav-bar-title-before': f(() => [
                      p(u.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': f(() => [
                      p(u.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': f(() => [
                      p(u.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': f(() => [
                      p(u.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                y(
                  fr,
                  { open: i(t) },
                  {
                    'nav-screen-content-before': f(() => [
                      p(u.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': f(() => [
                      p(u.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : g('', !0)
      )
    },
  }),
  gr = P(_r, [['__scopeId', 'data-v-b6f36928']]),
  at = (e) => (H('data-v-952cde0a'), (e = e()), F(), e),
  $r = ['role', 'tabindex'],
  br = at(() => d('div', { class: 'indicator' }, null, -1)),
  kr = at(() => d('span', { class: 'vpi-chevron-right caret-icon' }, null, -1)),
  yr = [kr],
  wr = { key: 1, class: 'items' },
  Lr = _({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(e) {
      const t = e,
        {
          collapsed: n,
          collapsible: s,
          isLink: o,
          isActiveLink: r,
          hasActiveLink: u,
          hasChildren: c,
          toggle: v,
        } = Ut(b(() => t.item)),
        h = b(() => (c.value ? 'section' : 'div')),
        $ = b(() => (o.value ? 'a' : 'div')),
        w = b(() =>
          c.value ? (t.depth + 2 === 7 ? 'p' : `h${t.depth + 2}`) : 'p',
        ),
        M = b(() => (o.value ? void 0 : 'button')),
        C = b(() => [
          [`level-${t.depth}`],
          { collapsible: s.value },
          { collapsed: n.value },
          { 'is-link': o.value },
          { 'is-active': r.value },
          { 'has-active': u.value },
        ])
      function z(m) {
        ;('key' in m && m.key !== 'Enter') || (!t.item.link && v())
      }
      function k() {
        t.item.link && v()
      }
      return (m, B) => {
        const E = q('VPSidebarItem', !0)
        return (
          a(),
          L(
            J(h.value),
            { class: S(['VPSidebarItem', C.value]) },
            {
              default: f(() => [
                m.item.text
                  ? (a(),
                    l(
                      'div',
                      Y(
                        { key: 0, class: 'item', role: M.value },
                        $t(m.item.items ? { click: z, keydown: z } : {}, !0),
                        { tabindex: m.item.items && 0 },
                      ),
                      [
                        br,
                        m.item.link
                          ? (a(),
                            L(
                              j,
                              {
                                key: 0,
                                tag: $.value,
                                class: 'link',
                                href: m.item.link,
                                rel: m.item.rel,
                                target: m.item.target,
                              },
                              {
                                default: f(() => [
                                  (a(),
                                  L(
                                    J(w.value),
                                    { class: 'text', innerHTML: m.item.text },
                                    null,
                                    8,
                                    ['innerHTML'],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target'],
                            ))
                          : (a(),
                            L(
                              J(w.value),
                              { key: 1, class: 'text', innerHTML: m.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        m.item.collapsed != null
                          ? (a(),
                            l(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: k,
                                onKeydown: bt(k, ['enter']),
                                tabindex: '0',
                              },
                              yr,
                              32,
                            ))
                          : g('', !0),
                      ],
                      16,
                      $r,
                    ))
                  : g('', !0),
                m.item.items && m.item.items.length
                  ? (a(),
                    l('div', wr, [
                      m.depth < 5
                        ? (a(!0),
                          l(
                            N,
                            { key: 0 },
                            A(
                              m.item.items,
                              (O) => (
                                a(),
                                L(
                                  E,
                                  { key: O.text, item: O, depth: m.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth'],
                                )
                              ),
                            ),
                            128,
                          ))
                        : g('', !0),
                    ]))
                  : g('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        )
      }
    },
  }),
  Pr = P(Lr, [['__scopeId', 'data-v-952cde0a']]),
  rt = (e) => (H('data-v-fdfb901f'), (e = e()), F(), e),
  Vr = rt(() => d('div', { class: 'curtain' }, null, -1)),
  Sr = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  Mr = rt(() =>
    d(
      'span',
      { class: 'visually-hidden', id: 'sidebar-aria-label' },
      ' Sidebar Navigation ',
      -1,
    ),
  ),
  Cr = _({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(e) {
      const { sidebarGroups: t, hasSidebar: n } = G(),
        s = e,
        o = V(null),
        r = qe(Q ? document.body : null)
      return (
        W(
          [s, o],
          () => {
            var u
            s.open
              ? ((r.value = !0), (u = o.value) == null || u.focus())
              : (r.value = !1)
          },
          { immediate: !0, flush: 'post' },
        ),
        (u, c) =>
          i(n)
            ? (a(),
              l(
                'aside',
                {
                  key: 0,
                  class: S(['VPSidebar', { open: u.open }]),
                  ref_key: 'navEl',
                  ref: o,
                  onClick: c[0] || (c[0] = kt(() => {}, ['stop'])),
                },
                [
                  Vr,
                  d('nav', Sr, [
                    Mr,
                    p(u.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (a(!0),
                    l(
                      N,
                      null,
                      A(
                        i(t),
                        (v) => (
                          a(),
                          l('div', { key: v.text, class: 'group' }, [
                            y(Pr, { item: v, depth: 0 }, null, 8, ['item']),
                          ])
                        ),
                      ),
                      128,
                    )),
                    p(u.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : g('', !0)
      )
    },
  }),
  Tr = P(Cr, [['__scopeId', 'data-v-fdfb901f']]),
  Ir = _({
    __name: 'VPSkipLink',
    setup(e) {
      const t = we(),
        n = V()
      W(
        () => t.path,
        () => n.value.focus(),
      )
      function s({ target: o }) {
        const r = document.getElementById(decodeURIComponent(o.hash).slice(1))
        if (r) {
          const u = () => {
            r.removeAttribute('tabindex'), r.removeEventListener('blur', u)
          }
          r.setAttribute('tabindex', '-1'),
            r.addEventListener('blur', u),
            r.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (o, r) => (
        a(),
        l(
          N,
          null,
          [
            d(
              'span',
              { ref_key: 'backToTop', ref: n, tabindex: '-1' },
              null,
              512,
            ),
            d(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: s,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  zr = P(Ir, [['__scopeId', 'data-v-8c2c1d88']]),
  Nr = _({
    __name: 'Layout',
    setup(e) {
      const { isOpen: t, open: n, close: s } = G(),
        o = we()
      W(() => o.path, s), jt(t, s)
      const { frontmatter: r } = I(),
        u = ee(),
        c = b(() => !!u['home-hero-image'])
      return (
        Je('hero-image-slot-exists', c),
        (v, h) => {
          const $ = q('Content')
          return i(r).layout !== !1
            ? (a(),
              l(
                'div',
                { key: 0, class: S(['Layout', i(r).pageClass]) },
                [
                  p(v.$slots, 'layout-top', {}, void 0, !0),
                  y(zr),
                  y(
                    St,
                    { class: 'backdrop', show: i(t), onClick: i(s) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  y(gr, null, {
                    'nav-bar-title-before': f(() => [
                      p(v.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': f(() => [
                      p(v.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': f(() => [
                      p(v.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': f(() => [
                      p(v.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': f(() => [
                      p(v.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': f(() => [
                      p(v.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  y(xo, { open: i(t), onOpenMenu: i(n) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  y(
                    Tr,
                    { open: i(t) },
                    {
                      'sidebar-nav-before': f(() => [
                        p(v.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': f(() => [
                        p(v.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  y(Ho, null, {
                    'page-top': f(() => [
                      p(v.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': f(() => [
                      p(v.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': f(() => [
                      p(v.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': f(() => [
                      p(v.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': f(() => [
                      p(v.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': f(() => [
                      p(v.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': f(() => [
                      p(v.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': f(() => [
                      p(v.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': f(() => [
                      p(v.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': f(() => [
                      p(v.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': f(() => [
                      p(v.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': f(() => [
                      p(v.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': f(() => [
                      p(v.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': f(() => [
                      p(v.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': f(() => [
                      p(v.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': f(() => [
                      p(v.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': f(() => [
                      p(v.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': f(() => [
                      p(v.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': f(() => [
                      p(v.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': f(() => [
                      p(v.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': f(() => [
                      p(v.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': f(() => [
                      p(v.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': f(() => [
                      p(v.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  y(Zo),
                  p(v.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (a(), L($, { key: 1 }))
        }
      )
    },
  }),
  Br = P(Nr, [['__scopeId', 'data-v-d87759c5']]),
  Hr = {
    Layout: Br,
    enhanceApp: ({ app: e }) => {
      e.component('Badge', Lt)
    },
  },
  Fr = ['type', 'disabled'],
  Ar = { key: 0, class: 'loading' },
  Er = { class: 'slot-wrap' },
  ae = _({
    name: 'ZaiButton',
    __name: 'button',
    props: {
      nativeType: { default: 'button' },
      type: { default: 'default' },
      size: { default: 'middle' },
      disabled: { type: Boolean, default: !1 },
      circle: { type: Boolean, default: !1 },
      rounded: { type: Boolean, default: !1 },
      incline: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
    },
    setup(e, { expose: t }) {
      const n = V()
      return (
        t({ ref: n }),
        (s, o) => (
          a(),
          l(
            'button',
            {
              ref_key: '_ref',
              ref: n,
              class: S([
                'zai-button',
                {
                  [`zai-button--${s.type}`]: s.type,
                  [`zai-button-size--${s.size}`]: s.size,
                  'is-disabled': s.disabled,
                  'is-circle': s.circle,
                  'is-round': s.rounded,
                  'is-incline': s.incline,
                },
              ]),
              type: s.nativeType,
              disabled: s.disabled,
            },
            [
              s.loading ? (a(), l('span', Ar)) : g('', !0),
              d('span', Er, [p(s.$slots, 'default')]),
            ],
            10,
            Fr,
          )
        )
      )
    },
  })
ae.install = (e) => {
  e.component(ae.name, ae)
}
const re = _({
  name: 'ZaiLoading',
  __name: 'loading',
  props: { type: { default: 'classic' } },
  setup(e) {
    const t = V(null)
    return (n, s) => (
      a(),
      l(
        'div',
        {
          ref_key: '_ref',
          ref: t,
          class: S(['zai-loading', { [`zai-loading--${n.type}`]: n.type }]),
        },
        null,
        2,
      )
    )
  },
})
re.install = (e) => {
  e.component(re.name, re)
}
const Dr = { key: 0, class: 'zai-prefix' },
  Zr = ['type', 'value', 'maxlength', 'disabled'],
  Or = { key: 1, class: 'zai-suffix' },
  jr = d(
    'svg',
    {
      t: '1714286337154',
      fill: 'currentColor',
      class: 'icon',
      viewBox: '0 0 1024 1024',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      'p-id': '9206',
      width: '14',
      height: '14',
    },
    [
      d('path', {
        d: 'M744.740571 693.028571l-51.712 51.712L512 563.712l-181.028571 181.028571-51.785143-51.712L460.288 512 279.186286 331.044571l51.785143-51.785142L512 460.288l181.028571-181.028571 51.712 51.785142L563.712 512l181.028571 181.028571zM512 73.142857a438.857143 438.857143 0 1 0 0 877.714286A438.857143 438.857143 0 0 0 512 73.142857z',
        'p-id': '9207',
      }),
    ],
    -1,
  ),
  Ur = [jr],
  Wr = {
    t: '1714286025160',
    fill: 'currentColor',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '8019',
    width: '14',
    height: '14',
  },
  Gr = d(
    'path',
    {
      d: 'M511.978667 149.312c85.717333 0 164.202667 32.384 224.810666 86.058667l7.616 6.848c43.413333 39.552 111.936 110.229333 205.525334 212.053333a85.333333 85.333333 0 0 1 3.136 111.893333l-3.093334 3.562667-33.770666 36.586667c-82.133333 88.533333-142.229333 149.546667-180.352 183.061333-60.48 53.205333-138.581333 85.269333-223.872 85.269333-85.802667 0-164.352-32.448-224.981334-86.229333l-7.594666-6.826667c-43.370667-39.552-111.808-110.165333-205.333334-211.84a85.333333 85.333333 0 0 1-3.093333-111.978666l3.114667-3.562667 41.706666-45.098667c77.610667-83.328 134.677333-141.162667 171.157334-173.546666C347.584 181.76 426.154667 149.312 512 149.312z m0 64c-67.712 0-131.712 25.024-182.549334 70.122667l-7.253333 6.528c-37.674667 34.389333-96.725333 94.933333-176.384 180.906666l-24.597333 26.666667a21.333333 21.333333 0 0 0 0 28.885333L153.6 561.493333c80.938667 87.168 139.818667 147.072 175.850667 179.029334 50.837333 45.077333 114.794667 70.101333 182.506666 70.101333 67.285333 0 130.901333-24.725333 181.610667-69.333333l7.296-6.506667c37.952-34.389333 97.28-95.146667 177.237333-181.546667l24.704-26.816a21.333333 21.333333 0 0 0 0-28.864l-40.234666-43.498666c-77.013333-82.730667-133.333333-139.882667-168.256-170.794667-50.816-45.013333-114.730667-69.973333-182.357334-69.973333zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 42.666667a85.333333 85.333333 0 1 1-85.226667 89.6L426.666667 512h64a21.333333 21.333333 0 0 0 21.184-18.837333L512 490.666667v-64z',
      'p-id': '8020',
    },
    null,
    -1,
  ),
  Rr = [Gr],
  Kr = {
    t: '1714285970038',
    fill: 'currentColor',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '7856',
    width: '14',
    height: '14',
  },
  qr = d(
    'path',
    {
      d: 'M942.3 486.4l-0.1-0.1-0.1-0.1c-36.4-76.7-80-138.7-130.7-186L760.7 351c43.7 40.2 81.5 93.7 114.1 160.9C791.5 684.2 673.4 766 512 766c-51.3 0-98.3-8.3-141.2-25.1l-54.7 54.7C374.6 823.8 439.8 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0.1-51.3zM878.3 154.2l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L707.8 228.5C649.4 200.2 584.2 186 512 186c-192.2 0-335.4 100.5-430.2 300.3v0.1c-7.7 16.2-7.7 35.2 0 51.5 36.4 76.7 80 138.7 130.7 186.1L111.8 824.5c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0l712.8-712.8c3.1-3 3.1-8.1 0-11.2zM398.9 537.4c-1.9-8.2-2.9-16.7-2.9-25.4 0-61.9 50.1-112 112-112 8.7 0 17.3 1 25.4 2.9L398.9 537.4z m184.5-184.5C560.5 342.1 535 336 508 336c-97.2 0-176 78.8-176 176 0 27 6.1 52.5 16.9 75.4L263.3 673c-43.7-40.2-81.5-93.7-114.1-160.9C232.6 339.8 350.7 258 512 258c51.3 0 98.3 8.3 141.2 25.1l-69.8 69.8z',
      'p-id': '7857',
    },
    null,
    -1,
  ),
  Jr = d(
    'path',
    {
      d: 'M508 624c-6.4 0-12.7-0.5-18.8-1.6l-51.1 51.1c21.4 9.3 45.1 14.4 69.9 14.4 97.2 0 176-78.8 176-176 0-24.8-5.1-48.5-14.4-69.9l-51.1 51.1c1 6.1 1.6 12.4 1.6 18.8C620 573.9 569.9 624 508 624z',
      'p-id': '7858',
    },
    null,
    -1,
  ),
  Yr = [qr, Jr],
  Qr = { inheritAttrs: !1 },
  ie = _({
    ...Qr,
    name: 'ZaiInput',
    __name: 'input',
    props: {
      width: { default: '100%' },
      allowClear: { type: Boolean, default: !1 },
      password: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      maxlength: { default: void 0 },
      size: { default: 'middle' },
      prefix: { default: '' },
      suffix: { default: '' },
      value: { default: '' },
      valueModifiers: { default: () => ({}) },
      placeholder: { default: '' },
    },
    emits: ['update:value', 'change', 'enter'],
    setup(e, { emit: t }) {
      const n = e,
        s = b(() => (typeof n.width == 'number' ? n.width + 'px' : n.width)),
        o = ee(),
        r = b(() => {
          var m
          const k = (m = o.prefix) == null ? void 0 : m.call(o)
          return k
            ? !!(k[0].children !== 'v-if' && k != null && k.length)
            : n.prefix
        }),
        u = b(() => {
          var m
          const k = (m = o.suffix) == null ? void 0 : m.call(o)
          return k
            ? !!(k[0].children !== 'v-if' && k != null && k.length)
            : n.suffix || n.allowClear || n.password
        }),
        c = t,
        v = (k) => {
          'lazy' in n.valueModifiers ||
            (c('update:value', k.target.value), c('change', k))
        },
        h = (k) => {
          'lazy' in n.valueModifiers &&
            (c('update:value', k.target.value), c('change', k))
        },
        $ = (k) => {
          k.key === 'Enter' && (k.preventDefault(), c('enter', k))
        },
        w = V(),
        M = () => {
          c('update:value', ''), w.value.focus()
        },
        C = V(!1),
        z = () => {
          C.value = !C.value
        }
      return (k, m) => (
        a(),
        l(
          'div',
          { class: 'zai-input-wrap', style: U(`width: ${s.value};`) },
          [
            d(
              'div',
              {
                class: S([
                  'zai-input',
                  [`${k.size}`, { disabled: k.disabled }],
                ]),
              },
              [
                r.value
                  ? (a(),
                    l('span', Dr, [
                      p(k.$slots, 'prefix', {}, () => [D(T(k.prefix), 1)]),
                    ]))
                  : g('', !0),
                d(
                  'input',
                  Y(
                    {
                      class: 'zai-input',
                      ref_key: 'input',
                      ref: w,
                      type: k.password && !C.value ? 'password' : 'text',
                      value: k.value,
                      maxlength: k.maxlength,
                      disabled: k.disabled,
                      onInput: v,
                      onChange: h,
                      onKeydown: $,
                    },
                    k.$attrs,
                  ),
                  null,
                  16,
                  Zr,
                ),
                d(
                  'span',
                  {
                    class: S(['input-label', k.value ? 'input-label-top' : '']),
                  },
                  T(k.placeholder),
                  3,
                ),
                u.value
                  ? (a(),
                    l('span', Or, [
                      !k.disabled && k.allowClear && k.value
                        ? (a(),
                          l(
                            'span',
                            { key: 0, class: 'zai-action', onClick: M },
                            Ur,
                          ))
                        : g('', !0),
                      k.password
                        ? (a(),
                          l(
                            'span',
                            { key: 1, class: 'zai-action', onClick: z },
                            [
                              Te((a(), l('svg', Wr, Rr, 512)), [[je, C.value]]),
                              Te((a(), l('svg', Kr, Yr, 512)), [
                                [je, !C.value],
                              ]),
                            ],
                          ))
                        : g('', !0),
                      p(k.$slots, 'suffix', {}, () => [D(T(k.suffix), 1)]),
                    ]))
                  : g('', !0),
              ],
              2,
            ),
          ],
          4,
        )
      )
    },
  })
ie.install = (e) => {
  e.component(ie.name, ie)
}
const Xr = { key: 0, class: 'zai-input-prefix' },
  xr = { class: 'zai-handler-wrap' },
  ei = d(
    'svg',
    {
      focusable: 'false',
      class: 'zai-icon',
      'data-icon': 'up',
      'aria-hidden': 'true',
      viewBox: '64 64 896 896',
    },
    [
      d('path', {
        d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
      }),
    ],
    -1,
  ),
  ti = [ei],
  ni = d(
    'svg',
    {
      focusable: 'false',
      class: 'zai-icon',
      'data-icon': 'down',
      'aria-hidden': 'true',
      viewBox: '64 64 896 896',
    },
    [
      d('path', {
        d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
      }),
    ],
    -1,
  ),
  oi = [ni],
  si = { inheritAttrs: !1 },
  le = _({
    ...si,
    name: 'ZaiInputNumber',
    __name: 'inputNumber',
    props: {
      value: { default: null },
      min: { default: -1 / 0 },
      max: { default: 1 / 0 },
      step: { default: 1 },
      precision: { default: 0 },
      width: { default: '100%' },
      disabled: { type: Boolean, default: !1 },
      size: { default: 'middle' },
      prefix: { default: '' },
      formatter: { type: Function, default: void 0 },
      placeholder: { default: '' },
    },
    emits: ['update:value', 'change'],
    setup(e, { emit: t }) {
      var k
      const n = e,
        s = t,
        o = b(() => (typeof n.width == 'number' ? n.width + 'px' : n.width)),
        r = ee(),
        u = b(() => {
          var B
          const m = (B = r.prefix) == null ? void 0 : B.call(r)
          return m
            ? !!(m[0].children !== 'v-if' && m != null && m.length)
            : n.prefix
        }),
        c = b(() => {
          var B
          const m =
            ((B = String(n.step).split('.')[1]) == null ? void 0 : B.length) ||
            0
          return Math.max(n.precision, m)
        }),
        v = b(() => {
          let m = (B) => B
          return n.formatter ? n.formatter : m
        }),
        h = V(v.value((k = n.value) == null ? void 0 : k.toFixed(c.value)))
      function $(m) {
        ;(h.value = v.value(m == null ? void 0 : m.toFixed(c.value))),
          console.log('emitValue', m),
          s('change', m ? Number(m.toFixed(c.value)) : null),
          s('update:value', m ? Number(m.toFixed(c.value)) : null)
      }
      function w(m) {
        const B = m.target.value.replaceAll(',', '')
        if (B === '') {
          $(null)
          return
        }
        if (parseFloat(B) < n.min) {
          $(n.min)
          return
        }
        if (parseFloat(B) > n.max) {
          $(n.max)
          return
        }
        parseFloat(B) !== n.value && $(parseFloat(B))
      }
      function M(m, B) {
        const E = String(m).split('.')[1],
          O = String(B).split('.')[1]
        let R = Math.max(
            (E == null ? void 0 : E.length) || 0,
            (O == null ? void 0 : O.length) || 0,
          ),
          X = m.toFixed(R),
          lt = B.toFixed(R)
        return (+X.replace('.', '') + +lt.replace('.', '')) / Math.pow(10, R)
      }
      function C() {
        const m = parseFloat(
          Math.min(n.max, M(Number(n.value) || 0, +n.step)).toFixed(c.value),
        )
        $(m)
      }
      function z() {
        const m = parseFloat(
          Math.max(n.min, M(Number(n.value) || 0, -n.step)).toFixed(c.value),
        )
        $(m)
      }
      return (m, B) => (
        a(),
        l(
          'div',
          {
            class: 'zai-input-number-wrap',
            tabindex: '1',
            style: U(`width: ${o.value};`),
          },
          [
            d(
              'div',
              {
                class: S([
                  'zai-input-wrap',
                  [`${m.size}`, { disabled: m.disabled }],
                ]),
              },
              [
                u.value
                  ? (a(),
                    l('span', Xr, [
                      p(m.$slots, 'prefix', {}, () => [D(T(m.prefix), 1)]),
                    ]))
                  : g('', !0),
                Te(
                  d(
                    'input',
                    Y(
                      {
                        autocomplete: 'off',
                        class: 'zai-input-number',
                        onChange: w,
                        'onUpdate:modelValue':
                          B[0] || (B[0] = (E) => (h.value = E)),
                      },
                      m.$attrs,
                    ),
                    null,
                    16,
                  ),
                  [[yt, h.value]],
                ),
                d(
                  'span',
                  {
                    class: S(['input-label', m.value ? 'input-label-top' : '']),
                  },
                  T(m.placeholder),
                  3,
                ),
              ],
              2,
            ),
            d('div', xr, [
              d(
                'span',
                {
                  class: S([
                    'zai-up-arrow',
                    { disabled: (m.value || 0) >= m.max },
                  ]),
                  onClick: C,
                },
                ti,
                2,
              ),
              d(
                'span',
                {
                  class: S([
                    'zai-down-arrow',
                    { disabled: (m.value || 0) <= m.min },
                  ]),
                  onClick: z,
                },
                oi,
                2,
              ),
            ]),
          ],
          4,
        )
      )
    },
  })
le.install = (e) => {
  e.component(le.name, le)
}
const ce = _({
  name: 'ZaiRow',
  __name: 'row',
  props: {
    align: { default: 'top' },
    justify: { default: 'start' },
    wrap: { type: Boolean, default: !1 },
    gutter: { default: 0 },
  },
  setup(e) {
    const t = e,
      n = b(() =>
        typeof t.gutter == 'number'
          ? t.gutter
          : Array.isArray(t.gutter)
            ? t.gutter[0]
            : typeof t.gutter == 'object'
              ? c.value >= 1600 && t.gutter.xxl
                ? t.gutter.xxl
                : c.value >= 1200 && t.gutter.xl
                  ? t.gutter.xl
                  : c.value >= 992 && t.gutter.lg
                    ? t.gutter.lg
                    : c.value >= 768 && t.gutter.md
                      ? t.gutter.md
                      : c.value >= 576 && t.gutter.sm
                        ? t.gutter.sm
                        : c.value < 576 && t.gutter.xs
                          ? t.gutter.xs
                          : 16
              : 0,
      ),
      s = b(() =>
        Array.isArray(t.gutter)
          ? (console.log('props.gutter[1]', t.gutter[1]), t.gutter[1])
          : 0,
      ),
      o = b(() => (t.wrap ? 'wrap' : 'nowrap')),
      r = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end',
        stretch: 'stretch',
      },
      u = b(
        () => `--xGap:${n.value / 2}px;
  margin-left: -${n.value / 2}px; 
  margin-right: -${n.value / 2}px;
  --yGap:${s.value}px;
  --wrap:${o.value};
  --justify:${t.justify};
  --align:${r[t.align]}`,
      ),
      c = V(document.documentElement.clientWidth)
    Z(() => {
      window.addEventListener('resize', v)
    }),
      x(() => {
        window.removeEventListener('resize', v)
      })
    const v = () => {
      c.value = document.documentElement.clientWidth
    }
    return (h, $) => (
      a(),
      l(
        'div',
        { class: 'zai-row', style: U(u.value) },
        [p(h.$slots, 'default')],
        4,
      )
    )
  },
})
ce.install = (e) => {
  e.component(ce.name, ce)
}
const ai = { class: 'zai-col-box' },
  ue = _({
    name: 'ZaiCol',
    __name: 'col',
    props: {
      flex: { default: '' },
      offset: { default: 0 },
      order: { default: 0 },
      span: { default: void 0 },
      xs: { default: 0 },
      sm: { default: 0 },
      md: { default: 0 },
      lg: { default: 0 },
      xl: { default: 0 },
      xxl: { default: 0 },
    },
    setup(e) {
      const t = e,
        n = b(() => `--flex:${t.flex};--order:${t.order}`),
        s = b(() => {
          if (o.value >= 1600 && t.xxl)
            return typeof t.xxl == 'object'
              ? t.xxl
              : { span: t.xxl, offset: void 0 }
          if (o.value >= 1200 && t.xl)
            return typeof t.xl == 'object'
              ? t.xl
              : { span: t.xl, offset: void 0 }
          if (o.value >= 992 && t.lg)
            return typeof t.lg == 'object'
              ? t.lg
              : { span: t.lg, offset: void 0 }
          if (o.value >= 768 && t.md)
            return typeof t.md == 'object'
              ? t.md
              : { span: t.md, offset: void 0 }
          if (o.value >= 576 && t.sm)
            return typeof t.sm == 'object'
              ? t.sm
              : { span: t.sm, offset: void 0 }
          if (o.value < 576 && t.xs)
            return typeof t.xs == 'object'
              ? t.xs
              : { span: t.xs, offset: void 0 }
        }),
        o = V(document.documentElement.clientWidth)
      Z(() => {
        window.addEventListener('resize', r)
      }),
        x(() => {
          window.removeEventListener('resize', r)
        })
      const r = () => {
        o.value = document.documentElement.clientWidth
      }
      return (u, c) => {
        var v, h
        return (
          a(),
          l(
            'div',
            {
              class: S(
                `zai-col col-${((v = s.value) == null ? void 0 : v.span) || u.span} offset-${((h = s.value) == null ? void 0 : h.offset) || u.offset}`,
              ),
              style: U(n.value),
            },
            [d('div', ai, [p(u.$slots, 'default')])],
            6,
          )
        )
      }
    },
  })
ue.install = (e) => {
  e.component(ue.name, ue)
}
const ri = { class: 'zai-content' },
  de = _({
    name: 'ZaiContent',
    __name: 'content',
    setup(e) {
      return (t, n) => (a(), l('main', ri, [p(t.$slots, 'default')]))
    },
  })
de.install = (e) => {
  e.component(de.name, de)
}
const ii = { class: 'zai-footer' },
  pe = _({
    name: 'ZaiFooter',
    __name: 'footer',
    setup(e) {
      return (t, n) => (a(), l('footer', ii, [p(t.$slots, 'default')]))
    },
  })
pe.install = (e) => {
  e.component(pe.name, pe)
}
const li = { class: 'zai-header' },
  ve = _({
    name: 'ZaiHeader',
    __name: 'header',
    setup(e) {
      return (t, n) => (a(), l('header', li, [p(t.$slots, 'default')]))
    },
  })
ve.install = (e) => {
  e.component(ve.name, ve)
}
const ci = { class: 'zai-side' },
  he = _({
    name: 'ZaiSider',
    __name: 'sider',
    setup(e) {
      return (t, n) => (a(), l('aside', ci, [p(t.$slots, 'default')]))
    },
  })
he.install = (e) => {
  e.component(he.name, he)
}
const fe = _({
  name: 'ZaiLayout',
  __name: 'layout',
  props: { direction: { default: 'horizontal' } },
  setup(e) {
    const t = e,
      n = ee(),
      s = b(() => {
        var r
        const o = ((r = n.default) == null ? void 0 : r.call(n)) || []
        return (
          console.log('childSlots', o),
          o.length > 0 &&
          o.some(
            (u) =>
              (u == null ? void 0 : u.type.name) === 'ZaiHeader' ||
              (u == null ? void 0 : u.type.name) === 'ZaiFooter',
          )
            ? 'column'
            : t.direction === 'horizontal'
              ? 'row'
              : 'column'
        )
      })
    return (o, r) => (
      a(),
      l(
        'div',
        { class: 'zai-layout', style: U(`--direction:${s.value}`) },
        [p(o.$slots, 'default')],
        4,
      )
    )
  },
})
fe.install = (e) => {
  e.component(fe.name, fe)
}
const ui = { class: 'zai-empty' },
  di = ['width', 'height'],
  pi = d(
    'path',
    {
      d: 'M523.377778 259.792593c0-9.481481-7.585185-18.962963-18.962963-18.962963s-18.962963 7.585185-18.962963 18.962963c0 41.718519-34.133333 73.955556-75.851852 73.955555s-75.851852-32.237037-75.851852-73.955555c0-9.481481-7.585185-18.962963-18.962963-18.962963-9.481481 0-18.962963 7.585185-18.962963 18.962963 0 60.681481 51.2 111.881481 111.881482 111.881481 64.474074-1.896296 115.674074-51.2 115.674074-111.881481zM733.866667 612.503704c-39.822222-24.651852-83.437037-39.822222-134.637037-39.822223s-94.814815 15.17037-134.637037 39.822223c-24.651852 15.17037-39.822222 30.340741-49.303704 41.718518-7.585185 7.585185-5.688889 18.962963 1.896296 26.548148s18.962963 5.688889 26.548148-1.896296l9.481482-9.481481c7.585185-7.585185 18.962963-17.066667 30.340741-22.755556 34.133333-20.859259 72.059259-34.133333 113.777777-34.133333s81.540741 13.274074 113.777778 34.133333c11.377778 7.585185 22.755556 15.17037 30.340741 22.755556 5.688889 3.792593 7.585185 7.585185 9.481481 9.481481 5.688889 7.585185 18.962963 9.481481 26.548148 1.896296 7.585185-5.688889 9.481481-18.962963 1.896297-26.548148-5.688889-11.377778-22.755556-26.548148-45.511111-41.718518zM879.881481 240.82963c-9.481481 0-18.962963 7.585185-18.962962 18.962963 0 41.718519-34.133333 73.955556-75.851852 73.955555s-75.851852-32.237037-75.851852-73.955555c0-9.481481-7.585185-18.962963-18.962963-18.962963s-18.962963 7.585185-18.962963 18.962963c0 60.681481 51.2 109.985185 111.881481 111.881481 62.577778 0 111.881481-49.303704 111.881482-111.881481 3.792593-11.377778-3.792593-18.962963-15.170371-18.962963z',
      fill: 'currentColor',
      'p-id': '13638',
    },
    null,
    -1,
  ),
  vi = d(
    'path',
    {
      d: 'M1118.814815 0h-1039.170371c-41.718519 0-75.851852 34.133333-75.851851 73.955556V779.377778c0 39.822222 32.237037 73.955556 73.955555 73.955555 3.792593 11.377778 9.481481 20.859259 18.962963 30.340741 1.896296 1.896296 5.688889 3.792593 7.585185 5.688889 94.814815 24.651852 117.57037 54.992593 123.25926 70.162963 5.688889 18.962963-5.688889 32.237037-5.688889 32.237037-5.688889 7.585185-5.688889 18.962963 3.792592 24.651852s18.962963 5.688889 24.651852-3.792593c9.481481-11.377778 20.859259-36.02963 11.377778-64.474074-13.274074-39.822222-60.681481-70.162963-144.118519-92.918518-7.585185-7.585185-9.481481-15.17037-9.481481-18.962963 0-7.585185 3.792593-15.17037 13.274074-20.85926 1.896296-1.896296 5.688889-3.792593 7.585185-5.688888 0 0 1.896296 0 1.896296-1.896297 3.792593-1.896296 7.585185-3.792593 11.377778-3.792592 5.688889-1.896296 17.066667-3.792593 36.02963-3.792593 32.237037 0 68.266667 5.688889 109.985185 18.962963 7.585185 3.792593 13.274074 5.688889 20.859259 9.481481 1.896296 1.896296 3.792593 1.896296 5.688889 3.792593l28.444445 17.066667c138.42963 96.711111 123.259259 144.118519 123.259259 144.118518-3.792593 7.585185 0 18.962963 7.585185 22.755556 1.896296 1.896296 5.688889 1.896296 7.585185 1.896296 7.585185 0 13.274074-3.792593 17.066667-9.481481 5.688889-9.481481 24.651852-64.474074-91.022222-155.496297h318.577777c-113.777778 92.918519-94.814815 146.014815-89.125925 155.496297 3.792593 5.688889 9.481481 9.481481 15.17037 9.481481 3.792593 0 5.688889 0 7.585185-1.896296 7.585185-5.688889 11.377778-15.17037 7.585185-24.651852 0 0-15.17037-47.407407 123.25926-144.118519 1.896296 0 1.896296 0 1.896296-1.896296 7.585185-5.688889 17.066667-11.377778 26.548148-17.066667 1.896296-1.896296 3.792593-1.896296 5.688889-3.792592 7.585185-3.792593 13.274074-5.688889 20.859259-9.481482 41.718519-11.377778 77.748148-18.962963 109.985185-18.962963 17.066667 0 28.444444 1.896296 36.02963 3.792593 3.792593 1.896296 7.585185 1.896296 11.377778 3.792593 0 0 1.896296 0 1.896296 1.896296 3.792593 1.896296 5.688889 3.792593 7.585185 5.688889 7.585185 5.688889 13.274074 13.274074 13.274074 20.859259 0 5.688889-1.896296 11.377778-7.585185 18.962963-81.540741 20.859259-128.948148 53.096296-144.118518 92.918519-9.481481 28.444444 1.896296 54.992593 11.377777 64.474074 7.585185 7.585185 17.066667 9.481481 24.651852 3.792592s9.481481-17.066667 3.792593-24.651852c0-1.896296-11.377778-15.17037-5.688889-32.237037 5.688889-15.17037 28.444444-45.511111 123.259259-70.162963 3.792593 0 5.688889-1.896296 7.585185-5.688889 9.481481-9.481481 15.17037-20.859259 18.962963-30.34074h56.888889c41.718519 0 75.851852-34.133333 75.851852-73.955556v-705.422222c3.792593-36.02963-30.340741-70.162963-72.059259-70.162963z m37.925926 779.377778c0 20.859259-17.066667 37.925926-39.822222 37.925926h-56.888889l-5.688889-11.377778c-1.896296-1.896296-3.792593-5.688889-5.688889-7.585185 0-1.896296-1.896296-1.896296-1.896296-1.896297l-1.896297-1.896296-7.585185-7.585185c-1.896296 0-1.896296-1.896296-3.792593-1.896296-1.896296-1.896296-5.688889-3.792593-7.585185-5.688889-1.896296 0-1.896296-1.896296-3.792592-1.896297h-1.896297c-9.481481-5.688889-24.651852-9.481481-39.822222-13.274074h-9.481481c-7.585185 0-13.274074-1.896296-20.85926-1.896296h-5.688888c-7.585185 0-17.066667 0-26.548149 1.896296h-5.688888c-20.859259 1.896296-41.718519 7.585185-62.577778 15.170371-1.896296 0-3.792593 1.896296-5.688889 1.896296-7.585185 3.792593-24.651852 9.481481-32.237037 15.17037l-3.792593 1.896297-28.444444 17.066666-3.792593 1.896297H360.296296c-11.377778-7.585185-24.651852-15.17037-36.029629-20.85926-11.377778-5.688889-22.755556-11.377778-32.237037-15.17037-36.02963-13.274074-70.162963-18.962963-100.503704-18.962963h-3.792593c-7.585185 0-17.066667 0-24.651852 1.896296h-7.585185c-18.962963 3.792593-28.444444 7.585185-39.822222 13.274074h-1.896296c-1.896296 0-1.896296 1.896296-3.792593 1.896297-3.792593 1.896296-5.688889 3.792593-7.585185 5.688889-1.896296 0-1.896296 1.896296-3.792593 1.896296-3.792593 1.896296-7.585185 5.688889-9.481481 7.585185l-1.896296 1.896296c-5.688889 5.688889-9.481481 13.274074-11.377778 18.962963-20.859259 0-37.925926-18.962963-37.925926-37.925926v-705.422222c0-20.859259 17.066667-37.925926 39.822222-37.925926h1039.170371c20.859259 0 39.822222 17.066667 39.822222 37.925926V779.377778z',
      fill: 'currentColor',
      'p-id': '13639',
    },
    null,
    -1,
  ),
  hi = [pi, vi],
  fi = ['width', 'height'],
  mi = d(
    'path',
    {
      d: 'M416 512c-17.6 0-32 14.4-32 32s14.4 32 32 32 32-14.4 32-32-14.4-32-32-32z m192 64c17.6 0 32-14.4 32-32s-14.4-32-32-32-32 14.4-32 32 14.4 32 32 32zM440 416h-16c0 22.4-17.6 40-40 40h-32v16h32c30.4 0 56-25.6 56-56zM640 472h32v-16h-32c-22.4 0-40-17.6-40-40h-16c0 30.4 25.6 56 56 56z m-187.2 224c36.8-20.8 83.2-20.8 120 0l8-14.4c-41.6-24-94.4-24-136 0l8 14.4z m-126.4-97.6l-11.2-11.2-32 32 11.2 11.2 32-32z m48 0l-11.2-11.2-32 32 11.2 11.2 32-32z m380.8 19.2l-32-32-11.2 11.2 32 32 11.2-11.2z m-59.2 12.8l11.2-11.2-32-32-11.2 11.2 32 32zM104 224h16v-40H160v-16H120V128h-16v40H64v16h40V224z m832 612.8c14.4-9.6 24-20.8 24-33.6 0-27.2-33.6-46.4-104-64l49.6-379.2c1.6-17.6-3.2-36.8-16-49.6-4.8-4.8-9.6-8-14.4-11.2l3.2-38.4c1.6-12.8-3.2-27.2-12.8-36.8s-22.4-16-35.2-16H491.2v-32c0-27.2-20.8-48-48-48H288c-27.2 0-48 20.8-48 48v32h-22.4c-14.4 0-27.2 6.4-35.2 16-9.6 9.6-12.8 24-11.2 38.4l3.2 27.2c-16 1.6-28.8 9.6-40 20.8-12.8 14.4-17.6 32-16 49.6l49.6 379.2c-68.8 16-104 38.4-104 65.6 0 19.2 14.4 48 139.2 70.4 81.6 14.4 192 22.4 308.8 22.4 14.4 0 300.8 0 408-49.6v11.2H896v16h24V896h16v-24H960v-16h-24v-19.2z m-729.6-592c3.2-3.2 8-4.8 11.2-4.8H272v-64c0-9.6 6.4-16 16-16h155.2c9.6 0 16 6.4 16 16v64h371.2c4.8 0 8 1.6 11.2 4.8s4.8 8 4.8 12.8l-3.2 30.4H206.4l-3.2-30.4c-1.6-4.8 0-9.6 3.2-12.8z m-56 112c-1.6-9.6 1.6-17.6 8-25.6 6.4-6.4 14.4-11.2 24-11.2h659.2c9.6 0 17.6 3.2 24 11.2 6.4 6.4 9.6 16 8 25.6l-52.8 400c-1.6 16-16 28.8-32 28.8H233.6c-16 0-30.4-12.8-32-28.8l-51.2-400zM512 864c-264 0-409.6-38.4-416-59.2 1.6-4.8 17.6-19.2 76.8-33.6 8 25.6 32 44.8 60.8 44.8h555.2c28.8 0 52.8-19.2 60.8-44.8 68.8 16 76.8 32 76.8 32-4.8 20.8-150.4 60.8-414.4 60.8z',
      'p-id': '8547',
      fill: 'currentColor',
    },
    null,
    -1,
  ),
  _i = [mi],
  gi = ['src'],
  $i = { class: 'zai-empty-description' },
  me = _({
    name: 'ZaiEmpty',
    __name: 'empty',
    props: {
      image: { default: '1' },
      imageSize: { default: 100 },
      description: { default: '暂无数据' },
    },
    setup(e) {
      return (t, n) => (
        a(),
        l('div', ui, [
          t.image == '1'
            ? (a(),
              l(
                'svg',
                {
                  key: 0,
                  viewBox: '0 0 1194 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'p-id': '13637',
                  width: t.imageSize,
                  height: t.imageSize,
                },
                hi,
                8,
                di,
              ))
            : t.image == '2'
              ? (a(),
                l(
                  'svg',
                  {
                    key: 1,
                    viewBox: '0 0 1024 1024',
                    version: '1.1',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'p-id': '8546',
                    width: t.imageSize,
                    height: t.imageSize,
                  },
                  _i,
                  8,
                  fi,
                ))
              : (a(),
                l(
                  'img',
                  {
                    key: 2,
                    src: t.image,
                    style: U(
                      `width: ${t.imageSize}px;height: ${t.imageSize}px;`,
                    ),
                  },
                  null,
                  12,
                  gi,
                )),
          d('p', $i, T(t.description), 1),
        ])
      )
    },
  })
me.install = (e) => {
  e.component(me.name, me)
}
const bi = { class: 'zai-switch' },
  ki = d('div', { class: 'zai-switch-handle' }, null, -1),
  yi = { class: 'zai-swith-inner' },
  wi = { key: 1, class: 'zai-swith-inner-checked' },
  Li = { key: 2, class: 'zai-swith-inner-unchecked' },
  _e = _({
    name: 'ZaiSwitch',
    __name: 'switch',
    props: {
      checked: { type: Boolean, default: !1 },
      active: { default: '开' },
      inactive: { default: '关' },
      disabled: { type: Boolean, default: !1 },
      size: { default: 'middle' },
    },
    emits: ['update:checked'],
    setup(e, { emit: t }) {
      const n = e,
        s = t,
        o = () => {
          n.disabled || s('update:checked', !n.checked)
        },
        r = ee(),
        u = b(() => {
          var $
          const h = ($ = r.active) == null ? void 0 : $.call(r)
          return h ? !!(h[0].children !== 'v-if' && h != null && h.length) : !1
        }),
        c = b(() => {
          var $
          const h = ($ = r.inactive) == null ? void 0 : $.call(r)
          return h ? !!(h[0].children !== 'v-if' && h != null && h.length) : !1
        }),
        v = b(() => (c.value || c.value ? !1 : n.active || n.inactive))
      return (h, $) => (
        a(),
        l('div', bi, [
          d(
            'button',
            {
              class: S([
                'zai-switch-btn',
                {
                  'zai-switch-disabled': h.disabled,
                  'zai-switch-check': h.checked,
                  [`zai-switch-${h.size}`]: h.size,
                },
              ]),
              onClick: $[0] || ($[0] = (w) => o()),
            },
            [
              ki,
              d('span', yi, [
                v.value
                  ? (a(),
                    l(
                      'span',
                      {
                        key: 0,
                        class: S(
                          h.checked
                            ? 'zai-swith-inner-checked'
                            : 'zai-swith-inner-unchecked',
                        ),
                      },
                      T(h.checked ? h.active : h.inactive),
                      3,
                    ))
                  : g('', !0),
                u.value
                  ? (a(), l('span', wi, [p(h.$slots, 'active')]))
                  : g('', !0),
                c.value
                  ? (a(), l('span', Li, [p(h.$slots, 'inactive')]))
                  : g('', !0),
              ]),
            ],
            2,
          ),
        ])
      )
    },
  })
_e.install = (e) => {
  e.component(_e.name, _e)
}
const Pi = (e, t, n, s, o) => {
    for (let c = 0; c < 12; c++)
      e.save(),
        e.beginPath(),
        e.translate(54 * o, 54 * o),
        e.rotate((c * 30 * Math.PI) / 180),
        (e.strokeStyle = '#FFFFFF'),
        (e.lineWidth = 0.8 * o),
        e.moveTo(0, -42 * o),
        e.lineTo(0, -46 * o),
        e.stroke(),
        e.closePath(),
        e.restore()
    ;[3, 6, 9, 12].forEach(function (c, v) {
      e.save()
      const h = ((2 * Math.PI) / 4) * v,
        $ = Math.cos(h) * 34,
        w = Math.sin(h) * 34
      ;(e.font = `${12 * o}px Arial`),
        (e.textAlign = 'center'),
        (e.textBaseline = 'middle'),
        (e.fillStyle = '#FFFFFF'),
        e.fill(),
        e.fillText(c.toString(), ($ + 54) * o, (w + 54) * o),
        e.restore()
    })
    for (let c = 0; c < 60; c++)
      e.save(),
        e.beginPath(),
        e.translate(54 * o, 54 * o),
        e.rotate((c * 6 * Math.PI) / 180),
        (e.strokeStyle = '#FFFFFF'),
        (e.lineWidth = 0.8 * o),
        e.moveTo(0, -44 * o),
        e.lineTo(0, -46 * o),
        e.stroke(),
        e.closePath(),
        e.restore()
    for (let c = 0; c < 60 * 6; c++)
      e.save(),
        e.beginPath(),
        e.translate(54 * o, 54 * o),
        e.rotate((c * 1 * Math.PI) / 180),
        (e.strokeStyle = 'rgba(255,255,255,0.4)'),
        (e.lineWidth = 0.1 * o),
        e.moveTo(0, -48 * o),
        e.lineTo(0, -53 * o),
        e.stroke(),
        e.closePath(),
        e.restore()
    ;[15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 5, 10].forEach(function (c, v) {
      e.save()
      const h = ((2 * Math.PI) / 12) * v,
        $ = Math.cos(h) * 50,
        w = Math.sin(h) * 50
      ;(e.font = `${6 * o} Arial`),
        (e.textAlign = 'center'),
        (e.textBaseline = 'middle'),
        (e.fillStyle = 'rgba(255,255,255,0.4)'),
        e.fill(),
        e.fillText(c.toString(), ($ + 54) * o, (w + 54) * o),
        e.restore()
    }),
      e.save(),
      e.beginPath(),
      e.translate(54 * o, 54 * o),
      e.rotate((t * 30 * Math.PI) / 180),
      (e.strokeStyle = 'rgba(255,255,255,0.4)'),
      (e.lineWidth = 2 * o),
      e.moveTo(0, 10 * o),
      e.lineTo(0, -5 * o),
      e.stroke(),
      e.closePath(),
      e.restore(),
      e.save(),
      e.beginPath(),
      e.translate(54 * o, 54 * o),
      e.rotate((t * 30 * Math.PI) / 180),
      (e.strokeStyle = 'rgb(255,255,255)'),
      (e.lineWidth = 2 * o),
      e.moveTo(0, -5 * o),
      e.lineTo(0, -26 * o),
      e.stroke(),
      e.closePath(),
      e.restore(),
      e.save(),
      e.beginPath(),
      e.translate(54 * o, 54 * o),
      e.rotate((n * 6 * Math.PI) / 180),
      (e.strokeStyle = 'rgba(255,255,255,0.4)'),
      (e.lineWidth = 1 * o),
      e.moveTo(0, 10 * o),
      e.lineTo(0, -7 * o),
      e.stroke(),
      e.closePath(),
      e.restore(),
      e.save(),
      e.beginPath(),
      e.translate(54 * o, 54 * o),
      e.rotate((n * 6 * Math.PI) / 180),
      (e.strokeStyle = 'rgb(255,255,255)'),
      (e.lineWidth = 2 * o),
      e.moveTo(0, -7 * o),
      e.lineTo(0, -40 * o),
      e.stroke(),
      e.closePath(),
      e.restore(),
      e.save(),
      e.beginPath(),
      e.translate(54 * o, 54 * o),
      e.rotate((s * 6 * Math.PI) / 180),
      (e.strokeStyle = '#FF3E3E'),
      (e.lineWidth = 1 * o),
      e.moveTo(0, 10 * o),
      e.lineTo(0, -46 * o),
      e.stroke(),
      e.closePath(),
      e.restore(),
      e.beginPath(),
      (e.fillStyle = '#FF3E3E'),
      (e.strokeStyle = '#FF3E3E'),
      (e.lineWidth = 1 * o),
      e.arc(54 * o, 54 * o, 2 * o, 0, 2 * Math.PI * o, !0),
      e.fill(),
      e.stroke(),
      e.closePath(),
      e.restore()
  },
  Vi = (e) => {
    const t = new Date().getTimezoneOffset(),
      n = new Date().getTime(),
      s = new Date(n + t * 60 * 1e3 + Number(e) * 60 * 60 * 1e3),
      o = s.getHours(),
      r = s.getMinutes(),
      u = s.getSeconds(),
      c = s.getDay(),
      v = o >= 12 ? 'PM' : 'AM'
    let h = o
    o > 12 && (h = o - 12), (h += r / 60)
    const $ = r + u / 60
    return {
      hour: o,
      minutes: r,
      seconds: u,
      day: c,
      AMORPM: v,
      hour_12: h,
      minutes_60: $,
    }
  },
  Si = ['id', 'width', 'height'],
  ge = _({
    name: 'ZaiClock',
    __name: 'clock',
    props: {
      timeZone: { default: '1' },
      countryCode: { default: 'cn' },
      width: { default: '108' },
    },
    setup(e) {
      const t = e,
        n = V(Number(t.width)),
        s = V(n.value / 108),
        o = V()
      return (
        Z(() => {
          let r = document.getElementById(`cvs${t.countryCode}`)
          if (r) o.value = r.getContext('2d')
          else {
            console.error(`Element with id "cvs${t.countryCode}" not found.`)
            return
          }
          const u = new Image()
          ;(u.src = `https://flagcdn.com/w40/${t.countryCode}.webp`),
            console.log('img.src', u.src),
            (u.onload = function () {
              var c
              ;(c = o.value) == null ||
                c.drawImage(
                  u,
                  42 * s.value,
                  64 * s.value,
                  24 * s.value,
                  16 * s.value,
                )
            }),
            setInterval(function () {
              var v, h
              ;(v = o.value) == null ||
                v.clearRect(0, 0, 108 * s.value, 108 * s.value),
                (h = o.value) == null ||
                  h.drawImage(
                    u,
                    42 * s.value,
                    64 * s.value,
                    24 * s.value,
                    16 * s.value,
                  )
              const c = Vi(t.timeZone)
              o.value &&
                Pi(o.value, c.hour_12, c.minutes_60, c.seconds, s.value)
            }, 1e3)
        }),
        (r, u) => (
          a(),
          l(
            'div',
            { class: 'zai-clock', style: U(`--scale:${s.value}`) },
            [
              d(
                'canvas',
                { id: `cvs${t.countryCode}`, width: n.value, height: n.value },
                null,
                8,
                Si,
              ),
            ],
            4,
          )
        )
      )
    },
  })
ge.install = (e) => {
  e.component(ge.name, ge)
}
const Mi = [ae, re, ie, le, ce, ue, de, pe, ve, fe, he, me, _e, ge],
  Ci = (e) => {
    Mi.forEach((t) => {
      e.component(t.name, t)
    })
  },
  Ti = { install: Ci },
  Ve = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, o] of t) n[s] = o
    return n
  },
  Ii = {},
  zi = {
    t: '1661231422733',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3259',
    width: '20',
    height: '20',
  },
  Ni = d(
    'path',
    {
      d: 'M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z',
      'p-id': '3260',
    },
    null,
    -1,
  ),
  Bi = [Ni]
function Hi(e, t) {
  return a(), l('svg', zi, Bi)
}
const Fi = Ve(Ii, [['render', Hi]]),
  Ai = {},
  Ei = {
    t: '1661231449868',
    class: 'icon',
    viewBox: '0 0 1024 1024',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'p-id': '3541',
    width: '20',
    height: '20',
  },
  Di = d(
    'path',
    {
      d: 'M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z',
      'p-id': '3542',
    },
    null,
    -1,
  ),
  Zi = [Di]
function Oi(e, t) {
  return a(), l('svg', Ei, Zi)
}
const ji = Ve(Ai, [['render', Oi]]),
  Ui = {},
  Wi = {
    viewBox: '0 0 544 560',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  Gi = d(
    'path',
    {
      d: 'M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z',
      fill: 'currentColor',
    },
    null,
    -1,
  ),
  Ri = [Gi]
function Ki(e, t) {
  return a(), l('svg', Wi, Ri)
}
const qi = Ve(Ui, [['render', Ki]]),
  ne = 'vitepress-demo-preview',
  oe = (e, t, n, s) => {
    let o = t === '' ? `${e}` : `${e}-${t}`
    return n && (o += `__${n}`), s && (o += `--${s}`), o
  },
  it = (e = '') => ({
    b: () => oe(ne, e),
    e: (t = '') => oe(ne, e, t),
    m: (t = '') => oe(ne, e, '', t),
    bem: (t, n, s) => oe(ne, t, n, s),
  }),
  Ji = () => {
    const e = V(!0)
    return {
      isCodeFold: e,
      setCodeFold: (t) => {
        e.value = t
      },
    }
  },
  Yi = () => ({
    copyContent: V(''),
    clickCopy: async (e) => {
      await navigator.clipboard.writeText(e)
    },
  }),
  Qi = {},
  Xi = {
    width: '20',
    height: '20',
    viewBox: '0 0 48 48',
    fill: 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  xi = d(
    'path',
    {
      d: 'M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    null,
    -1,
  ),
  el = d(
    'path',
    {
      d: 'M17 24L22 29L32 19',
      fill: 'currentColor',
      stroke: '#333',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    null,
    -1,
  ),
  tl = [xi, el]
function nl(e, t) {
  return a(), l('svg', Xi, tl)
}
const ol = Ve(Qi, [['render', nl]]),
  sl = _({
    __name: 'message-notice',
    props: { content: { default: '复制成功！' }, close: null },
    setup(e, { expose: t }) {
      const n = e,
        s = it(),
        o = V(!1),
        r = (h) => {
          o.value = h
        },
        u = V(-999),
        c = (h) => {
          u.value = h
        }
      W(o, (h) => {
        h === !0 &&
          setTimeout(() => {
            o.value = !1
          }, 3e3)
      })
      const v = () => {
        n.close()
      }
      return (
        t({ setVisible: r, setTopHeight: c }),
        (h, $) => (
          a(),
          L(
            be,
            { name: 'slide-fade', onAfterLeave: v },
            {
              default: f(() => [
                o.value
                  ? (a(),
                    l(
                      'div',
                      {
                        key: 0,
                        class: S([i(s).bem('message-notice', 'container')]),
                        style: U({ top: u.value + 'px' }),
                      },
                      [y(ol), d('span', null, T(e.content), 1)],
                      6,
                    ))
                  : g('', !0),
              ]),
              _: 1,
            },
          )
        )
      )
    },
  }),
  Me = [],
  al = {
    open: () => {
      const e = document.createElement('div'),
        t = wt(sl, {
          content: '复制成功！',
          close: () => {
            document.body.removeChild(e), Me.pop(), t.unmount()
          },
        }),
        n = t.mount(e)
      document.body.appendChild(e)
      const s = Me.length,
        o = s === 0 ? 10 : (s + 1) * 10 + s * 42
      n.setTopHeight(o), n.setVisible(!0), Me.push(n)
    },
  },
  rl = ['innerHTML'],
  il = _({
    __name: 'ElementPlus',
    props: {
      code: null,
      showCode: null,
      title: { default: '默认标题' },
      description: { default: '描述内容' },
    },
    setup(e) {
      const t = e,
        n = it(),
        { isCodeFold: s, setCodeFold: o } = Ji(),
        { clickCopy: r } = Yi(),
        u = V(decodeURIComponent(t.code)),
        c = V(decodeURIComponent(t.showCode)),
        v = V(null),
        h = () => {
          r(u.value), al.open()
        },
        $ = b(() => {
          var M
          return v.value ? ((M = v.value) == null ? void 0 : M.clientHeight) : 0
        }),
        w = (M) => {
          s.value
            ? (v.value.style.height = '0px')
            : (v.value.style.height = `${M}px`)
        }
      return (
        Z(() => {
          const M = $.value
          w(M)
        }),
        W(s, () => {
          const M = $.value
          w(M)
        }),
        (M, C) => (
          a(),
          l(
            'div',
            { class: S([i(n).e('element-plus__container')]) },
            [
              d(
                'section',
                { class: S([i(n).bem('preview')]) },
                [p(M.$slots, 'default')],
                2,
              ),
              d(
                'section',
                { class: S([i(n).bem('description')]) },
                [
                  d(
                    'div',
                    { class: S([i(n).bem('description', 'split-line')]) },
                    null,
                    2,
                  ),
                  d(
                    'div',
                    { class: S([i(n).bem('description', 'handle-btn')]) },
                    [
                      i(s)
                        ? (a(),
                          L(Fi, {
                            key: 1,
                            onClick: C[1] || (C[1] = (z) => i(o)(!1)),
                          }))
                        : (a(),
                          L(ji, {
                            key: 0,
                            onClick: C[0] || (C[0] = (z) => i(o)(!0)),
                          })),
                      y(qi, { onClick: h }),
                    ],
                    2,
                  ),
                ],
                2,
              ),
              d(
                'section',
                {
                  class: S([i(n).bem('source')]),
                  ref_key: 'sourceCodeArea',
                  ref: v,
                },
                [
                  d(
                    'div',
                    { innerHTML: c.value, class: 'language-vue' },
                    null,
                    8,
                    rl,
                  ),
                ],
                2,
              ),
            ],
            2,
          )
        )
      )
    },
  }),
  ul = {
    extends: Hr,
    enhanceApp({ app: e }) {
      e.use(Ti), e.component('demo-preview', il)
    },
  }
export { ul as R }
