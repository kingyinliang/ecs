webpackJsonp([156],{1221:function(e,t,r){var i=r(1222);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(227)("38870cb8",i,!0)},1222:function(e,t,r){t=e.exports=r(226)(),t.push([e.i,"\n.resume_top[data-v-3e158140]{width: 100%;height: 200px;background: url("+r(667)+") no-repeat;background-size: 100% 100%;\n}\n.personphoto[data-v-3e158140]{width: 100%;height: 90px;padding-top: 20px;position: relative;\n}\n.myphoto[data-v-3e158140]{box-shadow:0px 1px 5px 0px #ddd;width:80px;height:80px;background: #FFFFFF;border-radius: 50%;border: 3px solid #fff;position:absolute;left: 50%;margin-left: -45px;overflow: hidden;\n}\n.myphoto img[data-v-3e158140]{width:100%;height: 100%;border-radius: 50%;\n}\n.resume_btn[data-v-3e158140]{text-align:center;\n}\n.resume_btn button[data-v-3e158140]{width: 88px;height: 27px;border: 1px solid #E83428;border-radius: 5px;margin-top: 15px;background: #fff;color: #ff2524;\n}\n.resume_text[data-v-3e158140]{font-size:12px;color: #9c9c9c;padding-left: 12px;margin-top: 22px;\n}\n.resume_text img[data-v-3e158140]{width: 16px;margin-left: 10px;position: relative;top: 3px;\n}\n.resume_box[data-v-3e158140]{padding-left:10px;padding-right:10px;\n}\n.alert-mask[data-v-3e158140]{ width: 100%; height: 100%; background: rgba(0,0,0,0.5); position: fixed; top: 0px;\n}\n.menu[data-v-3e158140]{width:70%;background: #FFFFFF; border-radius: 10px; margin: 200px auto;overflow: hidden;\n}\n.menu p[data-v-3e158140]{font-size: 13px; color: #3E3E3E; width: 80%; margin-left: 10%;padding: 20px 0px;\n}\n.menu button[data-v-3e158140]{width: 100%;height:33px;background: #fff;color: #E83428;outline: none;border: none;border-top: 1px solid #e3e3e3;\n}\r\n",""])},1223:function(e,t,r){var i=r(1224);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);r(227)("371efc62",i,!0)},1224:function(e,t,r){t=e.exports=r(226)(),t.push([e.i,"\n#vux_view_box_body{background:#f7f7f7;\n}\n.resume .weui-cell{background: #fff ;margin-top: 7px;font-size: 13px;color: #3E3E3E;height: 25px;padding-left: 3px;padding-right: 8px;border-radius: 5px;\n}\n.resume .weui-cell:before{border-top: none;\n}\n.resume .weui-cell__ft:after{border-width: 1px 1px 0 0 !important;margin-left: 16px;\n}\n.resume .weui-cell__ft{font-size: 12px;color: #E83428;\n}\r\n",""])},1225:function(e,t,r){"use strict";(function(e){var i=r(60),n=r(63),o=r(64),s=r.n(o),l="";t.a={components:{Cell:n.a,cookie:s.a},data:function(){return{reslevel:0,userData:{},userId:"",userImg:"",alertFlag:!1,Headimgurl:"",inforPerfect:"15分",hotelPerfect:"20分",conceptPerfect:"5分",skillPerfect:"15分",honorPerfect:"10分",exPerfect:"15分",introPerfect:"5分"}},methods:{resumePreview:function(){this.$router.push({path:"/component/resumepreview"})},question:function(){this.alertFlag=!0},menuBtn:function(){this.alertFlag=!1},jump:function(){1==l?this.$router.push({path:"/component/resumeexperiences"}):0==l&&this.$router.push({path:"/component/resumeexperience",query:{resumeId:0}})},getMemberProfile:function(){var t=this,r={MemberId:this.userId};this.$http({method:"POST",url:i.a.getMemberProfile,data:r}).then(function(r){var i=JSON.parse(r.data);0!=i.length?(null!=i[0].ImgUrl&&""!=i[0].ImgUrl?t.userImg=i[0].ImgUrl:t.userImg=t.Headimgurl,null!=i[0].Nature&&""!=i[0].Nature&&(t.inforPerfect="已完善",e(".resume_box .weui-cell__ft").eq(0).css("color","#ccc"),t.reslevel+=20),null!=i[0].PerConsumption&&""!=i[0].PerConsumption&&(t.hotelPerfect="已完善",e(".resume_box .weui-cell__ft").eq(1).css("color","#ccc"),t.reslevel+=20),null!=i[0].JobReason&&""!=i[0].JobReason&&(t.conceptPerfect="已完善",e(".resume_box .weui-cell__ft").eq(2).css("color","#ccc"),t.reslevel+=5),null!=i[0].Major&&""!=i[0].Major&&(t.skillPerfect="已完善",e(".resume_box .weui-cell__ft").eq(3).css("color","#ccc"),t.reslevel+=20),null!=i[0].MatchName&&""!=i[0].MatchName&&(t.honorPerfect="已完善",e(".resume_box .weui-cell__ft").eq(4).css("color","#ccc"),t.reslevel+=15),null!=i[0].Introduction&&""!=i[0].Introduction&&(t.introPerfect="已完善",e(".resume_box .weui-cell__ft").eq(6).css("color","#ccc"),t.reslevel+=5)):t.userImg=t.Headimgurl})},getMemberResumeList:function(){var t=this,r={MemberId:this.userId};this.$http({method:"post",url:i.a.getMemberResumeList,data:r}).then(function(r){0!=JSON.parse(r.data).length?(t.exPerfect="已完善",e(".resume_box .weui-cell__ft").eq(5).css("color","#ccc"),t.reslevel+=15,l=1):l=0})}},mounted:function(){e("#vux_view_box_body").css("background","#f7f7f7"),this.userData=s.a.get("WeiXinUser",function(e){for(var t=e.split("&"),r={},i=0;i<t.length;i++){var n=t[i].split("=");r[n[0]]=n[1]}return r}),this.userId=this.userData.UserId,this.Headimgurl=this.userData.Headimgurl,this.getMemberProfile(),this.getMemberResumeList()}}}).call(t,r(38))},1226:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume"},[i("div",{staticClass:"resume_top"},[i("div",{staticClass:"personphoto"},[i("div",{staticClass:"myphoto"},[i("img",{attrs:{src:e.userImg}})])]),e._v(" "),i("p",{staticClass:"resume_btn"},[i("button",{on:{click:e.resumePreview}},[e._v("简历预览")])]),e._v(" "),i("p",{staticClass:"resume_text"},[e._v("简历完善度："+e._s(e.reslevel)+"%"),i("img",{attrs:{src:r(1227)},on:{click:e.question}})])]),e._v(" "),i("div",{staticClass:"resume_box"},[i("cell",{attrs:{title:"基本信息",link:"/component/resumeinformation",value:e.inforPerfect,"is-link":""}}),e._v(" "),i("cell",{attrs:{title:"酒店信息",link:"/component/resumehotel",value:e.hotelPerfect,"is-link":""}}),e._v(" "),i("cell",{attrs:{title:"从厨理念",link:"/component/resumeconcept",value:e.conceptPerfect,"is-link":""}}),e._v(" "),i("cell",{attrs:{title:"职业技能",link:"/component/resumeskill",value:e.skillPerfect,"is-link":""}}),e._v(" "),i("cell",{attrs:{title:"荣誉资格",link:"/component/resumehonor",value:e.honorPerfect,"is-link":""}}),e._v(" "),i("cell",{attrs:{title:"从业经历",value:e.exPerfect,"is-link":""},nativeOn:{click:function(t){e.jump(t)}}}),e._v(" "),i("cell",{attrs:{title:"自我介绍",link:"/component/resumeintroduce",value:e.introPerfect,"is-link":""}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.alertFlag,expression:"alertFlag"}],staticClass:"alert-mask"},[i("div",{staticClass:"menu"},[i("p",[e._v("简历填写的选项及字段越全，完成度就会越高，从而获得的积分和机会就会越多。")]),e._v(" "),i("button",{on:{click:e.menuBtn}},[e._v("知道了")])])])])},n=[],o={render:i,staticRenderFns:n};t.a=o},1227:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1Zjc0ODBlYy1mZWZjLTQxMTAtOWJmNC03MDk4NWRhZjk4MzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ2MkQ5NTlBNDMxMTFFNzhDRDJBQ0ZDMkM0NzBFQkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ2MkQ5NThBNDMxMTFFNzhDRDJBQ0ZDMkM0NzBFQkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMDczNjAzOC1kMmFkLTQwNjYtODViMi1jZDM3OThhMGY2NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NWY3NDgwZWMtZmVmYy00MTEwLTliZjQtNzA5ODVkYWY5ODMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ctw4GgAAA5BJREFUeNq0mGtIVEEUx+9ugqY9rHyUVhSUPeyhUEZoEWaUFST5rTTICiEkKIpCPyYrlVERvciKSpKoUIrsS6HGYpr0EEqNrCAijcyKgnyk2//E/8rmvmZ2t4GfB++9c87/zp05c2YtDofD0GmfFs9JhJkL0sAsMB78AG/AQ/ACPPfUP7ap1eWaRUUEAsfA7AB7QeSw2+LA4qbbEXAWvPUlwqogwCYGFIMBUAhWg6kMbqWdCDLAHtAO9nF0zoFwbzE8jgSCJ8FUg0mgXpziLepxXfXLyWcrBWvAIEgHdcojgUDrYZ5RwCZ0TBUBhl57CTLBKtAHasF2dw9a3QjYAHMHvAfxCF5hBNbug2jQBM7Df75XEXhAZnsV58BMCPhoBKf9BCngiUxWxFnhbSRqaedDQJ8R/JZCQQ8gJNxFBC6WcIZvhIDPxv9pg8wvEvfKPyIgQNb+AUkyEFCp4Gwsl6J8537QwiU821dH+G+GuQ6yEXey80jsot2sIGAGgx4Fi0A3kHVbBFoVfeykPeEsQjJhF1S2KDioA3HgGpdwLBgJ9vN+OVjgYzREeKN8+r8iMCQJsKOZZn1lz1wK6OQbd/JWDzgMLvL/3Qovc4E+l8tIJPFik0LHKaAXnPRw/zJtlIKvm7Q5ImIZ/2lVmFQ2jkSph0eW0H5X8PXVTO8h+DOPFzsVl1m3h+vJwOY84RSalACRMhKjgrD+JQM+BfJSBYqfVtovEGrlpAo0C9Y4TchTGn3DJM+IiDbO0ig/BERwu5eWB45r9h8Dvlm57g0mHN22DkwAj8AlzTLR3DvaRUSzuWn5ISKR9rEffbNoK0KYgvuZNU9rOroHfoO7fojYylVZbcWfAQafjiGK03TUAA5yZeh+igxW50N7xyHaq5oi0igkT7OfGS9/SARGo4MTKx0ql2o4y2SW3KYxCvHMJXbEbXOptvFAL4VFeKqshlXb4zisdtChqOMdmCb7C2J8cVferWTWa1B0KPn/hoaAWxSQawpwEYEbdp60kvHGjSAsiKVdFeuHEsQp91ry44EyVj6SjrsgJDXA4PL9XgE5Stjgv1Dp8IMHz8CsZVq2Q0gZjwM6LZ6FkuShBOaFIq1jICehnLiPgS28VMNi5Db44KZLDMVn8c3NhFZgHowDOZUvZEbNcVMPyC4cys1oeDYt5jk28J8GnMSMYCWWzX0jmkWuLG2Z7a9BJY9+Paq/T/wRYACBRh+PI1ccmAAAAABJRU5ErkJggg=="},282:function(e,t,r){"use strict";function i(e){r(1221),r(1223)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1225),o=r(1226),s=r(0),l=i,c=s(n.a,o.a,l,"data-v-3e158140",null);t.default=c.exports},667:function(e,t,r){e.exports=r.p+"static/img/perback.fe7c1b0.png"}});