(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b46e"],{bea6:function(e,t,a){"use strict";a.r(t);var o,s,i,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("PeopleList")],1)],1)],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.usingAsAdmin?e.adminHeaders:e.headers,items:e.people,loading:e.peopleDataTableLoading,search:e.search,"sort-by":"user"},on:{"click:row":e.rowClicked},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("People")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-toolbar-title",[e._v("Users")]),a("v-spacer"),a("v-text-field",{staticClass:"mt-7",attrs:{solo:"",label:"Search",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:e.userDialog.show,callback:function(t){e.$set(e.userDialog,"show",t)},expression:"userDialog.show"}},[a("UserProfileComponent",{attrs:{userToLoad:e.userDialog.username}})],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-icon",e._g(e._b({attrs:{small:"",color:"red",disabled:!e.usingAsAdmin},on:{click:function(t){return t.stopPropagation(),e.deleteUser(o.accountID,o.username)}}},"v-icon",i,!1),s),[e._v(" mdi-delete-alert ")])]}}],null,!0)},[a("span",[e._v("Delete User")])])]}},{key:"item.thumbnail",fn:function(e){var t=e.item;return[a("v-avatar",[a("img",{directives:[{name:"show",rawName:"v-show",value:t.thumbnail,expression:"item.thumbnail"}],attrs:{src:t.thumbnail}})])]}}])})},c=[],u=(a("4160"),a("159b"),a("8552")),d=a("64b5"),p={name:"PeopleList",props:{source:String},components:{UserProfileComponent:d["a"]},data:function(){return{dialog:!1,headers:[{text:"Thumbnail",value:"thumbnail"},{text:"Username",align:"start",sortable:!0,value:"username"},{text:"Account ID",value:"accountID"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}],adminHeaders:[{text:"Thumbnail",value:"thumbnail"},{text:"Username",align:"start",sortable:!0,value:"username"},{text:"Email",value:"email"},{text:"Account ID",value:"accountID"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1}],search:null,peopleDataTableLoading:!1,userDialog:{show:!1,username:""},userEditMode:!1,editUser:{password:"",passwordRules:[function(e){return!!e||"A password is required."}],passwordLoading:!1},editingUser:null,people:[]}},computed:{usingAsAdmin:function(){return s.account.useAsAdmin}},watch:{},created:function(){o=this,s=this.$store.state,i=this.$store.state.metaverseConfig.server,this.initialize()},methods:{sendEvent:function(e,t){u["a"].$emit(e,t)},initialize:function(){this.retrieveAccountList(this.$store.state.metaverseConfig.server)},rowClicked:function(e){this.userEditMode=!1,this.userDialog.show=!0,this.userDialog.username=e.username},toggleUserEditMode:function(){this.userEditMode=!this.userEditMode,!0===this.placeEditMode&&this.$refs.editUserPassword.reset()},beginEditingUsername:function(e){this.editingUser=e},deleteUser:function(e,t){confirm("Are you sure you want to delete "+t+"?")&&this.postDeleteAccount(e)},pushToPeopleList:function(e){e.forEach((function(e,t){var a=e.location.online?"Online":"Offline";o.people.push({username:e.username,email:e.email,status:a,locationData:e.location,accountID:e.accountId,thumbnail:e.images.thumbnail?e.images.thumbnail:"",hero:e.images.hero?e.images.hero:"assets/1920_bar.png"})}))},retrieveAccountList:function(e,t){t||(t=1);var a=window.$.param({page:t,asAdmin:o.$store.state.account.useAsAdmin});a="?"+a,this.peopleDataTableLoading=!0,window.$.ajax({type:"GET",url:e+"/api/v1/accounts"+a}).done((function(e){1===t&&(o.people=[]),o.pushToPeopleList(e.data.accounts),o.peopleDataTableLoading=!1,e.total_entries>o.people.length&&o.retrieveAccountList(o.$store.state.metaverseConfig.server,t+1)})).fail((function(e){o.peopleDataTableLoading=!1,console.info("Failed to retrieve people list: ",e),o.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve people list.",code:"2",full:e.responseJSON.error}}),o.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},postUpdateAccount:function(e,t,a){var n=window.$.param({asAdmin:s.account.useAsAdmin});n="?"+n;var r={set:a};this.editUser[t+"Loading"]=!0,window.$.ajax({type:"POST",url:i+"/api/v1/account/"+e+"/field/"+t+n,contentType:"application/json",data:JSON.stringify(r)}).done((function(a){console.info("Successfully updated account:",e),o.editUser[t+"Loading"]=!1,!0===o.userEditMode&&o.toggleUserEditMode(),o.retrieveAccountList(o.$store.state.metaverseConfig.server)})).fail((function(a){console.info("Failed to update account:",e),o.editUser[t+"Loading"]=!1,!0===o.userEditMode&&o.toggleUserEditMode(),o.retrieveAccountList(o.$store.state.metaverseConfig.server)}))},postDeleteAccount:function(e){var t=window.$.param({asAdmin:o.$store.state.account.useAsAdmin});t="?"+t,window.$.ajax({type:"DELETE",url:o.$store.state.metaverseConfig.server+"/api/v1/account/"+e+t}).done((function(t){console.info("Successfully deleted account:",e),o.retrieveAccountList(o.$store.state.metaverseConfig.server)})).fail((function(t){console.info("Failed to delete account:",e),o.retrieveAccountList(o.$store.state.metaverseConfig.server)}))}}},m=p,v=a("2877"),f=a("6544"),h=a.n(f),g=a("8212"),b=a("8fea"),w=a("169a"),A=a("ce7e"),D=a("132d"),x=a("2fa4"),L=a("8654"),$=a("71d9"),E=a("2a7f"),T=a("3a2f"),U=Object(v["a"])(m,l,c,!1,null,null,null),y=U.exports;h()(U,{VAvatar:g["a"],VDataTable:b["a"],VDialog:w["a"],VDivider:A["a"],VIcon:D["a"],VSpacer:x["a"],VTextField:L["a"],VToolbar:$["a"],VToolbarTitle:E["a"],VTooltip:T["a"]});var C={name:"People",props:{source:String},components:{PeopleList:y}},S=C,V=a("7496"),_=a("a523"),k=a("f6c4"),P=a("0fd9"),M=Object(v["a"])(S,n,r,!1,null,null,null);t["default"]=M.exports;h()(M,{VApp:V["a"],VContainer:_["a"],VMain:k["a"],VRow:P["a"]})}}]);
//# sourceMappingURL=chunk-2d21b46e.4f8b2a70.js.map