"use strict";(self.webpackChunkschool=self.webpackChunkschool||[]).push([[33],{2033:(D,m,i)=>{i.r(m),i.d(m,{StudentSettingsModule:()=>j});var c=i(8583),a=i(4655),t=i(7716),p=i(7089);const d=function(){return["./"]},g=function(){return{exact:!0}},f=function(){return["subjects"]},Z=function(){return["personalInformation"]},h=function(){return["paymentMethod"]},T=function(){return["changePassword"]};let A=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-settings"]],decls:19,vars:12,consts:[[1,"settings-wrapper"],[1,"settings-wrapper-title","flex-container-justify-start"],["src","./assets/images/settings.svg","alt","settings","width","23","height","23"],[1,"flex-container-start","full-height-container"],[1,"user-setting-list"],["routerLinkActive","active",1,"user-setting-list__item","flex-container-justify-start",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"user-setting-list__item","flex-container-justify-start",3,"routerLink"],[1,"user-setting-main-info"]],template:function(o,r){1&o&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t.TgZ(2,"h2",1),t._uU(3," Profile settings "),t._UZ(4,"img",2),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"ul",4),t.TgZ(7,"li",5),t._uU(8,"Profile information "),t.qZA(),t.TgZ(9,"li",6),t._uU(10,"Subjects "),t.qZA(),t.TgZ(11,"li",6),t._uU(12,"Personal information "),t.qZA(),t.TgZ(13,"li",6),t._uU(14,"Payment method "),t.qZA(),t.TgZ(15,"li",6),t._uU(16,"Change password "),t.qZA(),t.qZA(),t.TgZ(17,"section",7),t._UZ(18,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(7),t.Q6J("routerLink",t.DdM(6,d))("routerLinkActiveOptions",t.DdM(7,g)),t.xp6(2),t.Q6J("routerLink",t.DdM(8,f)),t.xp6(2),t.Q6J("routerLink",t.DdM(9,Z)),t.xp6(2),t.Q6J("routerLink",t.DdM(10,h)),t.xp6(2),t.Q6J("routerLink",t.DdM(11,T)))},directives:[p.G,a.Od,a.rH,a.lC],styles:[""]}),e})();var v=i(5319),b=i(3328),n=i(3679),q=i(7988),U=i(7779),C=i(6275);function S(e,s){if(1&e&&t._UZ(0,"img",19),2&e){const o=t.oxw();t.Q6J("src",o.userImage,t.LSH)}}let y=(()=>{class e{constructor(o,r,l,u,F,L){this.storageService=o,this.fb=r,this.registrationService=l,this.settingsService=u,this.cd=F,this.validationService=L,this.subscription=new v.w}ngOnInit(){this.initializeForm(),this.getWrapUpProfile()}getWrapUpProfile(){this.subscription.add(this.registrationService.getWrapUpProfile(this.storageService.getUserId()).subscribe(o=>{o&&(this.form.patchValue(o),this.userImage=o.photo)}))}selectFile(o){const r=new FileReader;o.target.files[0]&&(r.readAsDataURL(o.target.files[0]),r.onload=l=>{this.checkImageSizes(r.result)})}checkImageSizes(o){this.validationService.checkImageSizes(o).then(r=>{r?(this.userImage=r,this.isSmallSizeForImage=!1):this.isSmallSizeForImage=!0,this.cd.detectChanges()})}initializeForm(){this.form=this.fb.group({id:[null],userId:[this.storageService.getUserId()],photo:[null],wrapUp:[null]})}onSubmit(){this.subscription.add(this.settingsService.updateProfileInformation(Object.assign(Object.assign({},this.form.value),{photo:this.userImage})).subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(b.V),t.Y36(n.qu),t.Y36(q.g),t.Y36(U.g),t.Y36(t.sBO),t.Y36(C.R))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile-information"]],decls:26,vars:6,consts:[[3,"formGroup","ngSubmit"],[1,"user-sign-up-list","profile-wrapper"],[1,"user-sign-up-list__item"],[1,"form-item-label","upload-photo-title"],[1,"file-upload-wrapper"],[1,"upload-image-box"],[1,"image-upload-wrap"],["alt","Upload Photo",3,"src",4,"ngIf"],[1,"upload-photo-btn"],["type","file","accept","image/*",1,"file-upload-input","upload-for-settings",3,"change"],["src","assets/images/photo-camera%201.png","alt","Upload Photo","width","33","height","33"],[1,"upload-image-requirement"],[1,"form-item-notification"],[1,"user-sign-up-list__item","large-size"],[1,"form-item-label"],["for","wrapUp",1,"form-label","form-label--flex-container"],["id","wrapUp","type","text","rows","10","cols","10","placeholder","A short headline about yourself*","formControlName","wrapUp",1,"form-textarea"],[1,"flex-container-center"],["type","submit",1,"settings-form-button"],["alt","Upload Photo",3,"src"]],template:function(o,r){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(1,"ul",1),t.TgZ(2,"li",2),t.TgZ(3,"h3",3),t._uU(4,"Profile photo*"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.YNc(8,S,1,1,"img",7),t.qZA(),t.TgZ(9,"button",8),t.TgZ(10,"input",9),t.NdJ("change",function(u){return r.selectFile(u)}),t.qZA(),t._UZ(11,"img",10),t.qZA(),t.qZA(),t.TgZ(12,"div",11),t.TgZ(13,"p",12),t._uU(14,"Minimum size 200 x 200 pixels."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"li",13),t.TgZ(16,"h3",14),t._uU(17,"Wrap up your profile"),t.qZA(),t.TgZ(18,"label",15),t.TgZ(19,"textarea",16),t._uU(20," A short headline about yourself *\n                "),t.qZA(),t.qZA(),t.TgZ(21,"p",12),t._uU(22,"Briefly describe what you need help with"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"button",18),t._uU(25,"Update information"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("formGroup",r.form),t.xp6(7),t.ekj("image-uploaded",r.userImage),t.xp6(1),t.Q6J("ngIf",r.userImage),t.xp6(5),t.ekj("text-danger",r.isSmallSizeForImage))},directives:[n._Y,n.JL,n.sg,c.O5,n.Fj,n.JJ,n.u],styles:[""]}),e})();var x=i(5127),I=i(9092);let P=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-payment-method"]],decls:74,vars:2,consts:[[1,"tutor-settings-nested-page"],[1,"tutor-settings-page-title"],[1,"tutor-settings-page-notification","form-item-notification"],["action","",1,"tutor-settings-nested-page__form","tutor-settings-nested-page__form--fixed--width"],[1,"tutor-settings-page-legend"],[1,"form-legend-title-tab","active"],[1,"setting-form-input-wrapper"],[1,"form-item-label"],["for","account-holder-name",1,"form-label"],["id","account-holder-name","name","account-holder-name","required","","autocomplete","accountHolderName","type","text","placeholder","Account holder\u2019s name","formControlName","accountHolderName",1,"form-input"],[1,"error-message"],["for","card-number",1,"form-label"],["id","card-number","name","card-number","required","","autocomplete","card-number","type","text","placeholder","Card Number*","formControlName","cardNumber",1,"form-input"],[1,"flex-container","form-label","double-select","fixed-width"],[1,"p-relative","min-width-select"],["formControlName","monthId",1,"form-input","selectpicker"],["formControlName","year",1,"form-input","selectpicker"],["for","cvv",1,"form-label"],["id","cvv","name","cvv","required","","autocomplete","card-cvv","type","number","placeholder","CVC2/CVV2*","formControlName","cardCvv",1,"form-input","cvv"],["formGroupName","billingAddress",1,"billing-address-container"],[1,"tutor-settings-page-title","size-mid"],["for","address",1,"form-label"],["id","address","autocomplete","address","type","text","placeholder","Address*","formControlName","address",1,"form-input"],[1,"error-message","block"],["for","city",1,"form-label"],["id","city","autocomplete","city","type","text","placeholder","City*","formControlName","city",1,"form-input"],[1,"form-label"],["aria-placeholder","State*","formControlName","stateId",3,"keyName","label"],["for","zipCode",1,"form-label"],["id","zipCode","autocomplete","zipCode","placeholder","Zip Code*","formControlName","zipCode",1,"form-input"],[1,"flex-container-center","grid-gap-for-buttons"],[1,"settings-form-button","settings-form-button__with-border","button-border--blue"],[1,"settings-form-button","settings-form-button__with-border","button-border--green"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t._uU(2,"Add Payment Method"),t.qZA(),t.TgZ(3,"p",2),t._uU(4," Please be informed that in case of providing a non- US dollar account/card, the amount will be transferred to the appropriate account at the exchange rate set by your bank for the respective currency. "),t.qZA(),t.TgZ(5,"form",3),t.TgZ(6,"fieldset"),t.TgZ(7,"legend",4),t.TgZ(8,"h3",5),t._uU(9,"CREDIT CARD/DEBIT CARD"),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div"),t.TgZ(12,"h3",7),t._uU(13,"Insert your name as it appears on the card*"),t.qZA(),t.TgZ(14,"label",8),t._UZ(15,"input",9),t.TgZ(16,"span",10),t._uU(17,"This is a required field."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div"),t.TgZ(19,"h3",7),t._uU(20,"Card number* "),t.qZA(),t.TgZ(21,"label",11),t._UZ(22,"input",12),t.TgZ(23,"span",10),t._uU(24,"This is a required field."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div"),t.TgZ(26,"h3",7),t._uU(27,"Card expiration date* "),t.qZA(),t.TgZ(28,"div",13),t.TgZ(29,"div",14),t.TgZ(30,"select",15),t.TgZ(31,"option"),t._uU(32,"tets"),t.qZA(),t.TgZ(33,"option"),t._uU(34,"tets"),t.qZA(),t.TgZ(35,"option"),t._uU(36,"tets"),t.qZA(),t.qZA(),t.TgZ(37,"span",10),t._uU(38,"This is a required field."),t.qZA(),t.qZA(),t.TgZ(39,"div",14),t.TgZ(40,"select",16),t.TgZ(41,"option"),t._uU(42,"jjsdjskd"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div"),t.TgZ(44,"h3",7),t._uU(45,"CVC2/CVV2* "),t.qZA(),t.TgZ(46,"label",17),t._UZ(47,"input",18),t.TgZ(48,"span",10),t._uU(49,"This is a required field."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",19),t.TgZ(51,"h3",20),t._uU(52,"Billing Address"),t.qZA(),t.TgZ(53,"label",21),t._UZ(54,"input",22),t.TgZ(55,"span",23),t._uU(56,"This is a required field"),t.qZA(),t.qZA(),t.TgZ(57,"label",24),t._UZ(58,"input",25),t.TgZ(59,"span",23),t._uU(60,"This is a required field"),t.qZA(),t.qZA(),t.TgZ(61,"label",26),t._UZ(62,"app-select",27),t.TgZ(63,"span",23),t._uU(64,"This is a required field"),t.qZA(),t.qZA(),t.TgZ(65,"label",28),t._UZ(66,"input",29),t.TgZ(67,"span",23),t._uU(68,"This is a required field"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(69,"div",30),t.TgZ(70,"button",31),t._uU(71,"Edit"),t.qZA(),t.TgZ(72,"button",32),t._uU(73,"Save"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(62),t.Q6J("keyName","name")("label","State*"))},directives:[n._Y,n.JL,n.Fj,n.Q7,n.JJ,n.u,n.EJ,n.YN,n.Kr,n.wV,n.x0,I.H],styles:[".min-width-select[_ngcontent-%COMP%]{flex:1}.tutor-settings-page-notification[_ngcontent-%COMP%]{max-width:61%;margin-bottom:30px}.billing-address-container[_ngcontent-%COMP%]{margin-top:139px}.billing-address-container[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{margin-bottom:20px}.billing-address-container[_ngcontent-%COMP%]   .size-mid[_ngcontent-%COMP%]{font-size:20px}"]}),e})();var _=i(1618),M=i(1700);const N=[{path:"",component:A,children:[{path:"",component:y},{path:"subjects",component:x.h},{path:"personalInformation",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-personal-information"]],decls:1,vars:0,template:function(o,r){1&o&&t._UZ(0,"app-personal-information")},directives:[M.i],styles:[""]}),e})()},{path:"paymentMethod",component:P},{path:"changePassword",component:_.p}]}];let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(N)],a.Bz]}),e})();var J=i(2372),O=i(4466);let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,z,J.E,O.m,n.UX]]}),e})()}}]);