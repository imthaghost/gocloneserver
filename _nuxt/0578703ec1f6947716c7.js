(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{267:function(e,t,r){"use strict";var o={name:"index",props:["message"],watch:{message:function(e,t){if(""!==e){var r=this;setTimeout((function(){r.$emit("messageFunc","")}),3e3)}}}},l=r(11),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"gf-alert",class:{active:""!=this.message}},[t("span",[this._v(this._s(this.message))])])}),[],!1,null,"ce88d486",null);t.a=component.exports},268:function(e,t,r){"use strict";var o={name:"FormLabel",props:{on:{type:Boolean,default:!0},label:{type:String,default:""},dispatch:{type:Boolean,default:!0},for:{type:String,default:null}},data:function(){return{formEl:void 0,labelEl:void 0,isActive:!1,isFocused:!1}},mounted:function(){this.formEl=this.$el.querySelector("input, textarea, select"),this.formEl.addEventListener("input",this.updateIsActive),this.formEl.addEventListener("input",this.updateIsFocused),this.formEl.addEventListener("blur",this.updateIsFocused),this.formEl.addEventListener("focus",this.updateIsFocused),this.for||(this.labelEl=this.$el.querySelector("label"),this.labelEl.addEventListener("click",this.focusFormEl)),this.dispatchInput()},beforeDestroy:function(){this.formEl.removeEventListener("input",this.updateIsActive),this.formEl.removeEventListener("input",this.updateIsFocused),this.formEl.removeEventListener("blur",this.updateIsFocused),this.formEl.removeEventListener("focus",this.updateIsFocused)},methods:{dispatchInput:function(){if(this.dispatch){var e=document.createEvent("HTMLEvents");e.initEvent("input",!0,!1),this.formEl.dispatchEvent(e)}},focusFormEl:function(){this.formEl.focus()},updateIsActive:function(e){this.isActive=e.target.value.length>0},updateIsFocused:function(e){this.isFocused=e.target===document.activeElement&&this.isActive}},computed:{inputId:function(){return this.for},classObject:function(){return{"vfl-label-on-input":this.on&&this.isActive,"vfl-label-on-focus":this.isFocused}},formElType:function(){return this.formEl?this.formEl.tagName.toLowerCase():""},floatLabel:function(){if(this.label)return this.label;switch(this.formElType){case"input":case"textarea":return this.formEl.placeholder;case"select":return this.formEl.querySelector("option[disabled][selected]").innerHTML;default:return""}}}},l=r(11),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vfl-has-label"},[t("label",{staticClass:"vfl-label",class:this.classObject,attrs:{for:this.inputId}},[this._v("\n    "+this._s(this.floatLabel)+"\n  ")]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.a=component.exports},387:function(e,t,r){"use strict";r.r(t);var o=r(268),l=r(267),n={layout:"loginRegister",data:function(){return{errors:[],fullname:"",email:"",password:"",terms:"",subs:!1,message:"",passType:"password"}},components:{FormLabel:o.a,AlertBox:l.a},head:{bodyAttrs:{class:"body-bg-white"}},methods:{onSubmit:function(e){if(this.errors=[],this.fullname||this.errors.push("Full Name required."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.password?(this.password.length<6||this.password.length>30)&&this.errors.push("Your password should be at least 6 characters"):this.errors.push("Password required."),this.terms||this.errors.push("Terms required."),this.errors.length)this.$refs.fullName.focus();else{var data={name:this.fullname,email:this.email,password:this.password,receiveEmail:this.subs},t=this;this.$axios.post("/signup",data).then((function(e){!0===e.data.success?(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"Pageview",url:"/create-account/"}),t.message="Registered successfully.",setTimeout((function(){t.onLogin()}),2e3)):t.message=e.data.message})).catch((function(e){console.error("Error adding document: ",e)}))}},validEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},onLogin:function(){var e=this;this.$auth.loginWith("local",{data:{username:this.email,password:this.password,client_id:1,client_secret:"XTBsUmAhB0Ubrb8v3yfSeHvKdeMq9NdMEgmh0eTv",grant_type:"password",scope:""}}).then((function(t){e.$auth.fetchUser()})).catch((function(e){console.error(e)}))},handleMessage:function(){this.message=""},showHidePass:function(){this.passType="password"===this.passType?"text":"password"}},computed:{isActive:function(){return!1}}},c=r(11),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"form-general mx-auto",on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[e._m(0),e._v(" "),e.errors.length?r("div",{staticClass:"alert alert-danger"},[r("b",[e._v("Please correct the following error(s):")]),e._v(" "),r("ul",{staticClass:"mb-0"},e._l(e.errors,(function(t){return r("li",[e._v(e._s(t))])})),0)]):e._e(),e._v(" "),r("b-form-group",[r("FormLabel",{attrs:{label:"Full Name"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],ref:"fullName",staticClass:"form-input",attrs:{type:"text",placeholder:"Full Name"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}})])],1),e._v(" "),r("b-form-group",[r("FormLabel",{attrs:{label:"E-mail Address"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{type:"email",placeholder:"E-mail Address"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])],1),e._v(" "),r("b-form-group",{staticClass:"input-pass"},[r("FormLabel",{attrs:{label:"Password"}},["checkbox"===e.passType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var r=e.password,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&(e.password=r.concat([null])):n>-1&&(e.password=r.slice(0,n).concat(r.slice(n+1)))}else e.password=l}}}):"radio"===e.passType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"Password",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"Password",type:e.passType},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("i",{staticClass:"eye",class:{"eye-off-svg":"password"===e.passType,"eye-on-svg":"text"===e.passType},on:{click:e.showHidePass}})],1),e._v(" "),r("b-form-group",{staticClass:"d-flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.terms,expression:"terms"}],attrs:{type:"checkbox",id:"checkbox1",name:"terms"},domProps:{checked:Array.isArray(e.terms)?e._i(e.terms,null)>-1:e.terms},on:{change:function(t){var r=e.terms,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&(e.terms=r.concat([null])):n>-1&&(e.terms=r.slice(0,n).concat(r.slice(n+1)))}else e.terms=l}}}),e._v(" "),r("label",{staticClass:"pl-2",staticStyle:{"font-size":"13px"},attrs:{for:"checkbox1"}},[e._v("I have read\n                "),r("nuxt-link",{attrs:{to:"/legal/terms"}},[e._v("Terms & Conditions")]),e._v("\n                and\n                "),r("nuxt-link",{attrs:{to:"/legal/privacy-policy"}},[e._v("Privacy Policy")])],1)]),e._v(" "),r("b-form-group",{staticClass:"d-flex"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.subs,expression:"subs"}],attrs:{type:"checkbox",id:"checkbox2",name:"subs"},domProps:{checked:Array.isArray(e.subs)?e._i(e.subs,null)>-1:e.subs},on:{change:function(t){var r=e.subs,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&(e.subs=r.concat([null])):n>-1&&(e.subs=r.slice(0,n).concat(r.slice(n+1)))}else e.subs=l}}}),e._v(" "),r("label",{staticClass:"pl-2",staticStyle:{"font-size":"13px"},attrs:{for:"checkbox2"}},[e._v("I’d like to receive emails about the news and updates.")])]),e._v(" "),r("b-form-group",[r("button",{staticClass:"btn-form",attrs:{type:"submit"}},[e._v("SIGN UP")])])],1),e._v(" "),r("div",{staticClass:"already mt-3 mb-5"},[r("p",[e._v("Already have a Getform account?\n            "),r("nuxt-link",{attrs:{to:"/login"}},[e._v("Log in")])],1)]),e._v(" "),r("AlertBox",{attrs:{message:e.message},on:{messageFunc:e.handleMessage}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"head"},[t("h1",{staticClass:"mb-2"},[this._v("Sign Up")]),this._v(" "),t("p",[this._v("Start getting submissions in 1 minute, easy peasy!")])])}],!1,null,null,null);t.default=component.exports}}]);