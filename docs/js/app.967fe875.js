(function(e){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],s=0,f=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d2221d7":"d3a2f30d","chunk-476bea5f":"856aa746","chunk-fbfbb186":"ea2989ca"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-476bea5f":1,"chunk-fbfbb186":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2221d7":"31d6cfe0","chunk-476bea5f":"0e433876","chunk-fbfbb186":"0e433876"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var u=o[l],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===i))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){u=f[l],s=u.getAttribute("data-href");if(s===r||s===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/portfolio/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14ee":function(e,t,n){},"2dae":function(e,t,n){"use strict";n("14ee")},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("router-view"),n("Sidebar")],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{staticClass:"nav ml-8 mt-8",attrs:{permanent:"","expand-on-hover":"",height:"100vh"}},[r("router-link",{attrs:{to:{name:"home"}}},[r("v-list",[r("v-list-item",{staticClass:"px-2"},[r("v-list-item-content",[r("img",{staticStyle:{width:"40px","max-width":"100px"},attrs:{src:n("cf05"),alt:""}})])],1)],1)],1),r("v-list",{attrs:{nav:"",dense:""}},[r("v-divider",{staticClass:"mb-4"}),r("v-list-item",{attrs:{to:{name:"home"}}},[r("v-icon",[e._v("mdi-alpha-w-circle-outline")]),r("v-list-item-title",{staticClass:"pl-3"},[e._v("HOME")])],1),r("v-list-item",{attrs:{to:{name:"work"}}},[r("v-icon",[e._v("mdi-alpha-w-circle-outline")]),r("v-list-item-title",{staticClass:"pl-3"},[e._v("WORK")])],1),r("v-list-item",{attrs:{to:{name:"about"}}},[r("v-icon",[e._v("mdi-alpha-a-circle-outline")]),r("v-list-item-title",{staticClass:"pl-3"},[e._v("ABOUT")])],1)],1)],1)},l=[],c={name:"Header"},u=c,s=(n("8baf"),n("2877")),f=Object(s["a"])(u,o,l,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar-line"}),n("v-list-item",{attrs:{href:"https://www.linkedin.com/in/sylvia-lee-130"}},[n("v-icon",[e._v("mdi-linkedin")])],1),n("v-list-item",{attrs:{href:"mailto:sylvi.3311@gmail.com"}},[n("v-icon",[e._v("mdi-email-outline")])],1)],1)},m=[],h={name:"Sidebar"},v=h,b=(n("2dae"),Object(s["a"])(v,p,m,!1,null,null,null)),g=b.exports,y={name:"App",components:{Header:d,Sidebar:g}},w=y,k=(n("5c0b"),Object(s["a"])(w,a,i,!1,null,null,null)),_=k.exports,O=n("8c4f"),x=n("ce5b"),C=n.n(x);n("bf40");r["default"].use(C.a);var j=new C.a({theme:{themes:{light:{primary:"#939597",secondary:"#818a91",anchor:"#F5DF4D"}}}}),E=j;r["default"].use(O["a"]);var S=[{name:"home",path:"/portfolio",component:function(){return n.e("chunk-2d2221d7").then(n.bind(null,"ccde"))}},{name:"work",path:"/mywork",component:function(){return n.e("chunk-fbfbb186").then(n.bind(null,"943c"))}},{name:"about",path:"/portfolio/about",component:function(){return n.e("chunk-476bea5f").then(n.bind(null,"06ff"))}}],P=new O["a"]({routes:S,mode:"history"});r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(_)},vuetify:E,router:P}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},6860:function(e,t,n){},"8baf":function(e,t,n){"use strict";n("6860")},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.6e2f5a65.png"}});
//# sourceMappingURL=app.967fe875.js.map