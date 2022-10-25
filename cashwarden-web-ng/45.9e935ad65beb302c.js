"use strict";(self.webpackChunkcashwarden_web_ng=self.webpackChunkcashwarden_web_ng||[]).push([[45],{8045:(F,l,i)=>{i.r(l),i.d(l,{RecurrenceModule:()=>J});var x=i(8418),m=i(6525),o=i(9094),t=i(4650),v=i(9651),R=i(6895),z=i(9959),h=i(1427),f=i(3679),C=i(6616),M=i(7044),S=i(1971);i(9553);const T=["st"];function b(n,a){if(1&n&&(t.TgZ(0,"span",8),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.Q6J("ngClass","expense"===e.transaction.type?"text-red":"text-green"),t.xp6(1),t.lnq(" ","expense"===e.transaction.type?"-":""," ",e.transaction.currency_code," ",e.transaction.currency_amount," ")}}const I=function(){return{xs:6,sm:16,md:24,lg:32}};let y=(()=>{class n{constructor(e,s,c,u,d,p){this.http=e,this.msg=s,this.modal=c,this.cdr=u,this.settings=d,this.i18n=p,this.loading=!0,this.list=[],this.q={page:1,page_size:100,expand:"transaction,ledger",name:""},this.url="/api/recurrences",this.searchSchema={properties:{name:{type:"string",title:this.i18n.fanyi("app.recurrence.name")}}},this.columns=[{title:this.i18n.fanyi("app.recurrence.name"),index:"name"},{title:this.i18n.fanyi("app.recurrence.ledger"),index:"transaction.ledger.name"},{title:this.i18n.fanyi("app.transaction"),render:"custom"},{title:this.i18n.fanyi("app.recurrence.frequency"),index:"frequency_desc"},{title:this.i18n.fanyi("app.recurrence.schedule"),index:"schedule"},{title:this.i18n.fanyi("app.recurrence.started_at"),type:"date",index:"started_at",dateFormat:"yyyy-MM-dd"},{title:this.i18n.fanyi("app.recurrence.execution_date"),type:"date",index:"execution_date",dateFormat:"yyyy-MM-dd"},{title:this.i18n.fanyi("app.recurrence.status"),type:"badge",index:"status",badge:{true:{text:this.i18n.fanyi("app.status.active"),color:"success"},false:{text:this.i18n.fanyi("app.status.inactive"),color:"default"}}},{title:this.i18n.fanyi("app.recurrence.updated_at"),type:"date",index:"updated_at"},{title:"",buttons:[{icon:"edit",type:"modal",click:r=>this.form(r)},{icon:"play-circle",click:r=>this.updateStatus(r,!0),iif:r=>!1===r.status,tooltip:this.i18n.fanyi("app.status.active")},{icon:"pause-circle",click:r=>this.updateStatus(r,!1),iif:r=>!0===r.status,tooltip:this.i18n.fanyi("app.status.inactive")},{icon:"delete",type:"del",pop:{title:this.i18n.fanyi("app.delete.confirm"),okType:"danger"},click:(r,G,Y)=>{this.delete(r),Y.removeRow(r)}}]}]}ngOnInit(){this.index()}index(){this.loading=!0,this.http.get(this.url,this.q).subscribe(e=>{this.list=e.items,this.loading=!1})}form(e={}){this.modal.create(m.I,{record:e},{size:"md"}).subscribe(s=>{this.index()})}copy(e){e.transaction.id=0,this.form(e)}delete(e){this.http.delete(`${this.url}/${e.id}`).subscribe(s=>{s.code||this.msg.success(this.i18n.fanyi("app.delete.success")),this.index()})}updateStatus(e,s){this.http.put(`${this.url}/${e.id}/status`,{status:s}).subscribe(c=>{c.code||this.msg.success(this.i18n.fanyi("app.update.success")),this.index()})}submit(e){this.q.name=e.name||"",this.index()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.lP),t.Y36(v.dD),t.Y36(o.Te),t.Y36(t.sBO),t.Y36(o.gb),t.Y36(o.Oi))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-recurrence-index"]],viewQuery:function(e,s){if(1&e&&t.Gf(T,5),2&e){let c;t.iGM(c=t.CRH())&&(s.st=c.first)}},decls:13,vars:8,consts:[[1,"pt-lg"],["nz-row","",3,"nzGutter"],["nz-col",""],["mode","search",3,"schema","formSubmit","formReset"],["nz-button","","nzType","text","disabled",""],[3,"data","columns"],["st",""],["st-row","custom"],[3,"ngClass"]],template:function(e,s){if(1&e){const c=t.EpF();t.TgZ(0,"div",0)(1,"nz-card")(2,"div",1)(3,"div",2)(4,"sf",3),t.NdJ("formSubmit",function(d){return s.submit(d)})("formReset",function(d){t.CHM(c);const p=t.MAs(11);return t.KtG(p.reset(d))}),t.qZA()(),t.TgZ(5,"div",2)(6,"button",4),t._uU(7),t.ALo(8,"i18n"),t.qZA()()()()(),t.TgZ(9,"nz-card")(10,"st",5,6),t.YNc(12,b,2,4,"ng-template",7),t.qZA()()}2&e&&(t.xp6(2),t.Q6J("nzGutter",t.DdM(7,I)),t.xp6(2),t.Q6J("schema",s.searchSchema),t.xp6(3),t.hij(" ",t.lcZ(8,5,"app.recurrence.create.help")," "),t.xp6(3),t.Q6J("data",s.list)("columns",s.columns))},dependencies:[R.mk,z.kJ,h.A5,h.wZ,f.t3,f.SK,C.ix,M.w,S.bd,o.Ck],encapsulation:2}),n})();var g=i(9132);const Z=[{path:"index",component:y}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.m8,A]}),n})()}}]);