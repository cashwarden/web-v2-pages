"use strict";(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[270],{2270:(X,g,i)=>{i.r(g),i.d(g,{LedgerModule:()=>K});var A=i(8418),c=i(6152),u=i(1243),_=i(6672),l=i(9094),e=i(4650),J=i(5156),f=i(9651),m=i(6895),d=i(433),h=i(1098),F=i(6704),z=i(6616),x=i(7044),C=i(1811),O=i(5635),L=i(8231);function b(n,s){1&n&&(e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"i18n"),e.qZA()),2&n&&(e.xp6(1),e.hij(" ",e.lcZ(2,1,"app.ledger.update"),""))}function I(n,s){1&n&&(e.TgZ(0,"div",14),e._uU(1),e.ALo(2,"i18n"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"app.ledger.create")))}function Q(n,s){if(1&n&&e._UZ(0,"nz-option",17),2&n){const t=s.$implicit;e.Q6J("nzLabel",t.label)("nzValue",t.value)}}function N(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"se",4),e.ALo(1,"i18n"),e.TgZ(2,"nz-select",15),e.NdJ("ngModelChange",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a.form.type=r)}),e.YNc(3,Q,1,2,"nz-option",16),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("label",e.lcZ(1,3,"app.ledger.type")),e.xp6(2),e.Q6J("ngModel",t.form.type),e.xp6(1),e.Q6J("ngForOf",t.types)}}i(9553);let T=(()=>{class n{constructor(t,o,r,a){this.http=t,this.modal=o,this.msg=r,this.i18n=a,this.api="/api/ledgers",this.record={},this.form={cover:"",name:"",keywords:[],type:"",default:!1,remark:""}}ngOnInit(){this.record.id&&(this.form=this.record)}save(t){this.http.request(this.record.id?"put":"post",`${this.api}${this.record.id?`/${this.record.id}`:""}`,{body:t}).subscribe(a=>{this.msg.success(this.i18n.fanyi("app.form.save-success")),this.modal.close(!0)})}close(){this.modal.destroy()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.lP),e.Y36(J.Lf),e.Y36(f.dD),e.Y36(l.Oi))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-ledger-form"]],decls:25,vars:26,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["nz-form","","se-container","1.0",3,"ngSubmit"],["f","ngForm"],[3,"label"],["type","text","nz-input","","name","name","required","",3,"ngModel","ngModelChange"],[3,"label",4,"ngIf"],["nzMode","tags","name","keywords",3,"ngModel","ngModelChange"],["col","1",3,"label"],["name","remark","nz-input","","rows","2",3,"ngModel","ngModelChange"],["name","default",3,"ngModel","ngModelChange"],["col","1"],["nz-button","","type","button",3,"click"],["nz-button","","nzType","primary",3,"disabled"],[1,"modal-title"],["name","type","required","",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.YNc(1,b,3,3,"div",1),e.YNc(2,I,3,3,"div",1),e.qZA(),e.TgZ(3,"form",2,3),e.NdJ("ngSubmit",function(){return o.save(o.form)}),e.TgZ(5,"se",4),e.ALo(6,"i18n"),e.TgZ(7,"input",5),e.NdJ("ngModelChange",function(a){return o.form.name=a}),e.qZA()(),e.YNc(8,N,4,5,"se",6),e.TgZ(9,"se",4),e.ALo(10,"i18n"),e.TgZ(11,"nz-select",7),e.NdJ("ngModelChange",function(a){return o.form.keywords=a}),e.qZA()(),e.TgZ(12,"se",8),e.ALo(13,"i18n"),e.TgZ(14,"textarea",9),e.NdJ("ngModelChange",function(a){return o.form.remark=a}),e.qZA()(),e.TgZ(15,"se",8),e.ALo(16,"i18n"),e.TgZ(17,"nz-switch",10),e.NdJ("ngModelChange",function(a){return o.form.default=a}),e.qZA()(),e.TgZ(18,"se",11)(19,"button",12),e.NdJ("click",function(){return o.close()}),e._uU(20),e.ALo(21,"i18n"),e.qZA(),e.TgZ(22,"button",13),e._uU(23),e.ALo(24,"i18n"),e.qZA()()()),2&t){const r=e.MAs(4);e.xp6(1),e.Q6J("ngIf",o.record.id),e.xp6(1),e.Q6J("ngIf",!o.record.id),e.xp6(3),e.Q6J("label",e.lcZ(6,14,"app.ledger.name")),e.xp6(2),e.Q6J("ngModel",o.form.name),e.xp6(1),e.Q6J("ngIf",!o.record.id),e.xp6(1),e.Q6J("label",e.lcZ(10,16,"app.ledger.keywords")),e.xp6(2),e.Q6J("ngModel",o.form.keywords),e.xp6(1),e.Q6J("label",e.lcZ(13,18,"app.ledger.remark")),e.xp6(2),e.Q6J("ngModel",o.form.remark),e.xp6(1),e.Q6J("label",e.lcZ(16,20,"app.ledger.default")),e.xp6(2),e.Q6J("ngModel",o.form.default),e.xp6(3),e.Oqu(e.lcZ(21,22,"app.form.close")),e.xp6(2),e.Q6J("disabled",r.invalid),e.xp6(1),e.Oqu(e.lcZ(24,24,"app.form.save"))}},dependencies:[m.sg,m.O5,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.On,d.F,h.nV,h.d_,F.Lr,z.ix,x.w,C.dQ,O.Zp,L.Ip,L.Vq,u.i,l.Ck],encapsulation:2}),n})();var Y=i(9959),Z=i(3679),v=i(1971),S=i(6497),$=i(1102);function w(n,s){if(1&n&&e._UZ(0,"img",16),2&n){const t=e.oxw().$implicit;e.s9C("alt",t.title),e.s9C("src",t.cover,e.LSH)}}function D(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",17),e.NdJ("nzOnConfirm",function(){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.delete(r))}),e.ALo(1,"i18n"),e.qZA()}2&n&&e.Q6J("nz-popconfirm",e.lcZ(1,1,"app.ledger.confirm.delete"))}function U(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"i",18),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.form(r))}),e.qZA()}}function P(n,s){1&n&&(e.TgZ(0,"nz-tag",21),e._uU(1,"Default"),e.qZA())}function G(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"a",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.form(r))}),e._uU(1),e.qZA(),e.YNc(2,P,2,0,"nz-tag",20)}if(2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.name),e.xp6(1),e.Q6J("ngIf",t.default)}}function R(n,s){if(1&n&&e._uU(0),2&n){const t=e.oxw().$implicit;e.hij(" ",t.remark," ")}}const W=function(n,s){return[n,s]};function j(n,s){if(1&n&&(e.TgZ(0,"nz-card",7),e.YNc(1,w,1,2,"ng-template",null,8,e.W1O),e.YNc(3,D,2,3,"ng-template",null,9,e.W1O),e.YNc(5,U,1,0,"ng-template",null,10,e.W1O),e.TgZ(7,"nz-card-meta",11),e.YNc(8,G,3,2,"ng-template",null,12,e.W1O),e.YNc(10,R,1,1,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(12,"div",14)(13,"span",15),e._uU(14),e.ALo(15,"i18n"),e.ALo(16,"i18n"),e.ALo(17,"date"),e.qZA()()()),2&n){const t=s.$implicit,o=e.MAs(2),r=e.MAs(4),a=e.MAs(6),p=e.MAs(9),V=e.MAs(11);e.Q6J("nzCover",o)("nzActions",e.WLB(15,W,a,r)),e.xp6(7),e.Q6J("nzTitle",p)("nzDescription",V),e.xp6(7),e.HOy(" ",e.lcZ(15,8,"app.created_by")," ",t.user.name," ",e.lcZ(16,10,"app.created_on")," ",e.xi3(17,12,t.created_at,"yyyy-MM-dd")," ")}}const q=function(){return{xs:6,sm:16,md:24,lg:32}},H=function(){return{gutter:24,lg:6,md:8,sm:12,xs:24}};let M=(()=>{class n{constructor(t,o,r,a,p){this.http=t,this.msg=o,this.modal=r,this.cdr=a,this.i18n=p,this.api="/api/ledgers",this.q={page:1,pageSize:50,expand:"user",name:""},this.list=[],this.loading=!0,this.searchSchema={properties:{name:{type:"string",title:this.i18n.fanyi("app.ledger.name")}}}}ngOnInit(){this.index(),this.getTypes()}index(){this.loading=!0,this.http.get(this.api,this.q).subscribe(t=>{this.list=t.items,this.loading=!1,this.cdr.detectChanges()})}getTypes(){this.http.get(`${this.api}/types`).subscribe(t=>{this.types=t})}form(t={}){this.modal.create(T,{record:t,types:this.types},{size:"md"}).subscribe(()=>{this.index(),this.cdr.detectChanges()})}submit(t){this.q.name=t.name||"",this.index()}reset(){this.q.name="",this.index()}delete(t){this.http.delete(`${this.api}/${t.id}`).subscribe(o=>{o.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.index()})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.lP),e.Y36(f.dD),e.Y36(l.Te),e.Y36(e.sBO),e.Y36(l.Oi))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-ledger-index"]],decls:12,vars:11,consts:[[1,"pt-md"],["nz-row","",3,"nzGutter"],["nz-col",""],["mode","search",3,"schema","formSubmit","formReset"],["nz-button","","nzType","primary",3,"click"],[3,"nzDataSource","nzLoading","nzRenderItem","nzGrid"],["item",""],["nzHoverable","",3,"nzCover","nzActions"],["cover",""],["nzDelete",""],["nzEdit",""],[3,"nzTitle","nzDescription"],["nzTitle",""],["nzDescription",""],[1,"card-item-content"],[1,"text-grey"],[3,"alt","src"],["nz-icon","","nzType","delete","nzPopconfirmPlacement","bottom",3,"nz-popconfirm","nzOnConfirm"],["nz-icon","","nzType","edit",3,"click"],[1,"text-md","pr-sm",3,"click"],["nzColor","success",4,"ngIf"],["nzColor","success"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"nz-card")(2,"div",1)(3,"div",2)(4,"sf",3),e.NdJ("formSubmit",function(a){return o.submit(a)})("formReset",function(){return o.reset()}),e.qZA()(),e.TgZ(5,"div",2)(6,"button",4),e.NdJ("click",function(){return o.form()}),e._uU(7),e.ALo(8,"i18n"),e.qZA()()()()(),e.TgZ(9,"nz-list",5),e.YNc(10,j,18,18,"ng-template",null,6,e.W1O),e.qZA()),2&t){const r=e.MAs(11);e.xp6(2),e.Q6J("nzGutter",e.DdM(9,q)),e.xp6(2),e.Q6J("schema",o.searchSchema),e.xp6(3),e.Oqu(e.lcZ(8,7,"app.form.create")),e.xp6(2),e.Q6J("nzDataSource",o.list)("nzLoading",o.loading)("nzRenderItem",r)("nzGrid",e.DdM(10,H))}},dependencies:[m.O5,Y.kJ,Z.t3,Z.SK,z.ix,x.w,C.dQ,v.bd,v.l7,S.JW,$.Ls,c.n_,c.fl,_.j,m.uU,l.Ck],styles:["[_nghost-%COMP%]     .ant-card-meta-title{margin-bottom:4px}[_nghost-%COMP%]     .ant-card-meta-description{height:44px;overflow:hidden;line-height:22px}[_nghost-%COMP%]     .card-item-content{display:flex;justify-content:space-between;height:20px;margin-top:16px;margin-bottom:-4px;line-height:20px}"],changeDetection:0}),n})();var y=i(9132);const k=[{path:"index",component:M}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[y.Bz.forChild(k),y.Bz]}),n})(),E=(()=>{class n{constructor(t){this.http=t}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(l.lP))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[E],imports:[A.m8,B,c.Ph,_.X,u.m]}),n})()}}]);