webpackJsonp([14],[function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=s(1),a=i(n),d=s(10),o=i(d);new a["default"]({el:"#app",data:{resendtext:"重发验证邮件",succeed:!1,email:""},methods:{findPassword:function(){if(this.$validate(!0),this.$form.valid){var e=this;o["default"].post("/user/findpassword.json",{email:this.email},function(){e.succeed=!0})}},resend:function(){this.resendtext="发送中";var e=this;o["default"].post("/user/findpassword.json",{email:this.email},function(){e.succeed=!0,e.resendtext="发送成功"})},go:function(){var e=this.email.substring(this.email.indexOf("@")+1);location.href="http://mail."+e}}})}]);