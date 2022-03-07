"use strict";(self.webpackChunkschool=self.webpackChunkschool||[]).push([[333],{6333:(Me,O,c)=>{c.r(O),c.d(O,{TutorSettingsModule:()=>Ae});var h=c(8583),g=c(4655),t=c(7716),nt=c(7089);const it=function(){return["./"]},at=function(){return{exact:!0}},ot=function(){return["rates"]},rt=function(){return["availability"]},st=function(){return["subjects"]},lt=function(){return["institutions"]},ct=function(){return["certificates"]},dt=function(){return["personal-information"]},ut=function(){return["payment-methode"]},pt=function(){return["change-password"]};let mt=(()=>{class i{constructor(e,n){this.route=e,this.router=n}ngOnInit(){}navigate(e){this.router.navigate([`tutor/settings${e}`])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.gz),t.Y36(g.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tutor-settings"]],decls:27,vars:20,consts:[[1,"settings-wrapper"],[1,"settings-wrapper-title","flex-container-justify-start"],["src","./assets/images/settings.svg","alt","settings","width","23","height","23"],[1,"flex-container-start","full-height-container"],[1,"user-setting-list"],["routerLinkActive","active",1,"user-setting-list__item","flex-container-justify-start",3,"routerLink","routerLinkActiveOptions"],["routerLinkActive","active",1,"user-setting-list__item","flex-container-justify-start",3,"routerLink"],[1,"user-setting-main-info"]],template:function(e,n){1&e&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t.TgZ(2,"h2",1),t._uU(3," Profile settings "),t._UZ(4,"img",2),t.qZA(),t.TgZ(5,"div",3),t.TgZ(6,"ul",4),t.TgZ(7,"li",5),t._uU(8,"Profile information "),t.qZA(),t.TgZ(9,"li",6),t._uU(10,"Rates and politics"),t.qZA(),t.TgZ(11,"li",6),t._uU(12,"Availability"),t.qZA(),t.TgZ(13,"li",6),t._uU(14,"Subjects"),t.qZA(),t.TgZ(15,"li",6),t._uU(16,"Institutions"),t.qZA(),t.TgZ(17,"li",6),t._uU(18,"Certificates"),t.qZA(),t.TgZ(19,"li",6),t._uU(20,"Personal information "),t.qZA(),t.TgZ(21,"li",6),t._uU(22,"Payment method "),t.qZA(),t.TgZ(23,"li",6),t._uU(24,"Change password "),t.qZA(),t.qZA(),t.TgZ(25,"section",7),t._UZ(26,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("routerLink",t.DdM(10,it))("routerLinkActiveOptions",t.DdM(11,at)),t.xp6(2),t.Q6J("routerLink",t.DdM(12,ot)),t.xp6(2),t.Q6J("routerLink",t.DdM(13,rt)),t.xp6(2),t.Q6J("routerLink",t.DdM(14,st)),t.xp6(2),t.Q6J("routerLink",t.DdM(15,lt)),t.xp6(2),t.Q6J("routerLink",t.DdM(16,ct)),t.xp6(2),t.Q6J("routerLink",t.DdM(17,dt)),t.xp6(2),t.Q6J("routerLink",t.DdM(18,ut)),t.xp6(2),t.Q6J("routerLink",t.DdM(19,pt)))},directives:[nt.G,g.Od,g.rH,g.lC],styles:[""]}),i})();var s=c(3679),f=c(5319),k=c(3328),ht=c(7988),w=c(7779),bt=c(6275);function ft(i,o){if(1&i&&t._UZ(0,"img",24),2&i){const e=t.oxw();t.Q6J("src",e.userImage,t.LSH)}}function gt(i,o){1&i&&(t.TgZ(0,"span",25),t._uU(1,"This is a required field"),t.qZA())}function _t(i,o){1&i&&(t.TgZ(0,"span",25),t._uU(1,"This is a required field"),t.qZA())}let Tt=(()=>{class i{constructor(e,n,a,r,l,d){this.storageService=e,this.fb=n,this.registrationService=a,this.settingsService=r,this.cd=l,this.validationService=d,this.subscription=new f.w}ngOnInit(){this.initializeForm(),this.getWrapUpProfile()}getWrapUpProfile(){this.subscription.add(this.registrationService.getWrapUpProfile(this.storageService.getUserId()).subscribe(e=>{e&&(this.form.patchValue(e),this.userImage=e.photo)}))}selectFile(e){const n=new FileReader;n.readAsDataURL(e.target.files[0]),e.target.files[0]&&(n.onload=a=>{this.checkImageSizes(n.result)})}checkImageSizes(e){this.validationService.checkImageSizes(e).then(n=>{n?(this.userImage=n,this.isSmallSizeForImage=!1):this.isSmallSizeForImage=!0,this.cd.detectChanges()})}initializeForm(){this.form=this.fb.group({id:[null],userId:[this.storageService.getUserId()],headline:[null,[s.kI.required,s.kI.minLength(15),s.kI.maxLength(75),s.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],photo:[null],bio:[null,[s.kI.required,s.kI.minLength(100),s.kI.maxLength(2e3),s.kI.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],wrapUp:[null]})}onSubmit(){this.subscription.add(this.settingsService.updateProfileInformation(Object.assign(Object.assign({},this.form.value),{photo:this.userImage})).subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k.V),t.Y36(s.qu),t.Y36(ht.g),t.Y36(w.g),t.Y36(t.sBO),t.Y36(bt.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-profile"]],decls:44,vars:12,consts:[[3,"formGroup","ngSubmit"],[1,"user-sign-up-list","profile-wrapper"],[1,"user-sign-up-list__item"],[1,"form-item-label","upload-photo-title"],[1,"file-upload-wrapper"],[1,"upload-image-box"],[1,"image-upload-wrap"],["alt","Upload Photo",3,"src",4,"ngIf"],[1,"upload-photo-btn"],["type","file","accept","image/*",1,"file-upload-input",3,"change"],["src","assets/images/photo-camera%201.png","alt","Upload Photo","width","33","height","33"],[1,"upload-image-requirement"],[1,"form-item-notification"],[1,"form-item-label"],["for","profile-headline",1,"form-label","form-label--flex-container"],["id","profile-headline","type","text","rows","5","cols","100","placeholder","A short headline about yourself*","formControlName","headline",1,"form-textarea"],["class","error-message",4,"ngIf"],[1,"user-sign-up-list__item","large-size"],["for","bio",1,"form-label","form-label--flex-container"],["id","bio","type","text","rows","10","cols","10","placeholder","A short headline about yourself*","formControlName","bio",1,"form-textarea"],["for","wrapUp",1,"form-label","form-label--flex-container"],["id","wrapUp","type","text","rows","10","cols","10","placeholder","A short headline about yourself*","formControlName","wrapUp",1,"form-textarea"],[1,"flex-container-center"],["type","submit",1,"settings-form-button"],["alt","Upload Photo",3,"src"],[1,"error-message"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"ul",1),t.TgZ(2,"li",2),t.TgZ(3,"h3",3),t._uU(4,"Profile photo*"),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.YNc(8,ft,1,1,"img",7),t.qZA(),t.TgZ(9,"button",8),t.TgZ(10,"input",9),t.NdJ("change",function(r){return n.selectFile(r)}),t.qZA(),t._UZ(11,"img",10),t.qZA(),t.qZA(),t.TgZ(12,"div",11),t.TgZ(13,"p",12),t._uU(14,"Minimum size 200 x 200 pixels."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"li",2),t.TgZ(16,"h3",13),t._uU(17,"Profile Headline"),t.qZA(),t.TgZ(18,"label",14),t.TgZ(19,"textarea",15),t._uU(20,"A short headline about yourself*\n        "),t.qZA(),t.YNc(21,gt,2,0,"span",16),t.TgZ(22,"span",12),t._uU(23,"Your profile headline must be between 15 and 75 characters."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"li",17),t.TgZ(25,"h3",13),t._uU(26,"Bio"),t.qZA(),t.TgZ(27,"label",18),t.TgZ(28,"textarea",19),t._uU(29,"A short headline about yourself*\n                "),t.qZA(),t.YNc(30,_t,2,0,"span",16),t.qZA(),t.TgZ(31,"p",12),t._uU(32,"Your free response must be between 100 and 2000 characters."),t.qZA(),t.qZA(),t.TgZ(33,"li",17),t.TgZ(34,"h3",13),t._uU(35,"Wrap up your profile"),t.qZA(),t.TgZ(36,"label",20),t.TgZ(37,"textarea",21),t._uU(38," A short headline about yourself*\n                "),t.qZA(),t.qZA(),t.TgZ(39,"p",12),t._uU(40,"Encourage students to contact you to learn more and schedule lessons."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"div",22),t.TgZ(42,"button",23),t._uU(43,"Update information"),t.qZA(),t.qZA(),t.qZA()),2&e){let a,r,l,d;t.Q6J("formGroup",n.form),t.xp6(7),t.ekj("image-uploaded",n.userImage),t.xp6(1),t.Q6J("ngIf",null==n.userImage?null:n.userImage.length),t.xp6(5),t.ekj("text-danger",n.isSmallSizeForImage),t.xp6(8),t.Q6J("ngIf",(null==(a=n.form.get("headline"))||null==a.errors?null:a.errors.required)&&(null==(a=n.form.get("headline"))?null:a.touched)),t.xp6(1),t.ekj("text-danger",(null==(r=n.form.get("headline"))||null==r.errors?null:r.errors.minlength)||(null==(r=n.form.get("headline"))||null==r.errors?null:r.errors.maxlength)),t.xp6(8),t.Q6J("ngIf",(null==(l=n.form.get("bio"))||null==l.errors?null:l.errors.required)&&(null==(l=n.form.get("bio"))?null:l.touched)),t.xp6(1),t.ekj("text-danger",(null==(d=n.form.get("bio"))||null==d.errors?null:d.errors.minlength)||(null==(d=n.form.get("bio"))||null==d.errors?null:d.errors.maxlength))}},directives:[s._Y,s.JL,s.sg,h.O5,s.Fj,s.JJ,s.u],styles:[""]}),i})();var Y=c(6332),S=c(9092);function vt(i,o){1&i&&(t.TgZ(0,"span",13),t._uU(1,"This is a required field"),t.qZA())}function yt(i,o){1&i&&(t.TgZ(0,"span",13),t._uU(1,"You CANNOT enter anything below $20"),t.qZA())}let H=(()=>{class i{constructor(e,n,a,r){this.storageService=e,this.fb=n,this.settingsService=a,this.infoService=r,this.subscription=new f.w}ngOnInit(){this.initializeForm(),this.getRateAndPolitics(),this.cancelationHours$=this.infoService.getCancelationHours()}initializeForm(){this.form=this.fb.group({id:[null],userId:[this.storageService.getUserId()],hourlyRate:[null,[s.kI.required,s.kI.min(20),s.kI.max(1e3)]],cancellationId:[null]})}getRateAndPolitics(){this.subscription.add(this.settingsService.getRateAndPolitics(this.storageService.getUserId()).subscribe(e=>{this.form.patchValue(e)}))}onSubmit(){const e=Object.assign(Object.assign({},this.form.value),{hourlyRate:this.form.value.hourlyRate?+this.form.value.hourlyRate:null});this.subscription.add(this.settingsService.updateRateAndPolitics(e).subscribe())}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k.V),t.Y36(s.qu),t.Y36(w.g),t.Y36(Y.M))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-rates"]],decls:22,vars:7,consts:[[3,"formGroup","ngSubmit"],[1,"setting-list"],[1,"setting-list__item","mb-45"],[1,"form-item-label"],["for","hourlyRate",1,"form-label"],["id","hourlyRate","type","number","formControlName","hourlyRate",1,"form-input"],["class","error-message",4,"ngIf"],[1,"form-item-notification"],[1,"setting-list__item"],["for","cancellationId",1,"form-label"],["id","cancellationId","formControlName","cancellationId",1,"form-select",3,"label","list"],[1,"flex-container-center"],["type","submit",1,"settings-form-button"],[1,"error-message"]],template:function(e,n){if(1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"ul",1),t.TgZ(2,"li",2),t.TgZ(3,"h3",3),t._uU(4,"Hourly rate"),t.qZA(),t.TgZ(5,"label",4),t._UZ(6,"input",5),t.YNc(7,vt,2,0,"span",6),t.YNc(8,yt,2,0,"span",6),t.qZA(),t.TgZ(9,"p",7),t._uU(10,"The minimum hourly rate is $20"),t.qZA(),t.TgZ(11,"p",7),t._uU(12,"Your online lesson rate appears in search results and on your tutor profile when students are looking for online tutoring. "),t.qZA(),t.qZA(),t.TgZ(13,"li",8),t.TgZ(14,"h3",3),t._uU(15,"Lesson Cancelation"),t.qZA(),t.TgZ(16,"label",9),t._UZ(17,"app-select",10),t.ALo(18,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",11),t.TgZ(20,"button",12),t._uU(21,"Update information"),t.qZA(),t.qZA(),t.qZA()),2&e){let a,r;t.Q6J("formGroup",n.form),t.xp6(7),t.Q6J("ngIf",(null==(a=n.form.get("hourlyRate"))||null==a.errors?null:a.errors.required)&&(null==(a=n.form.get("hourlyRate"))?null:a.touched)),t.xp6(1),t.Q6J("ngIf",(null==(r=n.form.get("hourlyRate"))||null==r.errors?null:r.errors.min)&&(null==(r=n.form.get("hourlyRate"))?null:r.touched)),t.xp6(9),t.Q6J("label","None*")("list",t.lcZ(18,5,n.cancelationHours$))}},directives:[s._Y,s.JL,s.sg,s.wV,s.Fj,s.JJ,s.u,h.O5,S.H],pipes:[h.Ov],styles:[".form-input[_ngcontent-%COMP%]{width:418px}.form-select[_ngcontent-%COMP%]{width:241px}.mb-45[_ngcontent-%COMP%]{margin-bottom:45px}"]}),i})();function xt(i,o){1&i&&(t.TgZ(0,"span",16),t._uU(1,"This is a required field"),t.qZA())}function Ct(i,o){1&i&&(t.TgZ(0,"span",16),t._uU(1,"This is a required field"),t.qZA())}function At(i,o){1&i&&(t.TgZ(0,"span",16),t._uU(1,"This is a required field"),t.qZA())}function Mt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",17),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw().removeForm(a)}),t._UZ(1,"img",18),t.qZA()}}function Zt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"i",19),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).addNewForm()}),t.qZA()}}function It(i,o){if(1&i&&(t.ynx(0),t.TgZ(1,"div",6),t.TgZ(2,"div",7),t.TgZ(3,"div",8),t._UZ(4,"app-select",9),t.ALo(5,"async"),t.YNc(6,xt,2,0,"span",10),t.qZA(),t.TgZ(7,"div",8),t._UZ(8,"app-select",11),t.ALo(9,"async"),t.YNc(10,Ct,2,0,"span",10),t.qZA(),t.TgZ(11,"div",8),t._UZ(12,"app-select",12),t.ALo(13,"async"),t.YNc(14,At,2,0,"span",10),t.qZA(),t.TgZ(15,"div",13),t.YNc(16,Mt,2,0,"div",14),t.YNc(17,Zt,1,0,"i",15),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&i){const e=o.index,n=t.oxw();let a,r,l;t.xp6(2),t.Q6J("formGroupName",e),t.xp6(2),t.Q6J("label","days of week*")("list",t.lcZ(5,15,n.daysOfWeek$))("keyName","name"),t.xp6(2),t.Q6J("ngIf",(null==n.formArray.controls[e]||null==(a=n.formArray.controls[e].get("dayOfWeek"))?null:a.errors)&&(null==n.formArray.controls[e]||null==(a=n.formArray.controls[e].get("dayOfWeek"))?null:a.touched)),t.xp6(2),t.Q6J("label","hours of day*")("list",t.lcZ(9,17,n.hoursOfDay$))("keyName","time"),t.xp6(2),t.Q6J("ngIf",(null==n.formArray.controls[e]||null==(r=n.formArray.controls[e].get("startOfRange"))?null:r.errors)&&(null==n.formArray.controls[e]||null==(r=n.formArray.controls[e].get("startOfRange"))?null:r.touched)),t.xp6(2),t.Q6J("label","hours of day*")("list",t.lcZ(13,19,n.hoursOfDay$))("keyName","time"),t.xp6(2),t.Q6J("ngIf",(null==n.formArray.controls[e]||null==(l=n.formArray.controls[e].get("endOfRange"))?null:l.errors)&&(null==n.formArray.controls[e]||null==(l=n.formArray.controls[e].get("endOfRange"))?null:l.touched)),t.xp6(2),t.Q6J("ngIf",e>0),t.xp6(1),t.Q6J("ngIf",e===n.formArray.controls.length-1)}}let kt=(()=>{class i{constructor(e,n,a,r){this.fb=e,this.storageService=n,this.infoService=a,this.settingService=r,this.subscription=new f.w,this.actionType="CREATE"}ngOnInit(){this.formInitialization(),this.daysOfWeek$=this.infoService.getDaysOfWeek(),this.hoursOfDay$=this.infoService.getHoursOfDay(),this.getAvailabilities()}formInitialization(){this.form=this.fb.group({formArray:this.fb.array([this.createNewForm()])})}createNewForm(){return this.fb.group({endHourId:[null],startHourId:[null],dayId:[null],userId:[this.storageService.getUserId()],id:[null]})}get formArray(){return this.form.get("formArray")}addNewForm(){const e=this.createNewForm();e.valueChanges.subscribe(()=>this.formArray.updateValueAndValidity()),this.formArray.controls.push(e),this.formArray.updateValueAndValidity()}removeForm(e){this.formArray.controls=this.formArray.controls.filter(n=>n!==e),this.formArray.updateValueAndValidity()}onSubmit(){this.form.valid&&("CREATE"===this.actionType?this.saveAvailabilities():this.updateAvailabilities())}saveAvailabilities(){this.subscription.add(this.settingService.saveAvailabilities(this.formArray.value).subscribe())}updateAvailabilities(){this.subscription.add(this.settingService.updateAvailabilities(this.formArray.value).subscribe())}patchFormValue(e){this.formArray.controls=[],e.forEach(n=>{let a=this.createNewForm();a.patchValue(n),this.formArray.controls.push(a),this.formArray.updateValueAndValidity()})}getAvailabilities(){this.subscription.add(this.settingService.getAvailabilities(this.storageService.getUserId()).subscribe(e=>{e.length>0?(this.actionType="UPDATE",this.patchFormValue(e)):this.actionType="CREATE"}))}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.qu),t.Y36(k.V),t.Y36(Y.M),t.Y36(w.g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-availability"]],decls:11,vars:2,consts:[[1,"tutor-settings-nested-page"],[1,"tutor-settings-nested-page__info"],[1,"tutor-settings-nested-page__form",3,"formGroup"],[1,"flex-container-justify-start","grid-gap-space"],[4,"ngFor","ngForOf"],[1,"settings-form-button",3,"click"],["formArrayName","formArray"],[1,"d-flex","selectRow",3,"formGroupName"],[1,"form-label","fixed-width"],["formControlName","dayId",3,"label","list","keyName"],["class","error-message",4,"ngIf"],["formControlName","startHourId",3,"label","list","keyName"],["formControlName","endHourId",3,"label","list","keyName"],[1,"flex-container","grid-gap-for-icons"],["class","recycle-bin-wrapper text-danger",3,"click",4,"ngIf"],["class","fas fa-plus",3,"click",4,"ngIf"],[1,"error-message"],[1,"recycle-bin-wrapper","text-danger",3,"click"],["src","./assets/images/recycleBin.png","alt","recycle byn",1,"trashIcon"],[1,"fas","fa-plus",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h2"),t._uU(3,"Select the times you\u2019re generally available to tutor."),t.qZA(),t.TgZ(4,"p"),t._uU(5," Keeping your availability current not only cuts down on back-and-forth messaging with students, but will also improve your rank in our search results."),t.qZA(),t.qZA(),t.TgZ(6,"form",2),t.TgZ(7,"div",3),t.YNc(8,It,18,21,"ng-container",4),t.qZA(),t.TgZ(9,"button",5),t.NdJ("click",function(){return n.onSubmit()}),t._uU(10,"Update information"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",n.form),t.xp6(2),t.Q6J("ngForOf",n.formArray.controls))},directives:[s._Y,s.JL,s.sg,h.sg,s.CE,s.x0,S.H,s.JJ,s.u,h.O5],pipes:[h.Ov],styles:[".trashIcon[_ngcontent-%COMP%]{width:auto;cursor:pointer}"]}),i})();var wt=c(5127);let St=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-payment"]],decls:44,vars:1,consts:[[1,"tutor-settings-nested-page"],[1,"tutor-settings-page-title"],["action","",1,"tutor-settings-nested-page__form","tutor-settings-nested-page__form--fixed--width"],[1,"tutor-settings-page-legend"],[1,"form-legend-title-tab"],[1,"form-legend-title-tab","active"],[1,"setting-form-input-wrapper"],["for","account-holder-name",1,"form-label"],["id","account-holder-name","name","account-holder-name","required","","autocomplete","accountHolderName","type","text","placeholder","Account holder\u2019s name*","formControlName","accountHolderName",1,"form-input"],[1,"error-message"],[1,"fixed-width","form-label"],["formControlName","accountType",3,"label"],["for","bank-name",1,"form-label"],["id","bank-name","name","bank-name","required","","autocomplete","bank-name","type","text","placeholder","bank name*","formControlName","bankName",1,"form-input"],["for","nine-digit-routing",1,"form-label"],["id","nine-digit-routing","name","nine-digit-routing","required","","autocomplete","nine-digit-routing","type","text","placeholder","nine digit routing*","formControlName","nineDigitrouting",1,"form-input"],["for","confirm-routing",1,"form-label"],["id","confirm-routing","name","confirm-routing","required","","autocomplete","confirm-routing","type","text","placeholder","confirm routing*","formControlName","confirmRouting",1,"form-input"],["for","account",1,"form-label"],["id","account","name","account","required","","autocomplete","account","type","text","placeholder","account*","formControlName","account",1,"form-input"],["for","confirm-account",1,"form-label"],["id","confirm-account","name","confirm-account","required","","autocomplete","confirm-account","type","text","placeholder","confirm account*","formControlName","confirm-account",1,"form-input"],[1,"flex-container-center","grid-gap-for-buttons"],[1,"settings-form-button","settings-form-button__with-border","button-border--blue"],[1,"settings-form-button","settings-form-button__with-border","button-border--green"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h3",1),t._uU(2,"Add Payment Method"),t.qZA(),t.TgZ(3,"form",2),t.TgZ(4,"fieldset"),t.TgZ(5,"legend",3),t.TgZ(6,"h3",4),t._uU(7,"CREDIT CARD/DEBIT CARD"),t.qZA(),t.TgZ(8,"h3",5),t._uU(9,"DIRECT DEPOSIT"),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",7),t._UZ(12,"input",8),t.TgZ(13,"span",9),t._uU(14,"The Current Password field is required."),t.qZA(),t.qZA(),t.TgZ(15,"div",10),t._UZ(16,"app-select",11),t.TgZ(17,"span",9),t._uU(18,"Please specify your gender"),t.qZA(),t.qZA(),t.TgZ(19,"label",12),t._UZ(20,"input",13),t.TgZ(21,"span",9),t._uU(22,"The Confirm New Password field is required."),t.qZA(),t.qZA(),t.TgZ(23,"label",14),t._UZ(24,"input",15),t.TgZ(25,"span",9),t._uU(26,"The Confirm New Password field is required."),t.qZA(),t.qZA(),t.TgZ(27,"label",16),t._UZ(28,"input",17),t.TgZ(29,"span",9),t._uU(30,"The Confirm New Password field is required."),t.qZA(),t.qZA(),t.TgZ(31,"label",18),t._UZ(32,"input",19),t.TgZ(33,"span",9),t._uU(34,"The Confirm New Password field is required."),t.qZA(),t.qZA(),t.TgZ(35,"label",20),t._UZ(36,"input",21),t.TgZ(37,"span",9),t._uU(38,"The Confirm New Password field is required."),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",22),t.TgZ(40,"button",23),t._uU(41,"Edit"),t.qZA(),t.TgZ(42,"button",24),t._uU(43,"Save"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(16),t.Q6J("label","account type*"))},directives:[s._Y,s.JL,s.Fj,s.Q7,s.JJ,s.u,S.H],styles:[""]}),i})();var Rt=c(1618),Lt=c(193);let Pt=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tutor-institutions"]],decls:2,vars:0,consts:[[1,"tutor-institution-wrapper"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-institutions"),t.qZA())},directives:[Lt.O],styles:[".tutor-institution-wrapper[_ngcontent-%COMP%]{width:80%;padding:50px 0}"]}),i})();var Dt=c(7598);let Bt=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tutor-certificates"]],decls:2,vars:0,consts:[[1,"min-width-certificates-wrapper"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-certificates"),t.qZA())},directives:[Dt.T],styles:[".min-width-certificates-wrapper[_ngcontent-%COMP%]{width:418px}"]}),i})();var qt=c(1700);const Yt=[{path:"",component:mt,children:[{path:"",component:Tt,pathMatch:"full"},{path:"rates",component:H},{path:"rates",component:H},{path:"availability",component:kt},{path:"subjects",component:wt.h},{path:"personal-information",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tutor-personal-information"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"app-personal-information")},directives:[qt.i],styles:[""]}),i})()},{path:"payment-methode",component:St},{path:"change-password",component:Rt.p},{path:"institutions",component:Pt},{path:"certificates",component:Bt}]}];let Ht=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.Bz.forChild(Yt)],g.Bz]}),i})();var Nt=c(4466),Ft=c(2372),C=c(9238),R=c(8553),x=c(7636),p=c(2458);c(6237),c(9765),c(6682),c(2759),c(5917),c(8634),c(7238),c(9761),c(7519),c(6782),c(9490),c(521),c(6461),c(946),c(8595);let Ce=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[h.ez,p.BQ,x.eL,p.si,R.Q8,C.rt],p.BQ]}),i})(),Ae=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[h.ez,Ht,s.UX,Nt.m,Ft.E,Ce]]}),i})()}}]);