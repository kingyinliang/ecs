webpackJsonp([117],{1609:function(t,e,n){var s=n(1610);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(227)("4bec4e28",s,!0)},1610:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.day[data-v-50ebc6d0] {\r\n  background-color:#000;\r\n  color:#fff;\r\n  text-align:center;\r\n  display:inline-block;\r\n  padding:0 3px;\r\n  border-radius:3px;\n}\r\n",""])},1611:function(t,e,n){"use strict";var s=n(1612),i=n(63),r=n(60);e.a={components:{Clocker:s.a,Cell:i.a,Group:r.a},ready:function(){var t=this;setTimeout(function(){t.time1="2017-08-13 22:54"},5e3)},data:function(){return{time1:"2017-07-13 21:54"}}}},1612:function(t,e,n){"use strict";var s=n(1613),i=n(1615),r=n(0),a=r(s.a,i.a,null,null,null);e.a=a.exports},1613:function(t,e,n){"use strict";var s=n(1614);e.a={name:"clocker",mounted:function(){var t=this;this.$nextTick(function(){t.slot=t.$el.querySelector(".vux-clocker-tpl"),t.slotString=t.slot.innerHTML,""!==t.slotString&&(t.showTimeString=!1),t.render()})},methods:{render:function(){var t=this;this.time&&(this.clocker=new s.a(this.time).on("tick",function(e){t.update(e),t.$emit("on-tick",e)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start())},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var e=t.strftime(this.slotString);e!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=e)}}},props:{time:[String,Number],format:{type:String,default:"%D 天 %H 小时 %M 分 %S 秒"}},watch:{time:function(){this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker.remove(),this.clocker=null}}},1614:function(t,e,n){"use strict";function s(t){if(t instanceof Date)return t;if(String(t).match(u))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/-/)&&(t=String(t).replace(/-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function i(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function r(t){return function(e){var n=e.match(/%(-|!)?[A-Z]{1}(:[^]+)?/gi);if(n)for(var s=0,r=n.length;s<r;++s){var o=n[s].match(/%(-|!)?([a-zA-Z]{1})(:[^]+)?/),c=i(o[0]),l=o[1]||"",u=o[3]||"",h=null;o=o[2],f.hasOwnProperty(o)&&(h=f[o],h=Number(t[h])),null!==h&&("!"===l&&(h=a(u,h)),""===l&&h<10&&(h="0"+h.toString()),e=e.replace(c,h.toString()))}return e=e.replace("%_M1",t.minutes_1).replace("%_M2",t.minutes_2).replace("%_S1",t.seconds_1).replace("%_S2",t.seconds_2).replace("%_H1",t.hours_1).replace("%_H2",t.hours_2).replace("%_D1",t.days_1).replace("%_D2",t.days_2),e=e.replace(/%%/,"%")}}function a(t,e){var n="s",s="";return t&&(t=t.replace(/(:||\s)/gi,"").split(/,/),1===t.length?n=t[0]:(s=t[0],n=t[1])),1===Math.abs(e)?s:n}function o(t){return t+="",t=(1===t.length?"0"+t:t)+"",t.split("")}var c=n(810),l=[],u=[];u.push(/^[0-9]*$/.source),u.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),u.push(/[0-9]{4}([\/-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),u=new RegExp(u.join("|"));var f={Y:"years",m:"months",w:"weeks",D:"days",H:"hours",M:"minutes",S:"seconds"},h=function(t,e){e=e||{},this.PRECISION=e.precision||100,this.interval=null,this.offset={},this.instanceNumber=l.length,l.push(this),this.setFinalDate(t)};c.a.mixTo(h);var p=h.prototype,v={start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;return this.update(),this.interval=setInterval(function(){t.update()},this.PRECISION),this},stop:function(){return clearInterval(this.interval),this.interval=null,this._dispatchEvent("stoped"),this},toggle:function(){return this.interval?this.stop():this.start(),this},pause:function(){return this.stop()},resume:function(){return this.start()},remove:function(){this.stop(),l[this.instanceNumber]=null},setFinalDate:function(t){return this.finalDate=s(t),this},getOffset:function(){return this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,{seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)}},update:function(){this.offset=this.getOffset();for(var t=["days","hours","minutes","seconds"],e=0;e<t.length;e++){var n=t[e],s=o(this.offset[n]);this.offset[n+"_1"]=s[0],this.offset[n+"_2"]=s[1]}return 0===this.totalSecsLeft?(this.stop(),this._dispatchEvent("finish")):this._dispatchEvent("update"),this},_dispatchEvent:function(t){var e={};e.finalDate=this.finalDate,e.offset=this.offset,e.strftime=r(this.offset),this.emit(t,e),this.emit("tick",e)}};for(var _ in v)p[_]=v[_];e.a=h},1615:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"inline-block"}},[t.showTimeString?n("span",[t._v(t._s(t.timeString))]):t._e(),t._v(" "),n("div",{staticClass:"vux-clocker-tpl"},[t._t("default")],2)])},i=[],r={render:s,staticRenderFns:i};e.a=r},1616:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticStyle:{padding:"15px"}},[n("span",[t._v("Normal Usage")]),t._v(" "),n("clocker",{attrs:{time:t.time1}})],1),t._v(" "),n("group",{attrs:{title:"Use in cell"}},[n("cell",{attrs:{title:"Date:0801"}},[n("clocker",{attrs:{time:"2017-08-01"},slot:"value"})],1)],1),t._v(" "),n("group",{attrs:{title:"custom template"}},[n("cell",{attrs:{title:"Date:0801"}},[n("clocker",{attrs:{time:"2017-08-01"},slot:"value"},[n("span",{staticStyle:{color:"red"}},[t._v("%D 天")]),t._v(" "),n("span",{staticStyle:{color:"green"}},[t._v("%H 小时")]),t._v(" "),n("span",{staticStyle:{color:"blue"}},[t._v("%M 分 %S 秒")])])],1),t._v(" "),n("cell",{attrs:{title:"20180808"}},[n("clocker",{attrs:{time:"2018-08-08"},slot:"value"},[n("span",{staticClass:"day"},[t._v("%_D1")]),t._v(" "),n("span",{staticClass:"day"},[t._v("%_D2")]),t._v("天\n        "),n("span",{staticClass:"day"},[t._v("%_H1")]),t._v(" "),n("span",{staticClass:"day"},[t._v("%_H2")]),t._v("时\n        "),n("span",{staticClass:"day"},[t._v("%_M1")]),t._v(" "),n("span",{staticClass:"day"},[t._v("%_M2")]),t._v("分\n        "),n("span",{staticClass:"day"},[t._v("%_S1")]),t._v(" "),n("span",{staticClass:"day"},[t._v("%_S2")]),t._v("秒\n      ")])],1)],1)],1)},i=[],r={render:s,staticRenderFns:i};e.a=r},362:function(t,e,n){"use strict";function s(t){n(1609)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1611),r=n(1616),a=n(0),o=s,c=a(i.a,r.a,o,"data-v-50ebc6d0",null);e.default=c.exports},443:function(t,e,n){t.exports={default:n(455),__esModule:!0}},455:function(t,e,n){n(456),t.exports=n(11).Object.keys},456:function(t,e,n){var s=n(39),i=n(13);n(457)("keys",function(){return function(t){return i(s(t))}})},457:function(t,e,n){var s=n(21),i=n(11),r=n(12);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),s(s.S+s.F*r(function(){n(1)}),"Object",a)}},810:function(t,e,n){"use strict";function s(){}function i(t,e,n){var s=!0;if(t){var i=0,r=t.length,a=e[0],o=e[1],c=e[2];switch(e.length){case 0:for(;i<r;i+=2)s=!1!==t[i].call(t[i+1]||n)&&s;break;case 1:for(;i<r;i+=2)s=!1!==t[i].call(t[i+1]||n,a)&&s;break;case 2:for(;i<r;i+=2)s=!1!==t[i].call(t[i+1]||n,a,o)&&s;break;case 3:for(;i<r;i+=2)s=!1!==t[i].call(t[i+1]||n,a,o,c)&&s;break;default:for(;i<r;i+=2)s=!1!==t[i].apply(t[i+1]||n,e)&&s}}return s}function r(t){return"[object Function]"===Object.prototype.toString.call(t)}var a=n(443),o=n.n(a),c=/\s+/;s.prototype.on=function(t,e,n){var s,i,r;if(!e)return this;for(s=this.__events||(this.__events={}),t=t.split(c);i=t.shift();)r=s[i]||(s[i]=[]),r.push(e,n);return this},s.prototype.once=function(t,e,n){var s=this,i=function i(){s.off(t,i),e.apply(n||s,arguments)};return this.on(t,i,n)},s.prototype.off=function(t,e,n){var s,i,r,a;if(!(s=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(c):l(s);i=t.shift();)if(r=s[i])if(e||n)for(a=r.length-2;a>=0;a-=2)e&&r[a]!==e||n&&r[a+1]!==n||r.splice(a,2);else delete s[i];return this},s.prototype.trigger=function(t){var e,n,s,r,a,o,l=[],u=!0;if(!(e=this.__events))return this;for(t=t.split(c),a=1,o=arguments.length;a<o;a++)l[a-1]=arguments[a];for(;n=t.shift();)(s=e.all)&&(s=s.slice()),(r=e[n])&&(r=r.slice()),"all"!==n&&(u=i(r,l,this)&&u),u=i(s,[n].concat(l),this)&&u;return u},s.prototype.emit=s.prototype.trigger;var l=o.a;l||(l=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),s.mixTo=function(t){var e=s.prototype;if(r(t))for(var n in e)e.hasOwnProperty(n)&&(t.prototype[n]=e[n]);else{var i=new s;for(var a in e)e.hasOwnProperty(a)&&function(n){t[n]=function(){return e[n].apply(i,Array.prototype.slice.call(arguments)),this}}(a)}},e.a=s}});