(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({main:"main"}[e]||e)+"."+{"chunk-ee58f83c":"3c9f05be","chunk-18e6bc37":"0d91c042","chunk-357862b3":"bf3f04a1",main:"ebe9a4b4"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-ee58f83c":1,"chunk-18e6bc37":1,"chunk-357862b3":1,main:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({main:"main"}[e]||e)+"."+{"chunk-ee58f83c":"8733f43b","chunk-18e6bc37":"ab4c32c4","chunk-357862b3":"2014c0ae",main:"8973cb27"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],m.parentNode.removeChild(m),r(o)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/aitutor-web-interface/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0d69":function(e,t,r){e.exports=r.p+"img/agilesoda_logo.c7a9c0e8.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.showNavigation?r("navigation"):e._e(),r("v-main",[r("router-view")],1),r("v-overlay",{attrs:{value:e.$store.state.showLoading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("v-alert",{staticClass:"alert",attrs:{value:e.$store.state.showAlert,type:e.$store.state.alertType,transition:"fade-transition"}},[r("span",{domProps:{innerHTML:e._s(e.$store.state.alertMessage)}})])],1)},s=[],o=(r("caad"),r("b64b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-top-bar",{attrs:{color:"primary",dark:"",app:""}},[e.showExitBtn?r("v-btn",{attrs:{to:"/main",text:""}},[r("span",[e._v("Go to Main")])]):e._e(),r("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",a,!1),n),[r("v-app-bar-nav-icon")],1)]}}])},[r("v-list",[r("v-list-item",{attrs:{to:"/change-info"}},[r("span",[e._v("Change Info")])]),r("v-list-item",{on:{click:e.handleLogout}},[r("span",[e._v("Log out")])])],1)],1)],1)}),i=[],c=r("1da1"),u=(r("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",e._b({},"v-app-bar",e.$attrs,!1),[n("div",{staticClass:"logo d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Agilesoda Logo",contain:"",src:r("0d69"),transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 d-none d-sm-block",attrs:{alt:"Agilesoda Name",contain:"","min-width":"100",src:r("transparent"===e.$attrs.color?"c908":"658c"),width:"100"}})],1),n("v-spacer"),e._t("default")],2)}),l=[],d={name:"BaseTopBar",inheritAttrs:!1},m=d,p=r("2877"),f=r("6544"),b=r.n(f),v=r("40dc"),g=r("adda"),h=r("2fa4"),w=Object(p["a"])(m,u,l,!1,null,"66316c2c",null),x=w.exports;b()(w,{VAppBar:v["a"],VImg:g["a"],VSpacer:h["a"]});var k={name:"Nagivation",components:{BaseTopBar:x},data:function(){return{}},computed:{showExitBtn:function(){return["/daily-problems","/chapter-test"].includes(this.$route.path)}},methods:{handleLogout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()}}},O=k,y=r("5bc1"),j=r("8336"),A=r("8860"),C=r("da13"),R=r("e449"),L=Object(p["a"])(O,o,i,!1,null,"a41a9348",null),P=L.exports;b()(L,{VAppBarNavIcon:y["a"],VBtn:j["a"],VList:A["a"],VListItem:C["a"],VMenu:R["a"]});var T={name:"App",components:{Navigation:P},data:function(){return{}},computed:{showNavigation:function(){return!["/","/sign-up"].includes(this.$route.path)}},beforeMount:function(){var e=this;window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""})),window.addEventListener("unload",(function(){0!==Object.keys(e.$store.state.userProfile).length&&e.$store.dispatch("logout")}))}},S=T,E=(r("5c0b"),r("0798")),z=r("7496"),V=r("f6c4"),U=r("a797"),B=r("490a"),M=Object(p["a"])(S,a,s,!1,null,null,null),N=M.exports;b()(M,{VAlert:E["a"],VApp:z["a"],VMain:V["a"],VOverlay:U["a"],VProgressCircular:B["a"]});r("d3b7"),r("3ca3"),r("ddb0");var D=r("8c4f"),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"landing pa-0 ma-0",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-none d-md-block grey",attrs:{cols:"4"}}),r("v-col",{staticClass:"col-12 col-md-8"},[r("base-top-bar",{staticClass:"main_bar",attrs:{elevation:"0",color:"transparent"}}),r("v-container",{staticClass:"main_panel d-flex flex-column justify-center align-center"},[r("login-form",{staticStyle:{width:"200px"},on:{submit:e.handleLogin}}),r("v-btn",{staticClass:"mt-4",staticStyle:{width:"200px"},attrs:{to:"/sign-up"}},[e._v("Sign Up")])],1)],1)],1)},J=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"loginForm",staticClass:"login-form d-flex flex-column",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.passwordRules,type:"password",label:"Password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("Sign In")])],1)},q=[],I=(r("ac1f"),r("00b4"),{name:"LoginForm",props:{},data:function(){return{valid:!1,email:"example@agilesoda.ai",emailRules:[function(e){return!!e||"이메일을 입력해 주세요."},function(e){return/.+@.+\..+/.test(e)||"올바르지 않은 이메일입니다."}],password:"",passwordRules:[function(e){return!!e||"비밀번호를 입력해 주세요."}]}},computed:{},methods:{onSubmit:function(){this.$refs.loginForm.validate()&&this.$emit("submit",{email:this.email,password:this.password})}}}),_=I,K=r("4bd4"),$=r("8654"),Q=Object(p["a"])(_,W,q,!1,null,"318dca6e",null),H=Q.exports;b()(Q,{VBtn:j["a"],VForm:K["a"],VTextField:$["a"]});var Y={components:{BaseTopBar:x,LoginForm:H},name:"Landing",methods:{handleLogin:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.$store.commit("loading"),r.prev=1,r.next=4,t.$store.dispatch("login",{email:e.email,password:e.password});case 4:t.$router.push("/main"),r.next=18;break;case 7:r.prev=7,r.t0=r["catch"](1),r.t1=r.t0.code,r.next="auth/wrong-password"===r.t1||"auth/user-not-found"===r.t1?12:"user-unauthorized"===r.t1?14:16;break;case 12:return t.$store.commit("alert",{message:"아이디 또는 비밀번호가 올바르지 않습니다!"}),r.abrupt("break",18);case 14:return t.$store.commit("alert",{message:"계정이 확인되지 않았습니다. 계정 확인에는 최대 1~2일이 소요됩니다.",timeMs:1e4}),r.abrupt("break",18);case 16:t.$store.commit("alert",{message:r.t0.code}),console.dir(r.t0);case 18:t.$store.commit("unLoading");case 19:case"end":return r.stop()}}),r,null,[[1,7]])})))()}}},X=Y,G=(r("6901"),r("62ad")),Z=r("a523"),ee=r("0fd9"),te=Object(p["a"])(X,F,J,!1,null,"a1235f26",null),re=te.exports;b()(te,{VBtn:j["a"],VCol:G["a"],VContainer:Z["a"],VRow:ee["a"]});var ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-up"},[r("base-top-bar",{attrs:{elevation:"0",color:"transparent"}},[r("v-btn",{attrs:{to:"/",color:"primary"}},[r("span",[e._v("Back")])])],1),r("v-container",{staticClass:"panel d-flex justify-center align-center pa-8"},[r("v-form",{ref:"signUpForm",staticClass:"login-form flex-grow-1 d-flex flex-column",staticStyle:{"max-width":"300px"},attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.handleSignUp.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"이름",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-autocomplete",{attrs:{items:e.semesterList,rules:e.semesterRules,chips:""},model:{value:e.semester,callback:function(t){e.semester=t},expression:"semester"}}),r("v-text-field",{attrs:{rules:e.emailRules,"error-messages":e.emailErrors,label:"이메일",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{rules:e.passwordRules,type:"password",label:"비밀번호",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{rules:e.passwordAgainRules,type:"password",label:"비밀번호 확인",required:""},model:{value:e.passwordAgain,callback:function(t){e.passwordAgain=t},expression:"passwordAgain"}}),r("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("Sign In")])],1)],1)],1)},ae=[],se=(r("b0c0"),["초등 5-1","초등 5-2","초등 6-1","초등 6-2","중등 1-1","중등 1-2","중등 2-1","중등 2-2","중등 3-1","중등 3-2"]),oe={name:"SignUp",components:{BaseTopBar:x},data:function(){var e=this;return{valid:!1,name:"",nameRules:[function(e){return!!e||"이름을 입력해 주세요."}],semesterList:se,semester:"",semesterRules:[function(e){return!!e||"학기를 선택해 주세요."}],email:"example@agilesoda.ai",emailRules:[function(e){return!!e||"이메일을 입력해 주세요."},function(e){return/.+@.+\..+/.test(e)||"올바르지 않은 이메일입니다."}],emailErrors:[],password:"",passwordRules:[function(e){return!!e||"비밀번호를 입력해 주세요."},function(e){return e.length>=6||"비밀번호는 6자 이상이어야 합니다."}],passwordAgain:"",passwordAgainRules:[function(t){return t===e.password||"비밀번호가 같지 않습니다."}]}},computed:{},methods:{handleSignUp:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$refs.signUpForm.validate()){t.next=2;break}return t.abrupt("return");case 2:return e.$store.commit("loading"),t.prev=3,t.next=6,e.$store.dispatch("signup",{email:e.email,password:e.password,name:e.name,semester:e.semester});case 6:e.$router.push("/"),e.$store.commit("alert",{message:"회원가입이 완료되었습니다! 1~2일 내 계정 확인 후 로그인 가능합니다.",type:"success",timeMs:1e4}),t.next=20;break;case 10:t.prev=10,t.t0=t["catch"](3),t.t1=t.t0.code,t.next="auth/email-already-in-use"===t.t1?15:18;break;case 15:return e.emailErrors=["이미 가입된 이메일입니다."],r=e.$watch("email",(function(){e.emailErrors=[],r()})),t.abrupt("break",20);case 18:e.$store.commit("alert",{message:t.t0.code}),console.dir(t.t0);case 20:e.$store.commit("unLoading");case 21:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}},ie=oe,ce=(r("e8fd"),r("c6a6")),ue=Object(p["a"])(ie,ne,ae,!1,null,"4ab31210",null),le=ue.exports;b()(ue,{VAutocomplete:ce["a"],VBtn:j["a"],VContainer:Z["a"],VForm:K["a"],VTextField:$["a"]});var de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"change-ingo"},[r("h1",[e._v("This is change info page")]),r("router-link",{attrs:{to:"/main"}},[e._v("save")])],1)},me=[],pe={},fe=Object(p["a"])(pe,de,me,!1,null,null,null),be=fe.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"katex-test"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formula,expression:"formula"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.formula},on:{input:function(t){t.target.composing||(e.formula=t.target.value)}}}),r("div",{directives:[{name:"katex",rawName:"v-katex:auto",value:e.katexConfig,expression:"katexConfig",arg:"auto"}],key:e.formula,staticStyle:{"max-width":"600px"}},[e._v(" "+e._s(e.formula)+" ")])])},ge=[],he=r("6cf4"),we={name:"KatexTest",components:{},data:function(){return{katexConfig:he["a"],formula:"$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"}},methods:{}},xe=we,ke=Object(p["a"])(xe,ve,ge,!1,null,null,null),Oe=ke.exports;n["a"].use(D["a"]);var ye=[{path:"/",name:"Landing",component:re},{path:"/sign-up",name:"SignUp",component:le},{path:"/change-info",name:"ChangeInfo",component:be},{path:"/main",name:"Main",component:function(){return r.e("main").then(r.bind(null,"cd56"))}},{path:"/daily-problems",name:"DailyProblems",component:function(){return Promise.all([r.e("chunk-ee58f83c"),r.e("chunk-357862b3")]).then(r.bind(null,"e7de"))}},{path:"/chapter-test",name:"ChapterTest",component:function(){return Promise.all([r.e("chunk-ee58f83c"),r.e("chunk-18e6bc37")]).then(r.bind(null,"04f3"))}},{path:"/katex-test",name:"KatexTest",component:Oe}],je=new D["a"]({mode:"history",base:"/aitutor-web-interface/",routes:ye}),Ae=je,Ce=r("5530"),Re=(r("159b"),r("4de4"),r("d81d"),r("fb6a"),r("a4d3"),r("e01a"),r("2f62")),Le=r("ea7b"),Pe=r("e71f"),Te=r("588e"),Se=r("260b"),Ee={apiKey:"AIzaSyCB-TAHAdT2zXzng6N-_MIJOUb5Dvx8I2k",authDomain:"aitutor-back.firebaseapp.com",projectId:"aitutor-back",storageBucket:"aitutor-back.appspot.com",messagingSenderId:"364379058571",appId:"1:364379058571:web:6b658ab8cd54e80ae33f8e",measurementId:"G-WZBTMZVWD7"},ze=(Object(Se["a"])(Ee),Object(Le["b"])()),Ve=Object(Pe["f"])(),Ue=Object(Te["b"])(),Be=Object(Pe["b"])(Ve,"users"),Me=Object(Pe["b"])(Ve,"problems"),Ne=Object(Pe["b"])(Ve,"logs"),De=Object(Pe["b"])(Ve,"smallChapterLists"),Fe=Object(Pe["b"])(Ve,"middleChapterLists"),Je=Object(Pe["b"])(Ve,"reports"),We=r("cf46");n["a"].use(Re["a"]);var qe=new Re["a"].Store({state:{userProfile:{},showLoading:!1,showAlert:!1,alertMessage:"",alertType:"error"},mutations:{loading:function(e){e.showLoading=!0},unLoading:function(e){e.showLoading=!1},alert:function(e,t){var r=t.message,n=t.type,a=void 0===n?"error":n,s=t.timeMs,o=void 0===s?3e3:s;e.alertMessage=r,e.alertType=a,e.showAlert=!0,setTimeout((function(){e.showAlert=!1}),o)},setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t}},actions:{signup:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Le["a"])(ze,t.email,t.password);case 2:r=e.sent,n=r.user,a=Object(Pe["c"])(Be,n.uid),Object(Pe["k"])(a,{email:t.email,name:t.name,semester:t.semester,authorized:!1});case 6:case"end":return e.stop()}}),e)})))()},login:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,i,c,u,l,d,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.next=3,Object(Le["c"])(ze,t.email,t.password);case 3:return s=r.sent,o=s.user,i=Object(Pe["c"])(Be,o.uid),r.next=8,Object(Pe["d"])(i);case 8:if(c=r.sent,u=c.data(),l=u.authorized,d=void 0!==l&&l,d){r.next=16;break}return r.next=14,n("logout");case 14:throw m={code:"user-unauthorized"},m;case 16:a("setUserProfile",Object(Ce["a"])({uid:c.id},u));case 17:case"end":return r.stop()}}),r)})))()},logout:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Object(Le["d"])(ze);case 3:r("setUserProfile",{});case 4:case"end":return t.stop()}}),t)})))()},loadSmallChapterList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=Object(Pe["c"])(De,r.userProfile.semester),t.next=4,Object(Pe["d"])(n);case 4:return a=t.sent,t.abrupt("return",a.data().smallChapterList);case 6:case"end":return t.stop()}}),t)})))()},loadMiddleChapterList:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=Object(Pe["c"])(Fe,r.userProfile.semester),t.next=4,Object(Pe["d"])(n);case 4:return a=t.sent,t.abrupt("return",a.data().middleChapterList);case 6:case"end":return t.stop()}}),t)})))()},loadChapterTestProblems:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,a=Object(Pe["i"])(Me,Object(Pe["l"])("학년","==",n.userProfile.semester),Object(Pe["l"])("소단원","==",t),Object(Pe["h"])("confidence_rate","desc"),Object(Pe["g"])(15)),s=[],r.next=5,Object(Pe["e"])(a);case 5:return o=r.sent,o.forEach((function(e){s.push(Object(Ce["a"])({uid:e.id},e.data()))})),r.abrupt("return",s);case 8:case"end":return r.stop()}}),r)})))()},loadRecommendedProblem:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,i,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,a=e.dispatch,s=t.middleChapter,o=t.sessionRecords,r.next=4,a("loadRecommendedProblemUid",{userUid:n.userProfile.uid,middleChapter:s,sessionRecords:o});case 4:return i=r.sent,console.log(i),c=Object(Pe["c"])(Me,i),r.next=9,Object(Pe["d"])(c);case 9:return u=r.sent,console.log(u),r.abrupt("return",Object(Ce["a"])({uid:u.id},u.data()));case 12:case"end":return r.stop()}}),r)})))()},loadRecommendedProblemUid:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.middleChapter,n=Object(Pe["i"])(Me,Object(Pe["l"])("중단원","==",r),Object(Pe["h"])("confidence_rate","desc"),Object(Pe["g"])(15)),e.next=4,Object(Pe["e"])(n);case 4:return a=e.sent,s=a.docs.map((function(e){return Object(Ce["a"])({uid:e.id},e.data())})).filter((function(e){return Object(We["b"])(e.text).isValid})),o=Math.floor(Math.random()*s.length),e.abrupt("return",s[o].uid);case 8:case"end":return e.stop()}}),e)})))()},recordProblemSolveLog:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,a=t.problemUid,s=t.studentChoice,o=t.isCorrect,i=t.elapsedTime,r.next=4,Object(Pe["a"])(Ne,{submitTime:Object(Pe["j"])(),userUid:n.userProfile.uid,problemUid:a,studentChoice:s,isCorrect:o,elapsedTime:i});case 4:case"end":return r.stop()}}),r)})))()},loadProblemFigureUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"풍산자  테스트북 중3_2_본문(학생용)1024_008_0.jpg",r="".concat(t.slice(0,t.lastIndexOf(".jpg")),"_fig.jpg"),n="problem_images/mid_3_2/".concat(r),a=Object(Te["c"])(Ue,n);return Object(Te["a"])(a)},recordBadProblemReport:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.state,a=t.description,s=t.problemUid,o=t.faults.slice(),r.next=5,Object(Pe["a"])(Je,{submitTime:Object(Pe["j"])(),userUid:n.userProfile.uid,problemUid:s,description:a,faults:o});case 5:case"end":return r.stop()}}),r)})))()}},modules:{}}),Ie=r("f309");n["a"].use(Ie["a"]);var _e=new Ie["a"]({});r("be0f");n["a"].config.productionTip=!1,new n["a"]({router:Ae,store:qe,vuetify:_e,render:function(e){return e(N)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"658c":function(e,t){e.exports="data:image/png;base64,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"},6901:function(e,t,r){"use strict";r("b615")},"69fb":function(e,t,r){},"6cf4":function(e,t,r){"use strict";var n=r("2b0e"),a=r("bfc7");n["a"].use(a["a"]);var s={options:{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],strict:!1}};t["a"]=s},"9c0c":function(e,t,r){},b615:function(e,t,r){},c908:function(e,t,r){e.exports=r.p+"img/agilesoda_name.4668191b.png"},cf46:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return o}));r("ac1f"),r("1276"),r("9129"),r("a9e3"),r("fb6a"),r("5319"),r("5b81"),r("4e827"),r("99af"),r("d3b7"),r("e9c4"),r("d81d"),r("498a");var n=function(e){var t=e.split(/\s+/)[0],r=Number.isNaN(t-parseFloat(t))?e:e.slice(t.length);return r},a=function(e){var t=/\\begin\{tabular\}([\s\S]+)\\end\{tabular\}/,r=t.exec(e);if(r){var n=r[1].replaceAll("$",""),a="\n    $$\n    \\begin{array}\n    ".concat(n,"\n    \\end{array}\n    $$\n    ");return e.replace(t,a)}return e},s=function(e){var t=n(e),r=a(t);return r},o=function(e){for(var t=[],r=1;r<6;r+=1)t.push(e.lastIndexOf("(".concat(r,")")));var n=[].concat(t).sort((function(e,t){return e-t})),a=t.length>0&&t.every((function(e){return e>0}))&&JSON.stringify(t)===JSON.stringify(n);if(a){var o=t.map((function(t,r,n){return e.slice(t+3,n[r+1]).trim()})),i=e.slice(0,t[0]).trim();return{isValid:a,questionTextFiltered:s(i),optionList:o}}return{isValid:!1}},i=function(e,t){var r=e.uid,n=e.text,a=e.answer,s=void 0===a?1:a,i=o(n),c=i.isValid,u=i.questionTextFiltered,l=void 0===u?"":u,d=i.optionList,m=void 0===d?[]:d;return{uid:r,imgSrc:t,questionText:l,optionList:m,answer:s,isValid:c}}},e8fd:function(e,t,r){"use strict";r("69fb")}});
//# sourceMappingURL=app.15c32d09.js.map