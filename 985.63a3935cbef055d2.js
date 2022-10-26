"use strict";(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[985],{8985:(j,h,s)=>{s.r(h),s.d(h,{WishListModule:()=>B});var A=s(8418),c=s(9094),t=s(4650),M=s(5156),u=s(9651),m=s(6895),d=s(433),g=s(1098),J=s(6704),f=s(6616),y=s(7044),C=s(1811),v=s(5635),z=s(8231);function W(e,r){1&e&&(t.TgZ(0,"div",13),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"app.wish-list.update"),""))}function b(e,r){1&e&&(t.TgZ(0,"div",13),t._uU(1),t.ALo(2,"i18n"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"app.wish-list.create")))}function F(e,r){if(1&e&&t._UZ(0,"nz-option",16),2&e){const n=r.$implicit;t.Q6J("nzLabel",n)("nzValue",n)}}function w(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"nz-select",14),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.form.currency_code=o)}),t.YNc(1,F,1,2,"nz-option",15),t.qZA()}if(2&e){const n=t.oxw();t.Q6J("ngModel",n.form.currency_code),t.xp6(1),t.Q6J("ngForOf",n.currencies)}}s(9553);let L=(()=>{class e{constructor(n,i,o,a,p){this.modal=n,this.msgSrv=i,this.http=o,this.cdr=a,this.i18n=p,this.api="/api/wish-lists",this.record={},this.form={name:"",remark:"",currency_amount:"",currency_code:"CNY",status:"pending"},this.currencies=[]}ngOnInit(){this.record.id&&(this.form={...this.record})}save(n){this.http.request(this.record.id?"put":"post",`${this.api}${this.record.id?`/${this.record.id}`:""}`,{body:n}).subscribe(a=>{a.code||(this.msgSrv.success(this.i18n.fanyi("app.form.save-success")),this.modal.close(a))})}close(){this.modal.destroy()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(M.Lf),t.Y36(u.dD),t.Y36(c.lP),t.Y36(t.sBO),t.Y36(c.Oi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wish-list-form"]],decls:24,vars:22,consts:[[1,"modal-header"],["class","modal-title",4,"ngIf"],["nz-form","","se-container","1.0",3,"ngSubmit"],["f","ngForm"],[3,"label"],["nz-input","","name","name","required","",3,"ngModel","ngModelChange"],[3,"nzAddOnAfter"],["nz-input","","type","number","name","currency_amount","required","",3,"ngModel","ngModelChange"],["addOnAfterBtn",""],["name","remark","nz-input","","rows","4",3,"ngModel","ngModelChange"],["col","1"],["nz-button","","type","button",3,"click"],["nz-button","","nzType","primary",3,"disabled"],[1,"modal-title"],["name","currency_code",2,"width","80px",3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0),t.YNc(1,W,3,3,"div",1),t.YNc(2,b,3,3,"div",1),t.qZA(),t.TgZ(3,"form",2,3),t.NdJ("ngSubmit",function(){return i.save(i.form)}),t.TgZ(5,"se",4),t.ALo(6,"i18n"),t.TgZ(7,"input",5),t.NdJ("ngModelChange",function(a){return i.form.name=a}),t.qZA()(),t.TgZ(8,"se",4),t.ALo(9,"i18n"),t.TgZ(10,"nz-input-group",6)(11,"input",7),t.NdJ("ngModelChange",function(a){return i.form.currency_amount=a}),t.qZA(),t.YNc(12,w,2,2,"ng-template",null,8,t.W1O),t.qZA()(),t.TgZ(14,"se",4),t.ALo(15,"i18n"),t.TgZ(16,"textarea",9),t.NdJ("ngModelChange",function(a){return i.form.remark=a}),t.qZA()(),t.TgZ(17,"se",10)(18,"button",11),t.NdJ("click",function(){return i.close()}),t._uU(19),t.ALo(20,"i18n"),t.qZA(),t.TgZ(21,"button",12),t._uU(22),t.ALo(23,"i18n"),t.qZA()()()),2&n){const o=t.MAs(4),a=t.MAs(13);t.xp6(1),t.Q6J("ngIf",i.record.id),t.xp6(1),t.Q6J("ngIf",!i.record.id),t.xp6(3),t.Q6J("label",t.lcZ(6,12,"app.wish-list.name")),t.xp6(2),t.Q6J("ngModel",i.form.name),t.xp6(1),t.Q6J("label",t.lcZ(9,14,"app.wish-list.currency_amount")),t.xp6(2),t.Q6J("nzAddOnAfter",a),t.xp6(1),t.Q6J("ngModel",i.form.currency_amount),t.xp6(3),t.Q6J("label",t.lcZ(15,16,"app.wish-list.remark")),t.xp6(2),t.Q6J("ngModel",i.form.remark),t.xp6(3),t.Oqu(t.lcZ(20,18,"app.form.close")),t.xp6(2),t.Q6J("disabled",o.invalid),t.xp6(1),t.Oqu(t.lcZ(23,20,"app.form.save"))}},dependencies:[m.sg,m.O5,d._Y,d.Fj,d.wV,d.JJ,d.JL,d.Q7,d.On,d.F,g.nV,g.d_,J.Lr,f.ix,y.w,C.dQ,v.Zp,v.gB,z.Ip,z.Vq,c.Ck],encapsulation:2}),e})();var Q=s(9559),O=s(9959),x=s(1427),Z=s(3679),Y=s(1971);function S(e,r){if(1&e&&(t.TgZ(0,"span",8),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.Q6J("ngClass","text-red"),t.xp6(1),t.hij(" ",n.currency_amount_desc," ")}}const N=function(){return{xs:6,sm:16,md:24,lg:32}};let _=(()=>{class e{constructor(n,i,o,a,p,R,U){this.http=n,this.modal=i,this.cache=o,this.msg=a,this.cdr=p,this.settingsService=R,this.i18n=U,this.loading=!0,this.pagination={totalCount:0,pageCount:0,currentPage:1,perPage:10},this.list=[],this.currencies=[],this.q={page:1,page_size:10,name:""},this.url="/api/wish-lists",this.searchSchema={properties:{name:{type:"string",title:this.i18n.fanyi("app.wish-list.name")}}},this.columns=[{title:this.i18n.fanyi("app.wish-list.status"),type:"badge",index:"status",badge:{pending:{text:this.i18n.fanyi("app.wish-list.status.pending"),color:"success"},completed:{text:this.i18n.fanyi("app.wish-list.status.completed"),color:"default"},cancelled:{text:this.i18n.fanyi("app.wish-list.status.cancelled"),color:"default"}}},{title:this.i18n.fanyi("app.wish-list.name"),index:"name"},{title:this.i18n.fanyi("app.wish-list.currency_amount"),render:"custom"},{title:this.i18n.fanyi("app.wish-list.remark"),index:"remark"},{title:this.i18n.fanyi("app.wish-list.created_at"),type:"date",index:"created_at"},{title:this.i18n.fanyi("app.wish-list.updated_at"),type:"date",index:"updated_at"},{title:"",buttons:[{icon:"edit",type:"modal",click:l=>this.form(l)},{icon:"check-circle",click:l=>this.updateStatus(l,"completed"),iif:l=>"pending"===l.status,tooltip:this.i18n.fanyi("app.wish-list.status.completed")},{icon:"close-circle",click:l=>this.updateStatus(l,"cancelled"),iif:l=>"pending"===l.status,tooltip:this.i18n.fanyi("app.wish-list.status.cancelled")},{icon:"delete",type:"del",pop:{title:this.i18n.fanyi("app.delete.confirm"),okType:"danger"},click:(l,q,V)=>{this.delete(l),V.removeRow(l)}}]}]}ngOnInit(){this.index(),this.getCurrencies()}index(){this.loading=!0,this.http.get(this.url,this.q).subscribe(n=>{this.list=n.items,this.pagination=n.pagination,this.loading=!1})}form(n={}){this.modal.create(L,{record:n,currencies:this.currencies},{size:"md"}).subscribe(i=>{this.index()})}delete(n){this.http.delete(`${this.url}/${n.id}`).subscribe(i=>{i.code||this.msg.success(this.i18n.fanyi("app.delete.success"))})}updateStatus(n,i){this.http.put(`${this.url}/${n.id}`,{status:i}).subscribe(o=>{o.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.index()})}getCurrencies(){this.http.get("/api/users/currencies").subscribe(n=>{this.currencies=n})}submit(n){n.name&&(this.q.name=n.name,this.index())}reset(){this.q.name="",this.index()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.lP),t.Y36(c.Te),t.Y36(Q.Q),t.Y36(u.dD),t.Y36(t.sBO),t.Y36(c.gb),t.Y36(c.Oi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wish-list-index"]],decls:13,vars:8,consts:[[1,"pt-lg"],["nz-row","",3,"nzGutter"],["nz-col",""],["mode","search",3,"schema","formSubmit","formReset"],["nz-button","","nzType","primary",3,"click"],[3,"data","columns"],["st",""],["st-row","custom"],[3,"ngClass"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"nz-card")(2,"div",1)(3,"div",2)(4,"sf",3),t.NdJ("formSubmit",function(a){return i.submit(a)})("formReset",function(){return i.reset()}),t.qZA()(),t.TgZ(5,"div",2)(6,"button",4),t.NdJ("click",function(){return i.form()}),t._uU(7),t.ALo(8,"i18n"),t.qZA()()()()(),t.TgZ(9,"nz-card")(10,"st",5,6),t.YNc(12,S,2,2,"ng-template",7),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("nzGutter",t.DdM(7,N)),t.xp6(2),t.Q6J("schema",i.searchSchema),t.xp6(3),t.Oqu(t.lcZ(8,5,"app.form.create")),t.xp6(3),t.Q6J("data",i.list)("columns",i.columns))},dependencies:[m.mk,O.kJ,x.A5,x.wZ,Z.t3,Z.SK,f.ix,y.w,C.dQ,Y.bd,c.Ck],encapsulation:2}),e})();var T=s(9132);const I=[{path:"index",component:_}];let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[T.Bz.forChild(I),T.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[A.m8,$]}),e})()}}]);