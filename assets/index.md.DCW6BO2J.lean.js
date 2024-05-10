import {
  l as e,
  c as s,
  o as n,
  a6 as l,
  ai as o,
  aj as r,
  ak as h,
  al as p,
} from './chunks/framework.cSrMGLof.js'
function c() {
  const t = '1.0.0',
    a = document.querySelector(
      'div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline',
    ),
    i = document.createElement('samp')
  i.classList.add('version-tag'),
    (i.innerText = t),
    a == null || a.appendChild(i)
}
const d = l('', 12),
  k = [d],
  m = JSON.parse(
    '{"title":"Zai UI","titleTemplate":"Zai UI Components Library","description":"","frontmatter":{"layout":"home","title":"Zai UI","titleTemplate":"Zai UI Components Library","hero":{"name":"Zai UI","text":"大屏 UI 组件库","tagline":"基于 Vue3 + TS + Vite 开发(非二次封装)","image":{"src":"/vitepress-logo-large.webp","alt":"Zai UI"},"actions":[{"theme":"brand","text":"Get Started","link":"/components/guide"},{"theme":"alt","text":"View on Gitee","link":"https://gitee.com/zaisy/vue3-ts-vite/tree/zai-ui"},{"theme":"alt","text":"View on NPM","link":"https://www.npmjs.com/package/@zaishiyu/zai-ui"}]},"features":[{"icon":"⚡️","title":"开源免费","details":"长期维护，不断添加新组件以丰富组件库"},{"icon":"🖖","title":"开箱即用","details":"大部分组件设置宽高或配置简单的数据即可使用"},{"icon":"🛠️","title":"视觉绚丽","details":"通过组合不同的配置项可以达到多变的视觉效果"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}',
  ),
  g = { name: 'index.md' },
  _ = Object.assign(g, {
    setup(t) {
      return (
        e(() => {
          c()
        }),
        (a, i) => (n(), s('div', null, k))
      )
    },
  })
export { m as __pageData, _ as default }
