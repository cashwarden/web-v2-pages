"use strict";(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[991],{3111:(Cn,M,s)=>{s.r(M),s.d(M,{AccountModule:()=>An});var q=s(4815),L=s(4465),n=s(4650);s(3605);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t})();var Q=s(8418),h=s(6152),V=s(8521),O=s(1243),F=s(6672),w=s(866),p=s(9132),r=s(9094),z=s(3567),$=s(5156),A=s(9651),u=s(6895),l=s(433),m=s(1098),I=s(6704),Z=s(6616),x=s(7044),C=s(1811),T=s(5635),g=s(8231),v=s(1102);function j(t,a){1&t&&(n.TgZ(0,"div",20),n._uU(1),n.ALo(2,"i18n"),n.qZA()),2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"app.account.update"),""))}function H(t,a){1&t&&(n.TgZ(0,"div",20),n._uU(1),n.ALo(2,"i18n"),n.qZA()),2&t&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"app.account.create")))}function B(t,a){if(1&t&&(n.TgZ(0,"nz-option",21),n._UZ(1,"i",22),n._uU(2),n.qZA()),2&t){const e=a.$implicit;n.Q6J("nzLabel",e.label)("nzValue",e.value),n.xp6(1),n.MGl("nzIconfont","icon-",e.value,""),n.xp6(1),n.hij(" ",e.label," ")}}function k(t,a){if(1&t&&n._UZ(0,"nz-option",25),2&t){const e=a.$implicit;n.Q6J("nzLabel",e)("nzValue",e)}}function G(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"nz-select",23),n.NdJ("ngModelChange",function(c){n.CHM(e);const i=n.oxw();return n.KtG(i.form.currency_code=c)}),n.YNc(1,k,1,2,"nz-option",24),n.qZA()}if(2&t){const e=n.oxw();n.Q6J("ngModel",e.form.currency_code),n.xp6(1),n.Q6J("ngForOf",e.currencies)}}s(9553);let b=(()=>{class t{constructor(e,o,c,i){this.http=e,this.modal=o,this.msgSrv=c,this.i18n=i,this.api="/api/accounts",this.record={},this.types=[],this.currencies=[],this.form={name:"",keywords:[],type:"general_account",currency_balance:"",currency_code:"",status:!0,default:!1,remark:"",exclude_from_stats:!1}}ngOnInit(){this.record.id?this.form=this.record:this.form.currency_code=this.currencies[0]}save(e){this.http.request(this.record.id?"put":"post",`${this.api}${this.record.id?`/${this.record.id}`:""}`,{body:e}).subscribe(i=>{i.code||(this.msgSrv.success(this.i18n.fanyi("app.form.save-success")),this.modal.close(!0))})}close(){this.modal.destroy()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.lP),n.Y36($.Lf),n.Y36(A.dD),n.Y36(r.Oi))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-form"]],decls:40,vars:43,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["nz-form","","se-container","1.0","labelWidth","150",3,"ngSubmit"],["f","ngForm"],[3,"label"],["type","text","nz-input","","name","name","required","",3,"ngModel","ngModelChange"],["name","type","required","",3,"ngModel","ngModelChange"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzAddOnAfter"],["nz-input","","type","number","name","currency_balance","required","",3,"ngModel","ngModelChange"],["addOnAfterBtn",""],["nzMode","tags","name","keywords",3,"ngModel","ngModelChange"],["col","1",3,"label"],["name","remark","nz-input","","rows","2",3,"ngModel","ngModelChange"],["name","status",3,"ngModel","ngModelChange"],["name","default",3,"ngModel","ngModelChange"],["name","exclude_from_stats",3,"ngModel","ngModelChange"],["col","1"],["nz-button","","type","button",3,"click"],["nz-button","","nzType","primary",3,"disabled"],[1,"modal-title"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",3,"nzIconfont"],["name","currency_code",2,"width","80px",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0),n.YNc(1,j,3,3,"div",1),n.YNc(2,H,3,3,"div",1),n.qZA(),n.TgZ(3,"form",2,3),n.NdJ("ngSubmit",function(){return o.save(o.form)}),n.TgZ(5,"se",4),n.ALo(6,"i18n"),n.TgZ(7,"input",5),n.NdJ("ngModelChange",function(i){return o.form.name=i}),n.qZA()(),n.TgZ(8,"se",4),n.ALo(9,"i18n"),n.TgZ(10,"nz-select",6),n.NdJ("ngModelChange",function(i){return o.form.type=i}),n.YNc(11,B,3,4,"nz-option",7),n.qZA()(),n.TgZ(12,"se",4),n.ALo(13,"i18n"),n.TgZ(14,"nz-input-group",8)(15,"input",9),n.NdJ("ngModelChange",function(i){return o.form.currency_balance=i}),n.qZA(),n.YNc(16,G,2,2,"ng-template",null,10,n.W1O),n.qZA()(),n.TgZ(18,"se",4),n.ALo(19,"i18n"),n.TgZ(20,"nz-select",11),n.NdJ("ngModelChange",function(i){return o.form.keywords=i}),n.qZA()(),n.TgZ(21,"se",12),n.ALo(22,"i18n"),n.TgZ(23,"textarea",13),n.NdJ("ngModelChange",function(i){return o.form.remark=i}),n.qZA()(),n.TgZ(24,"se",4),n.ALo(25,"i18n"),n.TgZ(26,"nz-switch",14),n.NdJ("ngModelChange",function(i){return o.form.status=i}),n.qZA()(),n.TgZ(27,"se",12),n.ALo(28,"i18n"),n.TgZ(29,"nz-switch",15),n.NdJ("ngModelChange",function(i){return o.form.default=i}),n.qZA()(),n.TgZ(30,"se",12),n.ALo(31,"i18n"),n.TgZ(32,"nz-switch",16),n.NdJ("ngModelChange",function(i){return o.form.exclude_from_stats=i}),n.qZA()(),n.TgZ(33,"se",17)(34,"button",18),n.NdJ("click",function(){return o.close()}),n._uU(35),n.ALo(36,"i18n"),n.qZA(),n.TgZ(37,"button",19),n._uU(38),n.ALo(39,"i18n"),n.qZA()()()),2&e){const c=n.MAs(4),i=n.MAs(17);n.xp6(1),n.Q6J("ngIf",o.record.id),n.xp6(1),n.Q6J("ngIf",!o.record.id),n.xp6(3),n.Q6J("label",n.lcZ(6,23,"app.account.name")),n.xp6(2),n.Q6J("ngModel",o.form.name),n.xp6(1),n.Q6J("label",n.lcZ(9,25,"app.account.type")),n.xp6(2),n.Q6J("ngModel",o.form.type),n.xp6(1),n.Q6J("ngForOf",o.types),n.xp6(1),n.Q6J("label",n.lcZ(13,27,"app.account.currency_balance")),n.xp6(2),n.Q6J("nzAddOnAfter",i),n.xp6(1),n.Q6J("ngModel",o.form.currency_balance),n.xp6(3),n.Q6J("label",n.lcZ(19,29,"app.account.keywords")),n.xp6(2),n.Q6J("ngModel",o.form.keywords),n.xp6(1),n.Q6J("label",n.lcZ(22,31,"app.account.remark")),n.xp6(2),n.Q6J("ngModel",o.form.remark),n.xp6(1),n.Q6J("label",n.lcZ(25,33,"app.account.status")),n.xp6(2),n.Q6J("ngModel",o.form.status),n.xp6(1),n.Q6J("label",n.lcZ(28,35,"app.account.default")),n.xp6(2),n.Q6J("ngModel",o.form.default),n.xp6(1),n.Q6J("label",n.lcZ(31,37,"app.account.exclude_from_stats")),n.xp6(2),n.Q6J("ngModel",o.form.exclude_from_stats),n.xp6(3),n.Oqu(n.lcZ(36,39,"app.form.close")),n.xp6(2),n.Q6J("disabled",c.invalid),n.xp6(1),n.Oqu(n.lcZ(39,41,"app.form.save"))}},dependencies:[u.sg,u.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.On,l.F,m.nV,m.d_,I.Lr,Z.ix,x.w,C.dQ,T.Zp,T.gB,g.Ip,g.Vq,v.Ls,O.i,r.Ck],encapsulation:2}),t})();var _=s(2604),y=s(3679),J=s(1971),N=s(6497);function D(t,a){if(1&t&&(n.TgZ(0,"nz-option",23),n._UZ(1,"i",24),n._uU(2),n.qZA()),2&t){const e=a.$implicit;n.Q6J("nzLabel",e.label)("nzValue",e.value),n.xp6(1),n.MGl("nzIconfont","icon-",e.value,""),n.xp6(1),n.hij(" ",e.label," ")}}function W(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"se",7),n.ALo(1,"i18n"),n.TgZ(2,"nz-select",21),n.NdJ("ngModelChange",function(c){n.CHM(e);const i=n.oxw();return n.KtG(i.q.type=c)}),n.ALo(3,"i18n"),n.YNc(4,D,3,4,"nz-option",22),n.qZA()()}if(2&t){const e=n.oxw();n.Q6J("label",n.lcZ(1,4,"app.account.type")),n.xp6(2),n.Q6J("ngModel",e.q.type)("nzPlaceHolder",n.lcZ(3,6,"app.account.type")),n.xp6(2),n.Q6J("ngForOf",e.types)}}function E(t,a){if(1&t&&n._UZ(0,"nz-option",25),2&t){const e=a.$implicit;n.Q6J("nzLabel",e.label)("nzValue",e.value)}}function K(t,a){if(1&t&&n._UZ(0,"nz-option",25),2&t){const e=a.$implicit;n.Q6J("nzLabel",e.label)("nzValue",e.value)}}function X(t,a){if(1&t&&n._UZ(0,"nz-option",25),2&t){const e=a.$implicit;n.Q6J("nzLabel",e.label)("nzValue",e.value)}}function R(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"se",7),n.ALo(1,"i18n"),n.TgZ(2,"nz-select",26),n.NdJ("ngModelChange",function(c){n.CHM(e);const i=n.oxw();return n.KtG(i.q.exclude_from_stats=c)}),n.ALo(3,"i18n"),n.YNc(4,X,1,2,"nz-option",11),n.qZA()()}if(2&t){const e=n.oxw();n.Q6J("label",n.lcZ(1,4,"app.account.exclude_from_stats")),n.xp6(2),n.Q6J("ngModel",e.q.exclude_from_stats)("nzPlaceHolder",n.lcZ(3,6,"app.account.exclude_from_stats")),n.xp6(2),n.Q6J("ngForOf",e.statuses)}}function nn(t,a){1&t&&(n.TgZ(0,"nz-tag",36),n._uU(1,"Default"),n.qZA())}function en(t,a){if(1&t&&(n.TgZ(0,"a",34),n._uU(1),n.qZA(),n.YNc(2,nn,2,0,"nz-tag",35)),2&t){const e=n.oxw().$implicit;n.MGl("routerLink","/account/view/",e.id,""),n.xp6(1),n.Oqu(e.name),n.xp6(1),n.Q6J("ngIf",e.default)}}function tn(t,a){if(1&t&&(n.TgZ(0,"nz-tag",37),n._uU(1),n.qZA()),2&t){const e=a.$implicit;n.xp6(1),n.Oqu(e)}}function on(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"i",38),n.NdJ("click",function(){n.CHM(e);const c=n.oxw().$implicit,i=n.oxw();return n.KtG(i.form(c))}),n.qZA()}if(2&t){const e=n.oxw().$implicit;n.MGl("nzIconfont","icon-",e.type,"")}}function cn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"span",39)(1,"i",40),n.NdJ("click",function(){n.CHM(e);const c=n.oxw().$implicit,i=n.oxw();return n.KtG(i.form(c))}),n.qZA()(),n.TgZ(2,"span",39)(3,"i",41),n.NdJ("nzOnConfirm",function(){n.CHM(e);const c=n.oxw().$implicit,i=n.oxw();return n.KtG(i.delete(c))}),n.ALo(4,"i18n"),n.qZA()()}2&t&&(n.xp6(3),n.Q6J("nz-popconfirm",n.lcZ(4,1,"app.account.confirm.delete")))}function an(t,a){if(1&t&&(n.TgZ(0,"sv-container",42)(1,"sv",43),n.ALo(2,"i18n"),n._uU(3),n.qZA(),n.TgZ(4,"sv",43),n.ALo(5,"i18n"),n._uU(6),n.qZA(),n.TgZ(7,"sv",43),n.ALo(8,"i18n"),n._uU(9),n.qZA(),n.TgZ(10,"sv",43),n.ALo(11,"i18n"),n._uU(12),n.qZA(),n.TgZ(13,"sv",44),n.ALo(14,"i18n"),n._uU(15),n.qZA(),n.TgZ(16,"sv",44),n.ALo(17,"i18n"),n._uU(18),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("label",n.lcZ(2,12,"app.account.type")),n.xp6(2),n.Oqu(e.type_name),n.xp6(1),n.Q6J("label",n.lcZ(5,14,"app.account.status")),n.xp6(2),n.Oqu(e.status_name),n.xp6(1),n.Q6J("label",n.lcZ(8,16,"app.account.user")),n.xp6(2),n.Oqu(e.user.name),n.xp6(1),n.Q6J("label",n.lcZ(11,18,"app.account.default")),n.xp6(2),n.hij(" ",e.default?"true":"false"," "),n.xp6(1),n.Q6J("label",n.lcZ(14,20,"app.account.exclude_from_stats")),n.xp6(2),n.Oqu(e.exclude_from_stats?"true":"false"),n.xp6(1),n.Q6J("label",n.lcZ(17,22,"app.account.remark")),n.xp6(2),n.Oqu(e.remark)}}function sn(t,a){if(1&t&&(n.TgZ(0,"g2-card",27),n.YNc(1,en,3,3,"ng-template",null,28,n.W1O),n.TgZ(3,"trend",29),n._uU(4),n.qZA(),n.TgZ(5,"trend",29),n.YNc(6,tn,2,1,"nz-tag",30),n.qZA(),n.YNc(7,on,1,1,"ng-template",null,31,n.W1O),n.YNc(9,cn,5,3,"ng-template",null,32,n.W1O),n.YNc(11,an,19,24,"ng-template",null,33,n.W1O),n.qZA()),2&t){const e=a.$implicit,o=n.MAs(2),c=n.MAs(8),i=n.MAs(10),d=n.MAs(12);n.Q6J("title",o)("bordered",!0)("total",e.currency_balance_desc)("footer",d)("avatar",c)("action",i),n.xp6(4),n.Oqu(e.balance_desc),n.xp6(2),n.Q6J("ngForOf",e.keywords)}}const ln=function(){return{gutter:24,lg:8,md:12,sm:24,xs:24}};let U=(()=>{class t{constructor(e,o,c,i,d){this.http=e,this.msg=o,this.modal=c,this.cdr=i,this.i18n=d,this.url="/api/accounts",this.q={page:1,page_size:100,type:"",status:!0,expand:"user",exclude_from_stats:"",user_id:""},this.statuses=[{value:!0,label:this.i18n.fanyi("app.status.active")},{value:!1,label:this.i18n.fanyi("app.status.inactive")}],this.base=(0,z.p$)(this.q),this.sorts=[{value:"-balance_cent",label:this.i18n.fanyi("app.account.sort.balance.desc")},{value:"balance_cent",label:this.i18n.fanyi("app.account.sort.balance.asc")}],this.types=[],this.list=[],this.loading=!0,this.expandForm=!1,this.currencies=[],this.overview={count:0,net_asset:0,total_assets:0,liabilities:0}}ngOnInit(){this.getAccountTypes(),this.getOverview(),this.getCurrencies(),this.index()}index(){this.loading=!0,this.http.get(this.url,(0,Q.HO)(this.q)).subscribe(e=>{this.list=e.items.map(o=>(0,z.RH)(o,{balance:o.currency_code+(o.currency_balance/100).toFixed(2)})),this.loading=!1,this.cdr.detectChanges()})}getCurrencies(){this.http.get("/api/users/currencies").subscribe(e=>{this.currencies=e})}getAccountTypes(){this.http.get(`${this.url}/types`).subscribe(e=>{this.types=e})}getOverview(){this.http.get(`${this.url}/overview`).subscribe(e=>{this.overview=e,this.cdr.detectChanges()})}reset(){this.q=(0,z.p$)(this.base),this.index()}form(e={}){this.modal.create(b,{record:e,types:this.types,currencies:this.currencies},{size:"md"}).subscribe(o=>{this.index(),this.getOverview(),this.cdr.detectChanges()})}delete(e){this.http.delete(`${this.url}/${e.id}`).subscribe(o=>{o.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.index(),this.getOverview()})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.lP),n.Y36(A.dD),n.Y36(r.Te),n.Y36(n.sBO),n.Y36(r.Oi))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-index"]],decls:67,vars:73,consts:[[1,"pt-md"],["nz-row",""],["nz-col","",1,"header-info",3,"nzXs","nzSm"],[1,"text-grey-dark"],[1,"d-block","display-2"],["nz-form","","se-container","1.0","size","default","gutter","24",3,"labelWidth","ngSubmit"],["f","ngForm"],["col","4",3,"label"],["nz-input","","name","name",3,"ngModel","placeholder","ngModelChange"],["col","4",3,"label",4,"ngIf"],["name","status","nzShowSearch","","nzAllowClear","",3,"ngModel","nzPlaceHolder","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["name","sort","nzShowSearch","","nzAllowClear","",3,"ngModel","nzPlaceHolder","ngModelChange"],["nz-button","","type","submit",3,"nzType","nzLoading"],["nz-button","","type","button",1,"mx-sm",3,"click"],[3,"click"],["nz-icon","",3,"nzType"],["nz-button","",3,"nzType","click"],["nz-icon","","nzType","plus"],[3,"nzDataSource","nzLoading","nzRenderItem","nzGrid"],["item",""],["name","type","nzShowSearch","","nzAllowClear","",3,"ngModel","nzPlaceHolder","ngModelChange"],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-icon","",3,"nzIconfont"],[3,"nzLabel","nzValue"],["name","exclude_from_stats","nzAllowClear","",3,"ngModel","nzPlaceHolder","ngModelChange"],[3,"title","bordered","total","footer","avatar","action"],["title",""],[2,"margin","0 0 0 8px"],["class","text-grey",4,"ngFor","ngForOf"],["avatar",""],["action",""],["footer",""],[1,"text-md","pr-sm",3,"routerLink"],["nzColor","success",4,"ngIf"],["nzColor","success"],[1,"text-grey"],["nz-icon","",1,"icon-md",3,"nzIconfont","click"],[1,"pl-sm"],["nz-icon","","nzType","edit",3,"click"],["nz-icon","","nzType","delete","nzPopconfirmPlacement","bottom",3,"nz-popconfirm","nzOnConfirm"],["size","small","col","2"],[3,"label"],["col","1",3,"label"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0)(1,"nz-card")(2,"div",1)(3,"div",2)(4,"span",3),n._uU(5),n.ALo(6,"i18n"),n.qZA(),n.TgZ(7,"span",4),n._uU(8),n.qZA(),n._UZ(9,"em"),n.qZA(),n.TgZ(10,"div",2)(11,"span",3),n._uU(12),n.ALo(13,"i18n"),n.qZA(),n.TgZ(14,"span",4),n._uU(15),n.qZA(),n._UZ(16,"em"),n.qZA(),n.TgZ(17,"div",2)(18,"span",3),n._uU(19),n.ALo(20,"i18n"),n.qZA(),n.TgZ(21,"span",4),n._uU(22),n.qZA()(),n.TgZ(23,"div",2)(24,"span",3),n._uU(25),n.ALo(26,"i18n"),n.qZA(),n.TgZ(27,"span",4),n._uU(28),n.qZA()()()()(),n.TgZ(29,"nz-card")(30,"form",5,6),n.NdJ("ngSubmit",function(){return o.index()}),n.TgZ(32,"se",7),n.ALo(33,"i18n"),n.TgZ(34,"input",8),n.NdJ("ngModelChange",function(i){return o.q.name=i}),n.ALo(35,"i18n"),n.qZA()(),n.YNc(36,W,5,8,"se",9),n.TgZ(37,"se",7),n.ALo(38,"i18n"),n.TgZ(39,"nz-select",10),n.NdJ("ngModelChange",function(i){return o.q.status=i}),n.ALo(40,"i18n"),n.YNc(41,E,1,2,"nz-option",11),n.qZA()(),n.TgZ(42,"se",7),n.ALo(43,"i18n"),n.TgZ(44,"nz-select",12),n.NdJ("ngModelChange",function(i){return o.q.sort=i}),n.ALo(45,"i18n"),n.YNc(46,K,1,2,"nz-option",11),n.qZA()(),n.YNc(47,R,5,8,"se",9),n.TgZ(48,"button",13),n._uU(49),n.ALo(50,"i18n"),n.qZA(),n.TgZ(51,"button",14),n.NdJ("click",function(){return o.reset()}),n._uU(52),n.ALo(53,"i18n"),n.qZA(),n.TgZ(54,"a",15),n.NdJ("click",function(){return o.expandForm=!o.expandForm}),n._uU(55),n.ALo(56,"i18n"),n.ALo(57,"i18n"),n._UZ(58,"i",16),n.qZA()(),n.TgZ(59,"button",17),n.NdJ("click",function(){return o.form()}),n._UZ(60,"i",18),n.TgZ(61,"span"),n._uU(62),n.ALo(63,"i18n"),n.qZA()()(),n.TgZ(64,"nz-list",19),n.YNc(65,sn,13,8,"ng-template",null,20,n.W1O),n.qZA()),2&e){const c=n.MAs(66);n.xp6(3),n.Q6J("nzXs",24)("nzSm",6),n.xp6(2),n.Oqu(n.lcZ(6,42,"app.net_assets")),n.xp6(3),n.Oqu(o.overview.net_asset),n.xp6(2),n.Q6J("nzXs",24)("nzSm",6),n.xp6(2),n.Oqu(n.lcZ(13,44,"app.total_debt")),n.xp6(3),n.Oqu(o.overview.liabilities),n.xp6(2),n.Q6J("nzXs",24)("nzSm",6),n.xp6(2),n.Oqu(n.lcZ(20,46,"app.total_assets")),n.xp6(3),n.Oqu(o.overview.total_assets),n.xp6(1),n.Q6J("nzXs",24)("nzSm",6),n.xp6(2),n.Oqu(n.lcZ(26,48,"app.total_accounts")),n.xp6(3),n.Oqu(o.overview.count),n.xp6(2),n.Q6J("labelWidth",null),n.xp6(2),n.Q6J("label",n.lcZ(33,50,"app.account.name")),n.xp6(2),n.Q6J("ngModel",o.q.name)("placeholder",n.lcZ(35,52,"app.account.name")),n.xp6(2),n.Q6J("ngIf",o.expandForm),n.xp6(1),n.Q6J("label",n.lcZ(38,54,"app.account.status")),n.xp6(2),n.Q6J("ngModel",o.q.status)("nzPlaceHolder",n.lcZ(40,56,"app.account.status")),n.xp6(2),n.Q6J("ngForOf",o.statuses),n.xp6(1),n.Q6J("label",n.lcZ(43,58,"app.account.sort")),n.xp6(2),n.Q6J("ngModel",o.q.sort)("nzPlaceHolder",n.lcZ(45,60,"app.account.sort")),n.xp6(2),n.Q6J("ngForOf",o.sorts),n.xp6(1),n.Q6J("ngIf",o.expandForm),n.xp6(1),n.Q6J("nzType","primary")("nzLoading",o.loading),n.xp6(1),n.Oqu(n.lcZ(50,62,"app.form.search")),n.xp6(3),n.Oqu(n.lcZ(53,64,"app.form.reset")),n.xp6(3),n.hij(" ",o.expandForm?n.lcZ(56,66,"app.down"):n.lcZ(57,68,"app.up")," "),n.xp6(3),n.Q6J("nzType",o.expandForm?"up":"down"),n.xp6(1),n.Q6J("nzType","primary"),n.xp6(3),n.Oqu(n.lcZ(63,70,"app.form.create")),n.xp6(2),n.Q6J("nzDataSource",o.list)("nzLoading",o.loading)("nzRenderItem",c)("nzGrid",n.DdM(72,ln))}},dependencies:[u.sg,u.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,p.yS,m.nV,m.d_,_.vb,_.sE,y.t3,y.SK,I.Lr,Z.ix,x.w,C.dQ,T.Zp,g.Ip,g.Vq,J.bd,N.JW,v.Ls,F.j,h.n_,h.fl,q.n,L._,r.Ck],encapsulation:2,changeDetection:0}),t})();var rn=s(7579),Y=s(7830),pn=s(3402);function un(t,a){1&t&&(n.TgZ(0,"button",9),n._UZ(1,"i",10),n.qZA(),n.TgZ(2,"span",11),n._uU(3),n.ALo(4,"i18n"),n.qZA()),2&t&&(n.xp6(3),n.hij(" ",n.lcZ(4,1,"app.account.detail")," "))}function dn(t,a){if(1&t&&(n.TgZ(0,"div",12),n._UZ(1,"i",13),n.TgZ(2,"sv-container",14)(3,"sv",15),n.ALo(4,"i18n"),n._uU(5),n.qZA(),n.TgZ(6,"sv",15),n.ALo(7,"i18n"),n._uU(8),n.qZA(),n.TgZ(9,"sv",15),n.ALo(10,"i18n"),n._uU(11),n.qZA(),n.TgZ(12,"sv",15),n.ALo(13,"i18n"),n._uU(14),n.qZA(),n.TgZ(15,"sv",15),n.ALo(16,"i18n"),n._uU(17),n.qZA(),n.TgZ(18,"sv",15),n.ALo(19,"i18n"),n._uU(20),n.qZA()()()),2&t){const e=n.oxw();n.xp6(1),n.MGl("nzIconfont","icon-",e.account.type,""),n.xp6(2),n.Q6J("label",n.lcZ(4,13,"app.account.name")),n.xp6(2),n.Oqu(e.account.name),n.xp6(1),n.Q6J("label",n.lcZ(7,15,"app.account.type")),n.xp6(2),n.Oqu(e.account.type_name),n.xp6(1),n.Q6J("label",n.lcZ(10,17,"app.account.keywords")),n.xp6(2),n.Oqu(e.account.keywords),n.xp6(1),n.Q6J("label",n.lcZ(13,19,"app.account.currency_balance")),n.xp6(2),n.hij("",e.account.currency_balance_desc," "),n.xp6(1),n.Q6J("label",n.lcZ(16,21,"app.account.status")),n.xp6(2),n.Oqu(e.account.status_name),n.xp6(1),n.Q6J("label",n.lcZ(19,23,"app.account.remark")),n.xp6(2),n.hij("",e.account.remark," ")}}function mn(t,a){if(1&t){const e=n.EpF();n.TgZ(0,"button",16),n.NdJ("click",function(){n.CHM(e);const c=n.oxw();return n.KtG(c.form(c.account))}),n._uU(1),n.ALo(2,"i18n"),n.qZA(),n.TgZ(3,"button",17),n.NdJ("nzOnConfirm",function(){n.CHM(e);const c=n.oxw();return n.KtG(c.delete(c.account))}),n.ALo(4,"i18n"),n._uU(5),n.ALo(6,"i18n"),n.qZA()}2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,3,"app.form.update"),""),n.xp6(2),n.Q6J("nz-popconfirm",n.lcZ(4,5,"app.account.confirm.delete")),n.xp6(2),n.hij(" ",n.lcZ(6,7,"app.form.delete")," "))}function gn(t,a){if(1&t&&n._UZ(0,"div",19),2&t){const e=n.oxw(2);n.Q6J("options",e.accountBalancesTrend)}}function _n(t,a){if(1&t&&(n.TgZ(0,"div")(1,"p"),n._uU(2),n.ALo(3,"i18n"),n.qZA(),n.YNc(4,gn,1,1,"div",18),n.qZA()),2&t){const e=n.oxw();n.xp6(2),n.hij(" ",n.lcZ(3,2,"app.account.balance.trend")," "),n.xp6(2),n.Q6J("ngIf",!e.accountBalancesTrendLoading)}}function fn(t,a){if(1&t&&(n.TgZ(0,"div"),n._UZ(1,"record-table",20),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("q",e.q)("resetSubject",e.resetSubjectValue)}}const hn=[{path:"index",component:U},{path:"view/:id",component:(()=>{class t{constructor(e,o,c,i,d,Zn,xn){this.http=e,this.route=o,this.cdr=c,this.modal=i,this.msg=d,this.router=Zn,this.i18n=xn,this.url="/api/accounts",this.q={page:1,page_size:100,expand:"transaction,account,category,ledger"},this.currencies=[],this.loading=!0,this.accountBalancesTrendLoading=!0,this.index=0,this.list=[],this.types=[],this.resetSubjectValue=new rn.x,this.id=""}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.q.account_id=this.id,this.getAccount(),this.getCurrencies(),this.getAccountTypes(),this.getAccountBalancesTrend()}getAccount(){this.loading=!0,this.http.get(`${this.url}/${this.id}`).subscribe(e=>{this.account=e,this.loading=!1,this.cdr.detectChanges()})}form(e){this.modal.create(b,{record:e,types:this.types,currencies:this.currencies},{size:"md"}).subscribe(()=>{this.getAccount(),1===this.index&&this.resetSubjectValue.next(this.q),0===this.index&&this.getAccountBalancesTrend(),this.cdr.detectChanges()})}delete(e){this.http.delete(`${this.url}/${e.id}`).subscribe(o=>{o.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.router.navigateByUrl("/account/index")})}getCurrencies(){this.http.get("/api/users/currencies").subscribe(e=>{this.currencies=e})}getAccountTypes(){this.http.get(`${this.url}/types`).subscribe(e=>{this.types=e})}getAccountBalancesTrend(){this.accountBalancesTrendLoading=!0,this.http.get(`${this.url}/${this.id}/balances/trend`).subscribe(e=>{this.accountBalancesTrendLoading=!1,this.accountBalancesTrend={data:e,xField:"date",yField:"after_balance",meta:{date:{alias:this.i18n.fanyi("app.account.date")},after_balance:{alias:this.i18n.fanyi("app.account.balance")}},interactions:[{type:"slider",cfg:{start:0,end:1}}]},this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.lP),n.Y36(p.gz),n.Y36(n.sBO),n.Y36(r.Te),n.Y36(A.dD),n.Y36(p.F0),n.Y36(r.Oi))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-account-view"]],decls:16,vars:13,consts:[[1,"pt-md"],[3,"nzTitle","nzExtra","nzLoading"],["title",""],["nz-row","",4,"ngIf"],["extraTemplate",""],[2,"width","100%"],["nzSize","large",3,"nzSelectedIndex","nzSelectedIndexChange"],[3,"nzTitle"],[4,"ngIf"],["nz-button","","routerLink","/account/index"],["nz-icon","","nzType","arrow-left"],[1,"pl-md"],["nz-row",""],["nz-icon","",1,"icon-md","pr-md",3,"nzIconfont"],["size","small","col","3"],[3,"label"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzDanger","","nzPopconfirmPlacement","bottom",3,"nz-popconfirm","nzOnConfirm"],["starkG2plotArea","",3,"options",4,"ngIf"],["starkG2plotArea","",3,"options"],[3,"q","resetSubject"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0)(1,"nz-card",1),n.YNc(2,un,5,3,"ng-template",null,2,n.W1O),n.YNc(4,dn,21,25,"div",3),n.qZA(),n.YNc(5,mn,7,9,"ng-template",null,4,n.W1O),n.qZA(),n.TgZ(7,"nz-card",5)(8,"nz-card-tab")(9,"nz-tabset",6),n.NdJ("nzSelectedIndexChange",function(i){return o.index=i}),n._UZ(10,"nz-tab",7),n.ALo(11,"i18n"),n._UZ(12,"nz-tab",7),n.ALo(13,"i18n"),n.qZA()(),n.YNc(14,_n,5,4,"div",8),n.YNc(15,fn,2,2,"div",8),n.qZA()),2&e){const c=n.MAs(3),i=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",c)("nzExtra",i)("nzLoading",o.loading),n.xp6(3),n.Q6J("ngIf",o.account),n.xp6(5),n.Q6J("nzSelectedIndex",o.index),n.xp6(1),n.Q6J("nzTitle",n.lcZ(11,9,"app.account.balance")),n.xp6(2),n.Q6J("nzTitle",n.lcZ(13,11,"app.account.record")),n.xp6(2),n.Q6J("ngIf",0===o.index),n.xp6(1),n.Q6J("ngIf",1===o.index)}},dependencies:[u.O5,p.rH,_.vb,_.sE,y.SK,Z.ix,x.w,C.dQ,J.bd,J._i,N.JW,Y.xH,Y.xw,v.Ls,pn.M,w.NS,r.Ck],encapsulation:2}),t})()}];let zn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(hn),p.Bz]}),t})(),An=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[Q.m8,zn,F.X,h.Ph,q.T,P,V.aF,O.m,L.J,w.fv]}),t})()}}]);