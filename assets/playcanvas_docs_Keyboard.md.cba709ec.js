import{_ as s,c as a,o as n,a as e}from"./app.167067c5.js";const h=JSON.parse('{"title":"Keyboard","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3F0} \u6784\u9020\u5668","slug":"\u6784\u9020\u5668","link":"#\u6784\u9020\u5668","children":[{"level":3,"title":"Keyboard([element] : Element / Window, [options] : object)","slug":"keyboard-element-element-window-options-object","link":"#keyboard-element-element-window-options-object","children":[]}]},{"level":2,"title":"\u{1F579}\uFE0F \u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u{1F4F2} \u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]}],"relativePath":"playcanvas_docs/Keyboard.md"}'),l={name:"playcanvas_docs/Keyboard.md"},o=e(`<h1 id="keyboard" tabindex="-1">Keyboard <a class="header-anchor" href="#keyboard" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">\u7EE7\u627F\u81EA</p><p><a href="./EventHandler.html">EventHandler</a></p></div><p>\u7ED1\u5B9A\u5230\u5143\u7D20\u7684\u952E\u76D8\u8BBE\u5907\u3002\u5141\u8BB8\u60A8\u68C0\u6D4B\u6309\u952E\u7684\u72B6\u6001\u3002\u8BF7\u6CE8\u610F\uFF0CKeyboard \u5BF9\u8C61\u5FC5\u987B\u9644\u52A0\u5230 Element\uFF0C\u7136\u540E\u624D\u80FD\u68C0\u6D4B\u5230\u4EFB\u4F55\u6309\u952E\u3002</p><h2 id="\u6784\u9020\u5668" tabindex="-1">\u{1F3F0} \u6784\u9020\u5668 <a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a></h2><h3 id="keyboard-element-element-window-options-object" tabindex="-1">Keyboard([element] : <a href="/playcanvas-document-zh_CN/">Element</a> / <a href="/playcanvas-document-zh_CN/">Window</a>, [options] : <a href="/playcanvas-document-zh_CN/">object</a>) <a class="header-anchor" href="#keyboard-element-element-window-options-object" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u65B0\u7684\u952E\u76D8\u5B9E\u4F8B\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u5C06\u952E\u76D8\u4FA6\u542C\u5668\u8FDE\u63A5\u5230\u7A97\u53E3</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> keyboard </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> pc</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Keyboard</span><span style="color:#A6ACCD;">(window)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>element : \u8981\u5C06\u952E\u76D8\u9644\u52A0\u5230\u7684\u5143\u7D20\u3002\u8BF7\u6CE8\u610F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C&lt;div&gt;\u7B49\u5143\u7D20\u4E0D\u80FD\u63A5\u53D7\u7126\u70B9\u3002\u8981\u5728\u8FD9\u6837\u7684\u5143\u7D20\u4E0A\u4F7F\u7528\u952E\u76D8\u4E8B\u4EF6\uFF0C\u5B83\u5FC5\u987B\u5177\u6709\u503C\u201Ctabindex\u201D\uFF0C\u4F8B\u5982 tabindex=\u201C0\u201D\u3002\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605<a href="https://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS/SCR29.html" target="_blank" rel="noreferrer">\u6B64\u5904</a>\u3002</li><li>options : \u53EF\u9009\u9009\u9879\u5BF9\u8C61\u3002 <ul><li>options.preventDefault : boolean : \u5728\u952E\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u8C03\u7528 preventDefault\uFF08\uFF09\u3002\u8FD9\u5C06\u505C\u6B62\u4E8B\u4EF6\u53D1\u751F\u7684\u9ED8\u8BA4\u64CD\u4F5C\u3002e\u3001 g.Ctrl+T \u4E0D\u4F1A\u6253\u5F00\u65B0\u7684\u6D4F\u89C8\u5668\u9009\u9879\u5361\u3002</li><li>options.stopPropagation : boolean : \u5728\u952E\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E2D\u8C03\u7528 stopPropagation\uFF08\uFF09\u3002\u8FD9\u5C06\u505C\u6B62\u5411 DOM \u5192\u6CE1\u7684\u4E8B\u4EF6\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5411\u7236\u5904\u7406\u7A0B\u5E8F\u901A\u77E5\u4E8B\u4EF6\u3002</li></ul></li></ul></div><h2 id="\u65B9\u6CD5" tabindex="-1">\u{1F579}\uFE0F \u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u2B50 \u5171\u6709\u65B9\u6CD5\u8BF7\u53C2\u7167\u5176\u57FA\u7C7B\uFF1A<a href="./EventHandler.html">EventHandler</a></p><h4 id="attach-element-element-window" tabindex="-1">\u{1F4CC} attach(element : <a href="/playcanvas-document-zh_CN/">Element</a> / <a href="/playcanvas-document-zh_CN/">Window</a>) <br> <a class="header-anchor" href="#attach-element-element-window" aria-hidden="true">#</a></h4><p>\u5C06\u952E\u76D8\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u9644\u52A0\u5230\u5143\u7D20\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>element : \u8981\u4FA6\u542C\u952E\u76D8\u4E8B\u4EF6\u7684\u5143\u7D20\u3002</li></ul></div><br><h4 id="detach" tabindex="-1">\u{1F4CC} detach() <br> <a class="header-anchor" href="#detach" aria-hidden="true">#</a></h4><p>\u5C06\u952E\u76D8\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4E0E\u5176\u9644\u52A0\u5230\u7684\u5143\u7D20\u5206\u79BB\u3002</p><br><h4 id="ispressed-key-number-boolean" tabindex="-1">\u{1F4CC} isPressed(key : <a href="/playcanvas-document-zh_CN/">number</a>) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#ispressed-key-number-boolean" aria-hidden="true">#</a></h4><p>\u5982\u679C\u952E\u5F53\u524D\u5904\u4E8E\u5173\u95ED\u72B6\u6001\uFF0C\u5219\u8FD4\u56DE true\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>key : \u8981\u6D4B\u8BD5\u7684\u5BC6\u94A5\u7684 keyCode\u3002\u8BF7\u53C2\u9605 KEY_*\u5E38\u91CF\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u5982\u679C\u6309\u952E\u4E3A True\uFF0C\u5426\u5219\u4E3A false\u3002</p></div><br><h4 id="waspressed-key-number-boolean" tabindex="-1">\u{1F4CC} wasPressed(key : <a href="/playcanvas-document-zh_CN/">number</a>) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#waspressed-key-number-boolean" aria-hidden="true">#</a></h4><p>\u5982\u679C\u81EA\u4E0A\u6B21\u66F4\u65B0\u540E\u6309\u4E0B\u8BE5\u952E\uFF0C\u5219\u8FD4\u56DE true\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>key : \u8981\u6D4B\u8BD5\u7684\u5BC6\u94A5\u7684 keyCode\u3002\u8BF7\u53C2\u9605 KEY_*\u5E38\u91CF\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u5982\u679C\u6309\u952E\uFF0C\u5219\u4E3A True\u3002</p></div><br><h4 id="wasreleased-key-number-boolean" tabindex="-1">\u{1F4CC} wasReleased(key : <a href="/playcanvas-document-zh_CN/">number</a>) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#wasreleased-key-number-boolean" aria-hidden="true">#</a></h4><p>\u5982\u679C\u81EA\u4E0A\u6B21\u66F4\u65B0\u4EE5\u6765\u91CA\u653E\u4E86\u5BC6\u94A5\uFF0C\u5219\u8FD4\u56DE true\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>key : \u8981\u6D4B\u8BD5\u7684\u5BC6\u94A5\u7684 keyCode\u3002\u8BF7\u53C2\u9605 KEY_*\u5E38\u91CF\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u5982\u679C\u6309\u952E\uFF0C\u5219\u4E3A True\u3002</p></div><br><h2 id="\u4E8B\u4EF6" tabindex="-1">\u{1F4F2} \u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><h4 id="keydown" tabindex="-1">\u{1F4CC} keydown <br> <a class="header-anchor" href="#keydown" aria-hidden="true">#</a></h4><p>\u6309\u4E0B\u952E\u65F6\u6FC0\u53D1\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> onKeyDown </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">KEY_SPACE</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u6309\u4E0B\u7A7A\u683C\u952E</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4F7F\u7528\u539F\u59CB\u6D4F\u89C8\u5668\u4E8B\u4EF6\u963B\u6B62\u6D4F\u89C8\u5668\u64CD\u4F5C\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keyboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keydown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onKeyDown</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>event : <a href="/playcanvas-document-zh_CN/">KeyboardEvent</a> : \u952E\u76D8\u4E8B\u4EF6\u5BF9\u8C61\u3002\u8BF7\u6CE8\u610F\uFF0C\u6B64\u4E8B\u4EF6\u4EC5\u5BF9\u5F53\u524D\u56DE\u8C03\u6709\u6548\u3002</li></ul></div><br><h4 id="keyup" tabindex="-1">\u{1F4CC} keyup <br> <a class="header-anchor" href="#keyup" aria-hidden="true">#</a></h4><p>\u91CA\u653E\u5BC6\u94A5\u65F6\u6FC0\u53D1\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> onKeyUp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">KEY_SPACE</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u91CA\u653E\u7A7A\u683C\u952E</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u4F7F\u7528\u539F\u59CB\u6D4F\u89C8\u5668\u4E8B\u4EF6\u963B\u6B62\u6D4F\u89C8\u5668\u64CD\u4F5C\u3002</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">keyboard</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keyup</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onKeyUp</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>event : <a href="/playcanvas-document-zh_CN/">KeyboardEvent</a> : \u952E\u76D8\u4E8B\u4EF6\u5BF9\u8C61\u3002\u8BF7\u6CE8\u610F\uFF0C\u6B64\u4E8B\u4EF6\u4EC5\u5BF9\u5F53\u524D\u56DE\u8C03\u6709\u6548\u3002</li></ul></div><br>`,43),p=[o];function t(c,r,i,y,d,D){return n(),a("div",null,p)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
