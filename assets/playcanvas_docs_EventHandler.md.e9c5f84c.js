import{_ as s,c as a,o as n,a as l}from"./app.167067c5.js";const i=JSON.parse('{"title":"EventHandler","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3F0} \u6784\u9020\u5668","slug":"\u6784\u9020\u5668","link":"#\u6784\u9020\u5668","children":[{"level":3,"title":"EventHandler()","slug":"eventhandler-1","link":"#eventhandler-1","children":[]}]},{"level":2,"title":"\u{1F579}\uFE0F \u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}],"relativePath":"playcanvas_docs/EventHandler.md"}'),o={name:"playcanvas_docs/EventHandler.md"},p=l(`<h1 id="eventhandler" tabindex="-1">EventHandler <a class="header-anchor" href="#eventhandler" aria-hidden="true">#</a></h1><p>\u5B9E\u73B0\u4E8B\u4EF6\u5904\u7406\u529F\u80FD\u7684\u62BD\u8C61\u57FA\u7C7B\u3002</p><h2 id="\u6784\u9020\u5668" tabindex="-1">\u{1F3F0} \u6784\u9020\u5668 <a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a></h2><h3 id="eventhandler-1" tabindex="-1">EventHandler() <a class="header-anchor" href="#eventhandler-1" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u65B0\u7684 EventHandler \u5B9E\u4F8B\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">EventHandlerSubclass</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// subscribe to an event</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">event hello is fired</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// fire event</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u65B9\u6CD5" tabindex="-1">\u{1F579}\uFE0F \u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><h4 id="fire-name-string-arg1-arg2-arg3-arg4-arg5-arg6-arg7-arg8-eventhandler" tabindex="-1">\u{1F4CC} fire(name : <a href="/playcanvas-document-zh_CN/">string</a>, [arg1] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg2] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg3] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg4] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg5] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg6] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg7] : <a href="/playcanvas-document-zh_CN/">*</a>, [arg8] : <a href="/playcanvas-document-zh_CN/">*</a>) : <a href="/playcanvas-document-zh_CN/">EventHandler</a> <br> <a class="header-anchor" href="#fire-name-string-arg1-arg2-arg3-arg4-arg5-arg6-arg7-arg8-eventhandler" aria-hidden="true">#</a></h4><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\uFF0C\u6240\u6709\u9644\u52A0\u53C2\u6570\u90FD\u4F1A\u4F20\u9012\u7ED9\u4E8B\u4EF6\u4FA6\u542C\u5668\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is the message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u89E6\u53D1\u7684\u4E8B\u4EF6\u7684\u540D\u79F0\u3002</li><li>arg1 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u3002</li><li>arg2 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002</li><li>arg3 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u3002</li><li>arg4 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u56DB\u4E2A\u53C2\u6570\u3002</li><li>arg5 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E94\u4E2A\u53C2\u6570\u3002</li><li>arg6 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u516D\u4E2A\u53C2\u6570\u3002</li><li>arg7 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u4E03\u4E2A\u53C2\u6570\u3002</li><li>arg8 : \u4F20\u9012\u7ED9\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u7B2C\u516B\u4E2A\u53C2\u6570\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u81EA\u6211\u94FE\u63A5\u3002</p></div><br><h4 id="hasevent-name-string-boolean" tabindex="-1">\u{1F4CC} hasEvent(name : <a href="/playcanvas-document-zh_CN/">string</a>) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#hasevent-name-string-boolean" aria-hidden="true">#</a></h4><p>\u6D4B\u8BD5\u662F\u5426\u6709\u4EFB\u4F55\u5904\u7406\u7A0B\u5E8F\u7ED1\u5B9A\u5230\u4E8B\u4EF6\u540D\u79F0\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5C06\u4E8B\u4EF6\u7ED1\u5B9A\u5230 &#39;test&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hasEvent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8FD4\u56DE true</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hasEvent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8FD4\u56DE false</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u6D4B\u8BD5\u7684\u4E8B\u4EF6\u7684\u540D\u79F0\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u5982\u679C\u5BF9\u8C61\u5177\u6709\u7ED1\u5B9A\u5230\u6307\u5B9A\u4E8B\u4EF6\u540D\u79F0\u7684\u5904\u7406\u7A0B\u5E8F\uFF0C\u5219\u4E3A True\u3002</p></div><br><h4 id="off-name-string-callback-handleeventcallback-scope-object-boolean" tabindex="-1">\u{1F4CC} off([name] : <a href="/playcanvas-document-zh_CN/">string</a>,[callback] : <a href="/playcanvas-document-zh_CN/">HandleEventCallback</a>, [scope] : <a href="/playcanvas-document-zh_CN/">object</a> ) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#off-name-string-callback-handleeventcallback-scope-object-boolean" aria-hidden="true">#</a></h4><p>\u4ECE\u4E8B\u4EF6\u4E2D\u5206\u79BB\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u3002\u5982\u679C\u672A\u63D0\u4F9B\u56DE\u8C03\uFF0C\u5219\u6240\u6709\u56DE\u8C03\u90FD\u5C06\u4ECE\u4E8B\u4EF6\u4E2D\u89E3\u9664\u7ED1\u5B9A\uFF1B\u5982\u679C\u672A\u63D0\u4F9B\u8303\u56F4\uFF0C\u5219\u6240\u6709\u5177\u6709\u56DE\u8C03\u7684\u4E8B\u4EF6\u90FD\u5C06\u89E3\u9664\u7ED1\u5B9A\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> handler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5220\u9664\u6240\u6709\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5220\u9664\u6240\u6709\u540D\u4E3A\u201Ctest\u201D\u7684\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5220\u9664\u6240\u6709\u79F0\u4E3A\u201Ctest\u201D\u7684\u5904\u7406\u7A0B\u5E8F\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u79FB\u9664\u6240\u6709\u5904\u7406\u7A0B\u5E8F\u51FD\u6570\uFF0C\u79F0\u4E3A\u201Ctest\u201D\uFF0C\u8303\u56F4\u4E3A this</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u89E3\u9664\u7ED1\u5B9A\u7684\u4E8B\u4EF6\u7684\u540D\u79F0\u3002</li><li>callback : \u8981\u89E3\u9664\u7ED1\u5B9A\u7684\u51FD\u6570\u3002</li><li>scope : \u89E6\u53D1\u4E8B\u4EF6\u65F6\u7528\u4F5C this \u7684\u4F5C\u7528\u57DF\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u81EA\u6211\u94FE\u63A5\u3002</p></div><br><h4 id="on-name-string-callback-handleeventcallback-scope-object-boolean" tabindex="-1">\u{1F4CC} on(name : <a href="/playcanvas-document-zh_CN/">string</a>,callback : <a href="/playcanvas-document-zh_CN/">HandleEventCallback</a>, [scope] : <a href="/playcanvas-document-zh_CN/">object</a> ) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#on-name-string-callback-handleeventcallback-scope-object-boolean" aria-hidden="true">#</a></h4><p>\u5C06\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u9644\u52A0\u5230\u4E8B\u4EF6\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6253\u5370 3 \u5230\u63A7\u5236\u53F0</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u5C06\u56DE\u8C03\u7ED1\u5B9A\u5230\u7684\u4E8B\u4EF6\u7684\u540D\u79F0\u3002</li><li>callback : \u89E6\u53D1\u4E8B\u4EF6\u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002\u8BF7\u6CE8\u610F\uFF0C\u56DE\u8C03\u9650\u5236\u4E3A 8 \u4E2A\u53C2\u6570\u3002</li><li>scope : \u5BF9\u8C61\u5728\u89E6\u53D1\u4E8B\u4EF6\u65F6\u7528\u4F5C\u201Cthis\u201D\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D this\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u81EA\u6211\u94FE\u63A5\u3002</p></div><br><h4 id="once-name-string-callback-handleeventcallback-scope-object-boolean" tabindex="-1">\u{1F4CC} once(name : <a href="/playcanvas-document-zh_CN/">string</a>,callback : <a href="/playcanvas-document-zh_CN/">HandleEventCallback</a>, [scope] : <a href="/playcanvas-document-zh_CN/">object</a> ) : <a href="/playcanvas-document-zh_CN/">boolean</a> <br> <a class="header-anchor" href="#once-name-string-callback-handleeventcallback-scope-object-boolean" aria-hidden="true">#</a></h4><p>\u5C06\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u9644\u52A0\u5230\u4E8B\u4EF6\u3002\u6B64\u5904\u7406\u7A0B\u5E8F\u5728\u88AB\u6FC0\u53D1\u4E00\u6B21\u540E\u5C06\u88AB\u79FB\u9664\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u6253\u5370 3 \u5230\u63A7\u5236\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fire</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u4E0D\u4F1A\u88AB\u5904\u7406</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u5C06\u56DE\u8C03\u7ED1\u5B9A\u5230\u7684\u4E8B\u4EF6\u7684\u540D\u79F0\u3002</li><li>callback : \u89E6\u53D1\u4E8B\u4EF6\u65F6\u8C03\u7528\u7684\u51FD\u6570\u3002\u8BF7\u6CE8\u610F\uFF0C\u56DE\u8C03\u9650\u5236\u4E3A 8 \u4E2A\u53C2\u6570\u3002</li><li>scope : \u5BF9\u8C61\u5728\u89E6\u53D1\u4E8B\u4EF6\u65F6\u7528\u4F5C\u201Cthis\u201D\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D this\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u81EA\u6211\u94FE\u63A5\u3002</p></div><br>`,37),e=[p];function c(t,r,D,y,F,C){return n(),a("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
