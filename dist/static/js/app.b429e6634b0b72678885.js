webpackJsonp([1],{"+BVP":function(t,e,s){"use strict";e.a={props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){if(""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()){var t={id:this.meetup.id,title:this.editedTitle,description:this.editedDescription};this.editDialog=!1,this.$store.dispatch("updateMeetUpData",t)}}}}},"03pU":function(t,e,s){"use strict";e.a={props:["text"],methods:{onClose:function(){this.$emit("dissmised")}}}},"18il":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Create a new Meetup")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{attrs:{src:t.imageUrl,alt:"preview",height:"150"}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h5",[t._v("Choose Date & Time")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-time-picker",{attrs:{format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{class:[t.formIsValid?"":"black--text","primary"],attrs:{type:"submit",disabled:!t.formIsValid}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"1Z2L":function(t,e,s){"use strict";e.a={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("./")}},methods:{onSignIn:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDissmiss:function(){this.$store.dispatch("clearError")}}}},"2FF0":function(t,e){},"2FuN":function(t,e,s){"use strict";e.a={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.meetUpLoading}}}},"33CJ":function(t,e,s){"use strict";e.a={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetUpData",{id:this.meetup.id,date:t})}},created:function(){this.editableTime=new Date(this.meetup.date).toTimeString()}}},"5TPd":function(t,e,s){"use strict";e.a=function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}},"6EED":function(t,e,s){"use strict";s.d(e,"a",function(){return n});var i=s("uqrR"),a=s.n(i),r=s("q6Ae"),n=(s.n(r),{state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id})>=0||(t.user.registeredMeetups.push(s),t.user.fbKeys[s]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e}),1),a()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,i=t.getters;s("setMeetUpLoading",!0);var a=i.user;r.database().ref("/users/"+a.id).child("/registrations/").push(e).then(function(t){s("setMeetUpLoading",!1),s("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),s("setMeetUpLoading",!1)})},unregisterUserFromMeetup:function(t,e){var s=t.commit,i=t.getters;s("setMeetUpLoading",!0);var a=i.user;if(a.fbKeys){var n=a.fbKeys[e];r.database().ref("/users/"+a.id+"/registrations/").child(n).remove().then(function(){s("setMeetUpLoading",!1),s("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),s("setMeetUpLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),r.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),r.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),r.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var i=t.val(),a=[],r=[];for(var n in i)a.push(i[n]),r[i[n]]=n;var o={id:s.user.id,registeredMeetups:a,fbKeys:r};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;r.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}})},"8Avv":function(t,e,s){"use strict";s.d(e,"a",function(){return n});var i=s("Dd8w"),a=s.n(i),r=s("q6Ae"),n=(s.n(r),{state:{loadedMeetups:[{imageUrl:"",id:"1b",title:"Aunty Lanre OVC meet up in Ibadan",location:"Ibadan",description:"Aunty Lanre OVC is focused on teaching kids in orphanges how to code, among other skills",date:new Date}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetUp:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setMeetUpLoading",!0),r.database().ref("meetups").once("value").then(function(t){var s=[],i=t.val();for(var a in i)s.push({id:a,title:i[a].title,description:i[a].description,imageUrl:i[a].imageUrl,location:i[a].location,date:i[a].date,creatorId:i[a].creatorId});e("setLoadedMeetups",s),e("setMeetUpLoading",!1)}).catch(function(t){console.log(t),e("setMeetUpLoading",!1)})},createMeetup:function(t,e){var s=t.commit,i=t.getters,n={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:i.user.id},o=void 0,u=void 0;r.database().ref("meetups").push(n).then(function(t){return u=t.key}).then(function(t){var s=e.image.name,i=s.slice(s.lastIndexOf("."));return r.storage().ref("meetups/"+t+"."+i).put(e.image)}).then(function(t){return o=t.metadata.downloadURLs[0],r.database().ref("meetups").child(u).update({imageUrl:o})}).then(function(){s("createMeetup",a()({},n,{imageUrl:o,id:u}))}).catch(function(t){console.log(t)})},updateMeetUpData:function(t,e){var s=t.commit;s("setMeetUpLoading",!0);var i={};e.title&&(i.title=e.title),e.description&&(i.description=e.description),e.date&&(i.date=e.date),r.database().ref("meetups").child(e.id).update(i).then(function(){s("setMeetUpLoading",!1),s("updateMeetUp",e)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}})},"8lRd":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{primary:"",persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{attrs:{accent:""},slot:"activator"},[t._v("\n    "+t._s(t.isUserRegistered?"Unregister":"Register")+"\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v(t._s(t.isUserRegistered?"Unregister from":"Register for")+" meetup? ")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("You can always change your decision later on")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("\n              Cancel\n            ")]),t._v(" "),s("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("\n              Confirm\n            ")])],1)],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},"9g2P":function(t,e,s){"use strict";var i=s("+BVP"),a=s("hH6W"),r=s("VU/8"),n=r(i.a,a.a,null,null,null);e.a=n.exports},Bo4C:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("my-alert",{attrs:{text:t.error.message},on:{dissmised:t.onDissmiss}})],1)],1):t._e(),t._v(" "),s("v-layout",[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("v-form",{on:{submit:function(e){e.preventDefault(),t.onSignUp(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePassword]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",loading:t.loading,disabled:t.loading}},[t._v("\n                    Sign Up\n                    "),s("span",{staticClass:"custom-loader",slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},Bx7U:function(t,e){},"C/IS":function(t,e){},CW1k:function(t,e,s){"use strict";e.a={computed:{meetups:function(){return this.$store.getters.loadedMeetups}}}},DijE:function(t,e){},Dqi8:function(t,e,s){"use strict";function i(t){s("EwIU")}var a=s("yCdV"),r=s("u6lb"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},EwIU:function(t,e){},FO2o:function(t,e,s){"use strict";function i(t){s("KEjO")}var a=s("CW1k"),r=s("PIIC"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},Fs8J:function(t,e,s){"use strict";e.a={computed:{loading:function(){return this.$store.getters.meetUpLoading},meetups:function(){return this.$store.getters.featuredMeetups}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}}},GlKy:function(t,e,s){"use strict";var i=s("33CJ"),a=s("YguX"),r=s("VU/8"),n=r(i.a,a.a,null,null,null);e.a=n.exports},IZmO:function(t,e,s){"use strict";e.a={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:new Date,time:new Date,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},formattedDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.formattedDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,s=t.target.files;s[0].name.lastIndexOf(".")<=0&&alert("Please pick a valid image");var i=new FileReader;i.addEventListener("load",function(){e.imageUrl=i.result}),i.readAsDataURL(s[0]),this.image=s[0]}}}},IcnI:function(t,e,s){"use strict";s.d(e,"a",function(){return u});var i=s("/5sW"),a=s("NYxO"),r=s("8Avv"),n=s("6EED"),o=s("XcsR");i.a.use(a.a);var u=new a.a.Store({modules:{meetupModule:r.a,userModule:n.a,sharedModule:o.a}})},KEjO:function(t,e){},M93x:function(t,e,s){"use strict";function i(t){s("kIMR")}var a=s("xJD8"),r=s("eaU2"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("/5sW"),a=s("3EgV"),r=s.n(a),n=s("M93x"),o=s("q6Ae"),u=(s.n(o),s("YaEn")),c=s("IcnI"),l=s("5TPd"),d=s("yVzT"),v=s("9g2P"),f=s("UdO5"),p=s("GlKy"),m=s("v+3D");i.a.use(r.a),i.a.config.productionTip=!1,i.a.filter("fDate",l.a),i.a.component("my-alert",d.a),i.a.component("my-edt-dialog",v.a),i.a.component("my-edt-date-dialog",f.a),i.a.component("my-edt-time-dialog",p.a),i.a.component("my-registration-dialog",m.a),new i.a({el:"#app",router:u.a,store:c.a,render:function(t){return t(n.a)},created:function(){var t=this;o.initializeApp({apiKey:"AIzaSyD4xC-0TKA2M-TztV7vt2nc3M_hNQ1GaAU",authDomain:"devmeetup-tut.firebaseapp.com",databaseURL:"https://devmeetup-tut.firebaseio.com",projectId:"devmeetup-tut",storageBucket:"gs://devmeetup-tut.appspot.com",messagingSenderId:"679056085917"}),o.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},PIIC:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-1",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-sm2":""}},[s("v-card",{staticClass:"info"},[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[s("v-card-media",{attrs:{src:e.imageUrl,height:"130px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h5",{staticClass:"white--text mb-0"},[t._v(t._s(e.title))]),t._v(" "),s("div",[t._v(t._s(t._f("fDate")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\n                  View Meetup\n                ")],1)],1)],1)],1)],1)],1)],1)],1)}))},a=[],r={render:i,staticRenderFns:a};e.a=r},RhKv:function(t,e,s){"use strict";e.a={props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{isUserRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.isUserRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}}},UdO5:function(t,e,s){"use strict";var i=s("rxyV"),a=s("u0tP"),r=s("VU/8"),n=r(i.a,a.a,null,null,null);e.a=n.exports},UmEM:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{staticClass:"mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetups"}},[t._v("Explore Meetups")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"info",attrs:{large:"",router:"",to:"/meetup/new"}},[t._v("Organize Meetups")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{staticClass:"text--white",attrs:{indeterminate:"",width:7,size:70}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(s){t.onLoadMeetup(e.id)}}},[s("div",{staticClass:"title"},[t._v(t._s(e.title))])])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("p",[t._v("Join our awesome meetup")])])],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},XcsR:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var i={state:{loading:!1,meetUpLoading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setMeetUpLoading:function(t,e){t.meetUpLoading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{error:function(t){return t.error},loading:function(t){return t.loading},meetUpLoading:function(t){return t.meetUpLoading}}}},YaEn:function(t,e,s){"use strict";var i=s("/5sW"),a=s("/ocq"),r=s("lO7g"),n=s("FO2o"),o=s("hi2M"),u=s("Dqi8"),c=s("ixtv"),l=s("eu7k"),d=s("wZlt"),v=s("hlOO");i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/meetups",name:"Meetups",component:n.a},{path:"/meetup/new",name:"CreateMeetup",component:o.a,beforeEnter:v.a},{path:"/meetups/:id",name:"Meetup",props:!0,component:d.a},{path:"/profile",name:"Profile",component:u.a,beforeEnter:v.a},{path:"/signin",name:"Signin",component:c.a},{path:"/signup",name:"Signup",component:l.a}],mode:"history"})},YguX:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{accent:""},slot:"activator"},[t._v("\n    Edit Time\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Time")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){e.save,e.cancel;return[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("\n                close\n              ")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("\n                Save\n              ")])]}}]),model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}})],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},cQBW:function(t,e){},eaU2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{temporary:"",absolute:"",persistent:"",overflow:""},model:{value:t.navShow,callback:function(e){t.navShow=e},expression:"navShow"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(e){e.stopPropagation(),t.navShow=!t.navShow}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("DevMeetup")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{to:e.link,flat:""}},[s("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},eu7k:function(t,e,s){"use strict";function i(t){s("C/IS")}var a=s("xeWd"),r=s("Bo4C"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},gYpR:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{x12:"",sm6:"","offset-sm3":""}},[s("my-alert",{attrs:{text:t.error.message},on:{dissmised:t.onDissmiss}})],1)],1):t._e(),t._v(" "),s("v-layout",[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("v-form",{on:{submit:function(e){e.preventDefault(),t.onSignIn(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",loading:t.loading,disabled:t.loading}},[t._v("\n                    Sign In\n                    "),s("span",{staticClass:"custom-loader",slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},hH6W:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{fab:"",accent:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",{staticClass:"headline"},[t._v("Edit meetup")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-layout",[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"blue--text darken-1",on:{click:t.onSaveChanges}},[t._v("Submit")]),t._v(" "),s("v-btn",{attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},hi2M:function(t,e,s){"use strict";function i(t){s("zxsY")}var a=s("IZmO"),r=s("18il"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},hlOO:function(t,e,s){"use strict";var i=s("IcnI");e.a=function(t,e,s){i.a.getters.user?s():s("/signin")}},ixtv:function(t,e,s){"use strict";function i(t){s("Bx7U")}var a=s("1Z2L"),r=s("gYpR"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},kIMR:function(t,e){},lO7g:function(t,e,s){"use strict";function i(t){s("cQBW")}var a=s("Fs8J"),r=s("UmEM"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,"data-v-04239877",null);e.a=u.exports},rxyV:function(t,e,s){"use strict";e.a={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),i=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(s),t.setUTCFullYear(i),this.$store.dispatch("updateMeetUpData",{id:this.meetup.id,date:t})}},created:function(){this.editableDate=new Date(this.meetup.date)}}},sdp7:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:t.onClose}},[t._v("\n  "+t._s(t.text)+"\n")])},a=[],r={render:i,staticRenderFns:a};e.a=r},st5v:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-progress-circular",{staticClass:"text--white",attrs:{indeterminate:"",width:7,size:70}})],1)],1):s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h5",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),s("my-edt-dialog",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"info--text"},[t._v(t._s(t._f("fDate")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",[t.userIsCreator?s("my-edt-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?s("my-edt-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("my-registration-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},u0tP:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{accent:""},slot:"activator"},[t._v("\n    Edit Date\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[t._v("Edit Meetup Date")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){e.save,e.cancel;return[s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.editDialog=!1}}},[t._v("\n                close\n              ")]),t._v(" "),s("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(e){t.onSaveChanges(e)}}},[t._v("\n                Save\n              ")])]}}]),model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}})],1)],1)],1)],1)],1)},a=[],r={render:i,staticRenderFns:a};e.a=r},u6lb:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("The User Page")])])}],r={render:i,staticRenderFns:a};e.a=r},"v+3D":function(t,e,s){"use strict";var i=s("RhKv"),a=s("8lRd"),r=s("VU/8"),n=r(i.a,a.a,null,null,null);e.a=n.exports},wZlt:function(t,e,s){"use strict";function i(t){s("2FF0")}var a=s("2FuN"),r=s("st5v"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},xJD8:function(t,e,s){"use strict";e.a={data:function(){return{navShow:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign in",link:"/signin"},{icon:"lock_open",title:"Sign up",link:"/signup"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"View Meetups",link:"/meetups"},{icon:"room",title:"Organize Meetups",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}}},xeWd:function(t,e,s){"use strict";e.a={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePassword:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading},error:function(){return this.$store.getters.error}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("./")}},methods:{onSignUp:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDissmiss:function(){this.$store.dispatch("clearError")}}}},yCdV:function(t,e,s){"use strict";e.a={data:function(){return{}}}},yVzT:function(t,e,s){"use strict";function i(t){s("DijE")}var a=s("03pU"),r=s("sdp7"),n=s("VU/8"),o=i,u=n(a.a,r.a,o,null,null);e.a=u.exports},zxsY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b429e6634b0b72678885.js.map