webpackJsonp([157],{1305:function(n,t,e){var a=e(1306);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(227)("3e7f6136",a,!0)},1306:function(n,t,e){t=n.exports=e(226)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*.pageshare {width:100%;height:100%;background: url('../../static/credit/pagesharebook.jpg') no-repeat center;background-size: 100% 100%;}*/\n.pageshare img[data-v-7e808326]{width: 100%;\n}\r\n",""])},1307:function(n,t,e){var a=e(1308);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(227)("88cffe22",a,!0)},1308:function(n,t,e){t=n.exports=e(226)(),t.push([n.i,"\n#vux_view_box_body{background: rgba(0,0,0,0.7);\n}\r\n",""])},1309:function(n,t,e){"use strict";var a=e(64),s=e.n(a),r=e(67),i=e(70),o=e.n(i),p=e(62);t.a={components:{cookie:s.a,Toast:r.a},data:function(){return{userData:"",userId:"",userType:"",openId:"",timestamp:"",nonceStr:"",signature:"",url:"",shareicon:"https://mmbiz.qpic.cn/mmbiz_jpg/uuwJXDpEBqvXXicf0GRYqh1l6AvwUEtYIVmgIic4e647WYT3aQZm2PH4N1veICBOkciaZYhTS5gh4bibYWibwIvGA2g/0?wx_fmt=jpeg"}},methods:{share:function(){var n=this;this.$http({method:"GET",url:p.a.getTimestampAndNonceStr}).then(function(t){var e=t.data,a=e.split("|");n.timestamp=parseInt(a[0]),n.nonceStr=a[1];var s="?noncestr="+n.nonceStr+"&timestamp="+n.timestamp+"&url="+n.url;n.$http({method:"GET",url:p.a.getJsapiTicketSignature+s}).then(function(t){n.signature=t.data,o.a.config({debug:!1,appId:p.a.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),o.a.ready(function(){o.a.onMenuShareTimeline({title:"想成为名厨？你得有颗爱读书的心...",link:p.a.getUrl+"/#/component/tasteshare",imgUrl:n.shareicon,success:function(){1==n.userType?n.addECWXTranspondDetails(2):2==n.userType&&n.isCommTranspond()},cancel:function(){}}),o.a.onMenuShareAppMessage({title:"想成为名厨？你得有颗爱读书的心...",desc:"来看看我们为你准备了哪些好书......",link:p.a.getUrl+"/#/component/tasteshare",imgUrl:n.shareicon,success:function(){n.addECWXTranspondDetails(1)},cancel:function(){},fail:function(n){}})})})})},addECWXTranspondDetails:function(n){var t={ECBrowseURL:p.a.getUrl+"/#/component/pageshare20180419",Parameter:"",OpenId:this.openId,TranspondType:n};this.$http({method:"post",url:p.a.addECWXTranspondDetails,data:t}).then(function(n){})},isCommTranspond:function(){var n=this,t={ECBrowseURL:p.a.getUrl+"/#/component/pageshare20180419",OpenId:this.openId,TranspondType:2};this.$http({method:"post",url:p.a.isCommTranspond,data:t}).then(function(t){"OK"==t.data?(n.updateMemberIntegral(10),n.addECBrowseDetails()):"No"==t.data&&n.$vux.toast.text("只有第一次转发有积分奖励哦","middle"),n.addECWXTranspondDetails(2)})},updateMemberIntegral:function(n){var t=this,e={Operation:"plus",Integral:n,MemberId:this.userId,IntegralSource:"指定页面分享",Remark:"转发读书日活动赚积分"};this.$http({method:"post",url:p.a.updateMemberIntegral,data:e}).then(function(n){t.$vux.toast.text("已成功添加10积分","middle")})},addECBrowseDetails:function(){var n={ECURL:p.a.getUrl+"/#/component/pageshare20180419",PageName:" ",Parameter:"",OpenId:this.openId,PageShort:"指定页面分享",PageDetail:"转发读书日活动赚积分",PageType:"1"};this.$http({method:"post",url:p.a.addECBrowseDetails,data:n}).then(function(n){})},onChange:function(n){var t=this;n?this.$vux.toast.show({text:"Hello World",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding"),t.show9=!1}}):this.$vux.toast.hide()}},mounted:function(){this.userData=s.a.get("WeiXinUser",function(n){for(var t=n.split("&"),e={},a=0;a<t.length;a++){var s=t[a].split("=");e[s[0]]=s[1]}return e}),this.userId=parseInt(this.userData.UserId),this.userType=parseInt(this.userData.UserType),0==this.userType&&this.$router.push("/component/goregister"),this.openId=this.userData.Openid;var n=location.href.split("#")[0];this.url=encodeURIComponent(n),this.share()}}},1310:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},s=[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"pageshare"},[a("img",{attrs:{src:e(1311)}})])}],r={render:a,staticRenderFns:s};t.a=r},1311:function(n,t,e){n.exports=e.p+"static/img/pagesharebook.4fb33c7.jpg"},298:function(n,t,e){"use strict";function a(n){e(1305),e(1307)}Object.defineProperty(t,"__esModule",{value:!0});var s=e(1309),r=e(1310),i=e(0),o=a,p=i(s.a,r.a,o,"data-v-7e808326",null);t.default=p.exports}});