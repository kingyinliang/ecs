webpackJsonp([96],{1763:function(t,e,r){"use strict";var n=r(1764),i=r(533);e.a={mounted:function(){var t=this;setInterval(function(){t.value="https://vux.li?t="+Math.random(),t.fgColor="#"+Math.floor(16777215*Math.random()).toString(16)},1e3)},components:{Qrcode:n.a,Divider:i.a},data:function(){return{value:"https://vux.li",fgColor:"#000000"}}}},1764:function(t,e,r){"use strict";var n=r(1765),i=r(1771),o=r(0),a=o(n.a,i.a,null,null,null);e.a=a.exports},1765:function(t,e,r){"use strict";function n(t){return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1}var i=r(1766),o=r.n(i),a=r(855),s=r.n(a);e.a={name:"qrcode",props:{value:String,size:{type:Number,default:80},level:{type:String,default:"L"},bgColor:{type:String,default:"#FFFFFF"},fgColor:{type:String,default:"#000000"},type:{type:String,default:"img"}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},data:function(){return{imgData:""}},watch:{value:function(){this.render()},size:function(){this.render()},level:function(){this.render()},bgColor:function(){this.render()},fgColor:function(){this.render()}},methods:{render:function(){var t=this,e=new o.a(-1,s.a[this.level]);e.addData(this.value),e.make();var r=this.$refs.canvas,i=r.getContext("2d"),a=e.modules,u=this.size/a.length,l=this.size/a.length,h=(window.devicePixelRatio||1)/n(i);r.height=r.width=this.size*h,i.scale(h,h),a.forEach(function(e,r){e.forEach(function(e,n){i.fillStyle=e?t.fgColor:t.bgColor;var o=Math.ceil((n+1)*u)-Math.floor(n*u),a=Math.ceil((r+1)*l)-Math.floor(r*l);i.fillRect(Math.round(n*u),Math.round(r*l),o,a)})}),"img"===this.type&&(this.imgData=r.toDataURL("image/png"))}}}},1766:function(t,e,r){function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var i=r(1767),o=r(1768),a=r(1769),s=r(1770),u=r(856),l=n.prototype;l.addData=function(t){var e=new i(t);this.dataList.push(e),this.dataCache=null},l.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},l.getModuleCount=function(){return this.moduleCount},l.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new a,n=0,i=0;i<e.length;i++)n+=e[i].dataCount;for(var i=0;i<this.dataList.length;i++){var u=this.dataList[i];r.put(u.mode,4),r.put(u.getLength(),s.getLengthInBits(u.mode,t)),u.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},l.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},l.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},l.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=s.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},l.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,a=0;a<this.modules[i].length;a++){var s=1*a,u=this.modules[i][a];u&&(n.beginFill(0,100),n.moveTo(s,o),n.lineTo(s+1,o),n.lineTo(s+1,o+1),n.lineTo(s,o+1),n.endFill())}return n},l.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},l.setupPositionAdjustPattern=function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],i=t[r];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[n+o][i+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},l.setupTypeNumber=function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},l.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=s.getBCHTypeInfo(r),i=0;i<15;i++){var o=!t&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(var i=0;i<15;i++){var o=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},l.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,i=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var l=!1;o<t.length&&(l=1==(t[o]>>>i&1));var h=s.getMask(e,n,a-u);h&&(l=!l),this.modules[n][a-u]=l,i--,-1==i&&(o++,i=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,r){for(var i=o.getRSBlocks(t,e),u=new a,l=0;l<r.length;l++){var h=r[l];u.put(h.mode,4),u.put(h.getLength(),s.getLengthInBits(h.mode,t)),h.write(u)}for(var g=0,l=0;l<i.length;l++)g+=i[l].dataCount;if(u.getLengthInBits()>8*g)throw new Error("code length overflow. ("+u.getLengthInBits()+">"+8*g+")");for(u.getLengthInBits()+4<=8*g&&u.put(0,4);u.getLengthInBits()%8!=0;)u.putBit(!1);for(;;){if(u.getLengthInBits()>=8*g)break;if(u.put(n.PAD0,8),u.getLengthInBits()>=8*g)break;u.put(n.PAD1,8)}return n.createBytes(u,i)},n.createBytes=function(t,e){for(var r=0,n=0,i=0,o=new Array(e.length),a=new Array(e.length),l=0;l<e.length;l++){var h=e[l].dataCount,g=e[l].totalCount-h;n=Math.max(n,h),i=Math.max(i,g),o[l]=new Array(h);for(var f=0;f<o[l].length;f++)o[l][f]=255&t.buffer[f+r];r+=h;var c=s.getErrorCorrectPolynomial(g),d=new u(o[l],c.getLength()-1),v=d.mod(c);a[l]=new Array(c.getLength()-1);for(var f=0;f<a[l].length;f++){var m=f+v.getLength()-a[l].length;a[l][f]=m>=0?v.get(m):0}}for(var p=0,f=0;f<e.length;f++)p+=e[f].totalCount;for(var A=new Array(p),E=0,f=0;f<n;f++)for(var l=0;l<e.length;l++)f<o[l].length&&(A[E++]=o[l][f]);for(var f=0;f<i;f++)for(var l=0;l<e.length;l++)f<a[l].length&&(A[E++]=a[l][f]);return A},t.exports=n},1767:function(t,e,r){function n(t){this.mode=i.MODE_8BIT_BYTE,this.data=t}var i=r(854);n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=n},1768:function(t,e,r){function n(t,e){this.totalCount=t,this.dataCount=e}var i=r(855);n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,o=new Array,a=0;a<i;a++)for(var s=r[3*a+0],u=r[3*a+1],l=r[3*a+2],h=0;h<s;h++)o.push(new n(u,l));return o},n.getRsBlockTable=function(t,e){switch(e){case i.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=n},1769:function(t,e){function r(){this.buffer=new Array,this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},1770:function(t,e,r){var n=r(854),i=r(856),o=r(857),a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0;)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0;)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new i([1],0),r=0;r<t;r++)e=e.multiply(new i([1,o.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var i=0;i<e;i++){for(var o=0,a=t.isDark(n,i),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)i+u<0||e<=i+u||0==s&&0==u||a==t.isDark(n+s,i+u)&&o++;o>5&&(r+=3+o-5)}for(var n=0;n<e-1;n++)for(var i=0;i<e-1;i++){var l=0;t.isDark(n,i)&&l++,t.isDark(n+1,i)&&l++,t.isDark(n,i+1)&&l++,t.isDark(n+1,i+1)&&l++,0!=l&&4!=l||(r+=3)}for(var n=0;n<e;n++)for(var i=0;i<e-6;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(r+=40);for(var i=0;i<e;i++)for(var n=0;n<e-6;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(r+=40);for(var h=0,i=0;i<e;i++)for(var n=0;n<e;n++)t.isDark(n,i)&&h++;return r+=Math.abs(100*h/e/e-50)/5*10}};t.exports=s},1771:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("canvas",{directives:[{name:"show",rawName:"v-show",value:"canvas"===t.type,expression:"type === 'canvas'"}],ref:"canvas",style:{height:t.size,width:t.size},attrs:{height:t.size,width:t.size}}),t._v(" "),"img"===t.type?r("img",{attrs:{src:t.imgData}}):t._e()])},i=[],o={render:n,staticRenderFns:i};e.a=o},1772:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[r("divider",[t._v(t._s(t.$t("default type = img")))]),t._v(" "),r("qrcode",{attrs:{value:"https://vux.li?x-page=demo_qrcode",type:"img"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("divider",[t._v(t._s(t.$t("type = canvas")))]),t._v(" "),r("qrcode",{attrs:{value:"https://vux.li?x-page=demo_qrcode"}}),t._v(" "),r("br"),t._v(" "),r("qrcode",{attrs:{value:t.value,"fg-color":t.fgColor}}),t._v(" "),r("br"),t._v(" "),r("span",[t._v(t._s(t.$t("current url"))+": "+t._s(t.value))]),t._v(" "),r("br"),t._v(" "),r("span",[t._v(t._s(t.$t("current fgColor"))+": "+t._s(t.fgColor))])],1)},i=[],o={render:n,staticRenderFns:i};e.a=o},382:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1763),i=r(1772),o=r(0),a=o(n.a,i.a,null,null,null);e.default=a.exports},533:function(t,e,r){"use strict";function n(t){r(534)}var i=r(536),o=r(537),a=r(0),s=n,u=a(i.a,o.a,s,null,null);e.a=u.exports},534:function(t,e,r){var n=r(535);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(227)("30b9f0ea",n,!0)},535:function(t,e,r){e=t.exports=r(226)(),e.push([t.i,"\n.vux-divider {\r\n  display: table;\r\n  white-space: nowrap;\r\n  height: auto;\r\n  overflow: hidden;\r\n  line-height: 1;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  color: #666;\n}\n.vux-divider:after,.vux-divider:before {\r\n  content: '';\r\n  display: table-cell;\r\n  position: relative;\r\n  top: 50%;\r\n  width: 50%;\r\n  background-repeat: no-repeat;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)\n}\n.vux-divider:before {\r\n  background-position: right 1em top 50%\n}\n.vux-divider:after {\r\n  background-position: left 1em top 50%\n}\r\n",""])},536:function(t,e,r){"use strict";e.a={name:"divider"}},537:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"vux-divider"},[t._t("default")],2)},i=[],o={render:n,staticRenderFns:i};e.a=o},854:function(t,e){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},855:function(t,e){t.exports={L:1,M:0,Q:3,H:2}},856:function(t,e,r){function n(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}var i=r(857);n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=i.gexp(i.glog(this.get(r))+i.glog(t.get(o)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=i.glog(this.get(0))-i.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(var o=0;o<t.getLength();o++)r[o]^=i.gexp(i.glog(t.get(o))+e);return new n(r,0).mod(t)}},t.exports=n},857:function(t,e){for(var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return r.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return r.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},n=0;n<8;n++)r.EXP_TABLE[n]=1<<n;for(var n=8;n<256;n++)r.EXP_TABLE[n]=r.EXP_TABLE[n-4]^r.EXP_TABLE[n-5]^r.EXP_TABLE[n-6]^r.EXP_TABLE[n-8];for(var n=0;n<255;n++)r.LOG_TABLE[r.EXP_TABLE[n]]=n;t.exports=r}});