(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{316:function(t,e,c){t.exports=c.p+"img/github.d8c6d6c.png"},317:function(t,e,c){t.exports=c.p+"img/twitter.f963dca.png"},339:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(92),o=r.a.extend({data:()=>({items:[{icon:"mdi-account",desc:"Yoshihiro Koyama"},{icon:"mdi-school",desc:"神戸大学農学部3年"},{icon:"mdi-translate",desc:"日本語, English"},{icon:"mdi-motorbike",desc:"スーパーカブ110 JA44"},{icon:"mdi-language-python",desc:"FastAPI, Django, PyTorch"},{icon:"mdi-language-go",desc:"net/http"},{icon:"mdi-language-javascript",desc:"Vue.js, Nuxt.js"},{icon:"mdi-language-cpp",desc:"AtCoder highest 858"},{icon:"mdi-thumb-up",desc:"機械学習, 統計学"}]}),computed:{...Object(n.b)({scrapbox:"scrapbox/scrapbox"}),width(){return"xs"===this.$vuetify.breakpoint.name?"90%":"50%"}},mounted(){this.$store.dispatch("scrapbox/fetchScrapbox")}}),d=c(80),m=c(111),l=c.n(m),h=c(312),v=c(306),_=c(315),x=c(308),w=c(303),f=c(313),k=c(301),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mt-10 mx-auto",attrs:{width:t.width}},[r("v-card-title",[t._v("自己紹介")]),t._v(" "),r("v-list",[t._l(t.items,(function(e){return r("v-list-item",{key:e.id},[r("v-list-item-avatar",[r("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),t._v(" "),r("v-list-item-content",[t._v(t._s(e.desc))])],1)})),t._v(" "),r("v-list-item",[r("a",{staticClass:"mx-5",attrs:{href:"https://github.com/hirosuke29",target:"_blank"}},[r("img",{attrs:{src:c(316),width:"40rem"}})]),t._v(" "),r("a",{attrs:{href:"https://twitter.com/hirosuke29",target:"_blank"}},[r("img",{attrs:{src:c(317),width:"40rem"}})])])],2)],1),t._v(" "),r("v-card",{staticClass:"my-10 pb-10 mx-auto",attrs:{width:t.width}},[r("v-card-title",[t._v("投稿")]),t._v(" "),t._l(t.scrapbox.pages,(function(e){return r("v-card",{key:e.id,staticClass:"mb-2 mx-auto",attrs:{width:"90%"}},[r("v-card-title",[r("a",{attrs:{href:"https://scrapbox.io/hirosuke29/"+e.title,target:"_blank"}},[t._v(t._s(e.title))])])],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:h.a,VCardTitle:v.a,VIcon:_.a,VList:x.a,VListItem:w.a,VListItemAvatar:f.a,VListItemContent:k.a})}}]);