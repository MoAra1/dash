(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61255a3f"],{"13b3":function(e,t,i){},"1bfb":function(e,t,i){},"62ad":function(e,t,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),r=i("5530"),s=(i("4b85"),i("2b0e")),o=i("d9f7"),a=i("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return l.reduce((function(e,t){return e["offset"+Object(a["G"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return l.reduce((function(e,t){return e["order"+Object(a["G"])(t)]={type:[String,Number],default:null},e}),{})}(),h={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function v(e,t,i){var n=e;if(null!=i&&!1!==i){if(t){var r=t.replace(e,"");n+="-".concat(r)}return"col"!==e||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var f=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var i=t.props,r=t.data,s=t.children,a=(t.parent,"");for(var l in i)a+=String(i[l]);var c=f.get(a);return c||function(){var e,t;for(t in c=[],h)h[t].forEach((function(e){var n=i[e],r=v(t,e,n);r&&c.push(r)}));var r=c.some((function(e){return e.startsWith("col-")}));c.push((e={col:!r||!i.cols},Object(n["a"])(e,"col-".concat(i.cols),i.cols),Object(n["a"])(e,"offset-".concat(i.offset),i.offset),Object(n["a"])(e,"order-".concat(i.order),i.order),Object(n["a"])(e,"align-self-".concat(i.alignSelf),i.alignSelf),e)),f.set(a,c)}(),e(i.tag,Object(o["a"])(r,{class:c}),s)}})},a55b:function(e,t,i){"use strict";i.r(t);var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"inspire"}},[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[e._v("Metaverse")])],1),i("v-tabs",{attrs:{grow:""},model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[i("v-tab",[i("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v(" Login ")],1),i("v-tab",[i("v-icon",{attrs:{left:""}},[e._v("mdi-account-plus")]),e._v(" Register ")],1)],1),i("v-tabs-items",{model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},[i("v-tab-item",[i("v-card-text",[i("v-form",{ref:"loginForm"},[i("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text",rules:e.loginRules},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",rules:e.passwordRules},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.attemptLogin(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:e.attemptLogin}},[e._v("Login")])],1)],1),i("v-tab-item",[i("v-card-text",[i("v-form",{ref:"registrationForm"},[i("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text",rules:e.usernameRules},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),i("v-text-field",{attrs:{label:"Email",name:"email","prepend-icon":"mdi-email",type:"text",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("v-text-field",{attrs:{id:"confirmPassword",label:"Confirm Password",name:"confirmPassword","prepend-icon":"mdi-lock",type:"password",rules:e.confirmPasswordRules},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.attemptRegister(t)}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:e.attemptRegister}},[e._v("Register")])],1)],1)],1),i("v-expansion-panels",{model:{value:e.metaverseServerSettingExpansion,callback:function(t){e.metaverseServerSettingExpansion=t},expression:"metaverseServerSettingExpansion"}},[i("v-expansion-panel",[i("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[i("v-icon",{attrs:{color:"error"}},[e._v("mdi-web")])]},proxy:!0}])},[e._v(" Advanced ")]),i("v-expansion-panel-content",[i("v-autocomplete",{attrs:{id:"metaverseServer",label:"Metaverse Server",name:"metaverseServerSetting",items:e.defaultMetaverseServer,"prepend-icon":"mdi-web","append-icon":"mdi-content-save-outline",type:"text"},on:{"click:append":function(t){e.metaverseServerStore=e.metaverseServerSetting,e.metaverseServerSettingExpansion=null}},model:{value:e.metaverseServerSetting,callback:function(t){e.metaverseServerSetting=t},expression:"metaverseServerSetting"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],o=(i("caad"),i("2532"),i("8552")),a={name:"Login",props:{source:String},data:function(){return{login:"",loginRules:[function(e){return!!e||"A login is required."}],password:"",passwordRules:[function(e){return!!e||"A password is required."}],username:"",usernameRules:[function(e){return!!e||"A username is required."}],email:"",emailRules:[function(e){return!!e||"An email is required."}],confirmPassword:"",confirmPasswordRules:[function(e){return!!e||"You must confirm your password."},function(e){return e===n.password||"Your password must match."}],currentTab:null,metaverseServerSettingExpansion:!1,metaverseServerSetting:null,defaultMetaverseServer:["http://24.199.109.180:9400/"]}},computed:{metaverseServerStore:{get:function(){return this.$store.state.metaverseConfig.server},set:function(e){this.$store.commit("mutate",{update:!0,property:"metaverseConfig",with:{server:e}})}}},methods:{sendEvent:function(e,t){o["a"].$emit(e,t)},attemptLogin:function(){this.$refs.loginForm.validate()&&window.$.ajax({type:"POST",url:n.$store.state.metaverseConfig.server+"/oauth/token",contentType:"application/x-www-form-urlencoded;charset=UTF-8",data:{grant_type:"password",scope:"owner",username:n.login,password:n.password}}).done((function(e){var t=e.account_roles.includes("admin");n.$store.commit("mutate",{update:!0,property:"account",with:{isLoggedIn:!0,isAdmin:t,username:n.login,accountRoles:e.account_roles,accountId:e.account_id,metaverseServer:n.$store.state.metaverseConfig.server,accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,createdAt:e.created_at,expiresIn:e.expires_in,scope:e.scope}}),console.info("Login successful, routing to home."),n.$router.push({name:"Home"})})).fail((function(e){console.info("Failed to login:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to log in to "+n.$store.state.metaverseConfig.server,code:"2",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},attemptRegister:function(){if(this.$refs.registrationForm.validate()){var e={user:{username:n.username,password:n.confirmPassword,email:n.email}};window.$.ajax({type:"POST",url:n.$store.state.metaverseConfig.server+"/api/v1/users",contentType:"application/json",data:JSON.stringify(e)}).done((function(e){console.info("Registration successful."),n.$refs.registrationForm.reset(),n.currentTab=0,!0===e.data.accountWaitingVerification&&(n.$store.commit("mutate",{property:"dialog",with:{notice:{title:"Complete Registration",message:"Please check your email inbox (and spam!) for an email verification link to complete your registration."}},update:!0}),n.sendEvent("open-dialog",{which:"Notice",shouldShow:!0}))})).fail((function(e){console.info("Failed to register:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to register for "+n.$store.state.metaverseConfig.server,code:"2",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))}}},created:function(){n=this,this.metaverseServerSetting=this.metaverseServerStore}},l=a,c=i("2877"),u=i("6544"),d=i.n(u),h=i("7496"),v=i("c6a6"),f=i("8336"),p=i("b0af"),m=i("99d9"),g=i("62ad"),b=i("a523"),w=i("cd55"),x=i("49e2"),S=i("c865"),y=i("0393"),T=i("4bd4"),k=i("132d"),C=i("f6c4"),$=i("0fd9"),O=i("2fa4"),j=(i("c975"),i("ac1f"),i("5319"),i("5530")),I=i("4e82"),B=i("1c87"),R=i("7560"),A=i("80d2"),V=i("58df"),E=Object(V["a"])(B["a"],Object(I["a"])("tabsBar"),R["a"]),_=E.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(j["a"])(Object(j["a"])({"v-tab":!0},B["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var e=this.to||this.href;if(null==e)return e;if(this.$router&&this.to===Object(this.to)){var t=this.$router.resolve(this.to,this.$route,this.append);e=t.href}return e.replace("#","")}},methods:{click:function(e){this.disabled?e.preventDefault():(this.href&&this.href.indexOf("#")>-1&&e.preventDefault(),e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle())},toggle:function(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render:function(e){var t=this,i=this.generateRouteLink(),n=i.tag,r=i.data;return r.attrs=Object(j["a"])(Object(j["a"])({},r.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),r.on=Object(j["a"])(Object(j["a"])({},r.on),{},{keydown:function(e){e.keyCode===A["y"].enter&&t.click(e),t.$emit("keydown",e)}}),e(n,r,this.$slots.default)}}),P=i("9d65"),N=i("c3f0"),L=Object(V["a"])(P["a"],Object(I["a"])("windowGroup","v-window-item","v-window")),G=L.extend().extend().extend({name:"v-window-item",directives:{Touch:N["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(A["h"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(A["h"])(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}}),z=G.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var e=G.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}}),H=(i("b0c0"),i("a9e3"),i("1bfb"),i("b85c")),D=i("7efd"),F=i("d10f"),W=Object(V["a"])(D["a"],F["a"],R["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(j["a"])(Object(j["a"])({},D["a"].options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var e=D["a"].options.methods.genContent.call(this);return e.data=e.data||{},e.data.staticClass+=" v-tabs-bar__content",e},onRouteChange:function(e,t){if(!this.mandatory){var i,n=this.items,r=e.path,s=t.path,o=!1,a=!1,l=Object(H["a"])(n);try{for(l.s();!(i=l.n()).done;){var c=i.value;if(c.to===s?a=!0:c.to===r&&(o=!0),o&&a)break}}catch(u){l.e(u)}finally{l.f()}!o&&a&&(this.internalValue=void 0)}}},render:function(e){var t=D["a"].options.render.call(this,e);return t.data.attrs={role:"tablist"},t}}),q=(i("99af"),i("7db0"),i("c740"),i("13b3"),i("afdd")),M=i("9d26"),J=i("604c"),U=J["a"].extend({name:"v-window",directives:{Touch:N["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(j["a"])(Object(j["a"])({},J["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var e=this.vertical?"y":"x",t=this.internalReverse?!this.isReverse:this.isReverse,i=t?"-reverse":"";return"v-window-".concat(e).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(e){return!e.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var e=this;return this.items.findIndex((function(t,i){return e.internalValue===e.getValue(t,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(e,t){this.isReverse=this.updateReverse(e,t)}},mounted:function(){var e=this;window.requestAnimationFrame((function(){return e.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var e=[this.genDefaultSlot()];return this.showArrows&&e.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},e)},genIcon:function(e,t,i){var n,r,s,o=this,a={click:function(e){e.stopPropagation(),o.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(e))},c=null!=(n=null==(r=(s=this.$scopedSlots)[e])?void 0:r.call(s,{on:a,attrs:l}))?n:[this.$createElement(q["a"],{props:{icon:!0},attrs:l,on:a},[this.$createElement(M["a"],{props:{large:!0}},t)])];return this.$createElement("div",{staticClass:"v-window__".concat(e)},c)},genControlIcons:function(){var e=[],t=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&t&&"string"===typeof t){var i=this.genIcon("prev",t,this.prev);i&&e.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var r=this.genIcon("next",n,this.next);r&&e.push(r)}return e},getNextIndex:function(e){var t=(e+1)%this.items.length,i=this.items[t];return i.disabled?this.getNextIndex(t):t},getPrevIndex:function(e){var t=(e+this.items.length-1)%this.items.length,i=this.items[t];return i.disabled?this.getPrevIndex(t):t},next:function(){if(this.hasActiveItems&&this.hasNext){var e=this.getNextIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var e=this.getPrevIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},updateReverse:function(e,t){var i=this.items.length,n=i-1;return i<=2?e<t:e===n&&0===t||(0!==e||t!==n)&&e<t}},render:function(e){var t=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){t.$vuetify.rtl?t.prev():t.next()},right:function(){t.$vuetify.rtl?t.next():t.prev()},end:function(e){e.stopPropagation()},start:function(e){e.stopPropagation()}};i.directives.push({name:"touch",value:n})}return e("div",i,[this.genContainer()])}}),Y=U.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(j["a"])(Object(j["a"])({},U.options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(e,t){return e.id||J["a"].options.methods.getValue.call(this,e,t)}}}),K=i("a9ad"),Q=Object(V["a"])(K["a"]).extend({name:"v-tabs-slider",render:function(e){return e("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),X=i("a452"),Z=i("dc22"),ee=Object(V["a"])(K["a"],X["a"],R["a"]),te=ee.extend().extend({name:"v-tabs",directives:{Resize:Z["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(j["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(A["h"])(this.slider.height),left:this.isReversed?void 0:Object(A["h"])(this.slider.left),right:this.isReversed?Object(A["h"])(this.slider.right):void 0,top:this.vertical?Object(A["h"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(A["h"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var e=this;this.$nextTick((function(){window.setTimeout(e.callSlider,30)}))},methods:{callSlider:function(){var e=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var t=e.$refs.items.selectedItems[0];if(!t||!t.$el)return e.slider.width=0,void(e.slider.left=0);var i=t.$el;e.slider={height:e.vertical?i.scrollHeight:Number(e.sliderSize),left:e.vertical?0:i.offsetLeft,right:e.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:e.vertical?Number(e.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(e,t){var i=this,n={style:{height:Object(A["h"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(e){i.internalValue=e}},ref:"items"};return this.setTextColor(this.computedColor,n),this.setBackgroundColor(this.backgroundColor,n),this.$createElement(W,n,[this.genSlider(t),e])},genItems:function(e,t){var i=this;return e||(t.length?this.$createElement(Y,{props:{value:this.internalValue},on:{change:function(e){i.internalValue=e}}},t):null)},genSlider:function(e){return this.hideSlider?null:(e||(e=this.$createElement(Q,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[e]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var e=null,t=null,i=[],n=[],r=this.$slots.default||[],s=r.length,o=0;o<s;o++){var a=r[o];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":t=a;break;case"v-tabs-items":e=a;break;case"v-tab-item":i.push(a);break;default:n.push(a)}else n.push(a)}return{tab:n,slider:t,items:e,item:i}}},render:function(e){var t=this.parseNodes(),i=t.tab,n=t.slider,r=t.items,s=t.item;return e("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,n),this.genItems(r,s)])}}),ie=i("8654"),ne=i("71d9"),re=i("2a7f"),se=Object(c["a"])(l,r,s,!1,null,null,null);t["default"]=se.exports;d()(se,{VApp:h["a"],VAutocomplete:v["a"],VBtn:f["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCol:g["a"],VContainer:b["a"],VExpansionPanel:w["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:S["a"],VExpansionPanels:y["a"],VForm:T["a"],VIcon:k["a"],VMain:C["a"],VRow:$["a"],VSpacer:O["a"],VTab:_,VTabItem:z,VTabs:te,VTabsItems:Y,VTextField:ie["a"],VToolbar:ne["a"],VToolbarTitle:re["a"]})},afdd:function(e,t,i){"use strict";var n=i("8336");t["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-61255a3f.135a9df9.js.map