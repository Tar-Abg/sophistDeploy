"use strict";(self.webpackChunkschool=self.webpackChunkschool||[]).push([[585],{1618:(J,C,a)=>{a.d(C,{p:()=>q});var n=a(5319),u=a(3679),e=a(7716),r=a(3328),I=a(3808),T=a(6275),w=a(8583);function i(m,Z){1&m&&(e.TgZ(0,"span",11),e._uU(1,"The Current Password field is required."),e.qZA())}function d(m,Z){1&m&&(e.TgZ(0,"span",11),e._uU(1,"Password is incorrect"),e.qZA())}function _(m,Z){1&m&&(e.TgZ(0,"span",11),e._uU(1,"The New Password field is required."),e.qZA())}function y(m,Z){1&m&&(e.TgZ(0,"span",11),e._uU(1,"Passwords are not the same"),e.qZA())}function S(m,Z){1&m&&(e.TgZ(0,"span",11),e._uU(1,"The Confirm New Password field is required."),e.qZA())}let q=(()=>{class m{constructor(s,t,p,f){this.storageService=s,this.fb=t,this.settingsService=p,this.validationService=f,this.subscription=new n.w}ngOnInit(){this.initializeForm(),this.subscribeOnCurrentPasswordChange()}initializeForm(){this.form=this.fb.group({userId:[this.storageService.getUserId()],currentPassword:[null,[u.kI.required]],password:[null,[u.kI.required]],rePassword:[null,[u.kI.required]]},{validators:this.validationService.checkPasswords})}onSubmit(){if(this.wrongPassword=!1,this.form.valid){delete this.form.value.rePassword;const s=this.form.value.password;delete this.form.value.password,this.subscription.add(this.settingsService.updatePassword(Object.assign(Object.assign({},this.form.value),{newPassword:s})).subscribe(()=>{var t;this.form.reset(),null===(t=this.form.get("userId"))||void 0===t||t.setValue(this.storageService.getUserId())},t=>{"Wrong password"===t.error.type&&(this.wrongPassword=!0)}))}else this.form.markAllAsTouched()}subscribeOnCurrentPasswordChange(){var s;this.subscription.add(null===(s=this.form.get("currentPassword"))||void 0===s?void 0:s.valueChanges.subscribe(()=>this.wrongPassword=!1))}ngOnDestroy(){this.subscription.unsubscribe()}}return m.\u0275fac=function(s){return new(s||m)(e.Y36(r.V),e.Y36(u.qu),e.Y36(I.g),e.Y36(T.R))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-change-password"]],decls:16,vars:6,consts:[[1,"tutor-settings-nested-page"],[1,"tutor-settings-nested-page__form","tutor-settings-nested-page__form--fixed--width",3,"formGroup","ngSubmit"],[1,"setting-form-input-wrapper"],["for","current-password",1,"form-label"],["id","current-password","name","current-password","required","","autocomplete","current-password","type","password","placeholder","Current Password*","formControlName","currentPassword",1,"form-input"],["class","error-message",4,"ngIf"],["for","new-password",1,"form-label"],["id","new-password","name","new-password","required","","autocomplete","current-password","type","password","placeholder","New Password*","formControlName","password",1,"form-input"],["for","confirm-new-password",1,"form-label"],["id","confirm-new-password","name","confirm-new-password","required","","autocomplete","current-password","type","password","placeholder","Confirm New Password*","formControlName","rePassword",1,"form-input"],[1,"settings-form-button"],[1,"error-message"]],template:function(s,t){if(1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(2,"div",2),e.TgZ(3,"label",3),e._UZ(4,"input",4),e.YNc(5,i,2,0,"span",5),e.YNc(6,d,2,0,"span",5),e.qZA(),e.TgZ(7,"label",6),e._UZ(8,"input",7),e.YNc(9,_,2,0,"span",5),e.qZA(),e.TgZ(10,"label",8),e._UZ(11,"input",9),e.YNc(12,y,2,0,"span",5),e.YNc(13,S,2,0,"span",5),e.qZA(),e.qZA(),e.TgZ(14,"button",10),e._uU(15,"Change password"),e.qZA(),e.qZA(),e.qZA()),2&s){let p,f,h,v;e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("ngIf",(null==(p=t.form.get("currentPassword"))||null==p.errors?null:p.errors.required)&&(null==(p=t.form.get("currentPassword"))?null:p.touched)),e.xp6(1),e.Q6J("ngIf",t.wrongPassword),e.xp6(3),e.Q6J("ngIf",(null==(f=t.form.get("password"))||null==f.errors?null:f.errors.required)&&(null==(f=t.form.get("password"))?null:f.touched)),e.xp6(3),e.Q6J("ngIf",(null==t.form||null==t.form.errors?null:t.form.errors.notSame)&&(null==(h=t.form.get("rePassword"))?null:h.touched)&&!(null!=(h=t.form.get("rePassword"))&&null!=h.errors&&h.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(v=t.form.get("rePassword"))||null==v.errors?null:v.errors.required)&&(null==(v=t.form.get("rePassword"))?null:v.touched))}},directives:[u._Y,u.JL,u.sg,u.Fj,u.Q7,u.JJ,u.u,w.O5],styles:[""]}),m})()},1700:(J,C,a)=>{a.d(C,{i:()=>L});var n=a(3679),u=a(5319),e=a(7716),r=a(3328),I=a(6332),T=a(3808),w=a(6275),i=a(8583),d=a(9092);function _(l,b){1&l&&(e.TgZ(0,"span",11),e._uU(1,"You must enter your current Sophist password."),e.qZA())}function y(l,b){if(1&l&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&l){const c=e.oxw();e.xp6(1),e.Oqu(c.errorMessage)}}let S=(()=>{class l{constructor(c,o){this.fb=c,this.settingService=o,this.close=new e.vpe,this.updated=new e.vpe,this.subscription=new u.w}ngOnInit(){this.form=this.fb.group({password:[null,[n.kI.required]]}),this.initializeSubscriptions()}initializeSubscriptions(){this.subscription.add(this.form.valueChanges.subscribe(()=>this.errorMessage=""))}onConfirm(){this.errorMessage="",this.form.valid?this.updatePersonalInformation():this.form.markAllAsTouched()}updatePersonalInformation(){this.subscription.add(this.settingService.updatePersonalInformation(this.body,this.form.value.password).subscribe(()=>{this.close.emit(),this.updated.emit()},c=>{this.errorMessage=c.error.title}))}ngOnDestroy(){this.subscription.unsubscribe()}}return l.\u0275fac=function(c){return new(c||l)(e.Y36(n.qu),e.Y36(T.g))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-confirm-password"]],inputs:{body:"body"},outputs:{close:"close",updated:"updated"},decls:15,vars:3,consts:[[1,"confirm-dialog-wrapper","flex-container-center"],[1,"confirm-dialog-content"],[1,"flex-container-center","confirm-header"],[1,"confirm-content-title"],[1,"material-icons",3,"click"],[3,"formGroup","ngSubmit"],["for","password",1,"form-label","confirm-content-label"],["type","password","formControlName","password","placeholder","Sophist password*","id","password",1,"form-input"],["class","error-message",4,"ngIf"],[1,"flex-container-center"],["type","submit",1,"confirm-modal-btn"],[1,"error-message"]],template:function(c,o){if(1&c&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h3",3),e._uU(4,"Please enter your password"),e.qZA(),e.TgZ(5,"span",4),e.NdJ("click",function(){return o.close.emit()}),e._uU(6,"close"),e.qZA(),e.qZA(),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return o.onConfirm()}),e.TgZ(8,"label",6),e._UZ(9,"input",7),e.YNc(10,_,2,0,"span",8),e.YNc(11,y,2,1,"span",8),e.qZA(),e.TgZ(12,"div",9),e.TgZ(13,"button",10),e._uU(14,"confirm"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&c){let g;e.xp6(7),e.Q6J("formGroup",o.form),e.xp6(3),e.Q6J("ngIf",(null==(g=o.form.get("password"))||null==g.errors?null:g.errors.required)&&(null==(g=o.form.get("password"))?null:g.touched)),e.xp6(1),e.Q6J("ngIf",o.errorMessage)}},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,i.O5],styles:['.confirm-dialog-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#0006;z-index:999}.confirm-dialog-content[_ngcontent-%COMP%]{width:647px;padding:27px 40px 40px;background:white;border:1px solid #efe699;box-sizing:border-box;border-radius:25px}.confirm-header[_ngcontent-%COMP%]{justify-content:space-between}.confirm-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.confirm-content-title[_ngcontent-%COMP%]{flex:1;margin:0;font:300 normal 1.125rem "Segoe UI",sans-serif;line-height:24px;text-align:center;color:#000}.confirm-content-label[_ngcontent-%COMP%]{margin:25px 0 40px}.confirm-content-label[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]{width:468px;margin:0 auto}.confirm-modal-btn[_ngcontent-%COMP%]{margin:0 auto;width:163px;height:43px;border:1px solid #26BC00;box-sizing:border-box;border-radius:10px;font:700 normal 1rem "Segoe UI",sans-serif;line-height:21px;letter-spacing:.08em;text-transform:capitalize;color:#26bc00;background-color:unset}']}),l})();function q(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"Please enter your email address"),e.qZA())}function m(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"Please provide a valid email address"),e.qZA())}function Z(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"This is a required field"),e.qZA())}function s(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"Please fill in your last name"),e.qZA())}function t(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"Please specify month of your birth"),e.qZA())}function p(l,b){1&l&&(e.TgZ(0,"span",36),e._uU(1,"This is a required field "),e.qZA())}function f(l,b){1&l&&(e.TgZ(0,"span",35),e._uU(1,"This is a required field"),e.qZA())}function h(l,b){1&l&&(e.TgZ(0,"span",36),e._uU(1," This is a required field"),e.qZA())}function v(l,b){1&l&&(e.TgZ(0,"span",36),e._uU(1,"This is a required field"),e.qZA())}function D(l,b){1&l&&(e.TgZ(0,"span",36),e._uU(1,"This is a required field"),e.qZA())}function k(l,b){if(1&l){const c=e.EpF();e.TgZ(0,"app-confirm-password",37),e.NdJ("close",function(){return e.CHM(c),e.oxw().isOpenPasswordModal=!1})("updated",function(){return e.CHM(c),e.oxw().form.disable()}),e.qZA()}if(2&l){const c=e.oxw();e.Q6J("body",c.form.value)}}let L=(()=>{class l{constructor(c,o,g,P,A){this.fb=c,this.storageService=o,this.infoService=g,this.settingService=P,this.validationService=A,this.subscription=new u.w}ngOnInit(){this.formInitialization(),this.countries$=this.infoService.getCountries(),this.timeZones$=this.infoService.getTimeZones(),this.getPersonalInformation()}formInitialization(){this.form=this.fb.group({id:[null],userId:[this.storageService.getUserId()],mobileCode:[null,[n.kI.required]],mobile:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],userName:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],preferredTimeZone:[null,[n.kI.required]],email:[null,[n.kI.required,n.kI.pattern(this.validationService.emailPattern),n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],userAddress:this.fb.group({countryId:[null,[n.kI.required]],city:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],streetNumber:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],streetName:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],zipCode:[null,[n.kI.required,n.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],tutorBasicInformationId:[null]})}),this.form.disable()}get userAddress(){return this.form.get("userAddress")}onSubmit(){this.form.valid?this.isOpenPasswordModal=!0:this.form.markAllAsTouched()}getPersonalInformation(){this.storageService.getUserId()&&this.subscription.add(this.settingService.getPersonalInformation(this.storageService.getUserId()).subscribe(c=>this.form.patchValue(c)))}ngOnDestroy(){this.subscription.unsubscribe()}}return l.\u0275fac=function(c){return new(c||l)(e.Y36(n.qu),e.Y36(r.V),e.Y36(I.M),e.Y36(T.g),e.Y36(w.R))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-personal-information"]],decls:90,vars:31,consts:[[3,"formGroup"],[1,"d-flex","personal-info-wrapper","wrapper-for-contact"],[1,"flex-item-for-info","address-form"],[1,"form-item-with-notification"],[1,"form-item-label"],["for","email",1,"form-label"],["id","email","autocomplete","username","type","email","placeholder","","formControlName","email",1,"form-input"],["class","error-message",4,"ngIf"],[1,"form-item-notification"],[1,"d-flex","position-relative"],[1,"form-label","phone-number-label","form-label--min-width","w-25"],["formControlName","mobileCode",3,"disable","list","label","keyName"],["for","phone-number",1,"form-label","phone-number-label","phone-number-label-input"],["id","phone-number","autocomplete","phone-number","type","tel","placeholder","Phone number*","formControlName","mobile",1,"form-input"],["for","user-name",1,"form-label"],["id","user-name","type","text","placeholder","user name*","formControlName","userName",1,"form-input"],[1,"p-relative","form-label"],["formControlName","preferredTimeZone",3,"disable","label","list","keyName"],["formGroupName","userAddress",1,"flex-item-for-info"],[1,"address-form","address-form"],["for","country",1,"form-label"],["id","country","formControlName","countryId",3,"label","keyName","list","disable"],["class","error-message block",4,"ngIf"],["for","city",1,"form-label"],["id","city","type","text","placeholder","City*","formControlName","city",1,"form-input"],["for","streetNumber",1,"form-label"],["id","streetNumber","autocomplete","streetNumber","type","text","placeholder","Street Number*","formControlName","streetNumber",1,"form-input"],["for","streetName",1,"form-label"],["id","streetName","autocomplete","streetName","type","text","placeholder","Street Name*","formControlName","streetName",1,"form-input"],["for","zipCode",1,"form-label"],["id","zipCode","autocomplete","zipCode","placeholder","Zip Code*","formControlName","zipCode",1,"form-input"],[1,"flex-container-center","grid-gap-for-buttons"],[1,"settings-form-button","settings-form-button__with-border","button-border--blue",3,"click"],[1,"settings-form-button",3,"disabled","click"],[3,"body","close","updated",4,"ngIf"],[1,"error-message"],[1,"error-message","block"],[3,"body","close","updated"]],template:function(c,o){if(1&c&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"ul",2),e.TgZ(3,"li",3),e.TgZ(4,"h3",4),e._uU(5,"Primary email*"),e.qZA(),e.TgZ(6,"label",5),e._UZ(7,"input",6),e.YNc(8,q,2,0,"span",7),e.YNc(9,m,2,0,"span",7),e.TgZ(10,"span",8),e._uU(11,"Visible on the public profile"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"li",3),e.TgZ(13,"h3",4),e._uU(14,"Mobile phone*"),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"div",10),e._UZ(17,"app-select",11),e.ALo(18,"async"),e.qZA(),e.TgZ(19,"label",12),e._UZ(20,"input",13),e.qZA(),e.YNc(21,Z,2,0,"span",7),e.TgZ(22,"span",8),e._uU(23,"Visible on the public profile"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"li",3),e.TgZ(25,"h3",4),e._uU(26,"User Name*"),e.qZA(),e.TgZ(27,"div",9),e.TgZ(28,"label",14),e._UZ(29,"input",15),e.YNc(30,s,2,0,"span",7),e.qZA(),e.TgZ(31,"span",8),e._uU(32,"Visible on the public profile"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(33,"li",3),e.TgZ(34,"h3",4),e._uU(35,"Preferred Time Zone*"),e.qZA(),e.TgZ(36,"div",9),e.TgZ(37,"div",16),e._UZ(38,"app-select",17),e.ALo(39,"async"),e.YNc(40,t,2,0,"span",7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",18),e.TgZ(42,"ul",19),e.TgZ(43,"li",3),e.TgZ(44,"h3",4),e._uU(45,"Country*"),e.qZA(),e.TgZ(46,"label",20),e._UZ(47,"app-select",21),e.ALo(48,"async"),e.TgZ(49,"span",8),e._uU(50,"Not visible on the public profile"),e.qZA(),e.YNc(51,p,2,0,"span",22),e.qZA(),e.qZA(),e.TgZ(52,"li",3),e.TgZ(53,"h3",4),e._uU(54,"City*"),e.qZA(),e.TgZ(55,"label",23),e._UZ(56,"input",24),e.TgZ(57,"span",8),e._uU(58,"Not visible on the public profile"),e.qZA(),e.YNc(59,f,2,0,"span",7),e.qZA(),e.qZA(),e.TgZ(60,"li",3),e.TgZ(61,"h3",4),e._uU(62,"Street Number*"),e.qZA(),e.TgZ(63,"label",25),e._UZ(64,"input",26),e.TgZ(65,"span",8),e._uU(66,"Not visible on the public profile"),e.qZA(),e.YNc(67,h,2,0,"span",22),e.qZA(),e.qZA(),e.TgZ(68,"li",3),e.TgZ(69,"h3",4),e._uU(70,"Street Name*"),e.qZA(),e.TgZ(71,"label",27),e._UZ(72,"input",28),e.TgZ(73,"span",8),e._uU(74,"Not visible on the public profile"),e.qZA(),e.YNc(75,v,2,0,"span",22),e.qZA(),e.qZA(),e.TgZ(76,"li",3),e.TgZ(77,"h3",4),e._uU(78,"Zip Code*"),e.qZA(),e.TgZ(79,"label",29),e._UZ(80,"input",30),e.TgZ(81,"span",8),e._uU(82,"Not visible on the public profile"),e.qZA(),e.YNc(83,D,2,0,"span",22),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(84,"div",31),e.TgZ(85,"button",32),e.NdJ("click",function(){return o.form.enable()}),e._uU(86," Edit "),e.qZA(),e.TgZ(87,"button",33),e.NdJ("click",function(){return o.onSubmit()}),e._uU(88,"Update Information"),e.qZA(),e.qZA(),e.YNc(89,k,1,1,"app-confirm-password",34)),2&c){let g,P,A,M,j,N,U,x,O,E;e.Q6J("formGroup",o.form),e.xp6(8),e.Q6J("ngIf",(null==(g=o.form.get("email"))||null==g.errors?null:g.errors.required)&&(null==(g=o.form.get("email"))?null:g.touched)),e.xp6(1),e.Q6J("ngIf",(null==(P=o.form.get("email"))||null==P.errors?null:P.errors.pattern)&&(null==(P=o.form.get("email"))?null:P.touched)),e.xp6(8),e.Q6J("disable",o.form.disabled)("list",e.lcZ(18,25,o.countries$))("label","+374")("keyName","numCodeForView"),e.xp6(4),e.Q6J("ngIf",(null==(A=o.form.get("phoneCode"))||null==A.errors?null:A.errors.required)&&(null==(A=o.form.get("phoneCode"))?null:A.touched)||(null==(A=o.form.get("mobile"))||null==A.errors?null:A.errors.required)&&(null==(A=o.form.get("mobile"))?null:A.touched)),e.xp6(9),e.Q6J("ngIf",(null==(M=o.form.get("userName"))?null:M.errors)&&(null==(M=o.form.get("userName"))?null:M.touched)),e.xp6(8),e.Q6J("disable",o.form.disabled)("label","time zone*")("list",e.lcZ(39,27,o.timeZones$))("keyName","displayName"),e.xp6(2),e.Q6J("ngIf",(null==(j=o.form.get("preferredTimeZone"))?null:j.errors)&&(null==(j=o.form.get("preferredTimeZone"))?null:j.touched)),e.xp6(7),e.Q6J("label","country*")("keyName","nameLowerCase")("list",e.lcZ(48,29,o.countries$))("disable",o.form.disabled),e.xp6(4),e.Q6J("ngIf",(null==(N=o.userAddress.get("countryId"))||null==N.errors?null:N.errors.required)&&(null==(N=o.userAddress.get("countryId"))?null:N.touched)),e.xp6(8),e.Q6J("ngIf",(null==(U=o.userAddress.get("city"))||null==U.errors?null:U.errors.required)&&(null==(U=o.userAddress.get("city"))?null:U.touched)),e.xp6(8),e.Q6J("ngIf",(null==(x=o.userAddress.get("streetNumber"))||null==x.errors?null:x.errors.required)&&(null==(x=o.userAddress.get("streetNumber"))?null:x.touched)),e.xp6(8),e.Q6J("ngIf",(null==(O=o.userAddress.get("streetName"))||null==O.errors?null:O.errors.required)&&(null==(O=o.userAddress.get("streetName"))?null:O.touched)),e.xp6(8),e.Q6J("ngIf",(null==(E=o.userAddress.get("zipCode"))||null==E.errors?null:E.errors.required)&&(null==(E=o.userAddress.get("zipCode"))?null:E.touched)),e.xp6(4),e.Q6J("disabled",o.form.disabled),e.xp6(2),e.Q6J("ngIf",o.isOpenPasswordModal)}},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,i.O5,d.H,n.x0,S],pipes:[i.Ov],styles:[""]}),l})()},5127:(J,C,a)=>{a.d(C,{h:()=>q});var n=a(5319),u=a(3679),e=a(8307),r=a(7716),I=a(3328),T=a(6332),w=a(3808),i=a(8583),d=a(9092);function _(m,Z){if(1&m){const s=r.EpF();r.TgZ(0,"div",14),r.TgZ(1,"img",15),r.NdJ("click",function(){r.CHM(s);const p=r.oxw().$implicit;return r.oxw().removeForm(p)}),r.qZA(),r.qZA()}}function y(m,Z){if(1&m){const s=r.EpF();r.TgZ(0,"i",16),r.NdJ("click",function(){return r.CHM(s),r.oxw(2).addNewForm()}),r.qZA()}}function S(m,Z){if(1&m){const s=r.EpF();r.ynx(0,5),r.TgZ(1,"div",6),r.TgZ(2,"div",7),r.TgZ(3,"app-select",8),r.NdJ("ngModelChange",function(p){const h=r.CHM(s).index;return r.oxw().categoryChange(p,h)}),r.ALo(4,"async"),r.qZA(),r.qZA(),r.TgZ(5,"div",7),r.TgZ(6,"app-select",9),r.NdJ("ngModelChange",function(p){const h=r.CHM(s).index,v=r.oxw();return v.subjectChange(p,h,v.formArray.controls[h])}),r.ALo(7,"async"),r.qZA(),r.qZA(),r.TgZ(8,"div",7),r._UZ(9,"app-select",10),r.ALo(10,"async"),r.ALo(11,"async"),r.qZA(),r.TgZ(12,"div",11),r.YNc(13,_,2,0,"div",12),r.YNc(14,y,1,0,"i",13),r.qZA(),r.qZA(),r.BQk()}if(2&m){const s=Z.index,t=r.oxw();let p;r.xp6(1),r.Q6J("formGroupName",s),r.xp6(2),r.Q6J("label","Category*")("keyName","categoryName")("list",r.lcZ(4,13,t.categories$)),r.xp6(3),r.Q6J("label","Subject*")("keyName","subjectName")("list",r.lcZ(7,15,null==t.observables[s]?null:t.observables[s].subjects$)),r.xp6(3),r.Q6J("label","Level*")("list",r.lcZ(10,17,null==t.observables[s]?null:t.observables[s].levels$))("keyName","level")("disable",!(null!=(p=r.lcZ(11,19,null==t.observables[s]?null:t.observables[s].levels$))&&p.length)),r.xp6(4),r.Q6J("ngIf",s>0),r.xp6(1),r.Q6J("ngIf",s===t.formArray.controls.length-1)}}let q=(()=>{class m{constructor(s,t,p,f){this.fb=s,this.storageService=t,this.infoService=p,this.settingService=f,this.subscription=new n.w,this.observables=[{subjects$:null,levels$:null}]}ngOnInit(){this.formInitialization(),this.categories$=this.infoService.getCategories(),this.getTutorSubjects()}formInitialization(){this.form=this.fb.group({formArray:this.fb.array([this.createNewForm()])})}createNewForm(){return this.fb.group({levelId:[null],subjectId:[null],categoryId:[null],userId:[this.storageService.getUserId()],userType:[this.storageService.getUserType()],id:[null]})}get formArray(){return this.form.get("formArray")}addNewForm(){const s=this.createNewForm();s.valueChanges.subscribe(()=>this.formArray.updateValueAndValidity()),this.formArray.controls.push(s),this.formArray.updateValueAndValidity()}removeForm(s){this.formArray.controls=this.formArray.controls.filter(t=>t!==s),this.formArray.updateValueAndValidity()}onSubmit(){this.form.valid&&this.updateTutorSubjects()}updateTutorSubjects(){1===this.storageService.getUserType()?this.subscription.add(this.settingService.updateTutorSubjects(this.formArray.value).subscribe()):this.subscription.add(this.settingService.updateStudentSubjects(this.formArray.value).subscribe())}patchTutorSubjects(s){s.length&&(this.formArray.controls=[],this.observables=[],s.forEach(t=>{var p,f;const h=this.createNewForm();h.patchValue(t),null===(p=this.formArray)||void 0===p||p.controls.push(h),this.observables[(null===(f=this.formArray)||void 0===f?void 0:f.controls.length)-1]={subjects$:this.infoService.getSubjectsByCategoryId(t.categoryId),levels$:this.infoService.getLevelsBySubjectId(t.subjectId)}}),this.formArray.updateValueAndValidity())}getTutorSubjects(){1===this.storageService.getUserType()?this.subscription.add(this.settingService.getTutorSubjects(this.storageService.getUserId()).subscribe(s=>{this.patchTutorSubjects(s)})):this.subscription.add(this.settingService.getStudentSubjects(this.storageService.getUserId()).subscribe(s=>{this.patchTutorSubjects(s)}))}categoryChange(s,t){this.observables[t]||(this.observables[t]={subjects$:null,levels$:null}),this.observables[t].subjects$=this.infoService.getSubjectsByCategoryId(s)}subjectChange(s,t,p){this.observables[t].levels$=this.infoService.getLevelsBySubjectId(s).pipe((0,e.b)(f=>{var h,v;f.length?(null===(h=p.get("levelId"))||void 0===h||h.setValidators(u.kI.required),p.get("levelId").updateValueAndValidity()):(null===(v=p.get("levelId"))||void 0===v||v.removeValidators(u.kI.required),p.get("levelId").updateValueAndValidity()),this.form.updateValueAndValidity()}))}ngOnDestroy(){this.subscription.unsubscribe()}}return m.\u0275fac=function(s){return new(s||m)(r.Y36(u.qu),r.Y36(I.V),r.Y36(T.M),r.Y36(w.g))},m.\u0275cmp=r.Xpm({type:m,selectors:[["app-subjects"]],decls:6,vars:2,consts:[[1,"tutor-settings-nested-page","subjects-wrapper"],[1,"tutor-settings-nested-page__form",3,"formGroup","ngSubmit"],[1,"flex-container-justify-start","grid-gap-space"],["formArrayName","formArray",4,"ngFor","ngForOf"],["type","submit",1,"settings-form-button"],["formArrayName","formArray"],[1,"d-flex","selectRow",3,"formGroupName"],[1,"form-label","fixed-width"],["formControlName","categoryId",3,"label","keyName","list","ngModelChange"],["formControlName","subjectId",3,"label","keyName","list","ngModelChange"],["formControlName","levelId",3,"label","list","keyName","disable"],[1,"flex-container","grid-gap-for-icons"],["class","recycle-bin-wrapper",4,"ngIf"],["class","fas fa-plus",3,"click",4,"ngIf"],[1,"recycle-bin-wrapper"],["src","./assets/images/recycleBin.png","alt","Recycle Byn",3,"click"],[1,"fas","fa-plus",3,"click"]],template:function(s,t){1&s&&(r.TgZ(0,"div",0),r.TgZ(1,"form",1),r.NdJ("ngSubmit",function(){return t.onSubmit()}),r.TgZ(2,"div",2),r.YNc(3,S,15,21,"ng-container",3),r.qZA(),r.TgZ(4,"button",4),r._uU(5,"Update information"),r.qZA(),r.qZA(),r.qZA()),2&s&&(r.xp6(1),r.Q6J("formGroup",t.form),r.xp6(2),r.Q6J("ngForOf",t.formArray.controls))},directives:[u._Y,u.JL,u.sg,i.sg,u.CE,u.x0,d.H,u.JJ,u.u,i.O5],pipes:[i.Ov],styles:[""]}),m})()},3808:(J,C,a)=>{a.d(C,{g:()=>I});var n=a(2340),u=a(1841),e=a(8002),r=a(7716);let I=(()=>{class T{constructor(i){this.http=i,this.url=`${n.N.apiUrl}/Settings`}updateProfileInformation(i){return this.http.put(`${this.url}/UpdateProfileInformation`,i)}updateRateAndPolitics(i){return this.http.put(`${this.url}/UpdateRateAndPolitics`,i)}getRateAndPolitics(i){let d=new u.LE;return d=d.append("userId",i),this.http.get(`${this.url}/GetRateAndPolitics`,{params:d}).pipe((0,e.U)(_=>_.result))}saveAvailabilities(i){return this.http.post(`${this.url}/SaveAvailabilities`,i)}updateAvailabilities(i){return this.http.put(`${this.url}/UpdateAvailabilities`,i)}getAvailabilities(i){let d=new u.LE;return d=d.append("userId",i),this.http.get(`${this.url}/GetAvailabilities`,{params:d}).pipe((0,e.U)(_=>_.result))}getTutorSubjects(i){let d=new u.LE;return d=d.append("userId",i),this.http.get(`${this.url}/GetTutorSubjects`,{params:d}).pipe((0,e.U)(_=>_.result))}getStudentSubjects(i){let d=new u.LE;return d=d.append("userId",i),this.http.get(`${this.url}/GetStudentSubjects`,{params:d}).pipe((0,e.U)(_=>_.result))}updateTutorSubjects(i){return this.http.put(`${this.url}/UpdateTutorSubjects`,i)}updateStudentSubjects(i){return this.http.put(`${this.url}/UpdateStudentSubjects`,i)}updatePassword(i){return this.http.put(`${this.url}/UpdatePassword`,i)}updatePersonalInformation(i,d){let _=new u.LE;return _=_.append("password",d),this.http.put(`${this.url}/UpdatePersonalInformation`,i,{params:_})}getPersonalInformation(i){let d=new u.LE;return d=d.append("userId",i),this.http.get(`${this.url}/GetPersonalInformation`,{params:d}).pipe((0,e.U)(_=>_.result))}}return T.\u0275fac=function(i){return new(i||T)(r.LFG(u.eN))},T.\u0275prov=r.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()}}]);