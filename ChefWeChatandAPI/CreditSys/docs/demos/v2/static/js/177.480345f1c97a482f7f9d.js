webpackJsonp([177],{1565:function(t,e,n){"use strict";var i=n(83),o=n(84),a=n(533);e.a={components:{ButtonTab:i.a,ButtonTabItem:o.a,Divider:a.a},methods:{consoleIndex:function(){console.log("click demo01",this.demo01)}},data:function(){return{demo01:0}}}},1566:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{padding:"15px"}},[n("button-tab",[n("button-tab-item",[t._v(t._s(t.$t("Today")))]),t._v(" "),n("button-tab-item",{attrs:{selected:""}},[t._v(t._s(t.$t("This Week")))]),t._v(" "),n("button-tab-item",[t._v(t._s(t.$t("This Month")))])],1),t._v(" "),n("br"),t._v(" "),n("divider",[t._v(t._s(t.$t("Use v-model to set selected item")))]),t._v(" "),n("br"),t._v(" "),n("button-tab",{model:{value:t.demo01,callback:function(e){t.demo01=e},expression:"demo01"}},[n("button-tab-item",{on:{"on-item-click":function(e){t.consoleIndex()}}},[t._v(t._s(t.$t("Articles")))]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.consoleIndex()}}},[t._v(t._s(t.$t("Products")))])],1),t._v(" "),n("br"),t._v(" "),n("button-tab",{model:{value:t.demo01,callback:function(e){t.demo01=e},expression:"demo01"}},[n("button-tab-item",[t._v(t._s(t.$t("Articles sync")))]),t._v(" "),n("button-tab-item",[t._v(t._s(t.$t("Products sync")))])],1),t._v(" "),n("br"),t._v(" "),n("divider",[t._v(t._s(t.$t("Red Dot")))]),t._v(" "),n("br"),t._v(" "),n("button-tab",[n("button-tab-item",{attrs:{selected:""}},[t._v(t._s(t.$t("All Messages")))]),t._v(" "),n("button-tab-item",[n("span",{staticClass:"vux-reddot-s"},[t._v(t._s(t.$t("New Messages")))])])],1)],1)])},o=[],a={render:i,staticRenderFns:o};e.a=a},336:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1565),o=n(1566),a=n(0),r=a(i.a,o.a,null,null,null);e.default=r.exports},533:function(t,e,n){"use strict";function i(t){n(534)}var o=n(536),a=n(537),r=n(0),s=i,d=r(o.a,a.a,s,null,null);e.a=d.exports},534:function(t,e,n){var i=n(535);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("30b9f0ea",i,!0)},535:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.vux-divider {\r\n  display: table;\r\n  white-space: nowrap;\r\n  height: auto;\r\n  overflow: hidden;\r\n  line-height: 1;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  color: #666;\n}\n.vux-divider:after,.vux-divider:before {\r\n  content: '';\r\n  display: table-cell;\r\n  position: relative;\r\n  top: 50%;\r\n  width: 50%;\r\n  background-repeat: no-repeat;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)\n}\n.vux-divider:before {\r\n  background-position: right 1em top 50%\n}\n.vux-divider:after {\r\n  background-position: left 1em top 50%\n}\r\n",""])},536:function(t,e,n){"use strict";e.a={name:"divider"}},537:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"vux-divider"},[t._t("default")],2)},o=[],a={render:i,staticRenderFns:o};e.a=a}});