webpackJsonp([152],{1113:function(t,e,n){var a=n(1114);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(227)("056e1956",a,!0)},1114:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.recommendstart[data-v-21c19a8e]{background: #fff;height: 100%;\n}\n.rstart_top[data-v-21c19a8e]{height: 40%;width: 100%;background: url("+n(778)+") no-repeat center;background-size: 100% 100%;text-align: center;\n}\n.rstart_top img[data-v-21c19a8e]{width: 80%;margin-top: 5%;\n}\n.rstart_top p[data-v-21c19a8e]{font-size: 22px;color: #fff;font-family:STHupo;\n}\n.numstyle[data-v-21c19a8e]{font-size:24px;\n}\n.rstart_text[data-v-21c19a8e]{padding-left: 6%;padding-right: 2%;font-size: 14px;\n}\n.rstart_text p[data-v-21c19a8e]:nth-child(1),.rstart_text p[data-v-21c19a8e]:nth-child(4){color: #f72b2c;\n}\n.rstart_text p[data-v-21c19a8e]:nth-child(2),.rstart_text p[data-v-21c19a8e]:nth-child(3){color: #603a15;margin-top: 3%;\n}\n.rstart_text p[data-v-21c19a8e]:nth-child(1){position: relative;left: -2%;\n}\n.rstart_text p[data-v-21c19a8e]:nth-child(4){margin-top: 5%;\n}\n.codeimg[data-v-21c19a8e]{width: 50%;margin-left: 25%;margin-top: 5%;\n}\n",""])},1115:function(t,e,n){var a=n(1116);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(227)("c408581c",a,!0)},1116:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n#vux_view_box_body{background: #fff;\n}\n",""])},1117:function(t,e,n){"use strict";var a=n(64),i=n.n(a),r=n(62),s=n(70),c=n.n(s);e.a={components:{cookie:i.a},data:function(){return{userData:{},userId:"",userType:"",openId:"",timestamp:"",nonceStr:"",signature:"",url:"",img:"",codeImg:"",shareicon:"https://mmbiz.qpic.cn/mmbiz_jpg/uuwJXDpEBquI0icXunSs26kZFyJ9uvkryg2ouLfCSjzznEEvFGLu6VNWg9tickKm0UghTDZQjpBfxOxlxdSCkvMg/0?wx_fmt=jpeg",recomNum:0}},methods:{getRecommendPic:function(){var t=this;this.$http({method:"get",url:r.a.getRecommendPic+"?MemberId="+this.userId}).then(function(e){t.codeImg="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+e.data})},getRecQualifications:function(){var t=this;this.$http({method:"get",url:r.a.getRecQualifications+"?MemberId="+this.userId}).then(function(e){t.recomNum=20-e.data,t.recomNum<0&&(t.recomNum=0)})},share:function(){var t=this;this.$http({method:"GET",url:r.a.getTimestampAndNonceStr}).then(function(e){var n=e.data,a=n.split("|");t.timestamp=parseInt(a[0]),t.nonceStr=a[1];var i="?noncestr="+t.nonceStr+"&timestamp="+t.timestamp+"&url="+t.url;t.$http({method:"GET",url:r.a.getJsapiTicketSignature+i}).then(function(e){t.signature=e.data,c.a.config({debug:!1,appId:r.a.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),c.a.ready(function(){c.a.onMenuShareTimeline({title:"厨友们快来看，注册会员领福利啦！",link:r.a.getUrl+"/#/component/recommend?userId="+t.userId+"&img="+t.img+"&userType="+t.userType+"&recommendstart=1",imgUrl:t.shareicon,success:function(){t.addECWXTranspondDetails(2)},cancel:function(){},fail:function(t){}}),c.a.onMenuShareAppMessage({title:"厨友们快来看，注册会员领福利啦！",desc:"优秀的厨师都在这里！",link:r.a.getUrl+"/#/component/recommend?userId="+t.userId+"&img="+t.img+"&userType="+t.userType+"&recommendstart=1",imgUrl:t.shareicon,success:function(){t.addECWXTranspondDetails(1)},cancel:function(){},fail:function(t){}})})})})},addECWXTranspondDetails:function(t){var e={ECBrowseURL:r.a.getUrl+"/#/component/recommendstart",Parameter:"",OpenId:this.openId,TranspondType:t};this.$http({method:"post",url:r.a.addECWXTranspondDetails,data:e}).then(function(t){})}},mounted:function(){this.userData=i.a.get("WeiXinUser",function(t){for(var e=t.split("&"),n={},a=0;a<e.length;a++){var i=e[a].split("=");n[i[0]]=i[1]}return n}),this.userId=parseInt(this.userData.UserId),this.userType=parseInt(this.userData.UserType),this.getRecommendPic(),this.getRecQualifications(),this.openId=this.userData.Openid,this.img=this.userData.Headimgurl;var t=window.location.href.split("#")[0];this.url=encodeURIComponent(t),this.share()}}},1118:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommendstart"},[a("div",{staticClass:"rstart_top"},[a("img",{attrs:{src:n(1119)}}),t._v(" "),a("p",[t._v("总计"),a("span",{staticClass:"numstyle"},[t._v("20")]),t._v("个名额，还有"),a("span",{staticClass:"numstyle"},[t._v(t._s(t.recomNum))]),t._v("个名额")])]),t._v(" "),t._m(0),t._v(" "),a("img",{staticClass:"codeimg",attrs:{src:t.codeImg}})])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rstart_text"},[n("p",[t._v("【推荐说明】")]),t._v(" "),n("p",[t._v("1.推荐注册的好友必须为同行厨师；")]),t._v(" "),n("p",[t._v("2.每位会员至多可推荐20人注册，每次推荐成功后推荐人可获得20积分奖励；")]),t._v(" "),n("p",[t._v("点击右上角赶紧分享界面给同行好友或者出示此界面二维码也可扫描注册哦！")])])}],r={render:a,staticRenderFns:i};e.a=r},1119:function(t,e,n){t.exports=n.p+"static/img/recom_text.c904efc.png"},268:function(t,e,n){"use strict";function a(t){n(1113),n(1115)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1117),r=n(1118),s=n(0),c=a,o=s(i.a,r.a,c,"data-v-21c19a8e",null);e.default=o.exports},778:function(t,e,n){t.exports=n.p+"static/img/recomtop.f1a4798.jpg"}});