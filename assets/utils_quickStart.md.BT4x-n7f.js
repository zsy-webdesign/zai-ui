import { _ as a, c as s, o as i, a6 as t } from './chunks/framework.cSrMGLof.js'
const g = JSON.parse(
    '{"title":"快速开始","description":"快速开始","frontmatter":{"title":"快速开始","description":"快速开始"},"headers":[],"relativePath":"utils/quickStart.md","filePath":"utils/quickStart.md"}',
  ),
  e = { name: 'utils/quickStart.md' },
  p = t(
    `<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>快速开始。</p><h2 id="三种使用方式" tabindex="-1">三种使用方式 <a class="header-anchor" href="#三种使用方式" aria-label="Permalink to &quot;三种使用方式&quot;">​</a></h2><ul><li>全局引入所有组件</li></ul><p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。 执行下面的指令，进行安装</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-peKNr" id="tab-M7BNYuZ" checked="checked"><label for="tab-M7BNYuZ">pnpm</label><input type="radio" name="group-peKNr" id="tab-lmLtW-z"><label for="tab-lmLtW-z">npm</label><input type="radio" name="group-peKNr" id="tab-zml73Uq"><label for="tab-zml73Uq">yarn</label></div><div class="blocks"><div class="language- vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>pnpm i @zaishiyu/zai-ui</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>npm install @zaishiyu/zai-ui</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>yarn add @zaishiyu/zai-ui</span></span></code></pre></div></div></div><p>修改项目入口文件main.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ZaiUtils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../packages/ZaiUtils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZaiUtils.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">capitalizeFirstLetter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ul><li>按需引入部分组件</li></ul><p>我们可以只引入需要的组件，以达到减小项目体积的目的。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { capitalizeFirstLetter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../packages/ZaiUtils&#39;</span></span></code></pre></div><ul><li>git clone <a href="https://gitee.com/zaisy/vue3-ts-vite/tree/zai-ui" target="_blank" rel="noreferrer">zai-ui</a> 到本地后，从 packages 下单独拷贝单文件组件到项目内使用</li></ul>`,
    12,
  ),
  n = [p]
function l(h, c, r, d, o, k) {
  return i(), s('div', null, n)
}
const m = a(e, [['render', l]])
export { g as __pageData, m as default }
