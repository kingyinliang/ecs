webpackJsonp([90],{1825:function(t,n,o){var i=o(1826);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(227)("aa33dd28",i,!0)},1826:function(t,n,o){n=t.exports=o(226)(),n.push([t.i,"\n.demo3-slot[data-v-4524bd62] {\r\n  text-align: center;\r\n  padding: 8px 0;\r\n  color: #888;\n}\r\n",""])},1827:function(t,n,o){"use strict";var i=o(60),e=o(1828);n.a={components:{Group:i.a,PopupRadio:e.a},data:function(){return{option1:"A",options1:["A","B","C"],option2:"",options2:[{key:"A",value:"label A"},{key:"B",value:"label B"}],option3:"C",options3:["A","B","C"],option4:"B",option5:"B"}}}},1828:function(t,n,o){"use strict";function i(t){o(1829)}var e=o(1831),s=o(1832),a=o(0),r=i,p=a(e.a,s.a,r,null,null);n.a=p.exports},1829:function(t,n,o){var i=o(1830);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(227)("07958057",i,!0)},1830:function(t,n,o){n=t.exports=o(226)(),n.push([t.i,"\n.vux-popup-radio-popup {\r\n  background-color: #fff;\n}\r\n",""])},1831:function(t,n,o){"use strict";var i=o(8),e=o.n(i),s=o(80),a=o.n(s),r=o(63),p=o(465),u=o(75),l=o(85),c=o(86),h=o(65),d=o(483),v=o.n(d),f=Object(c.a)();delete f.value,n.a={name:"popup-radio",components:{Popup:p.a,Radio:u.a,Cell:r.a},directives:{TransferDom:h.a},props:a()({placeholder:String,readonly:Boolean},f,Object(l.a)()),computed:{displayValue:function(){var t=this;if(!this.options.length)return"";if("object"===e()(this.options[0])){var n=v()(this.options,function(n){return n.key===t.currentValue});if(n)return n.value}return this.currentValue}},methods:{onValueChange:function(t){this.hide()},show:function(){this.readonly||(this.showPopup=!0)},hide:function(){this.showPopup=!1}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},data:function(){return{showPopup:!1,currentValue:this.value}}}},1832:function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("cell",{attrs:{title:t.title,value:t.currentValue,"is-link":!t.readonly,"value-align":t.valueAlign},nativeOn:{click:function(n){t.show(n)}}},[t._v("\n  "+t._s(t.displayValue||t.placeholder)+"\n  "),o("span",{slot:"icon"},[t._t("icon")],2),t._v(" "),o("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[o("popup",{staticStyle:{"background-color":"#fff"},model:{value:t.showPopup,callback:function(n){t.showPopup=n},expression:"showPopup"}},[t._t("popup-header",null,{options:t.options,value:t.currentValue}),t._v(" "),o("radio",{attrs:{options:t.options,"fill-mode":!1},on:{"on-change":t.onValueChange},scopedSlots:t._u([{key:"each-item",fn:function(n){return[t._t("each-item",[o("p",[o("img",{directives:[{name:"show",rawName:"v-show",value:n.icon,expression:"props.icon"}],staticClass:"vux-radio-icon",attrs:{src:n.icon}}),t._v(" "),o("span",{staticClass:"vux-radio-label"},[t._v(t._s(n.label))])])],{icon:n.icon,label:n.label,index:n.index})]}}]),model:{value:t.currentValue,callback:function(n){t.currentValue=n},expression:"currentValue"}})],2)],1)])},e=[],s={render:i,staticRenderFns:e};n.a=s},1833:function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("group",[o("popup-radio",{attrs:{title:"options",options:t.options1},model:{value:t.option1,callback:function(n){t.option1=n},expression:"option1"}})],1),t._v(" "),o("group",[o("popup-radio",{attrs:{title:"options",options:t.options2},model:{value:t.option2,callback:function(n){t.option2=n},expression:"option2"}})],1),t._v(" "),o("group",[o("popup-radio",{attrs:{title:"options",options:t.options3},model:{value:t.option3,callback:function(n){t.option3=n},expression:"option3"}},[o("p",{staticClass:"vux-1px-b demo3-slot",slot:"popup-header"},[t._v("Please select")])])],1),t._v(" "),o("group",[o("popup-radio",{attrs:{title:"readonly",readonly:"",options:t.options3},model:{value:t.option4,callback:function(n){t.option4=n},expression:"option4"}},[o("p",{staticClass:"vux-1px-b demo3-slot",slot:"popup-header"},[t._v("Please select")])])],1),t._v(" "),o("group",[o("popup-radio",{attrs:{title:"slot:each-item",options:t.options3},scopedSlots:t._u([{key:"each-item",fn:function(n){return[o("p",[t._v("\n          custom item "),o("img",{staticClass:"vux-radio-icon",attrs:{src:"http://dn-placeholder.qbox.me/110x110/FF2D55/000"}}),t._v(" "+t._s(n.label)+"\n          "),o("br"),t._v(" "),o("span",{staticStyle:{color:"#666"}},[t._v(t._s(n.index+1)+" another line")])])]}}]),model:{value:t.option5,callback:function(n){t.option5=n},expression:"option5"}})],1)],1)},e=[],s={render:i,staticRenderFns:e};n.a=s},415:function(t,n,o){"use strict";function i(t){o(1825)}Object.defineProperty(n,"__esModule",{value:!0});var e=o(1827),s=o(1833),a=o(0),r=i,p=a(e.a,s.a,r,"data-v-4524bd62",null);n.default=p.exports},443:function(t,n,o){t.exports={default:o(455),__esModule:!0}},455:function(t,n,o){o(456),t.exports=o(11).Object.keys},456:function(t,n,o){var i=o(39),e=o(13);o(457)("keys",function(){return function(t){return e(i(t))}})},457:function(t,n,o){var i=o(21),e=o(11),s=o(12);t.exports=function(t,n){var o=(e.Object||{})[t]||Object[t],a={};a[t]=n(o),i(i.S+i.F*s(function(){o(1)}),"Object",a)}},465:function(t,n,o){"use strict";function i(t){o(478)}var e=o(480),s=o(482),a=o(0),r=i,p=a(e.a,s.a,r,null,null);n.a=p.exports},478:function(t,n,o){var i=o(479);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(227)("61e3a766",i,!0)},479:function(t,n,o){n=t.exports=o(226)(),n.push([t.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n.vux-popup-dialog {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background: #eee;\n  z-index: 501;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-duration: 300ms;\n          transition-duration: 300ms;\n  max-height: 100%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.vux-popup-dialog.vux-popup-left {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-dialog.vux-popup-right {\n  width: auto;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\n.vux-popup-dialog.vux-popup-top {\n  width: 100%;\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\n.vux-popup-mask {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  z-index: -1;\n  -webkit-transition: opacity 400ms;\n  transition: opacity 400ms;\n}\n.vux-popup-mask.vux-popup-show {\n  opacity: 1;\n}\n.vux-popup-animate-bottom-enter,\n.vux-popup-animate-bottom-leave-active {\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n}\n.vux-popup-animate-left-enter,\n.vux-popup-animate-left-leave-active {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n}\n.vux-popup-animate-right-enter,\n.vux-popup-animate-right-leave-active {\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n.vux-popup-animate-top-enter,\n.vux-popup-animate-top-leave-active {\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n}\n",""])},480:function(t,n,o){"use strict";var i=o(443),e=o.n(i),s=o(481);n.a={name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object},mounted:function(){var t=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var n=t;t.popup=new s.a({showMask:n.showMask,container:n.$el,hideOnBlur:n.hideOnBlur,onOpen:function(){n.fixSafariOverflowScrolling("auto"),n.show=!0},onClose:function(){n.show=!1,window.__$vuxPopups&&e()(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){n.fixSafariOverflowScrolling("touch")},300)}}),t.value&&t.popup.show(),t.initialShow=!1})},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var n=0;n<this.$overflowScrollingList.length;n++)this.$overflowScrollingList[n].style.webkitOverflowScrolling=t}},data:function(){return{initialShow:!0,hasFirstShow:!1,show:this.value}},computed:{styles:function(){var t={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?t.width=this.width:t.height=this.height,this.maxHeight&&(t["max-height"]=this.maxHeight),this.isTransparent&&(t.background="transparent"),this.popupStyle)for(var n in this.popupStyle)t[n]=this.popupStyle[n];return t}},watch:{value:function(t){this.show=t},show:function(t){var n=this;this.$emit("input",t),t?(this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||n.fixSafariOverflowScrolling("touch")},200))}},beforeDestroy:function(){this.popup.destroy(),this.fixSafariOverflowScrolling("touch")}}},481:function(t,n,o){"use strict";window.__$vuxPopups=window.__$vuxPopups||{};var i=function(t){var n=this;this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={hideOnBlur:t.hideOnBlur,onOpen:t.onOpen||function(){},onClose:t.onClose||function(){},showMask:t.showMask}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.dataset.uuid="",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var o=void 0;o=t.container?t.container:document.createElement("div"),o.className+=" vux-popup-dialog vux-popup-dialog-"+this.uuid,this.params.hideOnBlur||(o.className+=" vux-popup-mask-disabled"),this.div=o,t.container||document.body.appendChild(o),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this.mask=document.querySelector(".vux-popup-mask"),this.mask.dataset.uuid+=","+this.uuid,this._bindEvents(),t=null,this.containerHandler=function(){n.mask&&!/show/.test(n.mask.className)&&setTimeout(function(){!/show/.test(n.mask.className)&&(n.mask.style.zIndex=-1)},200)},this.container.addEventListener("webkitTransitionEnd",this.containerHandler),this.container.addEventListener("transitionend",this.containerHandler)};i.prototype.onClickMask=function(){this.params.hideOnBlur&&this.params.onClose()},i.prototype._bindEvents=function(){this.params.hideOnBlur&&(this.mask.addEventListener("click",this.onClickMask.bind(this),!1),this.mask.addEventListener("touchmove",function(t){return t.preventDefault()},!1))},i.prototype.show=function(){this.params.showMask&&(this.mask.classList.add("vux-popup-show"),this.mask.style.zIndex=500),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this),window.__$vuxPopups[this.uuid]=1},i.prototype.hide=function(){var t=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||(this.mask.classList.remove("vux-popup-show"),setTimeout(function(){t.mask&&!/show/.test(t.mask.className)&&(t.mask.style.zIndex=-1)},400)),!1===n&&this.params.onClose&&this.params.hideOnBlur&&this.params.onClose(this),this.isShow=!1,delete window.__$vuxPopups[this.uuid]},i.prototype.destroy=function(){this.mask.dataset.uuid=this.mask.dataset.uuid.replace(new RegExp(","+this.uuid,"g"),""),this.mask.dataset.uuid?this.hide():(this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)),this.container.removeEventListener("webkitTransitionEnd",this.containerHandler),this.container.removeEventListener("transitionend",this.containerHandler),delete window.__$vuxPopups[this.uuid]},n.a=i},482:function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("transition",{attrs:{name:"vux-popup-animate-"+t.position}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&!t.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+t.position,t.show?"vux-popup-show":""],style:t.styles},[t._t("default")],2)])},e=[],s={render:i,staticRenderFns:e};n.a=s},483:function(t,n,o){"use strict";function i(t,n,o){if("function"==typeof Array.prototype.find)return t.find(n,o);o=o||this;var i,e=t.length;if("function"!=typeof n)throw new TypeError(n+" is not a function");for(i=0;i<e;i++)if(n.call(o,t[i],i,t))return t[i]}t.exports=i}});