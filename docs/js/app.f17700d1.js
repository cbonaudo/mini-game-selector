(function(e){function n(n){for(var i,r,c=n[0],a=n[1],m=n[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);u&&u(n);while(p.length)p.shift()();return s.push.apply(s,m||[]),t()}function t(){for(var e,n=0;n<s.length;n++){for(var t=s[n],i=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(i=!1)}i&&(s.splice(n--,1),e=r(r.s=t[0]))}return e}var i={},o={app:0},s=[];function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var m=0;m<c.length;m++)n(c[m]);var u=a;s.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var i=t("85ec"),o=t.n(i);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Selector")],1)},s=[],r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("h1",[e._v("MINIATURE WARGAMING SELECTOR")]),t("h2",[e._v("WWWWWWWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGGHHH!!!!!!!")]),t("button",{on:{click:function(n){return e.computeResult()}}},[e._v("I WANNA FIGHT")]),t("div",{staticClass:"selection"},[e._v(" "+e._s(e.selection.gameSystem.name+" "+e.selection.subSystem.name+" "+e.selection.points+" "+e.selection.scenario.name)+" ")]),e.selection.gameSystem.description?t("div",[e._v(" "+e._s("- "+e.selection.gameSystem.description)+" ")]):e._e(),e.selection.subSystem.description?t("div",[e._v(" "+e._s("- "+e.selection.subSystem.description)+" ")]):e._e(),e.selection.scenario.description?t("div",[e._v(" "+e._s("- Scenario: "+e.selection.scenario.description)+" ")]):e._e(),e.keyString?t("div",[e._v("Share this key : "+e._s(e.keyString))]):e._e()])},c=[],a=(t("4de4"),t("caad"),t("2532"),t("d4ec")),m=t("bee2"),u=function(){function e(){Object(a["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getRandomInt",value:function(e,n){return Math.floor(Math.random()*(n-e)+e)}},{key:"roundUp",value:function(e,n){return Math.ceil(e/n)*n}}]),e}(),l=function(){function e(){Object(a["a"])(this,e)}return Object(m["a"])(e,null,[{key:"generateKeyString",value:function(){return"&1q3dsf89é!"}},{key:"decodeKeyString",value:function(){return{gameSystems:"WK",points:"100"}}}]),e}(),p=[{name:"Age Of Sigmar",code:"AOS",description:"Games Workshop's official Fantasy miniatures wargame"},{name:"Warhammer 40.000",code:"WAK",description:"Games Workshop's official Sci-Fi miniatures wargame"},{name:"Age Of Fantasy",code:"AOF",description:"One Page Rules spin for Fantasy miniatures wargaming"},{name:"Grimdark Future",code:"GRF",description:"One Page Rules spin on Sci-Fi miniatures wargaming"},{name:"One-Off Games",code:"OOG",description:"One Page Rules miscellaneous miniatures games"}],d=[{name:"Scenario 01",description:"Description scenario 01",code:"SCA"},{name:"Scenario 02",description:"Description scenario 02",code:"SCB"},{name:"Scenario 03",description:"Description scenario 03",code:"SCC"}],A=[{name:"Skirmish",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",code:"SKI",gameSystemCode:["AOS","AOF","WAK","GRF"],minimumPoints:50,maximumPoints:750,pointsIncrement:25},{name:"Normal",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",code:"NRM",gameSystemCode:["AOS","AOF","WAK","GRF"],minimumPoints:500,maximumPoints:3e3,pointsIncrement:50},{name:"Apocalypse",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",code:"APO",gameSystemCode:["WAK"],minimumPoints:3e3,maximumPoints:3e4,pointsIncrement:100}],f={name:"Selector",data:function(){return{selection:{gameSystem:{name:"",description:""},points:"",scenario:{name:"",description:""},subSystem:{name:"",description:"",minimumPoints:-1,maximumPoints:-1,pointsIncrement:-1}},keyString:""}},methods:{computeResult:function(){var e=this,n=u.getRandomInt(0,p.length);this.selection.gameSystem=p[n];var t=A.filter((function(n){return n.gameSystemCode.includes(e.selection.gameSystem.code)}));if(t.length){var i=u.getRandomInt(0,t.length);this.selection.subSystem=t[i]}else this.selection.subSystem={name:"",description:"",minimumPoints:-1,maximumPoints:-1,pointsIncrement:-1},this.selection.points="";if(this.selection.subSystem.minimumPoints>0){var o=u.getRandomInt(this.selection.subSystem.minimumPoints,this.selection.subSystem.maximumPoints);this.selection.points=u.roundUp(o,this.selection.subSystem.pointsIncrement)}var s=u.getRandomInt(0,d.length);this.selection.scenario=d[s],this.keyString=l.generateKeyString()}}},g=f,y=t("2877"),S=Object(y["a"])(g,r,c,!1,null,null,null),h=S.exports,v={name:"mini-game-selector",components:{Selector:h}},b=v,O=(t("034f"),Object(y["a"])(b,o,s,!1,null,null,null)),_=O.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.f17700d1.js.map