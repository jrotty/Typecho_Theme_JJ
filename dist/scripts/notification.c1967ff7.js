"use strict";(self.webpackChunkwebpack_multiple_entry=self.webpackChunkwebpack_multiple_entry||[]).push([[599],{3861:function(e,t,s){var i=s(1568),n=s(9947),c=s(8452);class l extends c.Z{constructor(){super(...arguments),(0,i.Z)(this,"list",document.querySelector(".list-skeleton")),(0,i.Z)(this,"listContent",document.querySelector(".notification-list-content")),(0,i.Z)(this,"isReceiveClose",!1)}receiveClose(){this.isReceiveClose=!0,this.isClose&&this.close()}close(){this.isReceiveClose&&(this.list?.classList.add("hidden"),this.listContent?.classList.remove("hidden"))}}var o=new l;new class{constructor(e){(0,i.Z)(this,"list",document.querySelector(".notification-list-content")),this.list&&new n.Z(this.list).start(),e()}}((()=>{o.receiveClose()}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216,592],(function(){return t(3283),t(3861)})),e.O()}]);