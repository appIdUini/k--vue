webpackJsonp([31],{DJDq:function(e,t){},KfDM:function(e,t){},R6U0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{},data(){var e=this;return{interval:function(){},disbtn:!1,dataCount:10,loading:!0,sendMsgDisabled1:!1,sendMsgDisabled2:!1,time1:60,time2:60,modal2:!1,modal_loading:!1,withdrawAddr:"",remark:"",coinType:"",validEmail:!1,validPhone:!1,coinList:[],tableColumnsRecharge:[{title:this.$t("uc.finance.withdraw.symbol"),key:"unit"},{title:this.$t("uc.finance.withdraw.address"),key:"address"},{title:this.$t("uc.finance.withdraw.remark"),key:"remark"},{title:this.$t("uc.finance.withdraw.operate"),key:"action",width:150,align:"center",render:(t,a)=>t("div",[t("Button",{props:{size:"small"},style:{border:"1px solid #ed4014",color:"#ed4014","line-height":"1.2","border-radius":"10px"},on:{click:()=>{this.del(a.row.id)}}},e.$t("uc.finance.withdraw.delete"))])}],dataRecharge:[],formValidateAddr:{mobileNo:"",vailCode2:"",email:"",vailCode1:""},ruleValidate:{mobileNo:[{required:this.validPhone,message:this.$t("uc.finance.withdraw.telerr"),trigger:"blur"}],vailCode2:[{required:this.validPhone,message:this.$t("uc.finance.withdraw.codeerr"),trigger:"change"}],email:[{required:this.validEmail,type:"email",message:this.$t("uc.finance.withdraw.emailerr"),trigger:"blur"}],vailCode1:[{required:this.validEmail,message:this.$t("uc.finance.withdraw.codeerr"),trigger:"change"}]}}},created(){this.getMember(),this.getList(0,10),this.coinType=this.$route.query.name,this.getCoin()},methods:{refresh(){this.coinType=null,this.withdrawAddr=null,this.remark=null,this.getList(0,10)},getMember(){this.$http.post(this.host+"/uc/approve/security/setting").then(e=>{var t=e.body;0==t.code?t.data.mobilePhone?(this.formValidateAddr.mobileNo=t.data.mobilePhone,this.validPhone=!0,this.validEmail=!1):(this.formValidateAddr.email=t.data.email,this.validPhone=!1,this.validEmail=!0):this.$Message.error(t.message)})},getCoin(){this.$http.post(this.host+"/uc/withdraw/support/coin").then(e=>{var t=e.body;if(0==t.code)for(let e=0;e<t.data.length;e++)this.coinList.push(t.data[e]);else this.$Message.error(t.message)})},getList(e,t){let a={};a.pageNo=e,a.pageSize=t,this.$http.post(this.host+"/uc/withdraw/address/page",a).then(e=>{var t=e.body;0==t.code&&t.data.content?(this.dataRecharge=t.data.content,this.dataCount=t.data.totalElement):this.$Message.error(t.message),this.loading=!1})},remove(e){this.dataRecharge.splice(e,1)},send(e){let t=this;this.disbtn=!0,1==e?this.formValidateAddr.email?this.$http.post(this.host+"/uc/add/address/code").then(e=>{var a=e.body;if(0==a.code){this.$Message.success(a.message),t.sendMsgDisabled1=!0;let e=window.setInterval(function(){t.time1--<=0&&(t.time1=60,t.sendMsgDisabled1=!1,window.clearInterval(e),this.disbtn=!1)},1e3)}else this.$Message.error(a.message),this.disbtn=!1}):(this.$refs.formValidateAddr.validateField("email"),this.disbtn=!1):2==e&&(this.formValidateAddr.mobileNo?this.$http.post(this.host+"/uc/mobile/add/address/code").then(e=>{var a=e.body;0==a.code?(this.$Message.success(a.message),t.sendMsgDisabled2=!0,this.interval=window.setInterval(()=>{t.time2--<=0&&(t.time2=60,t.sendMsgDisabled2=!1,window.clearInterval(this.interval),this.disbtn=!1)},1e3)):(this.$Message.error(a.message),this.disbtn=!1)}):(this.$refs.formValidateAddr.validateField("mobileNo"),this.disbtn=!1))},addAddr(){let e=setInterval(()=>{this.time2<=0&&(this.sendMsgDisabled2=!1,window.clearInterval(e),this.disbtn=!1)},1e3);this.coinType?this.withdrawAddr?this.remark?this.coinType&&this.remark&&this.withdrawAddr&&(this.modal2=!0):this.$Message.warning(this.$t("uc.finance.withdraw.remarktip")):this.$Message.warning(this.$t("uc.finance.withdraw.addresstip")):this.$Message.warning(this.$t("uc.finance.withdraw.symboltip"))},changePage(e){this.getList(e,10,this.coinType)},del(e){const t=this.$t("common.tip"),a="<p>"+this.$t("common.delete")+"</p>";this.$Modal.confirm({title:t,content:a,onOk:()=>{let t={};t.id=e,this.$http.post(this.host+"/uc/withdraw/address/delete",t).then(e=>{var t=e.body;0==t.code?(this.$Message.success(t.message),this.refresh()):this.$Message.error(t.message),this.loading=!1})},onCancel:()=>{}})},handleSubmit(e){this.$refs[e].validate(t=>{t?this.submit(e):this.$Message.error(this.$t("uc.finance.withdraw.savemsg1"))})},submit(e){let t={};t.address=this.withdrawAddr,t.unit=this.coinType,this.validPhone?(t.aims=this.formValidateAddr.mobileNo,t.code=this.formValidateAddr.vailCode2):(t.aims=this.formValidateAddr.email,t.code=this.formValidateAddr.vailCode1),t.remark=this.remark,this.$http.post(this.host+"/uc/withdraw/address/add",t).then(e=>{var t=e.body;0==t.code?(this.$Message.success(this.$t("uc.finance.withdraw.savemsg2")),this.formValidateAddr.vailCode2="",this.refresh(),this.modal2=!1):this.$Message.error(t.message)})}},computed:{}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-rights"},[a("div",{staticClass:"nav-right"},[a("div",{staticClass:"bill_box_address"},[a("section",{staticClass:"trade-group merchant-tops"},[a("h1",{staticClass:"tips-word1"},[e._v(e._s(e.$t("uc.finance.withdraw.addressmanager")))])]),e._v(" "),a("section",[a("div",{staticClass:"table-inner"},[a("div",{staticClass:"action-inner"},[a("div",{staticClass:"inner-left"},[a("p",{staticClass:"describe"},[e._v(e._s(e.$t("uc.finance.withdraw.symbol")))]),e._v(" "),a("Select",{staticStyle:{width:"100px","margin-top":"10px"},attrs:{size:"large"},model:{value:e.coinType,callback:function(t){e.coinType=t},expression:"coinType"}},e._l(e.coinList,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"inner-box deposit-address mt25"},[a("p",{staticClass:"describe"},[e._v(e._s(e.$t("uc.finance.withdraw.address")))]),e._v(" "),a("div",{staticClass:"title"},[a("Input",{staticStyle:{width:"90%","margin-top":"10px"},attrs:{size:"large"},model:{value:e.withdrawAddr,callback:function(t){e.withdrawAddr=t},expression:"withdrawAddr"}})],1)]),e._v(" "),a("div",{staticClass:"mt25"},[a("p",{staticClass:"describe"},[e._v(e._s(e.$t("uc.finance.withdraw.remark"))+" / Memo")]),e._v(" "),a("div",{staticClass:"title"},[a("Input",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{size:"large"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)])]),e._v(" "),a("div",{staticClass:"btnbox"},[a("Button",{staticStyle:{width:"86px",color:"#fff",background:"#f0a70a",border:"1px solid #f0a70a"},attrs:{id:"addrSubmit",size:"large"},on:{click:e.addAddr}},[e._v(e._s(e.$t("uc.finance.withdraw.add")))])],1),e._v(" "),a("div",{staticClass:"action-content"},[a("div",{staticClass:"action-body"},[a("p",{staticClass:"acb-p1 describe"},[e._v(e._s(e.$t("uc.finance.withdraw.addresslist")))]),e._v(" "),a("div",{staticClass:"order-table"},[a("Table",{attrs:{columns:e.tableColumnsRecharge,data:e.dataRecharge,"disabled-hover":!0}}),e._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{staticClass:"recharge_btn",attrs:{total:e.dataCount,current:1,loading:e.loading},on:{"on-change":e.changePage}})],1)])],1)])])])])])]),e._v(" "),a("Modal",{attrs:{width:"360"},model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-mail",size:"20",color:"#00b5f6;"}}),e._v(" "),a("span",[e._v(e._s(e.$t("uc.finance.withdraw.safevalidate")))])],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("Form",{ref:"formValidateAddr",attrs:{model:e.formValidateAddr,rules:e.ruleValidate,"label-width":85}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.validPhone,expression:"validPhone"}],attrs:{label:e.$t("uc.finance.withdraw.telno"),prop:"mobileNo"}},[a("Input",{attrs:{disabled:"",size:"large"},model:{value:e.formValidateAddr.mobileNo,callback:function(t){e.$set(e.formValidateAddr,"mobileNo",t)},expression:"formValidateAddr.mobileNo"}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.validPhone,expression:"validPhone"}],attrs:{label:e.$t("uc.finance.withdraw.smscode"),prop:"vailCode2"}},[a("Input",{attrs:{size:"large"},model:{value:e.formValidateAddr.vailCode2,callback:function(t){e.$set(e.formValidateAddr,"vailCode2",t)},expression:"formValidateAddr.vailCode2"}},[a("div",{staticClass:"timebox",attrs:{slot:"append"},slot:"append"},[a("Button",{attrs:{disabled:e.disbtn},on:{click:function(t){e.send(2)}}},[e.sendMsgDisabled2?a("span",[e._v(e._s(e.time2+e.$t("uc.finance.withdraw.second")))]):e._e(),e._v(" "),e.sendMsgDisabled2?e._e():a("span",[e._v(e._s(e.$t("uc.finance.withdraw.clickget")))])])],1)])],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.validEmail,expression:"validEmail"}],attrs:{label:e.$t("uc.finance.withdraw.email"),prop:"email"}},[a("Input",{attrs:{disabled:"",size:"large"},model:{value:e.formValidateAddr.email,callback:function(t){e.$set(e.formValidateAddr,"email",t)},expression:"formValidateAddr.email"}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.validEmail,expression:"validEmail"}],attrs:{label:e.$t("uc.finance.withdraw.emailcode"),prop:"vailCode1"}},[a("Input",{attrs:{size:"large"},model:{value:e.formValidateAddr.vailCode1,callback:function(t){e.$set(e.formValidateAddr,"vailCode1",t)},expression:"formValidateAddr.vailCode1"}},[a("div",{staticClass:"timebox",attrs:{slot:"append"},slot:"append"},[a("Button",{attrs:{disabled:e.disbtn},on:{click:function(t){e.send(1)}}},[e.sendMsgDisabled1?a("span",[e._v(e._s(e.time1+e.$t("uc.finance.withdraw.second")))]):e._e(),e._v(" "),e.sendMsgDisabled1?e._e():a("span",[e._v(e._s(e.$t("uc.finance.withdraw.clickget")))])])],1)])],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(t){e.handleSubmit("formValidateAddr")}}},[e._v(e._s(e.$t("uc.finance.withdraw.save")))])],1)])],1)},staticRenderFns:[]};var d=a("VU/8")(i,s,!1,function(e){a("DJDq"),a("KfDM")},"data-v-4c43090d",null);t.default=d.exports}});