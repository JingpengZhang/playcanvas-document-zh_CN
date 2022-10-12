import{_ as a,c as e,o as r,a as l}from"./app.167067c5.js";const m=JSON.parse('{"title":"LayerComposition","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F3F0} \u6784\u9020\u5668","slug":"\u6784\u9020\u5668","link":"#\u6784\u9020\u5668","children":[{"level":3,"title":"LayerComposition([name] : string)","slug":"layercomposition-name-string","link":"#layercomposition-name-string","children":[]}]},{"level":2,"title":"\u{1F52E} \u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[]},{"level":2,"title":"\u{1F579}\uFE0F \u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]}],"relativePath":"playcanvas_docs/LayerComposition.md"}'),i={name:"playcanvas_docs/LayerComposition.md"},s=l('<h1 id="layercomposition" tabindex="-1">LayerComposition <a class="header-anchor" href="#layercomposition" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">\u7EE7\u627F\u81EA</p><p><a href="./EventHandler.html">EventHandler</a></p></div><p>\u5C42\u5408\u6210\u662F\u5C42\u7684\u96C6\u5408\uFF0C\u8BE5\u5C42\u88AB\u9988\u9001\u5230\u573A\u666F#\u5C42\u4EE5\u5B9A\u4E49\u6E32\u67D3\u987A\u5E8F\u3002</p><h2 id="\u6784\u9020\u5668" tabindex="-1">\u{1F3F0} \u6784\u9020\u5668 <a class="header-anchor" href="#\u6784\u9020\u5668" aria-hidden="true">#</a></h2><h3 id="layercomposition-name-string" tabindex="-1">LayerComposition([name] : <a href="/playcanvas-document-zh_CN/">string</a>) <a class="header-anchor" href="#layercomposition-name-string" aria-hidden="true">#</a></h3><p>\u521B\u5EFA\u65B0\u7684\u5C42\u5408\u6210\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u5C42\u7EC4\u6210\u7684\u53EF\u9009\u975E\u552F\u4E00\u540D\u79F0\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u201C\u65E0\u6807\u9898\u201D\u3002</li></ul></div><h2 id="\u5C5E\u6027" tabindex="-1">\u{1F52E} \u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u{1F4CC} cameras : <a href="/playcanvas-document-zh_CN/">CameraComponent[]</a> <br> CameraComponent \u7684\u53EA\u8BFB\u6570\u7EC4\uFF0C\u53EF\u5728\u6E32\u67D3\u671F\u95F4\u4F7F\u7528\u3002e\u3001 g.<a href="/playcanvas-document-zh_CN/">Layer#onPreCull</a>\u3001<a href="/playcanvas-document-zh_CN/">Layer#onPostCull</a>\u3001<a href="/playcanvas-document-zh_CN/">Layer#onPreRender</a>\u3001<a href="/playcanvas-document-zh_CN/">Layer#onPostRender</a> \u3002</p><p>\u{1F4CC} layerList : <a href="/playcanvas-document-zh_CN/">Layer[]</a> <br> \u6309\u6E32\u67D3\u987A\u5E8F\u6392\u5E8F\u7684\u5C42\u7684\u53EA\u8BFB\u6570\u7EC4\u3002</p><p>\u{1F4CC} subLayerEnabled : <a href="/playcanvas-document-zh_CN/">boolean[]</a> <br> \u5E03\u5C14\u503C\u7684\u53EA\u8BFB\u6570\u7EC4\uFF0C\u5339\u914D Layer#layerList\u3002True \u8868\u793A\u6E32\u67D3\u8BE5\u5C42\uFF0Cfalse \u8868\u793A\u8DF3\u8FC7\u8BE5\u5C42\u3002</p><p>\u{1F4CC} subLayerList : <a href="/playcanvas-document-zh_CN/">boolean[]</a> <br> \u5E03\u5C14\u503C\u7684\u53EA\u8BFB\u6570\u7EC4\uFF0C\u5339\u914D Layer#layerList\u3002True \u8868\u793A\u4EC5\u6E32\u67D3\u534A\u900F\u660E\u5BF9\u8C61\uFF0Cfalse \u8868\u793A\u4E0D\u900F\u660E\u3002</p><h2 id="\u65B9\u6CD5" tabindex="-1">\u{1F579}\uFE0F \u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u2B50 \u5171\u6709\u65B9\u6CD5\u8BF7\u53C2\u7167\u5176\u57FA\u7C7B\uFF1A<a href="./EventHandler.html">EventHandler</a></p><h4 id="getlayerbyid-id-number-layer-null" tabindex="-1">\u{1F4CC} getLayerById(id : <a href="/playcanvas-document-zh_CN/">number</a>) : <a href="/playcanvas-document-zh_CN/">Layer</a>, <a href="/playcanvas-document-zh_CN/">null</a> <br> <a class="header-anchor" href="#getlayerbyid-id-number-layer-null" aria-hidden="true">#</a></h4><p>\u6839\u636E ID \u67E5\u627E\u6B64\u5408\u6210\u4E2D\u7684\u5C42\u3002\u5982\u679C\u672A\u627E\u5230\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5219\u8FD4\u56DE Null\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>id : \u8981\u67E5\u627E\u7684\u5C42\u7684 ID\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u4E0E\u6307\u5B9A ID \u5BF9\u5E94\u7684\u5C42\u3002\u5982\u679C\u627E\u4E0D\u5230\u5C42\uFF0C\u5219\u8FD4\u56DE null\u3002</p></div><br><h4 id="getlayerbyname-name-string-layer-null" tabindex="-1">\u{1F4CC} getLayerByName(name : <a href="/playcanvas-document-zh_CN/">string</a>) : <a href="/playcanvas-document-zh_CN/">Layer</a>, <a href="/playcanvas-document-zh_CN/">null</a> <br> <a class="header-anchor" href="#getlayerbyname-name-string-layer-null" aria-hidden="true">#</a></h4><p>\u6309\u540D\u79F0\u67E5\u627E\u6B64\u5408\u6210\u4E2D\u7684\u5C42\u3002\u5982\u679C\u672A\u627E\u5230\u4EFB\u4F55\u5185\u5BB9\uFF0C\u5219\u8FD4\u56DE Null\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>name : \u8981\u67E5\u627E\u7684\u5C42\u7684\u540D\u79F0\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u4E0E\u6307\u5B9A\u540D\u79F0\u5BF9\u5E94\u7684\u5C42\u3002\u5982\u679C\u627E\u4E0D\u5230\u5C42\uFF0C\u5219\u8FD4\u56DE null\u3002</p></div><br><h4 id="getopaqueindex-layer-layer-number" tabindex="-1">\u{1F4CC} getOpaqueIndex(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) : <a href="/playcanvas-document-zh_CN/">number</a> <br> <a class="header-anchor" href="#getopaqueindex-layer-layer-number" aria-hidden="true">#</a></h4><p>\u83B7\u53D6 layer#layerList \u4E2D\u63D0\u4F9B\u7684\u5C42\u7684\u4E0D\u900F\u660E\u90E8\u5206\u7684\u7D22\u5F15\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u67E5\u627E\u7D22\u5F15\u7684\u5C42\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u6307\u5B9A\u5C42\u7684\u4E0D\u900F\u660E\u90E8\u5206\u7684\u7D22\u5F15\u3002</p></div><br><h4 id="gettransparentindex-layer-layer-number" tabindex="-1">\u{1F4CC} getTransparentIndex(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) : <a href="/playcanvas-document-zh_CN/">number</a> <br> <a class="header-anchor" href="#gettransparentindex-layer-layer-number" aria-hidden="true">#</a></h4><p>\u83B7\u53D6 layer#layerList \u4E2D\u63D0\u4F9B\u7684\u5C42\u7684\u534A\u900F\u660E\u90E8\u5206\u7684\u7D22\u5F15\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u67E5\u627E\u7D22\u5F15\u7684\u5C42\u3002</li></ul></div><div class="warning custom-block"><p class="custom-block-title">\u8FD4\u56DE\u503C</p><p>\u6307\u5B9A\u5C42\u7684\u534A\u900F\u660E\u90E8\u5206\u7684\u7D22\u5F15\u3002</p></div><br><h4 id="insert-layer-layer-index-number" tabindex="-1">\u{1F4CC} insert(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>, [index] : [number]) <br> <a class="header-anchor" href="#insert-layer-layer-index-number" aria-hidden="true">#</a></h4><p>\u5728 layer#layerList \u4E2D\u9009\u5B9A\u7684\u7D22\u5F15\u5904\u63D2\u5165\u5C42\uFF08\u4E0D\u900F\u660E\u548C\u534A\u900F\u660E\u90E8\u5206\uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li><li>index : \u63D2\u5165\u4F4D\u7F6E\u3002</li></ul></div><br><h4 id="insertopaque-layer-layer-index-number" tabindex="-1">\u{1F4CC} insertOpaque(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>, [index] : [number]) <br> <a class="header-anchor" href="#insertopaque-layer-layer-index-number" aria-hidden="true">#</a></h4><p>\u5728 layer#layerList \u4E2D\u7684\u9009\u5B9A\u7D22\u5F15\u5904\u63D2\u5165\u5C42\u7684\u4E0D\u900F\u660E\u90E8\u5206\uFF08\u975E\u534A\u900F\u660E\u7F51\u683C\u5B9E\u4F8B\uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li><li>index : \u63D2\u5165\u4F4D\u7F6E\u3002</li></ul></div><br><h4 id="inserttransparent-layer-layer-index-number" tabindex="-1">\u{1F4CC} insertTransparent(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>, [index] : [number]) <br> <a class="header-anchor" href="#inserttransparent-layer-layer-index-number" aria-hidden="true">#</a></h4><p>\u5728 layer#layerList \u4E2D\u7684\u9009\u5B9A\u7D22\u5F15\u5904\u63D2\u5165\u5C42\u7684\u534A\u900F\u660E\u90E8\u5206\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li><li>index : \u63D2\u5165\u4F4D\u7F6E\u3002</li></ul></div><br><h4 id="push-layer-layer" tabindex="-1">\u{1F4CC} push(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#push-layer-layer" aria-hidden="true">#</a></h4><p>\u5C06\u5C42\uFF08\u4E0D\u900F\u660E\u548C\u534A\u900F\u660E\u90E8\u5206\uFF09\u6DFB\u52A0\u5230 layer#layerList \u7684\u672B\u5C3E\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li></ul></div><br><h4 id="pushopaque-layer-layer" tabindex="-1">\u{1F4CC} pushOpaque(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#pushopaque-layer-layer" aria-hidden="true">#</a></h4><p>\u5C06\u5177\u6709\u4E0D\u900F\u660E\uFF08\u975E\u534A\u900F\u660E\uFF09\u5BF9\u8C61\u7684\u90E8\u5206\u5C42\u6DFB\u52A0\u5230 layer#layerList \u7684\u672B\u5C3E\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li></ul></div><br><h4 id="pushtransparent-layer-layer" tabindex="-1">\u{1F4CC} pushTransparent(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#pushtransparent-layer-layer" aria-hidden="true">#</a></h4><p>\u5C06\u5177\u6709\u534A\u900F\u660E\u5BF9\u8C61\u7684\u90E8\u5206\u5C42\u6DFB\u52A0\u5230 layer#layerList \u7684\u672B\u5C3E\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u6DFB\u52A0\u7684\u5C42\u3002</li></ul></div><br><h4 id="remove-layer-layer" tabindex="-1">\u{1F4CC} remove(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#remove-layer-layer" aria-hidden="true">#</a></h4><p>\u4ECE layer#layerList \u4E2D\u5220\u9664\u5C42\uFF08\u4E0D\u900F\u660E\u548C\u534A\u900F\u660E\u90E8\u5206\uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u5220\u9664\u7684\u5C42\u3002</li></ul></div><br><h4 id="removeopaque-layer-layer" tabindex="-1">\u{1F4CC} removeOpaque(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#removeopaque-layer-layer" aria-hidden="true">#</a></h4><p>\u4ECE layer#layerList \u4E2D\u79FB\u9664\u5C42\u7684\u4E0D\u900F\u660E\u90E8\u5206\uFF08\u975E\u534A\u900F\u660E\u7F51\u683C\u5B9E\u4F8B\uFF09\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u5220\u9664\u7684\u5C42\u3002</li></ul></div><br><h4 id="removetransparent-layer-layer" tabindex="-1">\u{1F4CC} removeTransparent(layer : <a href="/playcanvas-document-zh_CN/">Layer</a>) <br> <a class="header-anchor" href="#removetransparent-layer-layer" aria-hidden="true">#</a></h4><p>\u4ECE layer#layerList \u4E2D\u79FB\u9664\u5C42\u7684\u900F\u660E\u90E8\u5206\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u53C2\u6570\u5217\u8868</p><ul><li>layer : \u8981\u5220\u9664\u7684\u5C42\u3002</li></ul></div><br>',70),t=[s];function n(c,o,d,p,h,u){return r(),e("div",null,t)}const b=a(i,[["render",n]]);export{m as __pageData,b as default};
