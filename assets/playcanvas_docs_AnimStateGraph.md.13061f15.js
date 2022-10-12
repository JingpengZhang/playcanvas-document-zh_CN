import{_ as a,c as s,o as n,a as p}from"./app.167067c5.js";const C=JSON.parse('{"title":"AnimStateGraph","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5","link":"#\u7528\u6CD5","children":[]}],"relativePath":"playcanvas_docs/AnimStateGraph.md"}'),t={name:"playcanvas_docs/AnimStateGraph.md"},e=p(`<h1 id="animstategraph" tabindex="-1">AnimStateGraph <a class="header-anchor" href="#animstategraph" aria-hidden="true">#</a></h1><p>\u8868\u793A\u52A8\u753B\u72B6\u6001\u56FE\u7684\u8D44\u4EA7\u8D44\u6E90\u3002\u53EF\u4EE5\u4F7F\u7528 AnimComponent#loadStateGraph \u65B9\u6CD5\u5C06\u5176\u52A0\u8F7D\u5230\u52A8\u753B\u7EC4\u4EF6\u4E2D\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u811A\u672C\u53EF\u4EE5\u4ECE\u201CAnimStateGraph\u201D\u7C7B\u578B\u7684\u8D44\u4EA7\u4E2D\u68C0\u7D22 AnimStateGraph \u5B9E\u4F8B\u3002\u7136\u540E\u53EF\u4EE5\u5C06 AnimStateGraph \u52A0\u8F7D\u5230\u52A8\u753B\u7EC4\u4EF6\u4E2D\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> animStateGraph </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">assets</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(ASSET_ID)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">resource</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> entity </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> pc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Entity</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">anim</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">entity</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">anim</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadStateGraph</span><span style="color:#A6ACCD;">(animStateGraph)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,5),o=[e];function l(r,c,A,i,D,y){return n(),s("div",null,o)}const d=a(t,[["render",l]]);export{C as __pageData,d as default};
